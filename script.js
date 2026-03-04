const toggleBtn = document.getElementById("themeToggle");
const mobileToggleBtn = document.getElementById("mobileThemeToggle");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* Load Saved Theme */
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
}

/* Toggle Theme */
function toggleTheme(){
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggleBtn.textContent="☀️";
        if(mobileToggleBtn) mobileToggleBtn.textContent="☀️ Theme";
        localStorage.setItem("theme","light");
    }else{
        toggleBtn.textContent="🌙";
        if(mobileToggleBtn) mobileToggleBtn.textContent="🌙 Theme";
        localStorage.setItem("theme","dark");
    }
}

toggleBtn?.addEventListener("click",toggleTheme);
mobileToggleBtn?.addEventListener("click",toggleTheme);

/* Hamburger */
hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
});

/* Smooth Scroll */
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

function sendEmail(){
    window.location.href="mailto:dhaneeshktr777@gmail.com";
}