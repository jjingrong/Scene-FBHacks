// function onMessage(request, sender, sendResponse) {
// 	console.log(request);

// 	chrome.pageAction.show(sender.tab.id);
// 	sendResponse();
// 	var obj = {};
// 	obj[username] = 'my test var';
// 	chrome.storage.local.set(obj);
// }
function onMessage(data, sender, sendResponse) {
    console.log("Received %o from %o, frame", data, sender.tab, sender.frameId);
    var videoTitle = data['title'].toLowerCase().replace(/\s+/g, '');
    var response;
    if(videoTitle.match("starwars")){
    	response = 1;
    } else if(videoTitle.match("siliconvalley")) {
    	response = 2;
    } else {
    	response = 3;
    }
    chrome.storage.local.set({'video': response});
    sendResponse(response);
}

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(onMessage);
