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


 // <div class='playerAtom'></div> 


// this one click function allows user to start the game and then hides the instructions and displays the game
$("#startGame").one("click", function() {
	$(".cards, #startGame, .playerAtom").hide();
	$(".gameDomain, #gameHeading, li").show();
});



// var blocksPerRow = 10;

// $("body").on("keydown", function(e){

//     var thisIndex = $(".selected").index();
//     var newIndex = null;

//     if(e.keyCode === 38) {
//        console.log("it went up!");
//        newIndex = thisIndex - blocksPerRow;
//        $(".playerAtom").show();
//     }else if (e.keyCode === 40) {
//         console.log("it went down");
//         newIndex = thisIndex + blocksPerRow;       
//     }else if (e.keyCode === 39) {
//     	console.log("it went right");
//     	newIndex = thisIndex + 1;
//     }else if (e.keyCode === 37) {
//     	console.log("it went left bruh");
//     	newIndex = thisIndex - 1; 
//     }
//     if(newIndex !== null) { 
//         $(".test").eq(newIndex).addClass("selected").siblings().removeClass("selected");   
//     }    
 // });



});