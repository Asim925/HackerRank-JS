function newYearCountDown(seconds) {
  while (seconds > 0) {
    console.log(seconds);
    seconds -= 1;
  }

  console.log("happy new year");
}

newYearCountDown(3);
newYearCountDown(0);
