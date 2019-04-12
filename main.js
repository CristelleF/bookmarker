// find the formand add an event listener to it
document.querySelector("form").addEventListener("submit",saveBookmark);
//save bookmarks
function savwBookmark(e){
    //prevent page from reloading
    e.preventDefault();
//get site name
var siteName= document.querySelector("#siteName").value;
var siteUrl= document.querySelector("#siteUrl").value;


}