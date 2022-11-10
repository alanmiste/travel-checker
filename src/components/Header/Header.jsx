import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
// import useStyles from './HeaderStyles';

export default function Header({ setCoordinates }) {

    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (ac) => { setAutocomplete(ac); }

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h5" >
                    Travel Checker
                </Typography>
                <Box className="box">
                    <Typography variant="h6" >
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className="searchIconAndInput">
                            <SearchIcon />
                            <InputBase placeholder="Search..." />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
