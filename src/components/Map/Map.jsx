import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material";

// import useStyles from './MapStyles';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Map(){

    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    
    // const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    const coordinates = { lat: 0, lng: 0 };

    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ""}}
                            defaultCenter={coordinates}
                            center={coordinates}
                            defaultZoom={14}
                            margin={[50,50,50,50]}
                            option={''}
                            onChange={''}
                            onChildClick={''} 
                            >

            </GoogleMapReact>
        </div>
    );
}
