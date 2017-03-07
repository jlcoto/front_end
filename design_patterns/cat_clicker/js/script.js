$(function(){
var data = {
	"adminShow": true,
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
		view.adminClick()
		view.processForm()
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
	},
	onAdmin: function(){
		data.adminShow = true;
		return data.adminShow;
	},
	offAdmin: function(){
		data.adminShow = false;
		return data.adminShow;
	},
	setNewValues: function(currentCat, newName, newPic, newValue) {
		data.cats.forEach(function(cat){
			if(cat.name == currentCat){
				cat.name = newName;
				cat.image = newPic;
				cat.clicks = newValue;
			}
		})
	}

}



var view = {
	init: function(){
		$(".cat-image").after('<div id="click-counter"> Number of clicks: <span id=number> 0 </span></div>');
		if (octopus.onAdmin()) {
			$("#click-counter").after('<input id="admin" type="button" value="Admin"/> <br>');
		}
		$("#click-counter").hide()
		$("#update-form").hide()
	},
	renderCatList: function() {
		octopus.getCatName().forEach(function(cat){
			$("#cat-list").append('<li class="kittens" id='+ cat + '>'+cat+'</li>');
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
	},
	adminClick: function(){
		$("#admin").on('click', function() {
			if(octopus.onAdmin()){
				$("#update-form").show();
				octopus.offAdmin();
			}
		})
	},
	processForm: function(){
		$(document).on('click', '#cancel', function() {
			$("#update-form").hide();
			$("#field-form")[0].reset();
			octopus.onAdmin()
		});
		$(document).on('click', '#save', function(){
			var currentCat = $(".cat-image").attr('id');
			var newName = $('[name=firstname]').val();
			var newImage = $('[name=image]').val();
			var newClicks = $('[name=numclicks]').val();
			octopus.setNewValues(currentCat, newName, newImage, newClicks);
			$(".cat-image").attr({
				id:  newName,
				src: 'img/' + newImage,
			});
			$(".kittens").each(function(element){
				if ($(this).text() == currentCat) {
					$(this).text(newName)
				}
			})
			$("#number").text(newClicks);
			$("#update-form").hide();
			$("#field-form")[0].reset();
			octopus.onAdmin()
		})
	},

}
octopus.init()

});






