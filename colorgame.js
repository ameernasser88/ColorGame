var numSquares=6;
var colors = generateRandomColors(numSquares);

 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();

 var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
 var message = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var btnReset =document.querySelector("#reset");
var btnEasy =document.querySelector("#btnEasy");
var btnHard =document.querySelector("#btnHard");

  btnReset.addEventListener("click", function()
  	{
      message.textContent ="";
       message.style.color = "black";
         colors = generateRandomColors(numSquares);
         pickedColor = pickColor();
         colorDisplay.textContent = pickedColor;
         h1.style.backgroundColor = "steelblue";
 for (var i = 0; i <squares.length ; i++) {

 	squares[i].style.backgroundColor = colors[i];}

  	});

btnEasy.addEventListener("click", function()
  	{
    btnHard.classList.remove("selected");
    btnEasy.classList.add("selected");
    numSquares =3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++)
        {
            if(colors[i])
                {
                    squares[i].style.backgroundColor = colors[i];
                }
            else{
                squares[i].style.display = "none";
            }
        }
    });

btnHard.addEventListener("click", function()
  	{
        btnEasy.classList.remove("selected");
    btnHard.classList.add("selected");
    numSquares = 6;
     colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++)
        {
                    squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";     
        }
    
    });
 


//////////loop
 for (var i = 0; i <squares.length ; i++) {

 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor===pickedColor){
    	message.textContent = "Correct!";
    	changeColor(pickedColor);
    	h1.style.backgroundColor = pickedColor;
        message.style.color = pickedColor;
    	btnReset.textContent = "Play Again ?";
    }

    else 
    {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!!";
    }


 	});


 }

//////////

//////////
 function changeColor(color)
 {
 	for (var i = 0 ; i < colors.length ; i++) {
 		squares[i].style.backgroundColor = color;
 		if(squares[i].style.backgroundColor === color) continue;
 	}
 }
//////////

/////////
 function pickColor()
 {
    var random = Math.floor( ( Math.random() * colors.length ) );
    return colors[random];
 }
/////////


//////////
 function generateRandomColors(num)
 {
 	 var arr = [];

     for(var i = 0 ; i< num ; i++ )
     {
      arr.push(randomColor());
     }


 	 return arr;
 }
//////////



//////////
 function randomColor()
 {
 	var red = Math.floor(Math.random()*256);
 	var green = Math.floor(Math.random()*256);
 	var blue = Math.floor(Math.random()*256);
 	return "rgb(" + red + ", " + green + ", " + blue + ")";
 }
 //////////