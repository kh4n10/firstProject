$(function() {
	// console.log("does this work");

// hide the game at the start, so displays instructions first
$(".gameDomain, #gameHeading, li, .playerAtom, #timer, #score").hide();

// this one click function allows user to start the game and then hides the instructions and displays the game
$("#startGame").one("click", function() {
	$(".cards, #startGame, .playerAtom").hide();
	$(".gameDomain, #gameHeading, li, .playerAtom, #timer, #score").show();
	timer ();
});
// end of one click

// function to create the gaming board
function creatingGrid () {
	for (var i = 0; i < 100; i++) {
		$(".gameDomain").append("<li></li>");
	};
};

creatingGrid ();
// function end

// setting a timer
	function timer () {
	
	  var updateTimer = function() {
	    $('#timer').each(function() {
	      var count = parseInt($(this).html());
	      if (count !== 0) {
	        $(this).html(count - 1);
	      }else {
	      	alert("your time is up!")
	      }
	    });
	  };
	
	  setInterval(updateTimer, 1000);
	};
// timer end


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


// generating random atoms around the board
function randomGenerate () {
	var randomGenerate = Math.floor(Math.random() * $("li").length);
	$("li").eq(randomGenerate).append("<div class='randomAtom'></div>");
	return randomGenerate;
};
var randomAtom = randomGenerate ();
// generating random end


// move the atom around function
// function atomNavigation (position) {
// 		$("li").eq(position).empty();
	// if (upCheck(position)) {
 //    		position -= 10;
 //  }
 //  else if (downCheck(position)) {
 //    		position += 10;
 //  }
 //  else if (rightCheck(position)) {
 //  	position++;
 //  }
 //  else if (leftCheck(position)) {
 //  	position--;
 //  }
 //  $("li").eq(position).append("<div class='playerAtom'></div>");
// }



// allows the navigation of the atom using keyboard
var position = 0;

$("body").on("keydown", function(e){

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
    	// atomRight(position);
    	if (rightCheck(position)) position++;
    	$("li").eq(position).append("<div class='playerAtom'></div>");
    	// console.log(position);
    }
    else if (e.keyCode === 37) {
    	$("li").eq(position).empty();
    	if (leftCheck(position)) position--;
    	$("li").eq(position).append("<div class='playerAtom'></div>");
    	// console.log(position);
    }    
    randomAtom = removalAddition(position, randomAtom);

    $("#score").html("score:" +score);

 });
// navigation end

// removing and adding the randomAtom when the playerAtom reaches it
var score = 0;

function removalAddition (position, randomAtom) {
	if (randomAtom == position) {
		score ++;
		console.log(score);
		return randomGenerate();
	}else {
		return randomAtom;
	}
};
// the end of that function


// a function to store the score

// score function end
});