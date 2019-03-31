import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeviewItem } from 'ngx-treeview'

@Injectable()
export class SkillService {
  user = {
    skills: [
      { id: 1, name: 'Asp.Net', selected: false },
      { id: 2, name: 'C#', selected: false },
      { id: 3, name: 'php', selected: false },
      { id: 4, name: 'SQL', selected: false },
      { id: 5, name: 'Python', selected: false },
      { id: 6, name: 'Angular 2+', selected: false },
      { id: 7, name: 'HTML', selected: false },
      { id: 8, name: 'CSS', selected: false },
      { id: 9, name: 'Javascript', selected: false },
      { id: 10, name: 'Jquery', selected: false },
      { id: 11, name: 'Oracle', selected: false },
      { id: 12, name: 'Java', selected: false },
      { id: 13, name: 'J2EE', selected: false },
      { id: 14, name: 'Nodejs', selected: false },
      { id: 15, name: 'Micro Services', selected: false },
    ],
  }

  constructor() { }
  getAllSkill(): any {
    return this.user.skills;
  }
  getAllSkillsInTreeViewFormat(): any {
    return this.getSkills();
  }
  getSkills(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Children', value: 1, children: [
        { text: 'Baby 3-5', value: 11, checked: false },
        { text: 'Baby 6-8', value: 12, checked: false },
        { text: 'Baby 9-12', value: 13, checked: false }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [{
            text: 'Frontend', value: 911, children: [
              { text: 'Angular 1', value: 9111, checked: false },
              { text: 'Angular 2', value: 9112, checked: false },
              { text: 'ReactJS', value: 9113, checked: false }
            ]
          }, {
            text: 'Backend', value: 912, children: [
              { text: 'C#', value: 9121, checked: false },
              { text: 'Java', value: 9122, checked: false },
              { text: 'Python', value: 9123, checked: false }
            ]
          }]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921, checked: false },
            { text: 'Security', value: 922, checked: false }
          ]
        }
      ]
    });
    const teenCategory = new TreeviewItem({
      text: 'Teen', value: 2, children: [
        { text: 'Adventure', value: 21, checked: false },
        { text: 'Science', value: 22, checked: false }
      ]
    });
    return [childrenCategory, itCategory, teenCategory];
  }
}