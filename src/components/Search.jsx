var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down"
      onClick={ ()=> { props.searchQuery($('.form-control').val()); } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
    <button className="foo btn hidden-sm-down" 
      // onClick={ ()=> { props.autoPlayToggle($(this).val()); } }>
      onClick={ ()=> { console.log('auto toggle here'); 
                        $("button").click(function() {
                          $(this).toggleClass('foo');
                        }); 
                      } 
              }>
      <span className="glyphicon glyphicon-play"></span>
    </button>

  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
