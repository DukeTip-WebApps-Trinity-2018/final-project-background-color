$(document).ready(function () {
    console.log("IT Works")
    $(".submit").click(function () {
        console.log("Clicked");
        var city = $(".city").val();
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=568db8685beec15f7aa11e66af5b8b99";
        console.log(uri);
        $.get(uri, onRes);
    });
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp + "°F");
    switch (response.weather[0].id) {
    
    case 802:
    $("weather")
    case 801:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/sunny.png" />');
    $(".sug").html('Refreshers Beverages and French Toast');
    break;
    case 802:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/rainy.png" />');
    $(".sug").html('Pumpkin Bread and Iced Tea');
    case 803:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/cloudy.png" />');
    $(".sug").html('Lemonade and Brownies');
    break;
    case 804:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/snow.png" />');
    $(".sug").html('Hot Chocolate and Doughnuts');
    break;
    case 200:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/cloudy.png" />');
    $(".sug").html('Iced Coffee and Muffins');
    break;
    case 201:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 202:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/cloudy.png" />');
    $(".sug").html('Frappuccino and Cake');
    break;
    case 210:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 211:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 212:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 221:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 230:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 231:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 232:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Thunderstorm.jpg" />');
    $(".sug").html('Frappuccino and Croissants');
    break;
    case 300:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 301:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 302:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 310:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 311:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 312:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="img/rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 313:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 314:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 321:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 500:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 501:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 502:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 503:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 504:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 511:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 520:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 521:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 522:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 531:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="rainy.png" />');
    $(".sug").html('Freshly Brewed Coffee and Cake');
    break;
    case 600:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 601:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 602:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 611:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 612:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 615:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 616:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 620:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 621:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 622:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="snow.png" />');
    $(".sug").html('Hot Chocolate and Cookies')
    break;
    case 701:

    case 800:
    $(".weather").html("<p>" + response.weather[0].description + "</p>");
    $(".weather").append('<img id="theImg" src="Img/sunny.png" />');
    $(".sug").html('Refreshers Beverages and French Toast')
    break;
    }
    $(".city-name").html(response.name);
    $(".humidity").html(response.main.humidity + "%");
}
