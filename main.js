let latitude = 20.5937, longitude = 78.9629;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


var img4 = document.querySelector("#tajmahal")

var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([78.0399535, 27.1751448])
	.addTo(map);


var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);

var img6 = document.querySelector("#statue")

var marker6 = new mapboxgl.Marker({
	element: img6
})
	.setLngLat([73.7168841, 21.8380234])
	.addTo(map);

var img7 = document.querySelector("#charminar")

var marker7 = new mapboxgl.Marker({
	element: img7
})
	.setLngLat([78.4749593, 17.3540021])
	.addTo(map);