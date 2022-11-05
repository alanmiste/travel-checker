import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
// import useStyles from './HeaderStyles';

export default function Header(){

    // const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h5" >
                    Travel Checker
                </Typography>
                <Box className="box">
                    <Typography variant="h6" >
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className="searchIconAndInput">
                            <SearchIcon />
                            <InputBase placeholder="Search..."  />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
