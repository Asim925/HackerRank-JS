function findMaxSnowfall(data) {
  let currentMax = data[0];

  for (let i = 0; i < data.length; i++)
    if (data[i].snowfall > currentMax.snowfall) currentMax = data[i];
  return currentMax.year;
}

let data = [
  { year: 2022, snowfall: 10.5 },
  { year: 2023, snowfall: 15.2 },
  { year: 2024, snowfall: 8.7 },
];

console.log(findMaxSnowfall(data));
