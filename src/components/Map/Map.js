import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material";

import useStyles from './MapStyles';

export default function Map(){

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    const coordinates = { lat: 0, lng: 0 };
    return(
        <div className={classes.mapContainer}>
            <googleMapReact bootstrapURLKeys={{key: ''}}
                            defualtVenter={coordinates}
                            center={coordinates}
                            defualtZoom={14}
                            margin={[50,50,50,50]}
                            option={''}
                            onChange={''}
                            onChildClick={''} >

            </googleMapReact>
        </div>
    );
}
