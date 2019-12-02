// TASK // Find in array: sum, min and max, replace min and max - create custom functions


function findMax(arr) {
    return arr.reduce((ac, el) => ac < el ? ac = el : ac)
}


function findMin(arr) {
    return Math.min(...arr)
}

function sum(arr) {
    return arr.reduce((ac, el) => ac + el)
}

function replace(arr) {
    let min = findMin(arr);
    let max = findMax(arr)
    arr.forEach((el, i) => {
        if (el == min) {
            arr[i] = max
        } else if (el == max) {
            arr[i] = min
        }
    })
    return arr;
}


// Create function which will return function with callback in arguments

function fun() {
    return function (collback) {
        collback()
    }
}


// TASK // Create a function that will replace all number dividing three with ‘foo’,
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

function fooBar(num) {
    for (i = 1; i <= num; i++) {
        let n;
        i % 7 == 0 && i % 3 == 0 ? n = "foobar" :
            i % 7 == 0 ? n = "bar" :
            i % 3 == 0 ? n = "foo" :
            n = i
        console.log(n)
    }
}


//Create function with 2 string params. 
//It must check if letters in the first correspond to the number of matches in second and return %.


function chekLetters(strA, strB) {
    count = 0;
    strA.split('').forEach(el => {
        if (strB.split('').includes(el)) {
            count++
        }
    })
    return (count / (strA.length + strB.length) * 100).toFixed(2) + "%"
}