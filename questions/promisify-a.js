function promisify(fn) {
    return function(...args) {
        return new Promise(function (resolve, reject) {
            function cb(result) {
                resolve(result);
            }

            fn.apply(this, args.concat(cb));
        });
    }
}
