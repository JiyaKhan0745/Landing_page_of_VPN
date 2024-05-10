console.log("hy hyyyyyyyyyyyyyyyy")

const languageDropdownToggle = document.getElementById("languageDropdownToggle");
const languageDropdown = document.getElementById("languageDropdown");

languageDropdownToggle.addEventListener("click", function(){
    if(languageDropdown.style.display ==="block"){
        languageDropdown.style.display = "none";
    }
    else {
        languageDropdown.style.display = "block";
    }
})