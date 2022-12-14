import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import './List.css';
// import useStyles from './ListStyles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List({ places, childCliked, isLoading, type, setType, rating, setRating }) {
    // const classes = useStyles();


    const [elementRefs, setElementRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elementRefs[i] || createRef());
        setElementRefs(refs);
    }, [places])

    return (
        <div className="listContainer">
            <Typography variant="h4">Restaurants and Hotels around you</Typography>
            {isLoading ? (
                <div className="loading">
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className="formControl">
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={e => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="formControl">
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={e => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3</MenuItem>
                            <MenuItem value={4}>Above 4</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>

                    <Grid container spaceing={3} className="listGrid">
                        {places?.map((place, index) => (
                            <Grid item key={index} xs={12}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childCliked) === index}
                                    refProp={elementRefs[index]} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
}
