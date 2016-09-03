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
    var videoTitle = msg['title'];
    
    sendResponse(data['title']);
}

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(onMessage);
