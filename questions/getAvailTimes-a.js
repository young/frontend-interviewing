function getAvailTimes(input) {
    return input.reduce((acc, curr) => {
        const {name, hrs} = curr;
        hrs.forEach(hr => {
          if(acc[hr]) acc[hr].push(name);
          else acc[hr] = [name];
        });
        return acc;
    }, {});
}