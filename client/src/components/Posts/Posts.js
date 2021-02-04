import React from 'react';
// Fetch data from global redux store
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';


const Posts = () => {
    // state.posts from reducers/index.js
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    // At the console log, if there is a error, check if "proxy": "http://localhost:5000", added at patckage.json from server folder
    
    return(
        posts.length === 0 ? <CircularProgress /> :  (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>
        )
    );
};

export default Posts;