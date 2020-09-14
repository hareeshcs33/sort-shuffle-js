console.log('sort and shuffle');

const numberList = [1,2,10,3,4,5,6,7,8,9];
numberList.map(item => {
    console.log(item);
});

const sort = document.querySelector('.btn-sort');
const shuffle = document.querySelector('.btn-shuffle');

sort.addEventListener('click', sortList);
shuffle.addEventListener('click', shuffleList);

function sortList(){
    console.log('sort list function triggered on click');
    const sortArrList = numberList.sort((a, b) => a - b);
    console.log(sortArrList);
}
function shuffleList(arr){
    console.log('shuffle list function trigered on click');
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;
    console.log('arr',arr);
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = arr[randomIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }
    return arr;
}
console.log(shuffleList)
const box = document.querySelectorAll('.box');




console.log(box);