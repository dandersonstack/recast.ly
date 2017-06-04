var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text"
      onKeyPress={ _.debounce(()=> { props.searchQuery($('.form-control').val()); }, 1000)}
    />
    <button className="btn hidden-sm-down"
      onClick={ ()=> { props.searchQuery($('.form-control').val()); } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
    <button className="btn hidden-xs-down" 
      onClick={ ()=> { props.autoPlayToggle(); } }>
      <span className="glyphicon glyphicon-play"></span>
    </button>
    

  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

