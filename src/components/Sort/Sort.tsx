import React, {useState} from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, InputLabel, SelectChangeEvent} from '@mui/material';

interface SortComponentProps {
    options: string[];
    onSortChange: (filterValue: string) => void;
}

const SortComponent: React.FC<SortComponentProps> = ({options, onSortChange}) => {
    const [sortValue, setSortValue] = useState('');

    const handleSortChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string;
        setSortValue(value);
        onSortChange(value);
    };

    return (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <InputLabel id="sortId"> Sort By </InputLabel>
            <Select
                value={sortValue}
                onChange={handleSortChange}

                label="Sort By"
                labelId="sortId"
                id="sort"
            >
                <MenuItem key="" value="None"><em>None</em></MenuItem>
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
};

export default SortComponent;
