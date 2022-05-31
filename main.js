canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
rover_width=40;
rover_height=35;
var background_img = "mars.jpg";
var rover="rover.png";
rover_X=10;
rover_Y=10;

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_img;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }
   
    if(keyPressed == '40')
    {
        left();
        console.log("left")
    }
    
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
    
    if(keyPressed == '37')
    {
        down();
        console.log("down")
    }

    function up()
    {
        if(rover_y >=0)
        {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y+ " +rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function down()
    {
        if(rover_y <=500)
        {
            rover_y = rover_y + 10;
            console.log("When down arrow is pressed, x = " + rover_x + " | y+ " +rover_y);
            uploadBackground();
            uploadrover();
        }

        function left()
    {
        if(rover_y >=0)
        {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y+ " +rover_y);
            uploadBackground();
            uploadrover();
        }
    }
    }

    function right()
    {
        if(rover_y <= 700)
        {
            rover_x = rover_x + 10;
            console.log("When right arrow is pressed, x = " + rover_x + " | y+ " +rover_y);
            uploadBackground();
            uploadrover();
        }
    }

}