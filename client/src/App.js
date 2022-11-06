import React from "react";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'
import { Container,AppBar, Typography, Grid, Grow, TableContainer } from "@material-ui/core";
import memories from './images/memories.png'
import Forms from './Components/Forms/Forms.js'
import Posts from "./Components/Posts/Posts";
import useStyles from './Styles'
import { useEffect } from "react";

const App = () =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(getPosts())
    },[dispatch])
    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts></Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Forms></Forms>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;