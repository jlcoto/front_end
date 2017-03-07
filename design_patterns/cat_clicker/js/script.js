$(function(){
var data = {
	"cats": [{"name": "kitty 1",
				"image": 'cat_pic.jpg',
				"clicks": 0
		},
		{"name": "kitty 2",
		"image": 'cat_pic_2.jpg',
		"clicks": 0},
		{"name": "kitty 3",
		"image": 'cat_pic_3.jpg',
		"clicks":0
		},
		{"name": "kitty 4",
		"image": 'cat_pic_4.jpg',
		"clicks": 0
		}
	]
}


var octopus = {
	init: function(){
		view.init()
		view.renderCatList()
		view.renderCatImage()
		view.catClicker()

	},
	getCatName: function(){
		var catName = [];
		data.cats.forEach(function(cat){
			catName.push(cat.name);
		});
		return catName;
	},
	getCatImage: function(name){
		var catImage;
		data.cats.forEach(function(cat){
			if (cat.name == name){
				catImage = cat.image;
			}
		});
		return catImage;
	},
	getClick: function(name){
		var clicks
		data.cats.forEach(function(cat){
			if(cat.name == name){
				return clicks = cat.clicks
			}
		})
		return clicks;
	},
	addClick: function(name){
		data.cats.forEach(function(cat){
			if(cat.name == name){
				cat.clicks += 1;
			}
		})
	}

}



var view = {
	init: function(){
		$("body").append('<ul id="cat-list"> </ul>');
		$("body").append('<img class="cat-image">');
		$("body").append('<div id="click-counter"> Number of clicks: <span id=number> 0 </span></div>');
		$("#click-counter").hide()
	},
	renderCatList: function() {
		octopus.getCatName().forEach(function(cat){
			$("#cat-list").append('<li id='+ cat + '>'+cat+'</li>');
		})
	},
	renderCatImage: function(){
		$("#cat-list li").on('click', function(){
			var selCat = $(this).text();
			var imgCat = octopus.getCatImage(selCat);
			var clicks = octopus.getClick(selCat);
			$(".cat-image").attr({
				id:  selCat,
				src: 'img/' + imgCat,
			});
			$("#click-counter").show();
			$("#number").text(clicks);
		});
	},
	catClicker: function(){
		$(".cat-image").on('click', function(){
			var picClicked = $(this).attr('id');
			var newClick = octopus.addClick(picClicked);
			var clicks = octopus.getClick(picClicked);
			$("#number").text(clicks);
	});
}
}
octopus.init()
});






