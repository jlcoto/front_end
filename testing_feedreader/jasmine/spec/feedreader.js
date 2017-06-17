/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {

    // Testing that there is a RSS and URLs
    // we will be getting the feed from

    describe('RSS Feeds', function() {
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('all URLs defined', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });
        });

         it('all names defined', function() {
            allFeeds.forEach(function(entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });
        });
     });


    // Checking that menu functionality works.
    // It needs to be hidden and when clicked appear.

    describe('The menu', function() {
        it('menu box by default is closed', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('display and hide menu', function() {
        //Trigger so the menu gets displayed
        $('.menu-icon-link').trigger("click");
        expect($('body').hasClass('menu-hidden')).toBe(false);

       //Trigger again so it is hidden
       $('.menu-icon-link').trigger("click");
       expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    // Checking that initial entries are
    // included in the page

    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('should have entries', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

    // Checking that content of page
    // changes when selecting another feed.

    describe('New Feed Selection', function() {
        var oldFeed,
            newFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                oldFeed = $(".entry").html();
                done();
            });

        });

        it('compares the old vs. new feed', function(done) {
            loadFeed(1, function(){
                newFeed = $(".entry").html();
                expect(newFeed).not.toEqual(oldFeed);
                done();
            });
        });

    });
}());
