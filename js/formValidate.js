function verifyForm(){
    let check = true;
    let title = document.querySelector('.title');
    let file = document.querySelector('.file');
    let prep = document.querySelector('.prep');
    let prepTime = document.querySelector('.preptime');
    let cook = document.querySelector('.cook');
    let cookTime = document.querySelector('.cooktime');
    let ingredient = document.querySelector('.ing');
    let instruction = document.querySelector('.inst');
    if(title.value =="" || file.value =="" || prep.value =="" || prepTime.selectedIndex==0 || cook.value =="" || cookTime.selectedIndex==0 || ingredient.value =="" || instruction.value ==""){
        check = false;
    }
    return check;
}

function verifyLogup(){
    let ver = true;
    let pn = document.querySelector('.num');
    let pw = document.querySelector('.pw');
    if (pn.value.length !== 8){
        document.querySelector('.warningPhone').innerHTML = "Phone number is formed by 8 numbers!";
        ver = false;
    }
    if(pw.value.length < 6){
        document.querySelector('.warningPass').innerHTML = "Password is formed by 6 numbers!";
        ver = false;
    }


    return ver;
}