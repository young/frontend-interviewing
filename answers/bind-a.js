Function.prototype.bind = function(context) {
    return (...args) => {
        return this.apply(context, args);
    }
}
