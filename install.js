(function (window, console) {
  console.log("Search Installer: Started.");
  
  if (window.external && ("AddSearchProvider" in window.external)) {
    /**
     * Firefox 2 and IE 7, OpenSearch
     */
    window.external.AddSearchProvider("https://gist.github.com/dnordstrom/6632592/raw/2620ec442c0d7454cbac6ee2c7f1319a7d82438e/deviantart_people_search_plugin-20130919.xml");
    
    console.log("Search Installer: Successfully added search provider.");
  } else {
    /**
     * No OpenSearch support
     */
    alert("Your browser does not support OpenSearch! Firefox is recommended&mdash;try the nightly Firefox Aurora build.");
    
    console.log("Search Installer: No OpenSearch support for search provider DeviantArt People Search.");
  }
  
  console.log("Search Installer: Finished.");
}(window, console));