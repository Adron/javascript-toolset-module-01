var apple = new function() {
    this.type = "Mac";
    this.color = "Aluminum";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' Apple';
    };
}