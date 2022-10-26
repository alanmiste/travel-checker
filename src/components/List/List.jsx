import React, { useState } from "react";
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

// import useStyles from './ListStyles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List(){
    // const classes = useStyles();

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState('');

    const places = [
        { name: 'Best Steck'},
        { name: 'Best Coffee'},
        { name: 'Best Place'},
    ];

    return(
        <div>
            <Typography variant="h4">Restaurants and Hotels around you</Typography>
            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={ e=> setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={ e=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spaceing={3} >
                {places?.map((place, index)=>(
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}