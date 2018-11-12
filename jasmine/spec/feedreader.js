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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('should loop over each feed and ensure it has a non-empty URL', function() {

            for(let feed of allFeeds) {
                // each feed url is defined
                expect(feed.url).toBeDefined();
                // feed url is not empty
                expect(feed.url.length).not.toBe(0); 
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('should loop over each feed and ensure it has a name and that name is not empty', function() {
            for(feed of allFeeds) {
                // check if feed has a name 
                expect(feed.name).toBeDefined();
                // check if feed name is not 0 
                expect(feed.name.length).not.toBe(0);                
            }
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        const body = document.getElementsByTagName('body')[0];

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should ensure the menu element is hidden by default', function() {
            // check if body has a class menu-hidden by default/on load 
            expect(body.classList).toContain("menu-hidden"); 
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('should toggle the menu visibility when the menu icon is clicked', function() {
            // To initiate a click event to show menu
            let menuIconLink = document.getElementsByClassName("menu-icon-link")[0];
            menuIconLink.click();
            expect(body.className).not.toContain("menu-hidden");
            // To initiate a click event to hide the open menu
            menuIconLink.click();
            expect(body.className).toContain("menu-hidden");
        });

    });


    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        let varFeed = document.getElementsByClassName('entry');

        beforeEach(function(done) {
            loadFeed(0, done);
            console.log("test init");
        });

        it('should have at least a single .entry element within the .feed container', function(done) {

            // To make sure there are more than one feeds (with class entry) on the page
            expect(varFeed.length > 0).toBe(true);
            //  console.log(varFeed.children);
            done();
            console.log("test run complete!");
        });

    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */

        let firstFeed;

        beforeEach(function(done) {
            loadFeed(0, function () {
                // To store the content of first feed load to firstFeed variable
                firstFeed = document.querySelector('.feed').textContent;
                loadFeed(1, done);
            });
        });
        
        it('content changes when new feed is loaded by loadFeed function', function (done) {
            // To store the content of new feed to newFeed variable 
            let newFeed = document.querySelector(".feed").textContent;
            expect(firstFeed).not.toEqual(newFeed);
            done();
        });
    
    });

}());
