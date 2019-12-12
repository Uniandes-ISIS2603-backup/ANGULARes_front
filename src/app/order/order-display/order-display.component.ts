import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
