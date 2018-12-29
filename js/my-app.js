// Initialize app
var myApp = new Framework7();

var tttoken = "v7nirxu0scv0eistepradr";

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

function doclcoininf() {
		 	$$.ajax({
				 url: "http://107.170.3.207/kishan/10eleven/system_pin_history/",
				cache: false,
				type: "POST",
				dataType: "json",
				data: { 'varsete': tttoken ,memberid : '100088'},
				success: function(response){
					console.log(response);
					var htmlx = "";
					$$.each(response["data"], function (key, value) {
							htmlx += " <tr>  <td class='label-cell'>" + value.date + "</td> <td class='label-cell'>" + value.memberid + "</td> <td class='numeric-cell'>" + value.pinnumber + "</td></tr> ";
						});
					$$("#coins_table").html(htmlx);
					//console.log(htmlx);	
					//myApp.alert(' got the response');
				},
				error: function(responsex){
					console.log(responsex);
					myApp.alert(responsex.status+' got an error');
					
				}
			});
			
			/* myApp.request.get(url='http://107.170.3.207/andf/index.php',success= function (data) {
			//$$('.articles').html(data);
			console.log(data+'Load was performed');
		}); */
}

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    
	doclcoininf();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})