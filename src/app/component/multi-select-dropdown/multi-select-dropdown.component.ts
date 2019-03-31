import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeviewItem, TreeviewConfig, TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem } from 'ngx-treeview';
import { _, isNil, remove, reverse } from 'lodash';
import { SkillService } from './../../skill.service';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css'],
  providers: [
    { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
  ]
})

export class MultiSelectDropDownComponent implements OnInit {
  name: string;
  rows: string[];
  thecontents: string;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 400
  });
  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];
  constructor(private skillService: SkillService) { }
  ngOnInit() {
    this.name = "Multi Select DropDown - Copy to clipboard";
    this.bindSkills();
  }
  bindSkills() {
    this.items = this.skillService.getAllSkillsInTreeViewFormat();
  }
  onFilterChange(value: string) { }

  onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
    this.thecontents = "";
    this.rows = [];
    if (!(_.size(downlineItems) == 0)) {
      downlineItems.forEach(downlineItem => {
        const item = downlineItem.item;
        const value = item.value;
        const texts = [item.text];
        let parent = downlineItem.parent;
        while (!isNil(parent)) {
          texts.push(parent.item.text);
          parent = parent.parent;
        }
        const reverseTexts = reverse(texts);
        const row = `${reverseTexts.join(' -> ')} : ${value}`;
        this.rows.push(row);

      });

    } this.CopyToClipBoard(this.rows);
  }


  CopyToClipBoard(f: any) {
    try {
      let bindCopyToClipBoardTextValue;
      var clipBoard = document.createElement("textarea");
      document.body.appendChild(clipBoard);
      bindCopyToClipBoardTextValue = this.bindCopyToClipBoardText(f);

      clipBoard.value = (_.size(f) == 0) ? " " : bindCopyToClipBoardTextValue.replace(/<br>/g, "\n").trim();
      clipBoard.select();
      document.execCommand("copy");
      clipBoard.remove();
    } catch (e) {
      alert("Your browser doesn't support copying towards the clipboard. Copy the text manually.")
    }
  }
  bindCopyToClipBoardText(f: any) {
    var clipBoardContent = "";
    _.forEach(f, function (value) {
      clipBoardContent = clipBoardContent + value + "<br>";
    });
    return clipBoardContent.trim();
  }
}