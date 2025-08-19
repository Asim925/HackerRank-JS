const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

/*   ==> all movies having year 2018 and rating > 4
     ==> sort them by the ratings
     ==> arrange in descending order
     ==> log only the titles after all the steps >>>
*/

movies
  .filter((movies) => movies.year > 2017 && movies.rating >= 4)
  .sort((a, b) => a - b) // samjh le ye zaroori hai
  .reverse()
  .map((movies) => console.log(movies.title));
