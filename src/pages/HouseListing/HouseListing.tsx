import React, {useEffect, useState} from "react";
import {House} from "../../domain/models/houses";
import {HouseUseCase} from "../../usecases/HouseUseCase";
import {Avatar, ButtonBase,Dialog,DialogContent, Grid, Paper, styled, Typography} from "@mui/material";
import Header from "../../components/Header/Header";

const HouseListing: React.FC = () => {
    const [houses, setHouses] = useState<House[]>([]);
    const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const houseUseCase = new HouseUseCase();

    const fetchHouses = async () => {
        const houseList = await houseUseCase.getAllHouses();
        setHouses(houseList);
    }
    useEffect(() => {
        fetchHouses().then(r => true);
    }, []);

    const handleHouseClick = (house: House) => {
        setSelectedHouse(house);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
            {houses.map((house,index) => (
                <>
                    <Paper
                        key={house.houseId}
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 400,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <ButtonBase sx={{width: 128, height: 128}}  onClick={() => handleHouseClick(house)}>
                                    <Img alt="complex" src={house.image}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {house.houseNumber + " " + house.street}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {house.location.city + ", " + house.location.country}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {house.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        ${house.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </>
            ))}
        </Grid>
        <>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    {selectedHouse && (
                        <>
                            {selectedHouse.image && (
                                <img
                                    style={{
                                        margin: 'auto',
                                        display: 'block',
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                    }}
                                    alt="House"
                                    src={selectedHouse.image}
                                />
                            )}
                            <Typography>Owner: {selectedHouse.owner}</Typography>
                            <Typography>Price: ${selectedHouse.price}</Typography>
                            <Typography>
                                Location: {selectedHouse.location.city}, {selectedHouse.location.country}
                            </Typography>
                            <Typography>Address:  {selectedHouse.houseNumber}, {selectedHouse.street} ,{selectedHouse.postalCode}</Typography>
                            <Typography>Bedrooms: {selectedHouse.bedroomCount}</Typography>
                            <Typography>Washrooms: {selectedHouse.washroomCount}</Typography>
                            <Typography>Description: {selectedHouse.description}</Typography>
                            <Typography>Hydro: {selectedHouse.hydro ? 'Yes' : 'No'}</Typography>
                            <Typography>Water: {selectedHouse.water ? 'Yes' : 'No'}</Typography>
                            <Typography>Heat: {selectedHouse.heat ? 'Yes' : 'No'}</Typography>
                            {/* <Typography>Longitude: {selectedHouse.longitude}</Typography>
              <Typography>Latitude: {selectedHouse.latitude}</Typography> */}


                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>



    </>
}


export default HouseListing;