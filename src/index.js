import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "";

//a quick a dirty useage of the YTSearch function
// YTSearch({key: API_KEY, term: 'ylyl'}, data => console.log(data));

// Create a new componet. This componet should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'ylyl'}, videos => { 
            this.setState({videos: videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this componet's generated HTML and put it on the page (in the DOM)
ReactDOM.render( <App />, document.querySelector('.container'));