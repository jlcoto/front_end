var dataCat = [
{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nicknames: [{nick: "kitty"}, {nick: "michi"}, {nick: "miau"}]
},
{
		clickCount: 0,
		name: 'Tommy',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		nicknames: [{nick: "tobby"}, {nick: "ricky"}]
},
{
		clickCount: 0,
		name: 'Kathy',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		nicknames: [{nick: "kicky"}, {nick: "lolo"}]
},
{
		clickCount: 0,
		name: 'Happy',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		nicknames: [{nick: "yippi"}, {nick: "cali"}]
},
{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		nicknames: [{nick: "zzz"}, {nick: "sueño"}]
}
]

var Cat = function(data){	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
	this.levels = ko.computed(function(){
		if (this.clickCount() < 10) {
			return "New Born"
		} else if (this.clickCount() >= 10 && this.clickCount() < 100 ){
			return "Infant"
		} else if (this.clickCount() >= 100 && this.clickCount() < 200 ){
			return "Teen"
		} else if (this.clickCount() >= 200 && this.clickCount() < 300 ){
			return "Adult"
		} else {
			return "Old"
		}
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	dataCat.forEach( function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.changeCat = function(clickedCat){
		self.currentCat(clickedCat);
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};


}

ko.applyBindings(new ViewModel());