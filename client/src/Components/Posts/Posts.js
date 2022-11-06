import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";
import useStyles from './Posts.styles.js'


const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)
    return(
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
        </>
        
    )
}

export default Posts