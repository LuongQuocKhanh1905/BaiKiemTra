let a = parseInt(prompt("Nhập số lượng phần tử của mảng (<20) :"))

let arr = [];

for (let i = 0; i < a; i++) {
    let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(value);
}

document.write("Các phần tử của mảng vừa nhập vào là : " )
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + " , ");
}

let eventsum = 0;
let oddsum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        eventsum+= arr[i];
    } else {
        oddsum += arr[i];
    }
}

document.write("<br>Hiệu của tổng các số chẵn và tổng các số lẻ là :  " + (eventsum - oddsum));
