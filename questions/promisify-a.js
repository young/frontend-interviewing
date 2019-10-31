function promisify(fn) {
    return function(...args) {
        return new Promise(function (resolve, reject) {
            function cb(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            fn.apply(this, args.concat(cb));
        });
    }
}
