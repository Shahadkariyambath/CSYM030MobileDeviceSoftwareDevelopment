function print5(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);    
}

function newPageHeading(){
    var element = document.getElementById("pageHeading");
    element.firstChild.nodeValue = "New Heading"
}

function newPagePara(){
    var element = document.getElementById("pagePara");
    element.firstChild.nodeValue = "Update Hello guys"
}

// document.addEventListener('click',newPageHeasing);

// // 1st Answer
// function clickFunction(){
//     var element = document.getElementById('mytext');
//     alert(element.value);
// }

// // 2nd Answer
// function clickFunction(){
//     var element = document.getElementById('mytext');
//     var div = document.getElementById('result');
//     div.firstChild.nodeValue = element.value;
    
// }

// function myLoadFunction(){
//     var element = document.getElementById('mybutton');
//     element.addEventListener('click',clickFunction)
// }

// 3rd Answer
// function clickFunction(){
//     var element = document.getElementById('mytext');
//     var div = document.getElementById('result');
//     div.firstChild.nodeValue = element.value;
    
// }

// function myLoadFunction(){
//     var element = document.getElementById('mytext');
//     element.addEventListener('keyup',clickFunction)
// }

function myLoadFunction(){
    var element1 = document.getElementById('pageHeading');
    element1.addEventListener('click',newPageHeading)
    
    var element2 = document.getElementById('pagePara');
    element2.addEventListener('click',newPagePara)
    

}
document.addEventListener('DOMContentLoaded',myLoadFunction)


// print5();
// print5();
