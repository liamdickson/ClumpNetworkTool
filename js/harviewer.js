/**
 * Created by Liam Dickson on 5/26/15.
 */

var HarViewer = {
    headersTemplate: "",
    requestTemplate: "",
    responseTemplate: "",
    harList: [],
    importHar: function(id, har){
        if(!this.harList[id]){
            this.harList[id] = {};
        }
        this.harList[id].har = har;
        this.harList[id].startedDateTime = har.startedDateTime;
        if(har.request){
            this.importRequest(id, har.request);
        }
        if(har.response){
            this.importResponse(id, har.response);
        }
        if(har.timings){
            this.importTimings(id, har.timings);
        }
    },
    importRequest: function(id, request){
        if(this.harList[id]){
            this.harList[id].request = request;
        }
    },
    importResponse: function(id, response){
        if(this.harList[id]) {
            this.harList[id].response = response;
        }
    },
    importTimings: function(id, timings){
        if(this.harList[id]) {
            this.harList[id].timings = timings;
        }
    }
};