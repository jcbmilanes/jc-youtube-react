import React from 'react';
import {Grid} from '@material-ui/core';
import {SearchBar, VideoDetail, VideoList} from './components';
import youtube from './api/youtube'

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params:{
                part:'snippet',
                maxResults:5,
                key:'',
                q: searchTerm
            }
        });

        //console.log(response.data.items);

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    }

    componentDidMount(){
        this.handleSubmit('blippi');
    }

    render(){
        //destructuring the state
        const {selectedVideo, videos} = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/*Search Bar*/}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            {/*Video Details*/}
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/*Video Lists*/}
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;