var ext_console = "{";
var inc = 0;
var passed = 0;

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
		if(passed){
    		ext_console += ",";
    	}
    	ext_console += "\"obj" + passed + "\":" + JSON.stringify(request, null, 4);
    	passed += 1;
	}
});

document.getElementById("log_btn").addEventListener("click", function(){
	$('#log').text(ext_console + "}");
});