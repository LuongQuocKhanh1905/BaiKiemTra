function isPrime(num) {
    if(num < 2 ) {
        return false;
    }
    for(let i = 2; i< Math.sqrt(num); i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;

}

// Hàm lọc số nguyên tố từ mảng
function filterPrimes(arr) {
    return arr.filter(isPrime);
}

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Nhập mảng và in ra số nguyên tố
let a = parseInt(prompt("Nhập số lượng phần tử của mảng  :"))

const array = [];

for (let i = 0; i < a; i++) {
    let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(value);
}

const primes = filterPrimes(array);
const sortedPrimes = sortAscending(primes);

document.write("Các số vừa nhập là : " + array +"<br>");
document.write("Các số nguyên tố trong mảng sắp xếp tăng dần là:", sortedPrimes);



