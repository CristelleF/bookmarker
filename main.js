//adding an event listener for page load
window.addEventListener("load", fetchBookmarks);

// find the formand add an event listener to it
document.querySelector("form").addEventListener("submit",saveBookmark);

//save bookmarks
function savwBookmark(e){

//prevent page from reloading
    e.preventDefault();

//get site name
var siteName= document.querySelector("#siteName").value;
var siteUrl= document.querySelector("#siteUrl").value;

//create a bookmark object
var bookmark={
    name: siteName,
    url: siteUrl
}
//check if the local storage is empty
if(localStorage.getItem("bookmarks")===null){

//init bookmarks array
    var bookmarks=[];
    
//adding first bookmark
    bookmarks.push(bookmark);

 //set boolmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
} else {

//get current bookmarks from local storage
var bookmarks= JSON.parse(localStorage.getItem("bookmarks"));

//push new bookmark info
}
//save bookmarks into local storage
localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
//reset the form
document.querySelector("form").reset();
//fetch bookmarks
fetchBookmarks();
}
//fetch bookmarks
function fetchBookmarks(){
    //get bookmarks from local storage
    var bookmarks=JSONparse.(localStorage.getItem(bookmarks));
    //select the bookmarks div
    var output=document.querySelector("bookmarks");
    //reset bookmark div
    output.innerHTML="";
    //loop over bookmarks
    for(var i=0;i<bookmarks.length;i++){
        //creat div
        var div= document.createElement("div");
        //create h3
        var h3=document.createElement("h3");
        h3.textContent=bookmarks[i].name;
        //create visit link
        var a=document.createElement("a");
        a.href=bookmarks[i].url;
        a.className="btn btn-success";
        a.textContent="Visit";
        //create delete button
        var button=document.createElement("button");
        button.className="btn btn-danger";
        button.textContent="Delete";
        button.addEventListener("click", function(e){
            var name=e.target.parentElement.children[0].textContent;
            deletBookmark(name);

        })
//append h3, a and button into div
div.appendChild(h3);
div.appendChild(a);
div.appendChild(button);

//append div into utput
output.appendChild(div);
    }
}

function deletBookmark(name){
    //get bookmarks from loacalStorage
    var bookmarks=JSON.parse(localStorage.getItem("bookmarks"));
    //loop over bookmarks
    for(var i=0; i<bookmarks.length;i++){
        //loo
    }
}