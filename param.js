function changeValue(val){
    val=val+10;
    console.log(val);
}

let kval=10;
console.log(kval);
changeValue(kval);
console.log(kval);

function changeName(obj){
    obj.name='conder';
}

let jsw={name:'jsw'};

console.log(jsw);
changeName(jsw);
console.log(jsw);