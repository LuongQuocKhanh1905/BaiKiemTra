
let Phone1 = new Phone(123132,"Iphone","Apple",30000000);
let Phone2 = new Phone(5654456,"Galaxy","SamSung",25000000);
let Phone3 = new Phone(125645,"Reno","Oppo",12000000);
let arrphones = [Phone1, Phone2,Phone3]




function displayPhoneList(arrphones){
    let str = "";
    for(let i=0;i<arrphones.length;i++){
        str += '<tr>' +
        '<td>' + arrphones[i].id + '</td>'+
        '<td>' + arrphones[i].name + '</td>'+
        '<td>' + arrphones[i].manufacturer + '</td>'+
        '<td>' + arrphones[i].price + '</td>'+
        '</tr>'

    }
    document.getElementById("total").innerHTML = arrphones.length + " phones ";
    document.getElementById("tbody").innerHTML = str;

}
displayPhoneList(arrphones);

function addNewPhone(){
    let idphone= document.getElementById("idphone").value;
    let namephone= document.getElementById("namephone").value;
    let manufacturerphone= document.getElementById("manufacturerphone").value;
    let pricephone= document.getElementById("pricephone").value;
    let newPhone= new Phone(idphone, namephone, manufacturerphone,pricephone);
    arrproducts.push(newPhone);
    document.getElementById("idphone").value = "";
    document.getElementById("namephone").value = "";
    document.getElementById("manufacturerphone").value = "";
    document.getElementById("pricephone").value = "";
    displayProductList(arrproducts);
    alert("Successfully added new phones : " + namephone );
}



