# Feed Reader Testing with Jasmine

#### Udacity FEND Project 


This is a Feed Reader Testing project to demonstrate JavaScript testing with test cases written in [Jasmine](https://jasmine.github.io/). Jasmine is a behavior-driven development framework for testing JavaScript code. 

### Steps to Run the Tests 

1. To start the Feed Reader, open [THIS LINK](https://abhishekakade.github.io/frontend-nanodegree-feedreader/index.html).

2. The tests are written in the **feedreader.js** file. The test results appear at the bottom of the page once the page is done loading.

3. Tests that appear in **green** will have **passed** while the tests that appear in **red** will have **failed**. 

### Steps for Offline Testing

1. Download the repo as a .zip file. 

2. Extract the .zip file using some archiving utility like WinRAR/7-Zip/WinZip/etc.

3. Go to the extracted folder, search for **`index.html`** file and open it. 

4. Tests will appear at the bottom of the page once the page is done loading. 

5. Tests that appear in **green** will have **passed** while the tests that appear in **red** will have **failed**. 

6. You will also see a detailed error log for failed tests in case if any have failed. 

### Tests:

**Project code is tested against these 7 test cases**

1. Test to make sure that the `allFeeds` variable has been defined and that it is not empty. 

2. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty. 

3. Test that loops through each feed and ensures it has a name defined and that it is not empty. 

4. Test that ensures the menu element is hidden by default. 

5. Test that validates _open and hide_ functionality of the hamburger menu icon on click events.

6. Test that ensures that there is at least one entry in the feed when feed loads.

7. Test that ensures that the content changes when a new feed is loaded. 

---
