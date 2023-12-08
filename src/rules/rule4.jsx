export default function verifyRule4(values) { // Diagonal 2 Verify
  const aux = values[0][2];
  let count = 0;
  if (aux !== '') {
    if (aux === values[0][2]){
      count = count + 1;
    }
    if (aux === values[1][1]){
      count = count + 1;
    }
    if (aux === values[2][0]){
      count = count + 1;
    }
  }
  if (count === 3) {
    return true;
  } else {
      return false
  }
}