function count() {
	chrome.storage.local.get("video", function(value) {
		$("#demo").html(value.video);
	})
}
function init() {
	$('#btnCount').click(count);
}    
$(document).ready(init);