function backwardsPath(element, root) {
    const path = [];
    let current = element;

    while (current.parentNode) {
        const index = [...current.parentNode.children].indexOf(current);
        path.push(index);
        current = parentNode;
    }

    current = root;
    while (path.length) {
        current = current.children[path.pop()];
    }

    return current;
}
