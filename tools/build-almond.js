{
    "baseUrl": "../www/js/lib",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    "optimize": "none",

    // point to the shim config we set up before
    "mainConfigFile": "../www/js/app.js",

	"include": "app",
	"name": "almond",
	"out": "../www-build-almond/js/app.js",

    "paths":
        {
            "jquery": "empty:"
        }
}
