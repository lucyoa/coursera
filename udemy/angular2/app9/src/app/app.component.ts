import { Component } from '@angular/core';
import { Marker } from './marker';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ MarkerService ]
})
export class AppComponent {
  // Zoom level
  zoom: number = 10;

  // Start Position
  lat: number = 42.825588;
  lng: number = -71.018029;

  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  //Markers
  markers: Marker[];


  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }

  clickedMarker(marker:Marker, index:number) {
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event:any) {
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  markerDragEnd(marker:any, $event:any) {
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this._markerService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
    if(this.markerDraggable == 'yes') {
      var isDraggable = true;

    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  removeMarker(marker) {
    for(var i=0; i<this.markers.length; i++) {
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
        this.markers.splice(i, 1);
        this._markerService.removeMarker(i);
        break;
      }
    }

  }
}
