import React from "react";
import { Box, Typography,Button, Chip, Card, CardActions, CardMedia, CardContent} from "@mui/material";
import LocationOnIcon from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material';
import Rating from '@mui/lab';

export default function PlaceDetails({place}){

    return(
        <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>

                {place?.awards?.map((award)=>(
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} />
                ))} 
            </CardContent>
        </Card>
    );
}
