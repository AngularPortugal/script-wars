#Step 1 
## Hello Angular.JS

Open file step1/index.html 

Add angular js library from a CDN or from local build
```html
 <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>

```

Add the ng-app property to aplication begin tag (tiplicali the html tag)

```html
 <html lang="en" ng-app>

```

bind the model to a box and write the value of the model

```html
  <div>
        <label>Name:</label>
        <input type="text" ng-model="yourName" placeholder="Enter a name here">
        <hr/>
        <h1>Hello {{yourName}}!</h1>
    </div>

```

You should have the following page

```html
<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" href="../../css/app.css">

     <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
</head>
<body>
 <div>
        <label>Name:</label>
        <input type="text" ng-model="yourName" placeholder="Enter a name here">
        <hr/>
        <h1>Hello {{yourName}}!</h1>
    </div>

</body>
</html>

```

## You are now padwan level 1 graduated ! May the force be with you! Camon keep the push!

#Step 2 
## Hello Angular.JS