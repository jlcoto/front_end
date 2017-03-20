
// var data = {
// 	sections: [{name: "Time of Event"}
// 	, {name:"Type of Event"}],
// 	time: {
// 			name: "Time of Event",
// 			img: "img/time_line.png"},
// 	events: [{
// 	name: "Exhibitions",
// 	img: "img/exhibitions.png",
// 	},
// 	{
// 	name: "Sport Events",
// 	img: "img/sport.png"
// 	},
// 	{
// 	name: "Kids",
// 	img:"img/kids.png"
// 	},
// 	{
// 	name: "Shopping",
// 	img: "img/shopping.png"
// 	},
// 	{
// 	name: "Excursions",
// 	img: "img/excursion.png"
// 	},
// 	{
// 	name: "Eating & Drinking",
// 	img: "img/eat_drink.png"
// 	},
// 	{
// 	name: "Explore Berlin",
// 	img: "img/city.png"
// 	},
// 	{
// 	name: "Night Life",
// 	img:"img/night_life.png"
// 	}
// 	]}

var data =
		[{
		section: "Time",
		name: "Time of Event",
		img: "img/time_line.png"
		},
		{
		section: "Type of Event",
		menucontent: [{
			name: "Exhibitions",
			img: "img/exhibitions_small.png",
			},
			{
			name: "Highlights",
			img: "img/highlights_small.png"
			},
			{
			name: "Kids",
			img:"img/kids_small.png"
			},
			{
			name: "Shopping",
			img: "img/shopping_small.png"
			},
			{
			name: "Excursions",
			img: "img/excursion_small.png"
			},
			{
			name: "Eating & Drinking",
			img: "img/eat_drink_small.png"
			},
			{
			name: "Explore Berlin",
			img: "img/city_small.png"
			},
			{
			name: "Night Life",
			img:"img/nigth_life_small.png"
			}
			]},
];

var locations = [
		{title: "Exhibitions", location: {lat: 52.5085892, lng: 13.270915800000012}, visible:true},
		{title: "Night Life", location: {lat: 52.4612165, lng: 13.549093099999936}, visible:true},
		{title: "Shopping", location: {lat: 52.5026544, lng: 13.529742899999974}, visible:true},
		{title: "Explore Berlin", location: {lat: 52.52000659999999, lng: 13.404953999999975}, visible:true}
		];

// Creates accordion menu
var accordMenu = $(".accordion");

accordMenu.on("click", function(){
	if ($(this).next().css('display') == 'none'){
		$(this).addClass("active");
		$(this).next().fadeIn("slow");
	} else {
		$(this).removeClass("active");
		$(this).next().hide();
	}
})




var TimeOfEvent = function(data) {
	this.name = ko.observable(data.name);
	this.image = ko.observable(data.img);
}

var Section = function(data) {
	this.sectionName = data.section;
	this.shouldShow = ko.observable(false);
	this.menuOptions = ko.observable();
	this.nameImageList = ko.observableArray([]);

}

var ViewModel = function() {
	var self = this;

	this.locations = ko.observableArray(locations);

	this.timeOfEvent = ko.observable();

	this.sectionList = ko.observableArray([]);

	this.likedEvent = ko.observableArray([]);


	data.forEach(function(data){
		if (data.section == "Time") {
			self.timeOfEvent(new TimeOfEvent(data))
		} else if (data.section == "Type of Event"){
			// var section = new Section(data);
			data.menucontent.forEach(function(data){
			self.sectionList.push(data);
		})
		// self.sectionList.push(section);
		}
	})

	this.grouped = ko.computed(function(){
		var rows = [], current = [];
		rows.push(current);
		for(var i=0; i < self.sectionList().length; i++){
			current.push(self.sectionList()[i]);
			if(((i+1)%2)==0){
				current = [];
				rows.push(current);
			}
		}
		return rows;
	}, this);



	};

var ViewModel = new ViewModel()

ko.applyBindings(ViewModel)

var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e5e6e6"
            },
            {
                "saturation": "-61"
            },
            {
                "lightness": "-2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-3"
            },
            {
                "color": "#c1aeae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-14"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#b2b5b6"
            },
            {
                "lightness": "9"
            },
            {
                "gamma": "1.10"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b4b9ba"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fad93e"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#afbaba"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#faf67f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-40"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b3bbbc"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b2babe"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "29"
            }
        ]
    }
];

//Creating map - Using google API
      var map;
      var markers = [];
      function initMap() {
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.52000659999999, lng: 13.404953999999975},
          zoom: 13,
          styles: styles,
        });

        ViewModel.locations().forEach(function(location, index){
			var position = location.location;
			var title = location.title;
			// Create a marker per location, and put into markers array.
			var marker = new google.maps.Marker({
				position: position,
				title: title,
				animation: google.maps.Animation.DROP,
				id: index,
				visible: location.visible
        		});
			markers.push(marker);
		});

	     // This function will loop through the markers array and display them all.
	     function showMarkers(markers) {
	        var bounds = new google.maps.LatLngBounds();
	        // Extend the boundaries of the map for each marker and display the marker
	        for (var i = 0; i < markers.length; i++) {
	          markers[i].setMap(map);
	          bounds.extend(markers[i].position);
	        }
	        map.fitBounds(bounds);
	      }

	    showMarkers(markers);

	    function filterEvents(liked) {
	    	if ($.inArray(liked, ViewModel.likedEvent()) != -1) {
	    		return true
	    	} else {
	    		return false
	    	}
	    }

      // This function will loop through the listings and hide them all.
      function hideListings() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }

        $('body').on("change", ".check-event",function(){
        	ViewModel.locations().forEach(function(location, i){
        		if (filterEvents(location.title)){
        			markers[i].setVisible(true)
        		} else {
        			markers[i].setVisible(false)
        		}
        	});
        });








        var infowindow = new google.maps.InfoWindow({
          content: 'This is an infowindow!!'
        });
        // marker.addListener('click', function(){
        //   infowindow.open(map, marker);
        // });
      }







