//mixed
function buildSiteLinks(mostVisitedURLs) {
  var elementIndex = 0;
  for (var i = 0; i < 4; i++) {
    if(!mostVisitedURLs[i].url.includes("localhost")){
      var a = document.createElement("a");
      a.textContent = mostVisitedURLs[i].title;
      console.log(i," ",elementIndex,'card-'+elementIndex,mostVisitedURLs[i].title);
      document.getElementById('card-'+elementIndex).appendChild(a);
      elementIndex++;
    }
  }
};
chrome.topSites.get(buildSiteLinks);