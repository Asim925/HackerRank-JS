var threeSum = function (nums) {
  let results = [];

  let checkers = [];
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (nums[i] + nums[j] + nums[k] === 0) {
          if (
            checkers.includes(
              (nums[i].toString() + nums[j].toString() + nums[k].toString())
                .split("")
                .sort()
                .join("")
            )
          )
            continue;

          checkers.push(
            (nums[i].toString() + nums[j].toString() + nums[k].toString())
              .split("")
              .sort()
              .join("")
          );
          results.push([nums[i], nums[j], nums[k]]);
        }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
