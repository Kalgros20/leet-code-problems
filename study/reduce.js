// O reduce recebe 2 parametros, um callback q roda em cada elemento, esse callback tem

const rockets = [
  { country: "Russia", launches: 32 },
  { country: "Us", launches: 12 },
  { country: "Japan", launches: 22 },
];

const totalLaunches = rockets.reduce((accum, actual, index, array) => {
  return accum + elem.launches;
}, 0);

console.log(totalLaunches / rockets.length);
