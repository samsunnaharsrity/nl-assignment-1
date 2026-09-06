function getCngFare(distance, isNight = false, waitingCharge = 0) {
  //  minimum fare 50 tk
  let fare = 50;
  // waiting charge additional

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingCharge * 2;

  if (isNight) {
    fare += fare * 0.20;
  }

  return fare;
}

