
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormArray, FormBuilder, Form, FormGroup, FormControl, Validators, } from '@angular/forms';
import _ from 'lodash';
import { SkillService } from './../../skill.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  form;
  skillsList: any;
  name: string;
  clipBoardContent: string;
  thecontents: string;

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  };
  constructor(private fb: FormBuilder, private skillService: SkillService) {
  }
  ngOnInit() {
    this.name = "Multi Select - Copy to clipboard";
    this.thecontents = "";
    this.buildForm();
    this.bindSkillsList();
  }
  buildForm() {
    this.form = this.fb.group({
      skills: this.buildSkills()
    });
  }
  buildSkills() {
    const arr = this.skillService.user.skills.map(s => {
      return this.fb.control(s.selected);
    })
    return this.fb.array(arr);
  }
  bindSkillsList() {
    this.skillsList = this.skillService.getAllSkill();
  }
  submit(value) {
    this.thecontents = "";
    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
        return {
          id: this.skillsList[i].id,
          name: this.skillsList[i].name,
          selected: s,
        }
      })
    })
    this.CopyToClipBoard(f);
  }
  CopyToClipBoard(f: any) {
    try {
      var clipBoard = document.createElement("textarea");
      document.body.appendChild(clipBoard);
      clipBoard.value = this.bindCopyToClipBoardText(f) === "" ? " " : this.bindCopyToClipBoardText(f).replace(/<br>/g, "\n").trim();
      clipBoard.select();
      document.execCommand("copy");
      clipBoard.remove();
    } catch (e) {
      alert("Your browser doesn't support copying towards the clipboard. Copy the text manually.")
    }
  }
  bindCopyToClipBoardText(f: any) {
    var clipBoardContent = "";
    _.forEach(_.filter(f.skills, function (o) { return o.selected; }), function (value) {
      clipBoardContent = clipBoardContent + value.name + "<br>";
    });
    return clipBoardContent.trim();
  }
}