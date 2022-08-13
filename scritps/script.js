const BodyMenu = document.getElementById("GumMenu");
const btnActivedMenu = document.getElementById("ActivaterMenu");
const MainContainer = document.getElementById("MainContainer");
function update(){
	if(BodyMenu.style.width == "0px"){
		BodyMenu.style.width = 250 + "px";
		MainContainer.style.overflow = "hidden"
	}
	else{
		BodyMenu.style.width = 0;
		MainContainer.style.overflow = "visible"
	}
	
}

btnActivedMenu.addEventListener("click",update);