class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      autoPlay: 0,
    };
    this.toggleAutoPlayState = this.toggleAutoPlayState.bind(this);
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

  toggleAutoPlayState() {
    this.setState({
      autoPlay: this.state.autoPlay === 0 ? 1 : 0
    });
  }

  render () {
    return (
      <div>
        <Nav searchQuery={this.getSearchResults} autoPlayToggle={this.toggleAutoPlayState}/>
        <div className="col-md-7">
          <VideoPlayer 
            video={this.state.currentVideo}
            autoPlay={this.state.autoPlay}
          />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos}
            onVideoSelected={this.handleVideoSelectedInput}
          />
        </div>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;
