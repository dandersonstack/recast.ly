var searchYouTube = (options, callback) => {

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    data: options,
    success: function(data) {
      callback(data);
    },
    error: function (data) {
      console.log('this is an error', data);
    },
  });
};

window.searchYouTube = searchYouTube;
