import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import {User} from "../../domain/models/user";
import {useEffect, useState} from "react";
import {UserUseCase} from "../../usecases/UserUseCase";
import Header from "../../components/Header/Header";
import {College} from "../../domain/models/college";
import {Avatar, Card, CardContent, Chip, Grid, Rating, Stack} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Data {
    id: number;
    email: string;
    college: string;
    campus: string;
    name: string;
    ratings: number;
    userId: number;
}


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'college',
        numeric: false,
        disablePadding: false,
        label: 'College',
    },
    {
        id: 'campus',
        numeric: false,
        disablePadding: false,
        label: 'Campus',
    },
    {
        id: 'ratings',
        numeric: true,
        disablePadding: false,
        label: 'Ratings',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},

            }}
        >

            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Students
            </Typography>


            <Tooltip title="Filter list">
                <IconButton>
                    <FilterListIcon/>
                </IconButton>
            </Tooltip>

        </Toolbar>
    );
}

export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('ratings');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [students, setStudents] = useState<User[]>([]);
    const [colleges, setColleges] = useState<College[]>([]);
    const userUseCase = new UserUseCase();
    const fetchUsers = async () => {
        const studentsList = await userUseCase.getAllUsers();
        setStudents(studentsList);
    }
    const fetchColleges = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/colleges/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Colleges not fetched');
            }
            const data = await response.json();
            const fetchedColleges: College[] = [];
            console.log(data);
            let i = data.data.recordset.length - 1;
            while (i >= 0) {
                fetchedColleges.push(College.fromJson(JSON.stringify({
                    college_id: data.data.recordset[i].college_id,
                    college_name: data.data.recordset[i].college_name
                })));
                i--;
            }
            console.log(fetchedColleges);
            setColleges(fetchedColleges);
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    useEffect(() => {
        fetchUsers().then(r => true);
        fetchColleges().then(r => true);
    }, []);
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

//TODO: navigate to new page to see the student data
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const onSelectAllClick = () => {
    }

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0;


    const getCollegeName = (collegeId: number) => {
        const rightCollege = colleges.find((college) => college.collegeId == collegeId);
        return rightCollege ? rightCollege.collegeName : "Conestoga College";
    }
    return (

        <>
            <Header/>
            <br/>
            <br/>
            <Grid container spacing={3}>
                {students.map((user) => (
                    <Grid item key={user.userId} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent style={{display: 'flex', alignItems: 'center'}}>
                                <Avatar
                                    alt={user.firstName}
                                    src={user.image}
                                    sx={{width: 100, height: 100, marginBottom: 2}}
                                />
                                <div style={{marginLeft: '10px'}}>
                                    <Stack direction="row" spacing={2} justifyContent="space-between"
                                           alignItems="center">
                                        <Typography variant="h6" gutterBottom>
                                            {user.firstName} {user.lastName}
                                        </Typography>
                                        {user.verified ?
                                            <Chip icon={<CheckCircleOutlineIcon/>} label="Verified" size="small" color="primary"/> : ""}

                                    </Stack>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        {getCollegeName(user.collegeId)}
                                    </Typography>
                                    <Rating value={user.ratings} precision={0.5} readOnly/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}