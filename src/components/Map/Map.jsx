import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material";

export default function Map({setCoordinates, setBounds, coordinates}){

    
    const isMobile = useMediaQuery('(min-width:600px)');
    

    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ""}}
                            defaultCenter={coordinates}
                            center={coordinates}
                            defaultZoom={14}
                            margin={[50,50,50,50]}
                            option={''}
                            onChange={(e)=>{
                                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                            }}
                            onChildClick={''} 
                            >

            </GoogleMapReact>
        </div>
    );
}
