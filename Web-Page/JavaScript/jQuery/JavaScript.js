function addEvent(target, eventType, eventHandler, useCapture) {
    if (target.addEventListener) { // W3C DOM
        target.addEventListener(eventType, eventHandler, useCapture?useCapture:false);
    }
    else if (target.attachEvent) { // IE DOM
        var r = target.attachEvent("on"+eventType, eventHandler);
    }
}

function clickHandler(event) {
    var nav = document.getElementById('navigation');
    for (var i = 0; i < nav.childNodes.length; ++i)
    {
        var child = nav.childNodes[i];
        if (child.nodeType == 3)
            continue ;
        child.className = ' ';
    }
    event.target.className= 'selected';
}

addEvent(window, 'load', function(eventObj) {
    var nav = document.getElementById('navigation');
    for (var i = 0; i < nav.childNodes.length; ++i)
    {
        var child = nav.childNodes[i];
        if (child.nodeType == 3)
            continue ;
        addEvent(child, 'click', clickHandler);
    }
})