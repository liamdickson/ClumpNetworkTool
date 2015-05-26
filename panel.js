var ext_console = "";
var inc = 0;

chrome.devtools.network.onRequestFinished.addListener( function(request) {
	if(request.request.url.includes("clump")){
		$('#har').HarView();
	    var har = $('#har').data('HarView');
	    har.entry(inc, request);
	    har.response(inc, request.response);
	    inc++;
	}
});

chrome.devtools.network.onRequestFinished.addListener( function(request) {
	if(request.request.url.includes("clump")){
    	ext_console += JSON.stringify(request.response, null, 4) + "\n";
	}
});

document.getElementById("log_btn").addEventListener("click", function(){
	$('#log').text(ext_console);
});