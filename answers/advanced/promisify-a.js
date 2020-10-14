function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            function cb(result) {
                resolve(result);
            }

            fn.apply(this, [cb].concat(args));
        });
    }
}


// Promisfy in action - using setTimeout
let setTimeOutPromise = promisify(setTimeout);

function printAndReturnPromise() {
    console.log('First Callback function called');
    return setTimeOutPromise(1000);
}

function printNameAfterGivenTime() {
    console.log('Second Callback function called');
}

// Promise chain
setTimeOutPromise(2000)
    .then(printAndReturnPromise)
    .then(printNameAfterGivenTime);