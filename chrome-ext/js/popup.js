function count() {
    $("#demo").html("Hello World");
}
function init() {
	$('#btnCount').click(count);
}    
$(document).ready(init);