import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";

import './App.css'


function App() {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyC1b-65PtW82KNKCa-amSSzrQUhBL-GAtg',
                q: searchTerm,
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <>
            <Grid justifyContent="center" container spacing={10} >
                <Grid item xs={12} >
                    <Grid container spacing={10} >

                        <Grid item xs={12}>
                            {/* Search Bar */}
                            <SearchBar onFormSubmit={handleSubmit} />
                        </Grid>

                        <Grid item xs={8} >
                            {/* Video Details */}
                            <VideoDetail video={selectedVideo} />
                        </Grid>

                        <Grid item xs={4} >
                            {/* Video List */}
                            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default App
