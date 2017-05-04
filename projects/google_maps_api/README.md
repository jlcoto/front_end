
## Berlin What to do this Weekend?

Application developed as part of the Udacity front-end developer nanodegree.

Shows users a list of events happening at specific points of the city. When click on the event, extra information is displayed.
The information of the events is taken from [Berlin Wochenendtipp](https://www.berlin.de/wochenend-tipps/) (in German). I have translated some of the entries to English.

Markers are also clickable displaying extra information about the event.

The list of events can be filtered by different criteria: names, content, time, event type and cost of event.

## Running

Follow these steps to run locally the app:
1. Download / clone the repository.
2.  run app on `localhost:8080`. If you have Python installed, you can launch a local server with:

- Python 3: `python -m http.server 8080`
-Python 2: `python -m SimpleHTTPServer 8080`

If you want to explore the app, feel check it [here](http://htmlpreview.github.io/?https://github.com/jlcoto/front_end/blob/master/projects/google_maps_api/index.html).

## Apis

This application uses de following Apis.
1. Google maps: To point out the location of the places. Also includes possibility of searching per places and animated infoboxes.
2. Wikipedia: The application shows the user the closest wikipedia entry to the place the event will take place. This is by using wikipedia's api to do a geolocation search.
3. Yahoo Weather: We show the predicted weather for the weekend (not that for smaller devices, information is not shown).

## Desing
The application aims to be responsive and should seamlessly adapt to different devices.

![Image of Berlin Weekend application](https://github.com/jlcoto/front_end/blob/master/projects/google_maps_api/img/general_look.png)

