import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";


function VideoDetail({video}){
    if(!video) return <div>Loading...</div>
        

    const videoId = video.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;


    return(
        <>
            <Paper elevation={6} style={{height: '600px'}} >
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>

            <Paper elevation={6} style={{padding: '15px'}} >
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail;