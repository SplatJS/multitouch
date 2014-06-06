var canvas = document.getElementById("canvas");

var manifest = {
	"images": {
	},
	"sounds": {
	},
	"fonts": {
	},
	"animations": {
	}
};

var game = new Splat.Game(canvas, manifest);

var colors = [
	"Darkorange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGray",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DodgerBlue",
	"Feldspar",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod"
];

game.scenes.add("title", new Splat.Scene(canvas, function() {
}, function(elapsedMillis) {
}, function(context) {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);

	var size = 100;
	if (game.mouse.isPressed(0)) {
		context.fillStyle = "#ffffff";
		context.fillRect(game.mouse.x - size - 25, game.mouse.y - size - 25, size * 2 + 50, size * 2 + 50);
	}
	for (var i = 0; i < game.mouse.touches.length; i++) {
		context.fillStyle = colors[i];
		context.fillRect(game.mouse.touches[i].x - size, game.mouse.touches[i].y - size, size * 2, size * 2);
	}
}));

game.scenes.switchTo("loading");
