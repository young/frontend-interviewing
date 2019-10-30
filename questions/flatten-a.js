function flatten(arr) {
	return arr.reduce(function(prev, curr) {
		if (Array.isArray(curr)) {
			prev = prev.concat(flatten(curr));
		} else {
            prev.push(curr);
		}
		return prev;
	}, []);
}
