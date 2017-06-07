## Website Performance Optimization portfolio project

Udacity project to optimaze the performance of the given webpage. After implementing different optimization strategies, the web page loading and rendering is above 90 as measured by [Google Pagespeed insights](https://developers.google.com/speed/pagespeed/insights/).

## Running and installation

This project uses [Gulp](http://gulpjs.com/) to automate part of the workflow. In order to work with gulp, is is a requisite to have installed [node.js](https://nodejs.org/en/).

1. Install [node.js](https://nodejs.org/en/download/).
2. Install gulp running `npm install --global gulp-cli` in Terminal.
3. Go to folder directory where repository was cloned/downloaded.
4. Run `npm install`. This will install all the gulp modules from `package.json`.
5. Run in the terminal `gulp` to launch all the tasks.

As per specification, the file is divided in a source ´src´ and ´dist´ distribution folders. After successfully running gulp, one should be able to inspect the distribution code by launching a server. For that, we can use Python and [ngrok](https://ngrok.com/) to make the local server accessible remotely.

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
2. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

From there, one can use the public URL given from ngrok and inspect the page in Google PageSpeed.

## Optimizations

#### Minifying / Uglifying  code:

As part of the gulp workflow, I included respective steps to minify all the code in the web page, including HTML, CSS and JSS.

#### Image resizing

I resized and optimize all the images of the page. Also, when appropriate, I included the image dimensions in the HTML tag, so the browser can download the image according to the view port characteristics.

#### Optimizing rendering path

I add a media query for the printing CSS rule so it does not block the rendering path. I also indicate for the JSS, where appropriate, that it should be run async. Additionally, for the other CSS rules, I include them in the HTML so they don't block the rendering path.

#### JavaScript

The google developer console indicated a number of tasks the where generating a forced layout problem. I found and solve two of those problems: when scrolling the web page and when resizing the pizzas. In both of these cases, recalculations and measures where done inside the code that modified the layout, causing a forced layout.

#### Layout

I made sure that all the moving pizzas created are in the same layer using  and `transform: translateZ(0)`. I also used requestAnimationFrame to make sure that the drawing occurred on the beginning of the change.


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>


## Resources Checked
* [Checking how to use Browser's cache](https://varvy.com/pagespeed/cache-control.html).
* [How to use htaccess for caching](https://davidwalsh.name/html5-boilerplate-htaccess).
