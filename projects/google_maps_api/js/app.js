

var data =
		[{
		section: "Time",
		name: "Time of Event",
		img: "img/time_line.png",
		times: ["morning", "afternoon", "evening"]
		},
		{
		section: "Type of Event",
		menucontent: [
			{
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
			}]
		},
			{
			section: "Cost of Event",
			menucontent: [
			{
				name: "Free",
				img: "img/free_small.png"
			},
			{
				name: "Paid",
				img: "img/paid_small.png"
			}]
			}
];


var dataEvents = [{
	title: "Spring Fest at Kurt-Schumacher-Damm",
description: "More than 40 entertainers at Kurt-Schumacher-Damm ready for having a great time!",
address: "Kurt-Schumacher-Damm 207 13405 Berlin",
time: "12:00",
timesumm: "morning",
cost: "Free",
costcat: "Free",
category: "Highlights",
location: {lat:52.5532493, lng:13.30530090000002},
},
{title: "Music Festival Green Heart",
description: "The Festival is an invitation into Spring at the Sony Center in Potsdammer Platz",
address: "Potsdamer Straße 4 10784  Berlin, Germany",
time:"18:00",
timesumm: "afternoon",
cost:"Free",
costcat: "Free",
category: "Highlights",
location: {lat:52.5100083, lng:13.373286699999994}
},
{
title:"Spring Festival in Domäne Dahlem",
description: "Celebration of the beginning of the Market Season in the Domäne Dahlem",
address: "Königin-Luise-Str. 49 14195 Berlin",
time: "10:00 - 18:00",
timesumm: "morning",
cost: "4",
costcat: "Paid",
category: "Exhibitions",
location: {lat:52.45842, lng:13.288659999999936}
},
{
title: "Good Vibrations",
description: "Explore the history of the electric music instruments and how the production of instruments has changed in the past 100 years.",
address: "Tiergartenstraße 1 10785 Berlin",
time: "17:00",
timesumm: "afternoon",
cost: "3",
costcat: "Paid",
category: "Exhibitions",
location: {lat:52.51000999999999, lng:13.37110000000007}
},
{
title: "Community, Club, Culture",
description:"This exhibition about the Night Life of Berlin and London will be opened by the London Mayor.",
address:"Prinzenstraße 85F 10969 Berlin",
time: "20:00 - 23:00",
timesumm: "evening",
cost:"Free",
costcat: "Free",
category: "Exhibitions",
location: {lat:52.5030583, lng:13.409938699999998}
},
{
title: "Kids' Farm at the Mauerplatz",
description: "The kids' farm is an open place for playing and learning.",
address: "Leuschnerdamm 9 10999 Berlin",
time: "10:00 - 17:00",
timesumm: "morning",
cost: "Free",
costcat: "Free",
category: "Kids",
location: {lat:52.5051026, lng:13.419130399999972}
},
{
title: "MACHmit! Museum für Kinder, Born and Welcomed",
description: "A interactive exhibition of the welcome rituals for a newborn in the world.",
address: "Senefelderstr. 5, 10437 Berlin (Pankow)",
time: "10:00-18:00",
timesumm: "morning",
cost: "5",
costcat: "Paid",
category: "Kids",
location: {lat:52.5405551, lng:13.422755100000018}
},
{
title: "Stiftung Warentest's (Consumer Organization) Auction",
description: "All the products that survived the consumer organization tests will be auctioned",
address: "Werdauer Weg 23, 10829 Berlin",
time: "8:00",
timesumm: "morning",
cost: "Free",
costcat: "Free",
category: "Shopping",
location: {lat:52.4761146, lng:13.351218700000004}
},
{
title: "Kids' Flea market",
description: "Soon to be parents can go to the flea market to find used children's clothes.",
address: "Am Borsigturm 2 13507 Berlin",
time: "12:00-16:00",
timesumm: "morning",
cost: "Free",
costcat: "Free",
category: "Shopping",
location: {lat:52.58530469999999, lng:13.286741900000038}
},
{
title: "A walk in Prenzlauer Berg",
description: "Guided Tour through Prenzlauer Berg and its attractions",
address: "Jüdischen Friedhof Schönhauser Allee 23",
time: "10:00",
timesumm: "morning",
cost: "15 Euros",
costcat: "Paid",
category: "Explore Berlin",
location: {lat:52.5343279, lng:13.413022700000056}
},
{
title: "Horváth",
description: "Modern Austrian cuisine by Chef Sebastian Frank.",
address: "Paul-Lincke-Ufer 44a 10999 Berlin–Kreuzberg" ,
time: "18:00-23:00",
timesumm: "afternoon",
cost: "Menu from 58 Euros",
costcat: "Paid",
category: "Eating & Drinking",
location: {lat:52.49645349999999, lng:13.420732499999986}
},
{
title: "Goldfisch",
description: "Classic cocktails and house cocktails in a slick yet comfortable ambience.",
address: "Grünberger Str. 67 10245 Berlin–Friedrichshain",
time: "20:00",
timesumm: "evening",
cost: "",
costcat: "Paid",
category:"Eating & Drinking",
location: {lat:52.51148999999999, lng:13.458290000000034}
},
{
title: "Schlager Party - Night Life",
description: "Enjoy the best (worst) of German's pop songs.",
address: "Karl-Liebknecht-Straße 11 10178 Berlin",
time: "21:00",
timesumm: "evening",
cost: "",
costcat: "Paid",
category: "Night Life",
location: {lat:52.5217313, lng:13.407154600000013}
},
{
title: "Saturdays at Havanna",
description: "Enjoy the best of Latin American music and dance though the night at Havanna",
address: "Hauptstraße 30 10827 Berlin",
time: "22:00",
timesumm: "evening",
cost: "",
costcat: "Paid",
category: "Night Life",
location: {lat:52.4851153, lng:13.353548600000067}
}
];

var timesDic = {"0":"morning",
				"1": "afternoon",
				"2": "evening"};

// Creates accordion menu
var accordMenu = $(".accordion");

accordMenu.on("click", function(){
	if ($(this).parent().next().children().css('display') == 'none'){
		$(this).addClass("active");
		$(this).parent().next().children().fadeIn("slow");
	} else {
		$(this).removeClass("active");
		$(this).parent().next().children().hide();
	}
})




var TimeOfEvent = function(data) {
	this.name = ko.observable(data.name);
	this.image = ko.observable(data.img);
}

var timeCategories,
    eventCategories = [],
    costCategories = [];


data.forEach(function(data){
    if (data.section == "Time") {
        timeCategories = data.times
    } else if (data.section == "Type of Event"){
        data.menucontent.forEach(function(data){
        eventCategories.push(data.name)
    })}  else if (data.section == "Cost of Event") {
        data.menucontent.forEach(function(data){
        costCategories.push(data.name)
    })
    }
});

var ViewModel = function() {
	var self = this;

	this.timeOfEvent = ko.observable();

	this.sectionList = ko.observableArray([]);

	this.likedEvent = ko.observableArray(["All"]);

	this.slider = ko.observableArray();

	this.timedEvent = ko.observableArray(["All"]);

	this.costEvent = ko.observableArray([]);

	this.costEventChecked = ko.observableArray(["All"]);

    this.filter = ko.observable();

    this.eventDescription = ko.observableArray([]);


	data.forEach(function(data){
		if (data.section == "Time") {
			self.timeOfEvent(new TimeOfEvent(data))
		} else if (data.section == "Type of Event"){
			data.menucontent.forEach(function(data){
			self.sectionList.push(data);
		})}  else if (data.section == "Cost of Event") {
			data.menucontent.forEach(function(data){
			self.costEvent.push(data);
		})
		}
	});

    dataEvents.forEach(function(data){
        self.eventDescription.push(data);
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

    this.filteredEvents = ko.computed(function(){
        var filter = self.filter();
        if (!filter) {
            return self.eventDescription();
        } else {
            filter = filter.toLowerCase();
            return ko.utils.arrayFilter(self.eventDescription(), function(item) {
                return (item.title.toLowerCase().indexOf(filter) !== -1 ||
                    item.description.toLowerCase().indexOf(filter) !== -1 );
        });
        }
    });

    this.collectedTitles = ko.computed(function(){
        return ko.utils.arrayMap(self.filteredEvents(), function(item) {
            return item.title;
        });
    });

	};

var ViewModel = new ViewModel()

// Initialize with all boxes checked
ViewModel.likedEvent(eventCategories);
ViewModel.costEventChecked(costCategories);


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
          mapTypeControl: false
        });

        var largeInfowindow = new google.maps.InfoWindow();
        var defaultIcon = makeMarkerIcon('577da6');
        var highlightedIcon = makeMarkerIcon('f6c43e');

        var zoomAutocomplete = new google.maps.places.Autocomplete(document.getElementById('zoom-to-area-text'));
        //Bias the boundaries within the map for the zoom to area text.
        zoomAutocomplete.bindTo('bounds', map);

        dataEvents.forEach(function(location, index){
			var position = location.location;
			var title = location.title;
			// Create a marker per location, and put into markers array.
			var marker = new google.maps.Marker({
				position: position,
				title: title,
				animation: google.maps.Animation.DROP,
				id: index,
				visible: location.visible,
                icon: defaultIcon
        		});
            markers.push(marker);
            // Create an onclick event to open the large infowindow at each marker.
              marker.addListener('click', function() {
                markers.forEach(function(marker){
                    marker.setIcon(defaultIcon);
                })
                populateInfoWindow(this, largeInfowindow);
              });

            marker.addListener('mouseover', function() {
                  this.setIcon(highlightedIcon);
                });
                marker.addListener('mouseout', function() {
                  this.setIcon(defaultIcon);
                });

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

      var collectedTitles = ViewModel.collectedTitles();

      var bounds = new google.maps.LatLngBounds();

      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
          dataEvents.forEach(function(event){
            if (marker.title === event.title){
                infowindow.setContent("<div><span id='infowindow-title'>" + marker.title + "</span></br>"
                    + event.description + "</br>Time: " + event.time + "</br>Cost: " + event.cost +"</div>" );
            }
          })

          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
      }

      };

      //Animating marker when element from list is selected
      $('body').on("click", '#event-title', function(){
        var titleClicked = $(this).text();
        markers.forEach(function(marker){
            if (titleClicked === marker.title){
                marker.setAnimation(google.maps.Animation.BOUNCE);
                marker.setIcon(highlightedIcon);
                populateInfoWindow(marker, largeInfowindow);
                setTimeout(function(){ marker.setAnimation(null); }, 1450);
            } else {
                marker.setAnimation(null);
                marker.setIcon(defaultIcon);
            }
        })
      });

      //Changes when text is filtered
      $('#apply-filter').click(function(){
         collectedTitles = ViewModel.collectedTitles();
            dataEvents.forEach(function(event, i){
                 if (filterByText(event.title, collectedTitles)){
                    markers[i].setVisible(true);
                    bounds.extend(markers[i].position);
                } else {
                    markers[i].setVisible(false);
                }
            });
            map.fitBounds(bounds);
      });

      $('#filter-text').keypress(function(e){
        if (e.which === 13) {
            $('#apply-filter').click();
        }
      });

      // Changes when Time of Event Changes
       $('body').on("change", ".slider",function(){
       		$('.check-all-time').prop('checked', false);
            ViewModel.timedEvent([""])
        	dataEvents.forEach(function(event, i){
        		 if (jointFilters(event, collectedTitles)){
        			markers[i].setVisible(true)
        		} else {
        			markers[i].setVisible(false)
        		}
        	});
        });

        $('body').on("change", ".check-event",function(){
        	dataEvents.forEach(function(event, i){
        		if (jointFilters(event, collectedTitles)){
        			markers[i].setVisible(true)
        		} else {
        			markers[i].setVisible(false)
        		}
        	});
        });

        $('body').on("change", ".check-price",function(){
        	dataEvents.forEach(function(event, i){
        		if (jointFilters(event, collectedTitles)){
        			markers[i].setVisible(true);
        		} else {
        			markers[i].setVisible(false);
        		}
        	})
        });

        $('body').on("change", ".check-all-time",function(){
            ViewModel.timedEvent(["All"])
        	dataEvents.forEach(function(event, i){
        		if (filterEventsLiked(event.category) &&
                    filterCost(event.costcat) &&
                    filterByText(event.title, collectedTitles)) {
        		markers[i].setVisible(true);
        	}
        	});
        });

        $('#zoom-to-area').click(function(){
            zoomToArea();
        });

        $('#zoom-to-area-text').keypress(function(e){
            if(e.which === 13){//Enter key pressed
                $('#zoom-to-area').click();//Trigger search button click event
            }
        });
      }


      // This function takes the input value in the find nearby area text input
      // locates it, and then zooms into that area. This is so that the user can
      // show all listings, then decide to focus on one area of the map.
      function zoomToArea() {
      //   // Initialize the geocoder.
        var geocoder = new google.maps.Geocoder();
        // Get the address or place that the user entered.
        var address = $('#zoom-to-area-text').val();
        // Make sure the address isn't blank.
        if (address == '') {
          window.alert('You must enter an area, or address.');
        } else {
          // Geocode the address/area entered to get the center. Then, center the map
          // on it and zoom in
          geocoder.geocode(
            { address: address,
              componentRestrictions: {locality: 'Berlin'}
            }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
              } else {
                window.alert('We could not find that location - try entering a more' +
                    ' specific place.');
              }
            });
        }
      };


        $('body').on("click", '#event-title', function(){
            $('.event-description').hide();
            if ($(this).next().css('display') == 'none'){
                $(this).next().fadeIn("slow");
            } else {
                $(this).removeClass("active");
                $(this).next().hide();
            }
            });


        function filterByText(title, collectedTitles) {
            if ($.inArray(title, collectedTitles) !== -1) {
                return true;
            } else {
                return false;
            }
        }

        function filterEventsLiked(liked) {
            if ($.inArray(liked, ViewModel.likedEvent()) !== -1) {
                return true;
            } else {
                return false;
            }
        }

        function filterEventsTime(time) {
            if (ViewModel.timedEvent()[0] === "All") {
                return true;
            }
            else if (time == timesDic[ViewModel.slider()]) {
                return true;
            } else {
                return false;
            }

        }

        function filterCost(cost) {
            if($.inArray(cost, ViewModel.costEventChecked()) !== -1){
                return true;
            } else {
                return false;
            }
        }

        function jointFilters(event, collectedTitles) {
            if (filterEventsTime(event.timesumm) &&
                    filterEventsLiked(event.category) &&
                    filterCost(event.costcat) &&
                    filterByText(event.title, collectedTitles)){
                return true;
            } else {
                return false;
            }
        }

        function makeMarkerIcon(markerColor) {
            var markerImage = new google.maps.MarkerImage(
              'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
              '|40|_|%E2%80%A2',
              new google.maps.Size(21, 34),
              new google.maps.Point(0, 0),
              new google.maps.Point(10, 34),
              new google.maps.Size(21,34));
            return markerImage;
        }

var apiServer = 'https://query.yahooapis.com/v1/public/yql';

var queryString = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Berlin") and u="c"';

$.ajax({
  url: apiServer,
  data: {format: 'json',
        q:queryString},
    success: function(response){
        response.query.results.channel.item.forecast.forEach(function(day){
            if (day.day === "Sat" || day.day === "Sun"){
                $(".weather").append("<tr><td id='day'>" + day.day + "</td> <td id='forecast'>"+ day.text +
                    "</td><td id='high-temp'> " + day.high + "</td> <td id='high-temp'> " + day.low + "</td></br><tr>")
            }
        })
  }, error: function(){
    $('.weather').append("There was an Error while loading weather data.")


  }
});



