Function.prototype.bind = function(context) {
    const _this = this;
    return function() {
        _this.apply(context);
    }
}
