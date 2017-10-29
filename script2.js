var displayHeight = 0;
        var displayWidth = 0;
        function changeCanvasSize() {
            var hMax = 0.95;
            var wMax = 0.999;
            var canvas = document.getElementById("cnv_main");
            height = window.innerHeight * hMax;
            width = window.innerWidth * wMax;
            displayHeight = height;
            displayWidth = width;
            if(width <= 1010){
                displayHeight = displayHeight * 0.980;
            }
            canvas.setAttribute("width", "" + displayWidth + "px");
            canvas.setAttribute("height", "" + displayHeight + "px");
        }
            
        window.onresize = (() => {
            changeCanvasSize();
        });
