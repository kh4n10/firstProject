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
$("li").eq(0).append("<div class='playerAtom'></div>");



// up check function
function upCheck (position) {
	var cantGoUp = [0,1,2,3,4,5,6,7,8,9];

	if (cantGoUp.indexOf(position) === -1) {
		return true;

	}else {
		return false;
	}
};
// up check function end

// down check function
function downCheck (position) {
	var cantGoDown = [90,91,92,93,94,95,96,97,98,99];

	if (cantGoDown.indexOf(position) === -1) {
		return true;

	}else {
		return false;
	}
};
// down check function end

// right check function
function rightCheck (position) {
	var cantGoRight = [9,19,29,39,49,59,69,79,89,99];

	if (cantGoRight.indexOf(position) === -1) {
		return true;

	}else {
		return false;
	}
};
// right check function end

// left check function
function leftCheck (position) {
	var cantGoLeft = [0,10,20,30,40,50,60,70,80,90];

	if (cantGoLeft.indexOf(position) === -1) {
		return true;
	}else {
		return false;
	}
};
// left check function end




// move the atom to the right function
// function atomRight (position) {
// 	$("li").eq(position).empty();
// 	$("li").eq(position).append("<div class='playerAtom'></div>")
// }



// this one click function allows user to start the game and then hides the instructions and displays the game
$("#startGame").one("click", function() {
	$(".cards, #startGame, .playerAtom").hide();
	$(".gameDomain, #gameHeading, li, .playerAtom").show();
});



var position = 0;

$("body").on("keydown", function(e){

// for the atom to go up
    if(e.keyCode === 38) {
    	$("li").eq(position).empty();
    	if (upCheck(position)) {
    		position -= 10;
    	}
    	$("li").eq(position).append("<div class='playerAtom'></div>");
      // console.log(position);
    }
    else if (e.keyCode === 40) {
    	$("li").eq(position).empty();
    	if (downCheck(position)) {
    		position += 10;
    	}
    	$("li").eq(position).append("<div class='playerAtom'></div>");
      // console.log(position);      
    }
    else if (e.keyCode === 39) {
    	$("li").eq(position).empty();
    	if (rightCheck(position)) position++;
    	// atomRight(position);
    	$("li").eq(position).append("<div class='playerAtom'></div>");
    	// console.log(position);
    }
    else if (e.keyCode === 37) {
    	$("li").eq(position).empty();
    	if (leftCheck(position)) position--;
    	$("li").eq(position).append("<div class='playerAtom'></div>");
    	// console.log(position);
    }    
 });



});