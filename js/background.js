chrome.browserAction.onClicked.addListener(function(tab) {
  $.ajax({
    url: 'https://www.googleapis.com/urlshortener/v1/url?key='+GOOGLE_API_KEY,
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: '{"longUrl":"'+tab.url+'"}',
    dataType: 'json',
    success: function(response) {
      tweet(tab.title, response.id);
    },
    error: function(response) {
      // TODO:: api error
    }
  });
});


function tweet(title, url) {
  title = encodeURIComponent(title);
  url = encodeURIComponent(url)
  option = "width=400, height=300";
  window.open('https://twitter.com/intent/tweet?text='+title+'&url='+url, null, option);
}
