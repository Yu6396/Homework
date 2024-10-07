1
let email = prompt("Enter Your Email").toLowerCase().trim();
if (
  email.includes("@") &&
  email.includes(".") &&
  email.indexOf("@") > 0 &&
  email.indexOf(".") > email.indexOf("@") + 1 &&
  email.lastIndexOf(".") < email.length - 1
) {
  console.log("valid email");
} else {
  console.log("Invalid email");
}


2
let password = prompt("Enter Your Password").trim();
if (
  password.charAt(0).toLowerCase() === password.charAt(0) &&
  password.includes("0") &&
  password.charAt(password.length - 1).toUpperCase() ===
    password.charAt(password.length - 1)
) {
  console.log("Strong password");
} else {
  console.log("Invalid password");
}


3
let url = prompt("Enter Your URL");
if (url.startsWith("http://") || url.startsWith("https://")) {
    console.log("valid URL");
}else{
    console.log("Invalid URL");
}


// 4
// let palindrome = "mum";
// if(){

    

// }else{
//     console.log("not a palindrome");

// }


5
let username = prompt("Enter Your Username").trim();
if (username.length >= 5 && username.length <= 15){
    console.log("valid username");

}else{
    console.log("Invalid username");
} 


6
username = prompt("Enter Your Username").trim().toLowerCase();
console.log(username.charAt(0).toUpperCase() + username.slice(1));
 

7
let file = prompt("Enter File Type").trim();
if(file.endsWith(".jpeg")){
    console.log("File is jpeg");
}else if(file.endsWith(".png")){
    console.log("File is png");
}else if(file.endsWith(".jpg")){
    console.log("File is jpg");
}else if(file.endsWith(".mp3")){
    console.log("File is mp3");
}else if(file.endsWith("mp4")){
    console.log("File is mp4");
}else{
    console.log("Invalid file format");
}


8
let phoneNumber = ("Enter Phonenumber").trim();
if(phoneNumber.length >= 11 && phoneNumber.startsWith("0")){
        console.log("Valid phone number");
    }
else{
    console.log("Invalid phone number");
} 

9
let forbidden = prompt("Enter Word").toLowerCase();
console.log(forbidden.replaceAll("bad", "good").replaceAll("spam", "send"));


10
let score = prompt("Enter Your Score");
if(score <= "75" && score <= "100"){
    console.log("Grade A");
}else if("60" <= score && score <="70"){
    console.log("Grade B");
}else if("50" <= score&& score <= "60"){
    console.log("Grade C");
}else if(score <= "50"){
    console.log("Retake The Exam");
}else{
    console.log("Invalid Score");
} 



    




