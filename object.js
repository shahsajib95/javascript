var student = {Id:121, phone:1745, name:"abir"};
var student2 = {id:131, phone:457, name:"mahi"}

var phonePropName = "phone"
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

student2.phone = 547854;

student2["phone"] = 666888;
student2[phonePropName] = 999911111;
student2.cinema = "ogni22"

console.log(phoneNo1);
console.log(student2);


