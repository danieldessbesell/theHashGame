export default function verifyRule2(col, values) { // Column Verify
    const aux = values[0][col];
    let count = 0;
    if (aux !== '') {
    values.forEach((item) => {
      item.forEach((subitem, index)=>{
        if (index === col){
          if (subitem === aux) {
            count += 1;
          }
        }
      })
      
    });
  }
    if (count === 3) {
      return true;
    } else {
        return false
    }
  }