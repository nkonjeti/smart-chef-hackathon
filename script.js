class saveItem {
    constructor(id, notes) {
        this.videoID = id;
        this.notes = notes;
    }

    addNotes(newNotes) {
        this.notes = newNotes;
    }

    displayNotes() {
        //this depends on how we are structuring notes
    }
}

var savedItems = [];

function initAllVideos() {
    //depends on how we are parsing videos to js
    //run for loop and add all videos to savedItems with empty notes
}

function saveNotes(id) {
    for (var i = 0; i < savedItems.length; i++) {
        if (id == savedItems[i].videoID) {
            savedItems[i].addNotes();
        }
        else {
            console.log("error: video not found");
        }
    }
}

function draw() {
    
}