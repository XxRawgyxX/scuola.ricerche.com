function showSection(id) {
    document.querySelectorAll('.card').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
    window.scrollTo({ top: 0, behavior: "smooth" });
}
