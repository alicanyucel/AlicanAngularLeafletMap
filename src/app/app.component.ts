import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
		const map = L.map('map').setView([40.01789279126268, 32.78507770385742], 10);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.Routing.control({
			waypoints: [
				L.latLng(39.99094648786122,32.957260266727246 ),
				L.latLng(39.99969185349417, 32.902586118167676)
			]
		}).addTo(map);
	}

}
