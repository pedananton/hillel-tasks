var initialValue = {};
var reducer = function (tally, person) {
  if (person.gender === 'F' && !tally.F) {
    tally.F = 1;
  } else if (person.gender === 'F' && tally.F) {
    tally.F += 1;
  } else if (person.gender === 'M' && !tally.M) {
    tally.M = 1;
  } else if (person.gender === 'M' && tally.M) {
    tally.M += 1;
  }
  return tally;
};
var resultGender = persons.reduce(reducer, initialValue);
console.log('Gender:', resultGender);

var initialValue = {};
var reducer = function (tally, person) {
  if (!tally[person.monthNameOfJoining]) {
    tally[person.monthNameOfJoining] = 1;
  } else {
    tally[person.monthNameOfJoining] = tally[person.monthNameOfJoining] + 1;
  }
  return tally;
};
var resultMonth = persons.reduce(reducer, initialValue);
console.log('Month:', resultMonth);
