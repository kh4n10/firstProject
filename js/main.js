$(function() {
	console.log("does this work");

// hide the game at the start, so displays instructions first
$(".gameDomain, #gameHeading, li, .playerAtom").hide();



// function to create the gaming board
function creatingGrid () {
	for (var i = 0; i < 100; i++) {
		$(".gameDomain").append("<li></li>");
	};
};

creatingGrid ();
// function end


// create a div within 1 li
$("li").eq(0).append("<div class='playerAtom'></div>")


// right check function for playerAtom below function works for 9
// function rightCheck (position) {
// 	if (position < 9) {
// 		return true;
// 	}else if (position === 9) {
// 		return false;
// 	}
// };


function rightCheck (position) {
	var cantGoRight = [9,19,29,39,49,59,69,79,89,99]

	if (cantGoRight.indexOf(position) === -1) {
		return true;
	}else {
		return false;
	}
};




// this one click function allows user to start the game and then hides the instructions and displays the game
$("#startGame").one("click", function() {
	$(".cards, #startGame, .playerAtom").hide();
	$(".gameDomain, #gameHeading, li, .playerAtom").show();
});



var blocksPerRow = 10;
var position = 0;

$("body").on("keydown", function(e){

    if(e.keyCode === 38) {
       console.log("it went up!");
       position = position - blocksPerRow;
       $(".playerAtom").show();
    }else if (e.keyCode === 40) {
        console.log("it went down");
        position = position + blocksPerRow;       
    }else if (e.keyCode === 39) {
    	if (rightCheck(position)) position++;
    	console.log(position);
    }else if (e.keyCode === 37) {
    	console.log("it went left bruh");
    	position = position - 1; 
    }
    if(position !== null) { 
        $(".test").eq(position).addClass("selected").siblings().removeClass("selected");   
    }    
 });



});