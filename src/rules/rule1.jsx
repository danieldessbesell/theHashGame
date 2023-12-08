export default function verifyRule1(line) { // Line Verify
    const aux = line[0];
    let count = 0;
    if (aux !== '') {
    line.forEach((item) => {
      if (item === aux) {
        count += 1;
      }
    });
  }
    if (count === 3) {
      return true;
    } else {
        return false;
    }
  }