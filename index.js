// Write your solution in this file!
let employee= {
    name:'Sam',
    streetAddress:'11 Broadway'
}

//Make this function nondestructive
function updateEmployeeWithKeyAndValue(employee,key,value) {
const newObject= {...employee};

newObject[key]=value;

return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
 employee[key]=value;

 return employee;
 
}

//This is nondestructive
function deleteFromEmployeeByKey(employee,key) {
let newObj={...employee,};

delete newObj[key];

return newObj;

}

//Make this function destructive

function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key]
return employee

}