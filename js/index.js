// js/index.js

var count = 0;

document.getElementById("toggleImageBtn").onclick = function () {
    count++;
    
    if (count % 2 == 0) {
        // Закрытие изображения
        document.getElementById("demo").innerHTML = "";
    } else {
        // Открытие изображения
        var img = document.createElement("img");
        img.src = "image/image.jpg"; // Укажите путь к вашему изображению
        img.alt = "фотка";
        img.className = "img-fluid"; // Добавляем класс Bootstrap для адаптивности изображения
        
        document.getElementById("demo").appendChild(img);
    }
};