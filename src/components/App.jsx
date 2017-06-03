class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
    };
  
    this.handleVideoSelectedInput = this.handleVideoSelectedInput.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.updateFromSearchResults = this.updateFromSearchResults.bind(this);
  }

  getSearchResults(searchText) {

    let data = {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: searchText,
      maxResults: 10,
      type: 'video',
      videoEmbeddable: 'true'
    };

    window.searchYouTube(data, this.updateFromSearchResults);
    // change state to rerender
  }

  handleVideoSelectedInput(videoSelected) {
    this.setState({
      currentVideo: videoSelected
    });
  }

  updateFromSearchResults(data) {
    this.setState({
      videos: data.items,
      currentVideo: data.items[0]
    });
  }

  render () {
    return ( 
      <div>
        <Nav searchQuery={this.getSearchResults} />
        <div className="col-md-7">
          <VideoPlayer 
            video={this.state.currentVideo}
          />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos}
            onVideoSelected={this.handleVideoSelectedInput}
          />
        </div>
      </div> );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
