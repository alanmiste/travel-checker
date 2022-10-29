import React from "react";
import { Box, Typography,Button, Chip, Card, CardActions, CardMedia, CardContent} from "@mui/material";
import LocationOnIcon from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material';
import Rating from '@mui/lab';

export default function PlaceDetails({place}){

    return(
        <Card elevation={6}>
            <CardMedia
                style={{height: 400}}
            />
        </Card>
    );
}
