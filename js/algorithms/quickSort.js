import app from '../app.js';

const quickSort = (_ => {

  const arrayBody = document.querySelector('#array-body');
  
  const cacheDOM = _ => {
    const arrayElements = document.querySelectorAll('.array-element');
    let arrayToSort = [...arrayElements];
    let array1 = [];

    for (let i = 0; i < arrayToSort.length; i++){
      let value = Number(arrayToSort[i].childNodes[0].innerHTML);
      array1.push(value);
    }


    let sorted = quickSort(array1, array1[0], array1[array1.length - 1]);
      console.log(sorted);
      
   
   
    
  }
 

  const quickSort = (arr) => {
    
             
  
  }
    

  
  

     


    
  return {
    cacheDOM
  }

})();

export default quickSort;



   // const swap = function(block1, block2){
    //   return new Promise(resolve => {
    //     const elementstyle1 = window.getComputedStyle(block1);
    //     const elementstyle2 = window.getComputedStyle(block2);
    
    //     const elementTransformProp1 = elementstyle1.getPropertyValue("transform");
    //     const elementTransformProp2 = elementstyle2.getPropertyValue("transform");
    
    //     block1.style.transform = elementTransformProp2;
    //     block2.style.transform = elementTransformProp1;
    
    //     // Wait for the transition to end!
    //     window.requestAnimationFrame(function() {
    //       setTimeout(() => {
    //         arrayBody.insertBefore(block2, block1);
    //         resolve();
    //       }, 25);
    //     });
    //   });
    // }