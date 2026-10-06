const places = [3, 0, 2, -1, 5];
// Complétez ici.

for (let place of places) {
  if (place < 0) {
    break;
    
  } else if (place == 0) {
    continue;
  }
  console.log(place);
}
