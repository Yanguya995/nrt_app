$(document).ready(function () {
    var circles = [];
    var defaultColor = 'blue';
    var timer = 10;
    var selectedColor = '';
    var input = '';

       $('#cnv_main').on('load', main());
    function main() {
        $('#txt_color').on('input', function (e) {
            input = $(this).val();
            isColor(input);
            $(this).attr('style', 'background-color:' + selectedColor + '; opacity: 0.3');
        });

        $("#txt_color").on('click', function () {
            $(this)
                .attr("class", "colorInput")
                .attr("placeholder", "Enter Colour");
        });

        setInterval(function () {
            var bl_circle
            if (selectedColor != '') {
                bl_circle = createCircle(selectedColor);
            } else {
                bl_circle = createCircle(defaultColor);
            }

            if (bl_circle.y >= 50 && bl_circle.y <= displayHeight && bl_circle.x < displayWidth) {
                circles.push(bl_circle);
            }

        }, timer);
        move();
    }


    function isColor(input) {
        var index = 0;
        for (item in colours) {
            if (input.toLocaleLowerCase() == colours[item].name.toLocaleLowerCase()) {
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
            x: Math.floor(Math.random() * displayWidth),
            y: Math.floor(Math.random() * displayHeight),
            color: color
        };
    }

    function move() {
        setInterval(function () {
            var c = document.getElementById("cnv_main")
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, displayWidth, displayHeight)
            circles.forEach(function (element) {
                element.x = element.x + (Math.random() + -(Math.random()));
                element.y = element.y + (Math.random() + -(Math.random() + 0.16));
                
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