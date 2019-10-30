
const i1 = function* () {
    yield* [0, 2, 3, 4, 9, 10];
};

const i2 = function* () {
    yield* [1, 2, 9, 10, 14];
};

function combine(x, y) {
const shared = [];
let curr1 = x.next();
let curr2 = y.next();

while (curr1.done !== true && curr2.done !== true) {
    if (curr1.value === curr2.value) {
        shared.push(curr1.value);
        curr1 = x.next();
        continue;
    }

    if (curr1.value > curr2.value) {
        curr2 = y.next();
        continue;
    }

    if (curr1.value < curr2.value) {
        curr1 = x.next();
        continue;
    }
}

return shared;
}




  combine(i1(), i2()); // 2,9,10
