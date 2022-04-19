function checkClass(){
    for (i=0;i<document.querySelector("i").classList.length;i++){
        if ("bi-eye-slash" == document.querySelector("i").classList[i]){
            return true;
        }
    }
    return false;
}


document.querySelector("button").addEventListener("click",function(){

    if (checkClass()){
        document.querySelector("i").classList.remove("bi-eye-slash");
        document.querySelector("i").classList.add("bi-eye");
        document.querySelector("input").setAttribute("type","text");
        document.querySelector("button").classList.add("pressed");
        

    }
    else{
        document.querySelector("i").classList.remove("bi-eye");
        document.querySelector("i").classList.add("bi-eye-slash");
        document.querySelector("button").classList.remove("pressed");
        document.querySelector("input").setAttribute("type","password");
    }
});

