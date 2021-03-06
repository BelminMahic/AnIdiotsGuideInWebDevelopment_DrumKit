

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        

        var btnInnerHtml=this.innerHTML;

        keySound(btnInnerHtml);

        buttonAnimation(btnInnerHtml);
});
}


document.addEventListener("keypress",function(event){
    keySound(event.key);
    buttonAnimation(event.key);

})


function keySound(key)
{
    switch (key) {
        case "w":
            var audioFile=new Audio("sounds/crash.mp3");
            audioFile.play();
            break;
        case "a":
            var audioFile=new Audio("sounds/kick-bass.mp3");
            audioFile.play();
        break;
        case "s":
            var audioFile=new Audio("sounds/snare.mp3");
            audioFile.play();
            break;
        case "d":
            var audioFile=new Audio("sounds/tom-1.mp3");
            audioFile.play();break;
        case "j":
            var audioFile=new Audio("sounds/tom-2.mp3");
            audioFile.play();break;
        case "k":
            var audioFile=new Audio("sounds/tom-3.mp3");
            audioFile.play();break;
        case "l":
            var audioFile=new Audio("sounds/tom-4.mp3");
            audioFile.play();break;
        default:
            break;
    }

}

function buttonAnimation(eventKey)
{
    var activeButton=document.querySelector("."+eventKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
