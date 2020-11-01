function zipObj(list1, list2) {
    return list1.reduce((result, curr, index) => {
      result[curr] = list2[index];
      return result;
    }, {});
  }