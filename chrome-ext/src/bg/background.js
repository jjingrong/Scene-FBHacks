// function onMessage(request, sender, sendResponse) {
// 	console.log(request);

// 	chrome.pageAction.show(sender.tab.id);
// 	sendResponse();
// 	var obj = {};
// 	obj[username] = 'my test var';
// 	chrome.storage.local.set(obj);
// }
function onMessage(msg, sender, sendResponse) {
    console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
    sendResponse(msg);
}

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(onMessage);
