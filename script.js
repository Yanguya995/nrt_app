$(document).ready(function () {
    var circles = [];
    var wCircles = [];
    var c = document.getElementById("cnv_main")
    var ctx = c.getContext("2d");
    var ch = document.getElementById("cnv_header");
    var ctxh = ch.getContext("2d");
    var defaultColor = 'white';
    var timer = 10;
    var selectedColor = '';
    var input = '';
    var colours = ["red", "Linen", "Magenta", "Maroon", "Alice blue", "Antique white", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "Blanched almond", "Blue", "Blue violet", "Brown",
        "Burlywood", "Cadet blue", "Chartreuse", "Chocolate", "Coral", "Cornflower blue", "Cornsilk", "Crimson", "Cyan", "Dark blue", "Dark cyan", "Dark goldenrod", "Dark gray",
        "Dark green", "Dark khaki", "Dark magenta", "Dark olive green", "Dark orange", "Dark orchid", "Dark red", "Dark salmon", "Dark seagreen", "Dark slate blue", "Dark slate gray",
        "Dark turquoise", "Dark violet", "Deep pink", "Deep sky blue", "gray", "Dodger blue", "Firebrick", "Floral white", "Forest green", "Fuchsia", "Gainsboro", "Ghost white",
        "Gold", "Goldenrod", "Gray", "Green", "Green yellow", "Honeydew", "pink", "Indian", "Indigo", "Ivory", "Khaki", "Lavender", "Lavender blush", "Lawn green", "Lemon chiffon",
        "Light blue", "Light coral", "Light cyan", "Light goldenrod yellow", "Light green", "Light grey", "Light salmon", "Light slate gray", "Light steel blue", "Light yellow",
        "Lime", "Lime green", "Linen", "Magenta", "Maroon", "Medium aquamarine", "Medium blue", "Medium orchid", "Medium purple", "Medium green", "Medium slate blue",
        "Medium spring green", "Medium turquoise", "Medium violet", "Midnight blue", "Mint cream", "Misty rose", "Moccasin", "Navajo white", "Olive drab", "Orange",
        "Orange", "Orchid", "Pale goldenrod", "Pale green", "Pale turquoise", "Pale violet", "Papaya whip", "Peach puff", "Peru", "Pink", "Plum", "Powder blue", "Rosy brown", "Royal blue",
        "Saddle brown", "Salmon", "Sandy brown", "Sienna", "Slate blue", "Snow", "Spring green", "Thistle", "Teal", "Tomato", "Turquoise", "Violet", "Wheat", "White",
        "Whitesmoke", "Yellow", "Yellow green"
    ];

    $('#txt_color').on('input', function (e) {
        input = $(this).val();
        isColor(input);
        $(this).attr('style', 'background-color:' + selectedColor + '; opacity: 0.3');
    });

    setInterval(function () {
        var bl_circle
        if (selectedColor != '') {
            bl_circle = createCircle(selectedColor);
        } else {
            bl_circle = createCircle(defaultColor);
        }

        if (bl_circle.y >= 50) {
            circles.push(bl_circle);
        }
        move();
    }, timer);

    $("#txt_color").on('click', function () {
        $(this).attr("class", "colorInput")
    });

    function isColor(input) {
        for (let item of colours) {
            if (input == item) {
                selectedColor = input;
                break;
            }
        }
    }

    function createColor(_name, _code) {
        return color = {
            name: _name,
            code: _code
        }
    }

    function createCircle(color) {
        return circle = {
            r: Math.random() * 24,
            x: Math.floor(Math.random() * (1638 - 0) + 0),
            y: Math.floor(Math.random() * (834 - 50) + 50),
            color: color
        };
    }

    function move() {
        setInterval(function () {
            ctx.clearRect(0, 0, 1655, 840)
            circles.forEach(function (element) {
                element.x = element.x + (Math.random() + -(Math.random() + 0.01));
                element.y = element.y + (Math.random() + -(Math.random() + 0.01));
                if (element.y <= 50) {
                    element.color = 'black';
                    wCircles.push(element);
                }
                draw(element);
                if (circles.length >= 150) {
                    circles.shift();
                }
            }, this);
        }, function () {

        }, 1000)
    }

    function draw(circle) {
        console.log(circles.length);
        var c = document.getElementById("cnv_main")
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = circle.color;
        ctx.strokeStyle = "transparent";
        ctx.fill();
    }
});