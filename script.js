function changeColors() {
    var heading = document.getElementById("heading");
    var body = document.body;

    var headingColor = getRandomColor();
    var bodyColor = getRandomColor();

    while (headingColor === bodyColor) {
        bodyColor = getRandomColor();
    }

    heading.style.color = headingColor;
    body.style.color = bodyColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}