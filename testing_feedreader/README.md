## Web Page Testing

This adds tests for different features of a feedreader web page. The testing is done with [Jasmine](http://jasmine.github.io/), a JavaScript testing framework.

## Running the project

1. Download / clone this repository.
2. Be sure to have jasmine 2.1.2 installed in your lib file. You can download it here [Jasmine](https://github.com/jasmine/jasmine/releases?after=v2.4.0)
3.  run app on `localhost:8080`. If you have Python installed, you can launch a local server with:
- Python 3:
`python -m http.server 8080`
- Python 2:
`python -m SimpleHTTPServer 8080`


## Tests implemented

- Checks that URLs and names of the web pages are defined and non empty.
- Checks that menu is hidden/displayed when prompted by user.
- Checks that entries are included in web page after Ajax request.
- Checks that changes of entries in web page are updated after other request has been prompted.

## Resources checked

- [Jasmine Documentation](https://jasmine.github.io/2.2/introduction)
- [Jasmine Ajax testing](https://stackoverflow.com/questions/4662641/how-do-i-verify-jquery-ajax-events-with-jasmine).
