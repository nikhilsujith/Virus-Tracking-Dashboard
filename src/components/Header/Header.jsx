import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { BarChart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                    <BarChart fontSize="large" />
                {/* </IconButton> */}
                <Typography variant="h6" className={classes.title}> 
                    Coronavirus Tracking Dashboard
                </Typography>
                {/* <Button
                    variant="contained"
                    color="dark"
                    className={classes.button}
                    // startIcon={<DeleteIcon />}
                >
                    Dark Theme
                </Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header
