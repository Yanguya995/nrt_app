$(document).ready(function () {

    var circles = [];
    var wCircles = [];
    var c = document.getElementById("cnv_main")
    var ctx = c.getContext("2d");
    var defaultColor = 'blue';
    var timer = 10;
    var selectedColor = '';
    var input = '';
    var colours = [{
            "name": "Alice blue",
            "code": "F0F8FF"
        }, {
            "name": "Antique white",
            "code": "FAEBD7"
        }, {
            "name": "Aqua",
            "code": "00FFFF"
        }, {
            "name": "Aquamarine",
            "code": "7FFFD4"
        }, {
            "name": "Azure",
            "code": "F0FFFF"
        }, {
            "name": "Beige",
            "code": "F5F5DC"
        },
        {
            "name": "Bisque",
            "code": "FFE4C4"
        }, {
            "name": "Black",
            "code": "000000"
        }, {
            "name": "Blanched almond",
            "code": "FFEBCD"
        }, {
            "name": "Blue",
            "code": "0000FF"
        }, {
            "name": "Blue violet",
            "code": "8A2BE2"
        }, {
            "name": "Brown",
            "code": "A52A2A"
        }, {
            "name": "Burlywood",
            "code": "DEB887"
        }, {
            "name": "Cadet blue",
            "code": "5F9EA0"
        }, {
            "name": "Chartreuse",
            "code": "7FFF00"
        }, {
            "name": "Chocolate",
            "code": "D2691E"
        }, {
            "name": "Coral",
            "code": "FF7F50"
        }, {
            "name": "Cornflower blue",
            "code": "6495ED"
        }, {
            "name": "Cornsilk",
            "code": "FFF8DC"
        }, {
            "name": "Crimson",
            "code": "DC143C"
        }, {
            "name": "Cyan",
            "code": "00FFFF"
        }, {
            "name": "Dark blue",
            "code": "00008B"
        }, {
            "name": "Dark cyan",
            "code": "008B8B"
        }, {
            "name": "Dark goldenrod",
            "code": "B8860B"
        }, {
            "name": "Dark gray",
            "code": "A9A9A9"
        }, {
            "name": "Dark green",
            "code": "006400"
        }, {
            "name": "Dark khaki ",
            "code": "BDB76B"
        }, {
            "name": "Dark magenta",
            "code": "8B008B"
        }, {
            "name": "Dark olive green",
            "code": "556B2F"
        }, {
            "name": "Dark orange",
            "code": "FF8C00"
        }, {
            "name": "Dark orchid",
            "code": "9932CC"
        }, {
            "name": "Dark red",
            "code": "8B0000"
        }, {
            "name": "Dark salmon",
            "code": "E9967A"
        }, {
            "name": "Dark seagreen",
            "code": "8DBC8F"
        }, {
            "name": "Dark slate blue",
            "code": "483D8B"
        }, {
            "name": "Dark slate gray",
            "code": "2F4F4F"
        }, {
            "name": "Dark turquoise",
            "code": "00DED1"
        }, {
            "name": "Dark violet",
            "code": "9400D3"
        }, {
            "name": "Deep pink",
            "code": "FF1493"
        }, {
            "name": "Deep sky blue",
            "code": "00BFFF"
        }, {
            "name": "Dim gray",
            "code": "696969"
        }, {
            "name": "Dodger blue",
            "code": "1E90FF"
        },
        {
            "name": "Firebrick",
            "code": "B22222"
        }, {
            "name": "Floral white",
            "code": "FFFAF0"
        }, {
            "name": "Forest green",
            "code": "228B22"
        }, {
            "name": "Fuchsia",
            "code": "FF00FF"
        }, {
            "name": "Gainsboro",
            "code": "DCDCDC"
        }, {
            "name": "Ghost white",
            "code": "F8F8FF"
        },
        {
            "name": "Gold",
            "code": "FFD700"
        }, {
            "name": "Goldenrod",
            "code": "DAA520"
        }, {
            "name": "Gray",
            "code": "808080"
        }, {
            "name": "Green",
            "code": "008000"
        }, {
            "name": "Green yellow",
            "code": "ADFF2F"
        }, {
            "name": "Honeydew",
            "code": "F0FFF0"
        }, {
            "name": "Hot pink",
            "code": "FF69B4"
        }, {
            "name": "Indian red",
            "code": "CD5C5C"
        }, {
            "name": "Indigo",
            "code": "4B0082"
        }, {
            "name": "Ivory",
            "code": "FFFFF0"
        }, {
            "name": "Khaki",
            "code": "F0E68C"
        }, {
            "name": "Lavender",
            "code": "E6E6FA"
        }, {
            "name": "Lavender blush",
            "code": "FFF0F5"
        }, {
            "name": "Lawn green",
            "code": "7CFC00"
        }, {
            "name": "Lemon chiffon",
            "code": "FFFACD"
        }, {
            "name": "Light blue",
            "code": "ADD8E6"
        }, {
            "name": "Light coral",
            "code": "F08080"
        }, {
            "name": "Light cyan",
            "code": "E0FFFF"
        }, {
            "name": "Light goldenrod yellow",
            "code": "FAFAD2"
        }, {
            "name": "Light green",
            "code": "90EE90"
        }, {
            "name": "Light grey",
            "code": "D3D3D3"
        },
        {
            "name": "Light pink",
            "code": "FFB6C1"
        },
        {
            "name": "Light salmon",
            "code": "FFA07A"
        },
        {
            "name": "Light sea green",
            "code": "20B2AA"
        },
        {
            "name": "Light sky blue",
            "code": "87CEFA"
        }, {
            "name": "Light slate gray",
            "code": "778899"
        }, {
            "name": "Light steel blue",
            "code": "B0C4DE"
        }, {
            "name": "Light yellow",
            "code": "FFFFE0"
        }, {
            "name": "Lime",
            "code": "00FF00"
        }, {
            "name": "Lime green",
            "code": "32CD32"
        }, {
            "name": "Linen",
            "code": "FAF0E6"
        }, {
            "name": "Magenta",
            "code": "FF00FF"
        }, {
            "name": "Maroon",
            "code": "800000"
        }, {
            "name": "Medium aquamarine",
            "code": "66CDAA"
        }, {
            "name": "Medium blue",
            "code": "0000CD"
        }, {
            "name": "Medium orchid",
            "code": "BA55D3"
        }, {
            "name": "Medium purple",
            "code": "9370DB"
        }, {
            "name": "Medium sea green",
            "code": "3CB371"
        }, {
            "name": "Medium slate blue",
            "code": "7B68EE"
        }, {
            "name": "Medium spring green",
            "code": "00FA9A"
        }, {
            "name": "Medium turquoise",
            "code": "48D1CC"
        }, {
            "name": "Medium violet red",
            "code": "C71585"
        }, {
            "name": "Midnight blue",
            "code": "191970"
        }, {
            "name": "Mint cream",
            "code": "F5FFFA"
        }, {
            "name": "Misty rose",
            "code": "FFE4E1"
        }, {
            "name": "Moccasin",
            "code": "FFE4B5"
        }, {
            "name": "Navajo white",
            "code": "FFDEAD"
        },
        {
            "name": "Navy",
            "code": "000080"
        }, {
            "name": "Old lace",
            "code": "FDF5E6"
        }, {
            "name": "Olive drab",
            "code": "6B8E23"
        }, {
            "name": "Orange",
            "code": "FFA500"
        }, {
            "name": "Orange red",
            "code": "FF4500"
        }, {
            "name": "Orchid",
            "code": "DA70D6"
        }, {
            "name": "Pale goldenrod",
            "code": "EEE8AA"
        }, {
            "name": "Pale green",
            "code": "98FB98"
        }, {
            "name": "Pale turquoise",
            "code": "AFEEEE"
        }, {
            "name": "Pale violet red",
            "code": "DB7093"
        }, {
            "name": "Papaya whip",
            "code": "FFEFD5"
        }, {
            "name": "Peach puff",
            "code": "FFDAB9"
        }, {
            "name": "Peru",
            "code": "CD853F"
        }, {
            "name": "Pink",
            "code": "FFC8CB"
        }, {
            "name": "Plum",
            "code": "DDA0DD"
        }, {
            "name": "Powder blue",
            "code": "B0E0E6"
        },
        {
            "name": "Purple",
            "code": "800080"
        }, {
            "name": "Red",
            "code": "FF0000"
        }, {
            "name": "Rosy brown",
            "code": "BC8F8F"
        }, {
            "name": "Royal blue",
            "code": "4169E1"
        }, {
            "name": "Saddle brown",
            "code": "8B4513"
        }, {
            "name": "Salmon",
            "code": "FA8072"
        }, {
            "name": "Sandy brown",
            "code": "F4A460"
        }, , {
            "name": "Seagreen",
            "code": "2E8B57"
        }, {
            "name": "Sienna",
            "code": "A0522D"
        },
        {
            "name": "Silver",
            "code": "C0C0C0"
        }, {
            "name": "Sky Blue",
            "code": "87CEEB"
        }, {
            "name": "Slate blue",
            "code": "6A5ACD"
        }, {
            "name": "Sea shell",
            "code": "FFF5EE"
        }, {
            "name": "Snow",
            "code": "FFFAFA"
        }, {
            "name": "Spring green",
            "code": "00FF7F"
        }, {
            "name": "Steel Blue",
            "code": "4682B4"
        }, {
            "name": "Tan",
            "code": "D2B48C"
        }, {
            "name": "Thistle",
            "code": "D8BFD8"
        }, {
            "name": "Teal",
            "code": "008080"
        }, {
            "name": "Tomato",
            "code": "FF6347"
        }, {
            "name": "Turquoise",
            "code": "40E0D0"
        }, {
            "name": "Violet",
            "code": "EE82EE"
        }, {
            "name": "Wheat",
            "code": "F5DEB3"
        }, {
            "name": "White",
            "code": "FFFFFF"
        }, {
            "name": "Whitesmoke",
            "code": "F5F5F5"
        }, {
            "name": "Yellow",
            "code": "FFFF00"
        }, {
            "name": "Yellow green",
            "code": "9ACD32"
        }
    ]

    $('#txt_color').on('input', function (e) {
        input = $(this).val();
        isColor(input);
        $(this).attr('style', 'background-color:' + selectedColor + '; opacity: 0.3');
    });

    $("#txt_color").on('click', function () {
        $(this).attr("class", "colorInput")
    });

    move();
    setInterval(function () {
        var bl_circle
        if (selectedColor != '') {
            bl_circle = createCircle(selectedColor);
        } else {
            bl_circle = createCircle(defaultColor);
        }

        if (bl_circle.y >= 50 && bl_circle.y <= 990 && bl_circle.x < 1856) {
            circles.push(bl_circle);
        }

    }, timer);


    function isColor(input) {
        for (item in colours) {
            if (input.toLocaleLowerCase() == colours[item].name.toLocaleLowerCase()) {
                debugger;
                selectedColor = '#' + colours[item].code.toLocaleLowerCase()
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
            /* x: Math.floor(Math.random() * (1856 - 0) + 0),
             y: Math.floor(Math.random() + 990),*/
            x: Math.floor(Math.random() * 1856),
            y: Math.floor(Math.random() * (1856 - 50) + 50),
            color: color
        };
    }

    function move() {
        setInterval(function () {
            ctx.clearRect(0, 0, 1856, 991)
            circles.forEach(function (element) {
                element.x = element.x + (Math.random() + -(Math.random()));
                element.y = element.y + (Math.random() + -(Math.random() + 0.11));
                if (element.y <= 50) {
                    element.color = 'black';
                }
                draw(element);
                if (circles.length >= 2000) {
                    circles.shift();
                }
            }, this);
        }, function () {

        }, timer * 0.01)
    }

    function draw(circle) {
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