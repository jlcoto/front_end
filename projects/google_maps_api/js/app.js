var data =
[{
  section: "Time",
  name: "Time of Event",
  img: "img/time_line_small.png",
  srcattr: "img/time_line_small.png 194w, img/time_line_standard.png 250w",
  times: ["morning", "afternoon", "evening"]
},
{
  section: "Type of Event",
  menucontent: [
  {
   name: "Exhibitions",
   img: "img/exhibitions.png",
   alt: "exhibitions icon"
},
{
   name: "Highlights",
   img: "img/highlights.png",
   alt: "Highlights of the weekend icon"
},
{
   name: "Kids",
   img:"img/kids.png",
   alt: "kids' events icon"
},
{
   name: "Shopping",
   img: "img/shopping.png",
   alt: "shopping icon"
},
{
   name: "Excursions",
   img: "img/excursion.png",
   alt: "excursions icon"
},
{
   name: "Eating & Drinking",
   img: "img/eat_drink.png",
   alt: "eating and drinking icon"
},
{
   name: "Explore Berlin",
   img: "img/city.png",
   alt: "explore berlin icon"
},
{
   name: "Night Life",
   img:"img/nigth_life.png",
   alt: "night life icon"
}]
},
{
   section: "Cost of Event",
   menucontent: [
   {
    name: "Free",
    img: "img/free.png"
},
{
    name: "Paid",
    img: "img/paid.png"
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



//Creates map
var map;


//Creates accordion menu
var accordMenu = $('.accordion');

accordMenu.on('click', function(){
	if ($(this).parent().next().children().css('display') == 'none'){
        $('.panel').hide();
        $(this).addClass('active');
        $(this).parent().next().children().fadeIn('slow');
    } else {
      $(this).removeClass('active');
      $(this).parent().next().children().hide();
  }
});

//Creates an object for time of events with ko observables.
var TimeOfEvent = function(data) {
	this.name = ko.observable(data.name);
	this.image = ko.observable(data.img);
    this.srcset = ko.observable(data.srcattr);
};

var Event = function(data) {
    var self = this;
    this.title = data.title;
    this.description = data.description;
    this.address = data.address;
    this.time = data.time;
    this.timesumm = data.timesumm;
    this.cost = data.cost;
    this.costcat = data.costcat;
    this.category = data.category;
    this.location = data.location;
    this.visible = ko.observable(false);
    this.wikipedia = '';


    this.makeMarkerIcon = function(markerColor){
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
    return markerImage;
    }
    this.defaultIcon = this.makeMarkerIcon('577da6');
    this.highlightedIcon = this.makeMarkerIcon('f6c43e');

    var wikiURL = 'https://en.wikipedia.org/w/api.php';
    wikiURL += '?' + $.param({
        'action': 'query',
        'list': 'geosearch',
        'format': 'json',
        'gsradius': '1000',
        'gscoord': self.location.lat + '|' + self.location.lng,
        'callback': 'wikiCallback'
    });


$.ajax({
        url: wikiURL,
        dataType: 'jsonp',
    }).done(function(data){
        if (data.query.geosearch.length !== 0) {
            self.wikipedia = "<a target=#  href=http://en.wikipedia.org/?curid="
                + data.query.geosearch[0].pageid + ">"
                + data.query.geosearch[0].title +"</a>";

    } else  {
            self.wikipedia =  'No wikipedia article found.';
    }
    }).fail( function() {
        self.wikipedia = "Failed while loading wikipedia. Please check your connection"
    }
        );


    this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(self.location.lat, self.location.lng),
        animation: google.maps.Animation.DROP,
        map: map,
        title: self.title,
        icon: self.defaultIcon
     });

    this.infowindow = new google.maps.InfoWindow({marker: self.marker});

    this.marker.addListener('click', function(){
        var infoWindowDetails = '<div class="infowindow-content">' + '<div id="info-title">' + self.title + '</br></div>' +
            '<em> Description: </em>'+ self.description + '</br>' + '<em>Address: </em>' + self.address + '</br>' +
            '<em> Time: </em>' + self.time + '</br>' + '<em>Nearby by Wikipedia: </em>' + self.wikipedia + '</div>';

        self.infowindow.setContent(infoWindowDetails);

        self.infowindow.open(map, this);


        self.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                self.marker.setAnimation(null);
            }, 2100);
    })

    this.marker.addListener('mouseover', function() {
          this.setIcon(self.highlightedIcon);
      });

    this.marker.addListener('mouseout', function() {
          this.setIcon(self.defaultIcon);
      });

    this.infowindow.addListener('closeclick', function() {
            self.infowindow.marker = null;
        });

    this.showMarker = ko.computed(function() {
        if(this.visible() === true) {
            self.marker.setMap(map);
        } else {
            self.marker.setMap(null);
        }
        return true;
    }, this);




}

//Variables for keeping track of each of the categories
var timeCategories,
eventCategories = [],
costCategories = [];

//Populate variables to give us all the times, costs and categories
data.forEach(function(data){
    if (data.section === 'Time') {
        timeCategories = data.times;
    } else if (data.section === 'Type of Event'){
        data.menucontent.forEach(function(data){
            eventCategories.push(data.name);
        })}  else if (data.section === 'Cost of Event') {
            data.menucontent.forEach(function(data){
                costCategories.push(data.name);
            });
        }
    });


//Declaring our viewmodel
var ViewModel = function() {
	var self = this;

    this.timesDic = {'0':'morning',
                    '1': 'afternoon',
                    '2': 'evening'};

	this.timeOfEvent = ko.observable();

	this.sectionList = ko.observableArray([]);

	this.likedEvent = ko.observableArray(["Explore Berlin", "Exhibitions", "Shopping", "Night Life", "Eating & Drinking", "Kids", "Highlights"]);

	this.slider = ko.observableArray();

	this.timedEvent = ko.observableArray(['All']);

	this.costEvent = ko.observableArray([]);

	this.costEventChecked = ko.observableArray(["Paid", "Free"]);

    this.filter = ko.observable();

    this.eventDescription = ko.observableArray([]);

    this.markers = ko.observableArray([]);

    this.selectArea = ko.observable();

    this.weather = ko.observable();

    var apiServer = 'https://query.yahooapis.com/v1/public/yql';
    var queryString = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Berlin") and u="c"';

    //Connects to Yahoo Weather and pass information to
    //relevant parts of page
    $.ajax({
      url: apiServer,
      data: {format: 'json',
      q:queryString}
    }).done(function(data){
        var weatherData = [];
        data.query.results.channel.item.forecast.forEach(function(day){
            if (day.date === '06 May 2017' || day.date === '07 May 2017'){
                weatherData.push("<tr><td id='day'>" + day.day + "</td> <td id='forecast'>"+ day.text +
                "</td><td id='high-temp'> " + day.high + "</td> <td id='low-temp'> " + day.low + "</td></br><tr>");
            }
        })
        self.weather(weatherData.join(''))
    }).fail( function() {
        self.weather("Failed while loading weather. Please check your connection")
    })


    this.styles = [
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

    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.52000659999999, lng: 13.404953999999975},
          zoom: 12,
          styles: self.styles,
          mapTypeControl: false
      });

    //Populating our observables with the data
    data.forEach(function(data){
      if (data.section == 'Time') {
       self.timeOfEvent(new TimeOfEvent(data));
   } else if (data.section == 'Type of Event'){
       data.menucontent.forEach(function(data){
           self.sectionList.push(data);
       })}  else if (data.section == 'Cost of Event') {
           data.menucontent.forEach(function(data){
               self.costEvent.push(data);
           });
       }
   });

    dataEvents.forEach(function(data){
        self.eventDescription.push(new Event(data));
    });

    //Function that makes possible to add a row each two elements of
    //events so they can be in separate rows for bootstrap layout.
    this.grouped = ko.computed(function(){
      var rows = [], current = [];
      rows.push(current);
      for(var i=0; i < self.sectionList().length; i++){
       current.push(self.sectionList()[i]);
       if(((i+1)%2)===0){
        current = [];
        rows.push(current);
        }
        }
    return rows;
    }, this);

    this.slideClick = function(){
        self.timedEvent([])
    }

    this.filterByInput = function(item, filter){
        //Check if filtering term in title or description
        if (item.title.toLowerCase().indexOf(filter) !== -1 ||
                    item.description.toLowerCase().indexOf(filter) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    this.filterByTime = function(item) {
        if (item.timesumm === self.timesDic[self.slider()] || self.timedEvent()[0] == 'All') {
            return true;
        } else {
            return false;
    }
    }

    this.filterByEvent = function(item) {
        if (self.likedEvent().indexOf(item.category) !== -1 ){
            return true;
        } else {
            false
        }
    }

    this.filterByCost = function(item) {
        if (self.costEventChecked().indexOf(item.costcat) !== -1){
            return true;
        } else {
            return false;
        }
    }


    //Filters events according to user input.
    this.filteredEvents = ko.computed(function(){
        var filter = self.filter();
        if (!filter) {
            return ko.utils.arrayFilter(self.eventDescription(), function(item) {
                return (self.filterByTime(item) && self.filterByEvent(item) && self.filterByCost(item));
            });
        } else if (filter) {
            filter = filter.toLowerCase();
            return ko.utils.arrayFilter(self.eventDescription(), function(item) {
                return (self.filterByInput(item, filter) && self.filterByTime(item)
                        && self.filterByEvent(item) && self.filterByCost(item));
            });
        }
    });

    var eventLikes = [];
    var costEvents = [];

    this.applySelectionChanges = ko.computed(function(){

        var filter = self.filter();
        if (!filter) {
            //Go back to degault when nothing is selected
            self.likedEvent(["Explore Berlin", "Exhibitions", "Shopping", "Night Life", "Eating & Drinking", "Kids", "Highlights"]);
            self.costEventChecked(["Paid", "Free"]);
        }
        else if (filter) {
            //Updates other categories when user uses text input
            ko.utils.arrayForEach(self.filteredEvents(), function(item){
            if (eventLikes.indexOf(item.category) === -1){
               eventLikes.push(item.category);
            }
        })
        self.likedEvent(eventLikes)
            ko.utils.arrayForEach(self.filteredEvents(), function(item){
            if (costEvents.indexOf(item.costcat) === -1){
               costEvents.push(item.costcat);
            }
        self.costEventChecked(costEvents)
            })
        }
       });



    // Updates map marker changes in the page.
    this.applyMarkerChanges = ko.computed(function(){
        var activate = [];
        ko.utils.arrayForEach(self.filteredEvents(), function(item){
            activate.push(item.title);
        })
        ko.utils.arrayForEach(self.eventDescription(), function(item){
            if (activate.indexOf(item.title) !== -1) {
                item.visible(true);
            } else {
                item.visible(false);
            }
        })
        }
        );

    this.clickEvent = function() {
        var selfItem = this;
        ko.utils.arrayForEach(self.eventDescription(), function(event){
            event.marker.setAnimation(null);
        })


        var infoWindowDetails = '<div class="infowindow-content">' + '<div id="info-title">' + selfItem.title + '</br></div>' +
            '<em> Description: </em>'+ selfItem.description + '</br>' + '<em>Address: </em>' + selfItem.address + '</br>' +
            '<em> Time: </em>' + selfItem.time + '</br>' + '<em>Nearby by Wikipedia: </em>' + selfItem.wikipedia + '</div>';

        selfItem.infowindow.setContent(infoWindowDetails);

        selfItem.infowindow.open(map, selfItem.marker);

        selfItem.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
                selfItem.marker.setAnimation(null);
            }, 2100);
    }

};





//Runs app when called by Google Maps
function runApp() {
  ViewModel = new ViewModel()
  ko.applyBindings(ViewModel);
}



//Connecting with different Apis

function errorMessage() {
    alert("Google Maps failed to load. Please check your Internet connection and refresh your page.")
}





