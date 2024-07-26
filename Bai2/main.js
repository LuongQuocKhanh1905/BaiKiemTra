function countUppercaseCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()&& char !== char.toLowerCase()) {
            count++;
        }
    }
    if(count === 0) {
        return "The Strings is not contain upper char!!!";
        
    }
    return count;
}

let Chain = prompt("Nhập chuỗi bạn cần kiểm tra:");
document.write( countUppercaseCharacters(Chain));
