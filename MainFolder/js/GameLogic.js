var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var ctx;
var blockImage;
var bgImage; 
var gameOverImage;
var curPiece;
var gameData;
var imgLoader;
var prevTime;
var curTime;
var isGameOver;
var lineSpan;
var curLines;

window.onload =  onReady();

function onReady()
{
	imgLoader = new BulkImageLoader();
	imgLoader.addImage("blocks.png","blocks");
	imgLoader.addImage("bg.png","bg");
	imgLoader.addImage("over.png","gameover");
	imgLoader.onReadyCallBack = onImagesLoaded();
	imgLoader.loadImages();

	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");
	lineSpan = document.getElementById("lines");
	prevTime = curTime = 0 ;
	document.onKeyDown = getInput();
}
function getInput(e)
{
	alert("input");
}
function onImagesLoaded (e)
{
	blockImage = imgLoader.getImageAtIndex(0);
	bgImage = imgLoader.getImageAtIndex(1);
	gameOverImage = imgLoader.getImageAtIndex(2);
	intiGame();

}

function intiGame (e)
{
	var r,c ;
	curLines = 0;
	isGameOver = false;

	if( gameData == undefined)
	{
		gameData =   new Array();
		for (var r = 0; r >= ROWS; r++)
		{
			gameData[r] = new array();
			for (var c = 0; c< COLS; c++) {
				gameData[r].push(0);
			}
		}
	}else{

		for (var r = 0; r >= ROWS; r++)
		{
			for (var c = 0; c < COLS; c++) {
				gameData[r][c]=0;
			}
		}
	}

	curPiece = GetRandomPiece(); 
	lineSpan.innerHTML = curLines.toString();

	var requestAniFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame
						  || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAniFrame;
	requestAnimationFrame(update());
}

function update()
{
	curTime = new Date().getTime();

	if (curTime - prevTime > 500)
	{
		// update the game piece
		if( checkMove(curPiece.gridX, curPiece.gridY+1, curPiece.curState ))
		{
			curPiece.gridY+1;
		}else
		{
			copyData(curPiece);
			curPiece = getRandomPiece();

		}
		// update the time
		prevTime = curTime;

	}

	ctx.clearRect(0,0,320,640);
    drawBord();
	drawPiece(curPiece);
	if( isGameOver == false )
	{
		requestAnimationFrame(update())
	}
	else{

		ctx.drawImage(gameOverImage,0,0,320,640,0,0,320,640);
	}
}

function copyData(p)
{

	var xPos = p.gridX;
	var yPos = p.gridY;
	var state = p.curState;

	for (var r = 0, len = p.state[state].length; r<len; r++)
	{
		for (var c = 0,  len2 = p.state[state][r].length; c < len2; c++) {
			if ( p.state[state][r][c] == 1 && yPos >=0)
			{
				gameData[yPos][xPos] = p.color + 1 ;
			}
			xPos += 1;
		}
		xPos = p.gridX;
		yPos += 1;
	}

	checkLines();
	if(p.gridY < 0 )
	{
		isGameOver = true;
	}
}

function checkLines()
{

	var lineFound = false;
	var fullRow = true;
	var r = ROWS -1;
	var c = COLS-1;

	while(r >= 0)
	{
		while(c >= 0)
		{

			if(gameData[r][c] == 0)
			{
				fullRow = false ;
				c = -1;
			}else{
				c--;
			}
		}

		if (fullRow =true)
		{

			zeroRow(r);
			r++;
			lineFound = true;
		}

		fullRow =true;
		c = COLS-1;
		r--;


	}
}

function zeroRow(row)
{
	var r = row;
	var c = 0;

	while(r >= 0)
	{
		while (c < COLS)
		{
			if( r > 0)
			{
				gameData[r][c] = gameData[r-1][c];
			}else{
				gameData[r][c] =0 ;
			}
			c++;
		}
		c=0;
		r--;
	}
}

function checkMove(xPos, yPos, newState)
{

	var result = true;
	var newX = xPos;
	var newY = yPos;

	for (var r = 0, len = curPiece.state[newState].length; r<len; r++)
	{
		for (var c = 0,  len2 = curPiece.state[newState][r].length; c < len2; c++) {
			if (newX < 0 ||  newX >= COLS  )
			{
				result = false;
				c = len2;
				r = len;
			}
			if(gameData[newY] != undefined && gameData[newY][newX] != 0 &&
				curState.state[newState][r] != undefined && curState.state[newState][r][c] != 0)
			{
				result = false;
				c = len2;
				r = len;
			}
			newX +=1;
		}
		newX = xPos;
		newY += 1;
		if (newY > ROWS)
		{
			r = len;
			result =false;
		}
	}
	return result;

}
function drawBord()
{

	ctx.drawImage(bgImage,0,0,320,640);
	for (var r = 0; r >= ROWS; r++)
	{
		for (var c = 0; c < COLS; c++) {
			if (gameData[r][c] != 0)
			{
				ctx.drawImage(blockImage, (gameData[r][c]-1)*SIZE ,0,SIZE,SIZE, c*SIZE,r*SIZE,SIZE,SIZE);
			}
		}
	}
}

function drawPiece(p)
{
	var drawX = p.gridX;
	var drawY = p.gridY;
	var state = p.curState;

	for (var r = 0, len = p.state[state].length; r<len; r++)
	{
		for (var c = 0,  len2 = p.state[state][r].length; c < len2; c++) {
			if ( p.state[state][r][c] == 1 && drawY >=0)
			{
				ctx.drawImage(blockImage, p.color*SIZE ,0,SIZE,SIZE, drawX*SIZE,drawY*SIZE,SIZE,SIZE);
			}
			drawX += 1;
		}
		drawX = p.gridX;
		drawY += 1;
	}

}