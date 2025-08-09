function passvalid(password){
    const hasUpper=/[A-Z]/.test(password);
    const hasLower=/[a-z]/.test(password);
    const hasNum=/[0-9]/.test(password);
    const checklen = password.length>=8;

    return hasUpper &&  hasLower && hasNum && checklen;
}
let password="Luvindknfnk1"
if(passvalid(password)){
    console.log("Valid h!")
}else{
    console.log("Valid na h laadar!")

}