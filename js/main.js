$(function() {

// hide the game at the start, so displays instructions first
$(".gameDomain, #gameHeading, li, .playerAtom, #timer, #score, #restart, #highScores, .alert").hide();

// this one click function allows user to start the game and then hides the instructions and displays the game
$("#startGame").one("click", function() {
	$(".cards, #startGame, .playerAtom").hide();
	$(".gameDomain, #gameHeading, li, .playerAtom, #timer, #score").show();
	timer();
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
    var count = parseInt($("#timer").html());
    if (count !== 0) {
      $("#timer").html(count - 1);
    }else {
    	clearInterval(interval);
    	$("#timer").html(count + 15);
    	$("body").off("keydown");

    	setTimeout(function() {
    		$(".alert").show().html("Time up your score is: " + score);
    	}, 1000);

    	setTimeout(function() {
    		highScores();
    	}, 2000);

    	setTimeout(function() {
    		$("#restart").show();
    	},3000);    	
    }
  };
	var interval = setInterval(updateTimer, 1000);
};
// timer end

// leaderboard function start
function highScores () {
	$("#highScores").show();
	$("#highScores").html("Top 3 high scores" + "</br>" + storeAllScores() + "</br>");
}
// leaderboard function end

// reset button click
$("#restart").on("click", function() {
	$("#restart").hide();
	score = 0
	$("#score").empty();
	$("#score").html("score: " + 0);
	$("#highScores, .alert").hide();
	$("body")
	navigation();
	timer();
});
// reset end

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


// generating random electrons/protons around the board
function randomGenerateProton () {
	var randomGenerate = Math.floor(Math.random() * $("li").length);
	$("li").eq(randomGenerate).append("<div class='randomAtom'></div>");
	return randomGenerate;
};
var randomProton = randomGenerateProton ();

function randomGenerateElectron () {
	var randomGenerate = Math.floor(Math.random() * $("li").length);
	$("li").eq(randomGenerate).append("<div class='randomElectron'></div>");
	return randomGenerate;
}
var randomElectron = randomGenerateElectron()
// generating random end



// allows the navigation of the atom using keyboard
var position = 0;

function navigation () {
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
	    randomProton = removalAdditionProton(position, randomProton);
	    randomElectron = removalAdditionElectron(position, randomElectron);
	
	    $("#score").html("score: " + score);
	
	});
}
navigation();
// navigation end

// removing and adding the electrons/protons when the playerAtom reaches it
	// also logs the score
var score = 0;

function removalAdditionProton (position, randomProton) {
	if (position === randomProton) {
		score += 10;
		$(".randomAtom").hide();
		return randomGenerateProton();
	}else {
		return randomProton;
	}
};

function removalAdditionElectron (position, randomElectron) {
	if (position === randomElectron) {
		score -= 5;
		$(".randomElectron").hide();
		return randomGenerateElectron();
	}else {
		return randomElectron;
	}
};
// the end of that function


// a function to store the score
var allScores = [];

function storeAllScores () {
	allScores.push(score);
	allScores.sort(function (a, b) {
		return b - a
	});

	if (allScores.length <= 3) {
		return allScores;
	} else {
		return allScores.slice(0,3);
	}
}
// score function end
});