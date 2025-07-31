
function saveName(Name) {
    localStorage.setItem("Name", Name);
}

document.querySelector("button").addEventListener("click", () => {
    let Name = prompt("Naam likh apna:=")
    saveName(Name);
    document.querySelector(".text").innerHTML= document.querySelector(".text").innerHTML+"WElCOME "+Name;
})