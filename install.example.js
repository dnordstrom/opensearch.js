/**
 * @overview  An OpenSearch management helper bookmarklet.
 * @author    0.1.0
 * @version   L. Daniel Nordstrom <d@mrnordstrom.com>
 * @license   MPL 2.0
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
!(function (window, console) {
  console.log("Search Installer: Started.")
  
  if (window.external && ("AddSearchProvider" in window.external) && window.location.hash) {
    /**
     * Use OpenSearch
     */
    window.external.AddSearchProvider(
      "https://github.com/dnordstrom/kit.opensearch/raw/master/" +
      window.location.hash.substr(1) +
      ".xml"
    )
    
    console.log("Search Installer: Successfully added search provider.")
  } else {
    /**
     * No OpenSearch support
     */
    alert("Your browser does not support OpenSearch! Firefox is recommended&mdash;try the nightly Firefox builds.")
    
    console.log("Search Installer: Failed to add search provider (no OpenSearch support).")
  }
  
  console.log("Search Installer: Finished.")
}(window, console));
