import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from "@mui/material/Rating";

import './Map.css'

export default function Map({setCoordinates, setBounds, coordinates, places, setChildCliked}){

    
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    return(
        <div className="mapContainer">
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
                            onChildClick={(child)=> setChildCliked(child)} 
                            >
                                {places?.map((place, i)=>(
                                    <div className="markerContainer"
                                    lat={Number(place.latitude)} 
                                    lng={Number(place.longitude)}
                                    key={i}>
                                        {
                                         !isDesktop ? (
                                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                                            ) : (
                                                <Paper elevation={3} className="paper">
                                                    <Typography gutterBottom variant="subtitle2">
                                                        {place.name}
                                                    </Typography>
                                                    <img className="pointer"
                                                    src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}
                                                    alt={place.name}
                                                    />
                                                    <Rating size="small" value={Number(place.rating)} readOnly />
                                                </Paper>
                                            )
                                        }
                                    </div>
                                ))}
            </GoogleMapReact>
        </div>
    );
}
