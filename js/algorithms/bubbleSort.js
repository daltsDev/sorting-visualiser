import app from '../app.js';

const bubbleSort = (_ => {
  // CACHE THE DOM
  const arrayBody = document.querySelector('#array-body');

  const  bubbleSort = async _ => {
    let array = document.querySelectorAll('.array-element');
    let arrayToSort = [...array];
    

    for (let i = 0; i < arrayToSort.length - 1; i ++){
      for (let j = 0; j < arrayToSort.length - i - 1; j ++){
        arrayToSort[j].style.backgroundColor = "#BC2C3D";
        arrayToSort[j + 1].style.backgroundColor = "#BC2C3D";

        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, 5)
        );

        const value1 = Number(arrayToSort[j].childNodes[0].innerHTML);
        const value2 = Number(arrayToSort[j + 1].childNodes[0].innerHTML);

        if (value1 > value2){
          await swap(arrayToSort[j], arrayToSort[j + 1]);
          arrayToSort = document.querySelectorAll('.array-element');
        }

        arrayToSort[j].style.backgroundColor = "#B7C8CB";
        arrayToSort[j + 1].style.backgroundColor = "#B7C8CB";
      }
      arrayToSort[arrayToSort.length - i - 1].style.backgroundColor = "#2C2627";
      arrayToSort[arrayToSort.length - i - 1].style.border = "solid 2px #F8F3E6";
    }
      arrayToSort[0].style.backgroundColor = "#2C2627";
      arrayToSort[0].style.border = "solid 2px #F8F3E6";
      
      app.enableSelection();
  }

  const swap = function(block1, block2){
    return new Promise(resolve => {
      const elementstyle1 = window.getComputedStyle(block1);
      const elementstyle2 = window.getComputedStyle(block2);
  
      const elementTransformProp1 = elementstyle1.getPropertyValue("transform");
      const elementTransformProp2 = elementstyle2.getPropertyValue("transform");
  
      block1.style.transform = elementTransformProp2;
      block2.style.transform = elementTransformProp1;
  
      // Wait for the transition to end!
      window.requestAnimationFrame(function() {
        setTimeout(() => {
          arrayBody.insertBefore(block2, block1);
          resolve();
        }, 25);
      });
    });
  }
    
  return {
    bubbleSort
  }

})();

export default bubbleSort;