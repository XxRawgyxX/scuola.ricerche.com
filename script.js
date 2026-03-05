function showSection(id) {
    document.querySelectorAll('.card').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* SWITCH TEMA */
document.getElementById("themeToggle").addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
});
