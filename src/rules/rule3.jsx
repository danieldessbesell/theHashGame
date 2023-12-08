export default function verifyRule3(values) { // Diagonal 1 Verify
  const aux = values[1][1];
  let positionForVerify = 0;
  let count = 0;
  if (aux !== '') {

  values.forEach((item, x) => {
    item.forEach((subitem, y)=>{
      if ((x=== positionForVerify) && (y===positionForVerify)) {       
        if (subitem === aux) {
          count += 1;
        }    
        positionForVerify = positionForVerify + 1;   
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