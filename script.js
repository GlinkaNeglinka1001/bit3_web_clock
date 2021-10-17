var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");
var circle = new Path2D();
circle.arc(300, 300, 290, 0, 2 * Math.PI);



function drawclock(){

    context.strokeStyle = "orange";
    context.lineWidth = 21;
    context.fill(circle);
    context.stroke(circle);

    var R = 300, d, angle, pX, pY, qX, qY;
    for (d = 0; d < 60; d++){
        angle = (d / 60) * 2 * Math.PI;
        pX = Math.cos(angle) * R ;
        pY = -Math.sin(angle) * R ;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX +=  R; pY += R;
        qX +=  R; qY += R;
        context.strokeStyle = "orange";
        context.lineWidth = 3;
        var line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);
        if(d % 5 ==0){
        context.lineWidth = 15;
        }else{
            context.lineWidth = 3;
        }
        context.stroke(line);
    } 
}
drawclock();


