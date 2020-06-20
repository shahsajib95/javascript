var shah = {Id: 1212, phone: 8563, rel: "unmarried" };
var ashiq = {Id: 1125, phone: 4121, rel: "unmarried" };

var phoneNo = "phone";
var PnoneNum = shah.phone;
var PhoneNum2 = shah["phone"];
var phoneNum3 = shah[phoneNo];

shah.rel = "married";
console.log(shah.rel)
