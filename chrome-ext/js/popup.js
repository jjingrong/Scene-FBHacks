function count() {
	var username = chrome.storage.local.get("username");
    $("#demo").html(username);
}
function init() {
	$('#btnCount').click(count);
}    
$(document).ready(init);