'use strict';
class Options {

    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    };

    newDiv() {
        let div = document.createElement('div');
        div.innerHTML = '<b>Это любой текст</b>';
        div.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.bg}; font-size:${this.fontSize}pt; text-align:${this.textAlign};`
        document.body.appendChild(div);
    };
};

const newObj = new Options(200, 400, 'orange', 15, 'center');

newObj.newDiv();