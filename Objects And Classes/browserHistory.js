function browserHistory(obj, arrOfStrings) {
    
    for (let el of arrOfStrings) {
        if (el != 'Clear History and Cache') {
            let splittedEl = el.split(' ');
            let command = splittedEl.shift();
            
            if (command == 'Open') {
                obj["Open Tabs"].push(splittedEl.join(' '));
                obj["Browser Logs"].push(el);
            } else if (command == 'Close') {
                if (obj["Open Tabs"].includes(splittedEl.join(' '))) {
                    obj["Open Tabs"].splice(obj["Open Tabs"].indexOf(splittedEl.join(' ')),1);
                    obj["Recently Closed"].push(splittedEl.join(' '));
                    obj["Browser Logs"].push(el);
                }
            }
        } else {
            obj["Open Tabs"].splice(0,obj["Open Tabs"].length);
            obj["Recently Closed"].splice(0,obj["Recently Closed"].length);
            obj["Browser Logs"].splice(0,obj["Browser Logs"].length);
        }
    }
    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);
}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);