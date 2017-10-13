$(document).ready(function () {
    var circles = [];
    var wCircles = [];
    $('#txt_color').on('input', function (e) {
        if ($(this).val() === 'blue') {
            $("#txt_color").attr("style", "background-color: blue; opacity: 0.4");
            var circle = {
                r: Math.random() * 24,
                x: Math.random() * 1001,
                y: Math.floor(Math.random() * (700 -50)+50),
                color: 'blue'
            }

            var circle2 = {
                r: Math.random() * 24,
                x: Math.random() * 1001,
                y: Math.floor(Math.random() * (700 -50)+50),
                color: 'green'
            }

            var circle3 = {
                r: Math.random() * 24,
                x: Math.random() * 1001,
                y: Math.floor(Math.random() * (700 -50)+50),
                color: 'red'
            }

            if (circle.y >= 50) {
                circles.push(circle);
                circles.push(circle2);
                circles.push(circle3);
            }

            setInterval(function () {
                move();
            }, function () {

            }, 1000)
        }
        if ($(this).val() === 'yellow') {
            $("#txt_color").attr("style", "background-color: yellow; opacity: 0.4")
            myCircle = new circle('green');
            myCircle.draw()
        }
        if ($(this).val() === 'red') {
            $("#txt_color").attr("style", "background-color: red; opacity: 0.4")
            myCircle = new circle('green');
            myCircle.draw()
        }
        if ($(this).val() === 'green') {
            $("#txt_color").attr("style", "background-color: green; opacity: 0.4")
            myCircle = new circle('green');
            myCircle.draw()
        }
    });

    $("#txt_color").on('click', function () {
        $(this).attr("class", "colorInput")
    });

    function move() {
        var c = document.getElementById("cnv_main")
        var ctx = c.getContext("2d");
        
        var ch = document.getElementById("cnv_header")
        var ctxh = ch.getContext("2d");
        
        ctx.clearRect(0, 0, 1600, 800)
        circles.forEach(function (element) {
            element.x = element.x + (Math.random() + -(Math.random() + 0.01));
            element.y = element.y + (Math.random() + -(Math.random() + 0.01));
            if (element.y <= 50) {
                element.color = 'black';
                wCircles.push(element);
                wCircles.forEach(function(element) {
                    
                    iDraw(element);
                }, this);
            }
            draw(element);
        }, this);
    }

    function iDraw(circle) {
        var c = document.getElementById("cnv_header")
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = circle.color;
        ctx.strokeStyle = "transparent";
        ctx.fill();
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