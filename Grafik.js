var canvas;
var ctx;
var totalWidth = 400;
var totalHeight = 300;


function init(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = totalWidth;
    canvas.height = totalHeight;
    canvas.style.width = totalWidth;
    canvas.style.height = totalHeight;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function wMinus(){
    totalWidth -=10;
    canvas.width = totalWidth;
    canvas.style.width = totalWidth;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById('info').innerHTML = 'width: ' + totalWidth + '   height: ' + totalHeight   
}
function wPlus(){
    totalWidth +=10;
    canvas.width = totalWidth;
    canvas.style.width = totalWidth;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById('info').innerHTML = 'width: ' + totalWidth + '   height: ' + totalHeight
}
function hMinus(){
    totalHeight -=10;
    canvas.height = totalHeight;
    canvas.style.height = totalHeight;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById('info').innerHTML = 'width: ' + totalWidth + '   height: ' + totalHeight
}
function hPlus(){
    totalHeight +=10;
    canvas.height = totalHeight;
    canvas.style.height = totalHeight;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById('info').innerHTML = 'width: ' + totalWidth + '   height: ' + totalHeight
}

function grid(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    for (let i=10;i<totalHeight;i+=10){
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(totalWidth, i);
    ctx.closePath();
    ctx.stroke();
    }

    for (let i=10;i<totalWidth;i+=10){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, totalHeight);
        ctx.closePath();
        ctx.stroke();
    }
}

function concentric(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    let size = totalHeight
    if(totalWidth<totalHeight){
        size=totalWidth}

    for(let i=10;i<size/2;i+=10){
    ctx.beginPath();
    ctx.arc(totalWidth/2, totalHeight/2, i, 0, 2 * Math.PI);
    ctx.stroke();
    }

}

function concentric2(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    let size = totalHeight
    if(totalWidth<totalHeight){
        size=totalWidth}
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        var b = 256
        let antal = 256/(size/20)

    for(let i= size/2;i>10;i-=10){
    b-=antal
    ctx.fillStyle="rgb("+r+","+g+","+b+")";
    ctx.beginPath();
    ctx.arc(totalWidth/2, totalHeight/2, i, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()
    }
}



function star(x, y, width){  
    ctx.beginPath();
    ctx.moveTo(x+width/2,y)
    ctx.lineTo((x+width/2-Math.tan(Math.PI*18/180)*width) ,y+width) // top till nedre vänster
    ctx.lineTo(x+width, y+width/2.8)   //övre höger
    ctx.lineTo(x, y+width/2.8) // övre vänster
    ctx.lineTo(x+width/2+Math.tan(Math.PI*18/180)*width, y+width) //nedre höger
    ctx.closePath()
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke()
    ctx.fill()
}


function bigstar(){
    let size = totalHeight
    if(totalWidth<totalHeight){
        size=totalWidth}
    let width2 = totalWidth-size
    star(width2/2,0,size)
}

totalHeight = 200
totalWidth = 400

function bosnien(x,y){
    canvas.width = x;
    canvas.height = y;
    ctx.fillStyle = '#002395'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    triangle(x, y)
    bosnien_star(x)

}

function triangle(width, height){
    ctx.strokeStyle = "#FECB00";
    ctx.lineWidth = 3;
    ctx.fillStyle = '#FECB00'
    ctx.beginPath();
    ctx.moveTo(width*0.265, 0);
    ctx.lineTo(width*0.765,0);
    ctx.lineTo(width*0.765,height);
    console.log(width*0.765,height)
    ctx.lineTo(width*0.265, 0);
    ctx.stroke();
    ctx.fill();
}

function bosnien_star(width){
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    console.log('test')
    for(let h=-10;h<200;h+=30){
        star(width*0.17 + h,h, 30)
        console.log('hej')
        ctx.fill()
}   
}



function Malaysia(x,y){
    canvas.width = x;
    canvas.height = y;
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stripes(x,y)
    rect(x,y)
    moon(x,y)
    malaysia_star()
    

}

function stripes(x,y){
    ctx.strokeStyle = "#DA291C";
    ctx.lineWidth = 3;

    for(i=0;i<7;i++){
        ctx.fillStyle = '#DA291C'
        ctx.beginPath()
        ctx.moveTo(0,i*y/14*2)
        ctx.lineTo(x,i*y/14*2)
        ctx.lineTo(x,y/14 + i*y/14*2)
        ctx.lineTo(0,y/14 + i*y/14*2)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
    }
}

function rect(x,y){
    ctx.strokeStyle = '#0033A0'
    ctx.fillStyle = '#0033A0'
    ctx.beginPath()
    ctx.rect(0,0,x/2,y*8/14)
    ctx.closePath()
    ctx.fill()
}

function moon(x,y){
    ctx.fillStyle = '#FFD100'
    ctx.beginPath();
    ctx.arc(x*0.205, y*4/14, 45, 0, 2 * Math.PI);
    ctx.fill()

    ctx.fillStyle = '#0033A0'
    ctx.beginPath();
    ctx.arc(x*0.225, y*4/14, 42, 0, 2 * Math.PI);
    ctx.fill()
}


function malaysia_star(){

let c = 20
let r = 37
let x = 125
let y = 58
let rad = Math.PI/180
ctx.strokeStyle = '#FFD100'
ctx.lineWidth = 0.2;
ctx.fillStyle = '#FFD100'
let base = Math.tan(6.4*rad)*r
let alpha = 360/14
ctx.beginPath()


for(let i=14;i>=0;i-=1){
ctx.moveTo(x,y)
ctx.lineTo(x-Math.cos(alpha*(i+3)*rad)*base, y-Math.sin(alpha*(i+3)*rad)*base)
ctx.lineTo(x+Math.cos((1-i)*(360/14)*rad)*r,y- Math.sin((1-i)*(360/14)*rad)*r)
ctx.lineTo(x+Math.cos(alpha*(i+3)*rad)*base, y+Math.sin(alpha*(i+3)*rad)*base)
ctx.closePath()
ctx.stroke()
console.log(Math.cos(alpha*i*rad)*base, 'x')
console.log(Math.sin(alpha*i*rad)*base, 'y')
console.log(Math.cos((i+0.5)*(360/14)*rad))
}
ctx.fill()




}