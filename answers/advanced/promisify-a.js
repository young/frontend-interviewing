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

// Creating a custom setTimeout that takes callback at the end
function customSetTimeout(...args) {
    setTimeout(...args.reverse());
}
// Promisfy in action - using customSetTimeout
let setTimeOutPromise = promisify(customSetTimeout);

function printAndReturnPromise() {
    console.log('First Callback function called');
    return setTimeOutPromise(1000);
}

function printAfterGivenTime() {
    console.log('Second Callback function called');
}

// Promise chain
setTimeOutPromise(2000)
    .then(printAndReturnPromise)
    .then(printAfterGivenTime);
