var count = 0;
var timer = 100;
var cArray = ['H', 'i', ' ', 'm', 'y', ' ', '', '', '', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'N', 'j', 'a',
    'b', 'u',
    'l', 'o', ' ', 'R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'T', 'h', 'w', 'a', 'l', 'a',
    ' ', 'a', 'n', 'd', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'f', 'u', 'n', ' ', 'o', 'n', ' ',
    'w', 'e', 'b', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' '
];
var string = '';

function funk() {
    setInterval(function () {
        if (count < cArray.length) {
            string += cArray[count];
            document.getElementById('intro_text').innerHTML = string;
            count++;

        } else {
            window.location.href = './bubbles.html';
        }
    }, timer)
}