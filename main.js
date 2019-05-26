const htmlElems = {
    numsArrInput: document.getElementById("numbers_array"),
    stringArrInput: document.getElementById("strings_array"),
    result1: document.getElementById("result1"),
    formula1: document.getElementById("formula1"),
    result2: document.getElementById("result2"),
    formula2: document.getElementById("formula2"),
    catImg: document.getElementById("cat-img")
}


// Homework 1
function processNumArr() {
    var numsArr = eval(htmlElems.numsArrInput.value);
    var sumArr = numsArr.map((element) => element.reduce((x, y) => x + y));
    htmlElems.result1.innerHTML = sumArr;
    htmlElems.formula1.innerHTML = 'var sumArr = numsArr.map((element) => <br> element.reduce((x, y) => x + y));';
}


// Homework 2
function processStringArr() {
    var stringArr = eval(htmlElems.stringArrInput.value);
    var lengthArr = stringArr.map((element) => element.length);
    htmlElems.result2.innerHTML = lengthArr;
    htmlElems.formula2.innerHTML = 'var lengthArr = stringArr.map((element) => element.length);';
}


// Homework 3
getCatImg();
function getCatImg() {
    var url = "https://aws.random.cat/meow";
    fetch(url, { method: 'get' })
        .then(res => {
            return res.json();
        })
        .then(data => {
            sendToImg(data);
        })
};
function sendToImg(newImg) {
    htmlElems.catImg.setAttribute("src", newImg.file);
};