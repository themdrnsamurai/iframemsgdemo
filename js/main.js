var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent"; 

// Create IE + others compatible event handler

var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var el = document.querySelector('#data-echo');
eventer(messageEvent, function (e) { 
    // Listen to message from child window 
    var msg = e.data;
    if(msg !== null){        
        el.innerHTML = e.data;
    }    
},false);