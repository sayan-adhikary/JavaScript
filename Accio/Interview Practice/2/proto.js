const obj = {
    name: 'sayan'
};

const obj1 = {
    one: '1'
}

Object.prototype.add = 'three';

console.log(obj);
console.log(obj1);
// console.log(obj.prototype);
console.log(obj.__proto__);
// console.log(obj1.prototype);
console.log(obj1.__proto__);