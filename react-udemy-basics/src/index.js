import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDt4f7Ne1tQEaRY06hq98dig109h_XZM2E'; 

class App extends Component {
  constructor(props) { 
    super(props);

    this.state = { videos: [], selectedVideo: {} };
  }

  handleSearchBarChange = (text) => {
    YTSearch({key: YOUTUBE_API_KEY, term: text}, (videos) => {
      this.setState({ videos });
    });
  }

  handleVideoClick = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {

    const vidSearch = _.debounce((text) => { this.handleSearchBarChange(text) }, 500);

    return (
      <div>
        <div className="row form-group">
          <div className="col-md-4">
            <SearchBar onSearchChange={ vidSearch }/>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={ this.state.videos } onVideoClick={this.handleVideoClick} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
