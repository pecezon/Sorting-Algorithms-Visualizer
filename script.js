

//function that makes fibonacci sequence

//DIY solution
function personalFibonacciGenerator (n) {
    sequence = [0, 1];
    if (n === 1) {
        sequence.pop();
    } else if(n === 0){
        sequence = [];
    }else{
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i-1] + sequence[i-2])
        }
    }
    return sequence
}

//Testing
console.log("Fibonacci")
console.log(personalFibonacciGenerator(0));
console.log(personalFibonacciGenerator(1));
console.log(personalFibonacciGenerator(2));
console.log(personalFibonacciGenerator(5));
console.log(personalFibonacciGenerator(10));

//Indian guy solution
 function indianFibonacci(n) {
    let fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
 }

//Big O = O(n)

//Return factorial

//DIY factorial
function personalFactorial(n) {
    if(n <= 1){
        return 1
    }else{
        return n * personalFactorial(n-1);
    }
}

console.log("Factorial")
console.log(personalFactorial(0))
console.log(personalFactorial(2))
console.log(personalFactorial(4))
console.log(personalFactorial(5))


//Return isPrime
//Big-O = O(sqrt(n))
function isPrime(n) {
    if(n < 2){
        return false
    }
    for (let i = 2; i <= n**(1/2); i++) {
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log("isPrime")
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(101))

//Return is it a power of 2?

//My solution
function isPowerOf(n) {
    if (n === 1) {
        return true;
    } else if(n < 1){
        return false
    }
    return isPowerOf(n/2)
}

//Youtube solution
function indianIsPowerOfTwo(n) {
    if(n < 1){
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /=2;
    }
    return true;
}

//Youtube Indian Motherfucker solution
function isPowerOfTwoOnSteroids(n) {
    if( n < 1 ){
        return false
    }
    return (n & (n-1)) === 0
}

console.log("Is power of 2?")
console.log(isPowerOf(5))
console.log(isPowerOf(6))
console.log(isPowerOf(4))
console.log(isPowerOf(127))
console.log(isPowerOfTwoOnSteroids(8))

//Recursive fibonacci NIGGA function
function recurFibo(niggaNum) {
    if (niggaNum < 2) {
        return niggaNum
    }
    return recurFibo(niggaNum - 1) + recurFibo(niggaNum - 2)
}

console.log("Penesote")
console.log(recurFibo(0))
console.log(recurFibo(1))
console.log(recurFibo(4))
console.log(recurFibo(6))

//0 1 1 2 3 5 8 13


//Recursive Nigga Factorial
function recurFactorial(NIGGA) {
    if (NIGGA === 1) {
        return 1
    }
    return NIGGA * recurFactorial(NIGGA-1)
}

console.log("Recur factorial")
console.log(recurFactorial(1))
console.log(recurFactorial(2))
console.log(recurFactorial(3))
console.log(recurFactorial(4))
console.log(recurFactorial(5))

//Binary Search O(logn)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if (target === arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            right = mid - 1
        } else{
            left = mid + 1
        }
    }

    return -1
}

console.log("OG Binary Search")
console.log(binarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 1))
console.log(binarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 2))
console.log(binarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 8))
console.log(binarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 9))


//Recursive Binary Search
function recursiveBinarySearch(arr, target, left, right) {
    if(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === target){
            return mid;
        }

        if (arr[mid] < target) {
            return recursiveBinarySearch(arr, target, mid + 1, right)
        }else{
            return recursiveBinarySearch(arr, target, left, mid - 1)
        }

    }

    return -1
}

console.log("Recursive Binary Search")
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 1, 0, 8))
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 2, 0, 8))
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 7, 0, 8))
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 9, 0, 8))



/*
Sorting algorithms
*/ 

//Bubble Sort
function bubbleSort(niggArray) {
    let mov = false;
    let left = 0;
    let right = 1
    
    while (right  < niggArray.length) {
        if (niggArray[left] > niggArray[right]) {
            let val =  niggArray[left]
            niggArray[left] = niggArray[right]
            niggArray[right] = val
            mov = true
        }

        left++
        right++
    }

    if (mov) {
        return bubbleSort(niggArray)
    } else{
        return niggArray
    }
}

console.log("Nigga Bubble sort")
console.log(bubbleSort([10,5,3,7,8,9,1]))


//Binary Search from scratch without help

function niggaSearch(arr, target) {
    return binaryNigga(arr, target, 0, arr.length-1)
}

function binaryNigga(arr, target, l, r) {
    if (l > r) {
        return -1
    }

    let m = Math.floor((l+r)/2)
    if (target === arr[m]) {
        return m
    }

    if (target < arr[m]) {
        return binaryNigga(arr, target, l, m - 1)
    } else{
        return binaryNigga(arr, target, m + 1, r)
    }
}

console.log("Nigga Binary Search")
console.log(niggaSearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 1))
console.log(niggaSearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 2))
console.log(niggaSearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 8))
console.log(niggaSearch([1, 2, 3, 4, 5, 6 , 7 , 8, 10], 9))

