function Person(name, age, id){
this.name=name
this.age=age
this.id=id
}
let shubham= new Person("shubham", 25, 3126)
console.log(shubham.id);

var check= shubham instanceof Person
console.log(check);

let ary= [1,2,3,4,9]
ary.push()