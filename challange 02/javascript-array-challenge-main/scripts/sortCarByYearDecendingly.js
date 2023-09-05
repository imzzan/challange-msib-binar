function sortCarByYearDescendingly(cars) {
  // Sangat dianxurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Array method sort()
  // const hasilSorting = result.sort((a, b) => {
  //   return b.year - a.year;
  // });

  // Bubble sort teknik
  let sweeped;
  for(let i = 0; i <= result.length; i++) {
    sweeped = false;
    for(let j = 0; j < result.length-1; j++) {
      if(result[j].year < result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        console.log(result[j + 1]);
        sweeped = true;
      }
    }
    if(!sweeped) {
      break;
    }
  }

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
