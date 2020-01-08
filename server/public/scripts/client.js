$(function() {
    $(`#sad-btn`).on(`click`, dark);
    $(`#psych-btn`).on(`click`, bright);
});

let colors = [];

function bright(){
    if($(`#colorful`).is(':checked')){
        colors = ['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc', 'ccccccc', 'cccccccc', 'ccccccccc', 'cccccccccc'];
    }
    else if($(`#vaporwave`).is(':checked')){
        colors = ['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd', 'ddddddd', 'dddddddd', 'ddddddddd', 'dddddddddd'];
    }
    else if($(`#neon`).is(':checked')){
        colors = ['f', 'ff', 'fff', 'ffff', 'ffffff', 'ffffff', 'fffffff', 'ffffffff', 'fffffffff', 'ffffffffff'];
    }
    loop();
}

function dark(){
    if($(`#darkest`).is(':checked')){
        colors = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'];
    }
    else if($(`#darker`).is(':checked')){
        colors = ['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb', 'bbbbbbb', 'bbbbbbbb', 'bbbbbbbbb', 'bbbbbbbbbb'];
    }
    else if($(`#dark`).is(':checked')){
        colors = ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeee', 'eeeeeeeee', 'eeeeeeeeee'];
    }
    loop();
}

function randomizeMatrix(){
    $(`#output`).empty();
    let $div = '';
    for(let i=0; i<30; i++) {
        $div = $(`<div class="painting"></div>`);
        for(let j=0; j<30; j++) {
            colors.sort(() => Math.random() - 0.5);
            $div.append(`<span class="${colors[0]}"></span>`);
        }
        $(`#output`).append($div);
    }
}

function loop(){
    for(let i=0; i<500; i++) {
        setTimeout(() => {
            randomizeMatrix();
        }, 10);
    }
}
