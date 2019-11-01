function removeDuplicates(str) {
    const arr = str.split(' ');
    return [...new Set(arr)].join(' ');
}
