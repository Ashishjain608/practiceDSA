const points = [
  [11, 12],
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

var findMinArrowShots = function (points) {
  let totalArrows = points.length;
  let range = {
    start: null,
    end: null,
  };
  for (range of points) {
    let [low, high] = range;
    if (range.start && range.end) {
      // if()
    }

    range.start = range.start ? (range.start > low ? low : range.start) : low;
    range.end = range.end ? (range.end < high ? high : range.end) : high;
  }
};
