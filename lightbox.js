document.addEventListener("DOMContentLoaded", () => {
    // Lightbox Elementini Oluştur
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "1000";
    document.body.appendChild(lightbox);

    // Lightbox Kapama Olayı
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Tüm Görseller İçin Lightbox Aktivasyonu
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            lightbox.style.display = "flex";
            lightbox.innerHTML = `<img src="${e.target.src}" style="max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);">`;
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const text = header.textContent;
    header.textContent = "";

    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
