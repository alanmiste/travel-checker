import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// import useStyles from './HeaderStyles';

export default function Header(){

    // const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h5" >
                    Travel Checker
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" >
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div >
                            <div >
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..."  />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
