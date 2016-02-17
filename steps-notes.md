STEP 0: Basic HTML layout page
	- HTML/CSS with bootstrap and jquery
        $ bower install bootstrap
	- no interaction

STEP 1: Adding Angular
	- Add angular.js file
        $ bower install angular
	- Add ng-app directive to index.html

STEP 2: Simple data-binding
	- Add ng-model to name textbox
	- Bind text to name ng-model

STEP 3: Creating an application
	- What is ng-app
	- Add an app module
	- Bootstrap with app module in ng-app

STEP 4: Adding a Controller for the Home page form
	- Add a SignUpController
	- Dependency Injection quick overview
	- Use ng-controller as
	- Use ng-submit to handle form

STEP 5: Dealing With Bootstrap js plugins
	- The digest cycle
	- UI Bootstrap
	- AngularStrap
    - Choose your side with uib-btn-radio
        $ bower install angular-bootstrap

STEP 6: SPA architecture overview
	- SPA architecture quick overview
    - Pages vs Views
    - Splitting page into partials with ng-include
    - Choosing what to show with ng-show
    - Events with $broadcast/$emit/$on

STEP 7: Routes and Partial Views
	- ng-router/ui-router
        $ bower install angular-ui-router
        $ bower install angular-animate#~1.4.9 (for animations)
	- adding a view container
    - routes configuration
    - $state.go
    - ui-sref
    - state parameters

STEP 8: Route Parameters & Repeating things
    - ng-style / ng-class
    - Repeating things with ng-repeat

STEP 9: Application services
    - thin your controllers
    - service -> factory -> provider
    - all providers are singletons
    - factories are great for revealing module pattern

STEP 10: Reaching out to the world
    - the $http service
    - getting data from a rest service
    - promises.then() chaining

STEP 11: Advanced promises
    - $q service
    - $q.all

STEP 12: Another bootstrap directive
    - showing a bootstrap modal

STEP 13: Giving back to the world
    - Posting your vote
    - Handling errors with promises

STEP 14: Showing the results
    - using resolve on routes
    - using $interval as poorman's real-time
