let i =0;
let j= 0;
let k= 0;
const theName = "Micah Lin";
const theDesc = "Aspiring Software Engineer 🖥️";
const theDescTwo = "USMC Reservist ⚔️";
typingAnimation();
document.getElementById("btn__scroll--white").addEventListener("click", scrollDown);


function typingAnimation(){
    if(i<theName.length) {
        document.getElementById("name").innerHTML += theName.charAt(i);
        i++;
        setTimeout(typingAnimation, 140);
    }
    if(i == theName.length){
        typingAnimationDescOne();
    }


}

function typingAnimationDescOne(){
    if(j<theDesc.length) {
        document.getElementById("desc-1").innerHTML += theDesc.charAt(j);
        j++;
        setTimeout(typingAnimationDescOne, 180);
    }
    if( j == theDesc.length){
        typingAnimationDescTwo();
    }
}
function typingAnimationDescTwo(){
    if(k<theDescTwo.length) {
        document.getElementById("desc-2").innerHTML += theDescTwo.charAt(k);
        k++;
        setTimeout(typingAnimationDescTwo, 160);
    }
}

function scrollDown(){
    window.scrollTo({top:980, behavior: 'smooth'});
}