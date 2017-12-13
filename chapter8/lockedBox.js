// Error handling

var box = {
    locked: true,
    unlock: function () { this.locked = false; },
    lock: function () { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(f){
    try{
        box.locked=false;
        f;
    }
    finally{
        box.locked=true;
    }
}

var show = withBoxUnlocked(function () {
    if (box.locked == true) throw new Error(" Locked !");
    else return box._content;
});