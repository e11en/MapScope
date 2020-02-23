import { Component } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent {
  title: string = "Incident";
  subTitle: string = "Incident Id: 123456";
  infoBlocks: InfoBlock[] = [
    new InfoBlock("Algemeen", [
      new InfoContent("Omschrijving", "Brand op 4e verdieping"),
      new InfoContent("Extern", "ID: 51684"),
      new InfoContent("Datum", "23-02-2020 15:00")
    ]),
    new InfoBlock("Locatie", [
      new InfoContent("Straat", "Korenstraat"),
      new InfoContent("Huisnummer", "18"),
      new InfoContent("Plaats", "Utrecht"),
      new InfoContent("Coordinate", "52.0159, 6.2681"),
    ]),
    new InfoBlock("Eenheden", [
      new InfoContent("Ambulance", null, ["1234"]),
      new InfoContent("Brandweer", null, ["5678"]),
      new InfoContent("Politie", null, ["9101"])
    ])
  ];
}


// TODO: Give own files
class InfoBlock {
  title: string;
  info: InfoContent[];

  constructor(title: string, info: InfoContent[]){
    this.title = title;
    this.info = info;
  }
}

class InfoContent {
  title: string;
  content: string;
  listItems: string[];

  constructor(title: string, content: string, listItems?: string[]){
    this.title = title;
    this.content = content;
    this.listItems = listItems;
  }
} 