var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());