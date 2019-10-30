function getByPath ([first, ...rest], obj)  {
    if(!first || !obj[first]) return undefined; //either no path was supplied or the top-level property doesnt' exist in obj
    return rest.length < 1 ? obj[first] : getByPath(rest, obj[first]);
  }
  