/*
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

 

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
*/


var carPooling = function (trips, capacity) {
  let passengerCount = 0;

  trips.sort((a, b) => {
    return a[1] - b[1];
  });

  console.log(trips);

  for (let i = 0; i < trips.length; i++) {
    let t = trips[i];
    passengerCount += t[0];
    let fromLocation = t[1];
    let toLocation = t[2];

    if (i > 0) {
      for (var j = 0; j < i; j++) {
        if (trips[j] && trips[j][2] <= t[1]) {
          passengerCount -= trips[j][0];
          trips[j] = null;
        }
      }
    }

    if (passengerCount > capacity || fromLocation > toLocation) {
      return false;
    }
  }
  return true;
};

var ans = carPooling(
  [
    [8, 2, 3],
    [4, 1, 3],
    [1, 3, 6],
    [8, 4, 6],
    [4, 4, 8],
  ],
  12
);

console.log(ans);
