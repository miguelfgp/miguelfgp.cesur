$(document).ready(function() {
    $( "select" ).change(function () {
        $('#result').empty();
        let value = "";
        $( "select option:selected").each(function() {
            value = $( this ).val();
        });
        weatherRaw = getWeather(value);

        weatherRaw.then(function(weather) {
            var ul = document.createElement("ul");
            var li = '';
            var content = '';
            ul.setAttribute("id", "weather");

            for (attr in weather){
                li = document.createElement("li");
                content = document.createTextNode(attr + ': ' + weather[attr]);
                li.appendChild(content);
                ul.appendChild(li);
            }

            $( "#result" ).append(ul);
        });
    })
});

function getWeather(val){
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=%s&appid=541bcc0e0611a32e3becec862a2525dc&units=metric';
    url = url.replace('%s', val);

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var weatherRaw = {}

            weatherRaw['humidity'] = data['main']['humidity'] + "%";
            weatherRaw['temp_max'] = data['main']['temp_max'] + " ºC";
            weatherRaw['temp_min'] = data['main']['temp_min'] + " ºC";
            weatherRaw['wind'] = data['wind']['speed'] + " m/s";
            weatherRaw['description'] = data['weather'][0]['description'];

            return weatherRaw;
        })
        .catch((err) => {
            console.log(err);
        })
}