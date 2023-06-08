// ==UserScript==
// @name         asset.party Bot by Strange
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Triggers events signifying activity every 5 seconds, and Automatically joins the queue
// @author       Strange
// @match        https://asset.party/get/developer/preview
// @grant        none
// ==/UserScript==

// Send a fake "gotpointercapture" event every 5 seconds
setInterval(function() {
    const event = new Event('gotpointercapture');
    document.dispatchEvent(event);
    console.log("Sent fake event!");

    var elements = document.querySelectorAll("[style='margin: 2px; border-radius: 3px;outline: 4px solid pink; z-index: 500;']");

    if( elements.length == 0 ) {
        console.log("You are not in the queue, lets enter it!");

        var btn = document.querySelector("button.button.is-large.is-primary:enabled");
        if (btn == null) {
            console.log("Failed to enter :(");
            return;
        }

        console.log("Entered!");
        btn.click();
    }

}, 5000);