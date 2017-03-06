
var Cats = function(pic, num) {
	this.pic = pic;
	this.id = 'cat_' + num;
	this.clicking = 0;
};

Cats.prototype.showPic = function() {
	$("#cat_image").attr('src', 'img/' + this.pic);
	$("#number").text(this.clicking);

}

Cats.prototype.clickCounter = function() {
	var clicker = this.clicking;
	$('#cat_image').click(function(e) {
		clicker += 1;
		$('#number' ).text(clicker);
	})
	this.clicking = clicker;
};



var catPics = {
	"cats": [{"name": "kitty 1",
	"image": 'cat_pic.jpg',
		},
		{"name": "kitty 2",
		"image": 'cat_pic_2.jpg'},
		{"name": "kitty 3",
		"image": 'cat_pic_3.jpg'
		}
	]
}

$("body").append('<ul id="cat-list"> </ul>');

catPics.cats.forEach(function(cat, index){
	$("#cat-list").append('<li id='+ index +'>'+cat.name+'</li>');

	catPics.cats[index].kitten = new Cats(cat.image, index)

})

$("body").append('<img id=cat_image>')
$("body").append('<div id="click-counter"> Number of clicks: <span id=number> 0 </span></div>')

$("#cat-list li").on('click', function(){
	var catIndex = $(this).attr('id');
	catPics.cats[catIndex].kitten.showPic()
	catPics.cats[catIndex].kitten.clickCounter()
})




// first = new Cats('cat_pic.jpg', 1);
// first.showPic();
// first.clickCounter();


// var kittens = [];

// catPics.forEach(function(pic, index) {
// 	kittens.push(new Cats(pic, index))

// })

// kittens.forEach(function(cat) {
// 	cat.showPic()
// 	cat.clickCounter()
// })
