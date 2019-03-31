import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})

export class SimpleComponent implements OnInit {
  name: string;
  item: string;
  thecontents: string;

  constructor() { }
  ngOnInit() {
    this.name = "Simple - Copy to clipboard";
  }
  onClick() {
    this.thecontents = "";
    this.CopyToClipBoard();
  }

  CopyToClipBoard() {
    console.log(this.item)
    try {
      var clipBoard = document.createElement("textarea");
      document.body.appendChild(clipBoard);
      clipBoard.value = (this.item == undefined || this.item == "") ? " " : this.item.replace(/<br>/g, "\n").trim();
      clipBoard.select();
      document.execCommand("copy");
      clipBoard.remove();
    } catch (e) {
      alert("Your browser doesn't support copying towards the clipboard. Copy the text manually.")
    }
  }
}