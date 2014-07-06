"use strict";

var Splat = require("splatjs");
var canvas = document.getElementById("canvas");
canvas.height = window.innerHeight * window.devicePixelRatio;
canvas.width = window.innerWidth * window.devicePixelRatio;

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

function drawCircle(context, color, radius, strokeColor, strokeSize, x, y) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = strokeSize;
	context.strokeStyle = strokeColor;
	context.stroke();
}

function centerText(context, text, offsetX, offsetY) {
	var w = context.measureText(text).width;
	var x = offsetX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetY | 0;
	context.fillText(text, x, y);
}

game.scenes.add("title", new Splat.Scene(canvas, function() {
	// initialization
}, function() {
	// simulation
}, function(context) {
	// draw
	context.fillStyle = "#092227";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "#fff";
	context.font = "25px helvetica";
	centerText(context, "SplatJS Multitouch Demo", 0, 30);
	centerText(context, "Window size: " + window.innerWidth + ", " + window.innerHeight, 0, canvas.height - 200);
	centerText(context, "Canvas size: " + canvas.width + ", " + canvas.height, 0, canvas.height - 160);
	centerText(context, "Canvas style size: " + canvas.style.width + ", " + canvas.style.height, 0, canvas.height - 120);
	centerText(context, "Device Pixel Ratio: " + window.devicePixelRatio, 0, canvas.height - 80);

	if (game.mouse.isPressed(0)) {
		centerText(context, "First touch: " + game.mouse.x + ", " + game.mouse.y, 0, canvas.height - 35);
		drawCircle(context, "rgba(255,255,255,.4)", 60, "rgba(255,255,255,.8)", 3, game.mouse.x, game.mouse.y);
	}
	for (var i = 0; i < game.mouse.touches.length; i++) {
		var touch = game.mouse.touches[i];
		drawCircle(context, colors[i], 48, "white", 3, touch.x, touch.y);
	}
}));

game.scenes.switchTo("loading");
