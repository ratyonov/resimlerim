document.addEventListener("DOMContentLoaded", () => {
    // Varsayılan tema kontrolü
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "Tema Değiştir";
    toggleThemeButton.style.position = "fixed";
    toggleThemeButton.style.bottom = "20px";
    toggleThemeButton.style.right = "20px";
    toggleThemeButton.style.padding = "10px 20px";
    toggleThemeButton.style.cursor = "pointer";
    toggleThemeButton.style.backgroundColor = "#333";
    toggleThemeButton.style.color = "#fff";
    toggleThemeButton.style.border = "none";
    toggleThemeButton.style.borderRadius = "5px";
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            toggleThemeButton.style.backgroundColor = "#fff";
            toggleThemeButton.style.color = "#333";
        } else {
            localStorage.setItem("theme", "light");
            toggleThemeButton.style.backgroundColor = "#333";
            toggleThemeButton.style.color = "#fff";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const clock = document.createElement("div");
    clock.style.position = "fixed";
    clock.style.top = "10px";
    clock.style.right = "20px";
    clock.style.backgroundColor = "#333";
    clock.style.color = "#fff";
    clock.style.padding = "10px 20px";
    clock.style.borderRadius = "5px";
    clock.style.fontFamily = "Arial, sans-serif";
    document.body.appendChild(clock);
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
});


