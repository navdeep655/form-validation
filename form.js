function data()
{
var name=document.getElementById("name").value;
var gender=document.getElementById("gender").value;
var dob=document.getElementById("date").value;
var ad=document.getElementById("aadhar").value;
var mail=document.getElementById("email").value;
var degree=document.getElementById("degree").value;
var job=document.getElementById("job").value;
var exp=document.getElementById("exp").value;
var mobile=document.getElementById("mnumber").value;
var check=document.getElementById("agree").value;



 if(name==""||gender==""||dob==""||ad==""||mail==""||degree==""||job==""||exp==""||mobile==""||check=="")
 {
 alert("All fields are mendatory");
 return false;
 }

 else if(ad.length <12||ad.length>12)
 {
 alert("Aadhar Number should be of 12 numbers");
 return false;
 }

 else if(isNaN(ad))
 {
 alert("only numbers are allowed");
 return false;
 }


 else if(mail!=@gmail.com)
 {
 alert("enter proper email context");
 return false;
 }

 else if(mobile.length <10||mobile.length>10)
 {
 alert("number should be of 10 numbers");
return false;
 }

 else if(isNaN(mobile))
 {
 alert("only numbers are allowed");
 return false;
 }

 else
 { 
alert.("form submit successfully");
 return true;
 }
}
