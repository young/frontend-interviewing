function getByPath ([first, ...rest], obj)  {
    if(!first || !obj[first]) {
      // Either no path was supplied or the top-level property doesnt' exist in obj
      return undefined;
    }

    if (rest.length < 1) {
      return obj[first];
    } else {
      return getByPath(rest, obj[first]);
    }
  }
