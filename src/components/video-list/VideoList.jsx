import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "../video-item/VideoItem";

function VideoList({ videos, onVideoSelect }) {
    const listOfVideos = videos.map((video, id) => (
        <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
    ));

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;
