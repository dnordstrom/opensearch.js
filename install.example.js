!(function (window, console) {
  console.log("Search Installer: Started.");
  
  if (window.external && ("AddSearchProvider" in window.external)) {
    /**
     * OpenSearch
     */
    window.external.AddSearchProvider("https://github.com/dnordstrom/kit.opensearch/raw/master/startpage.xml");
    
    console.log("Search Installer: Successfully added search provider.");
  } else {
    /**
     * No OpenSearch support
     */
    alert("Your browser does not support OpenSearch! Firefox is recommended&mdash;try the nightly Firefox builds.");
    
    console.log("Search Installer: Failed to add search provider (no OpenSearch support).");
  }
  
  console.log("Search Installer: Finished.");
}(window, console));