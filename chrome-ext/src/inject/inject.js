chrome.extension.sendMessage({title: document.getElementById('eow-title').innerHTML}, function(response) {
    console.log("Response: ", response);
});