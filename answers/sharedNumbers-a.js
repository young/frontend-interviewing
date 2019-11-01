function shared(x, y) {
    const commonNumbers = [];
    let curr1 = x.next();
    let curr2 = y.next();

    while (curr1.done !== true && curr2.done !== true) {
        if (curr1.value === curr2.value) {
            commonNumbers.push(curr1.value);
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

    return commonNumbers;
}
