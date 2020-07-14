import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import * as birthdateData from '../../json-data/birthday-json.json';

export interface WeekDays{
  day: string,
  names ?: any
}
@Component({
  selector: 'app-day-finder',
  templateUrl: './day-finder.component.html',
  styleUrls: ['./day-finder.component.scss']
})
export class DayFinderComponent implements OnInit {
  formUserData: FormGroup;
  birthDate : any  = (birthdateData as any).default;

  days =[
    {day: 'sun', names:[], grid:0 },
    {day: 'mon', names:[], grid:0 },
    {day: 'tue', names:[], grid:0 },
    {day: 'wed', names:[], grid:0 },
    {day: 'thu', names:[], grid:0 },
    {day: 'fri', names:[], grid:0 }, 
    {day: 'sat', names:[], grid:0 }
  ]
  jsonOutput : any;
  hasResults: boolean = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formUserData = this.formBuilder.group({
      year:['',[]],
    })
    this.sortByDate();
    this.jsonOutput = JSON.stringify(this.birthDate, null, 4)
  }

  get userFormValidation() { return this.formUserData.controls; }
  sortByDate =() =>{
    this.birthDate.sort((a,b) => {
      return <any>new Date(b.birthday) - <any>new Date(a.birthday);
    });
  }
  submitForm(){
    if(this.hasResults == true){
      this.clearData(); return;
    }
    this.hasResults = !this.hasResults;
    this.birthDate.forEach(name => {
      let original_date = new Date(name.birthday);
      let inputYear = original_date.setFullYear(this.formUserData.value.year);
      let dayName =new Date(inputYear).getDay()
      let currentName =  (name.name);
      let initials = currentName.split(' ').map(i => i.charAt(0));
      initials= initials.join('');
      this.days[dayName].names.push(initials);
    });
    this.getGridCount(this.days);    
  }

  getGridCount= (arr) =>{
    this.days.forEach(day =>{
      let grid = Math.ceil(day.names.length/2);
      grid = 100/grid;
      day["grid"] =grid;
    })
  }
  clearData = () =>{
    this.hasResults = !this.hasResults;
    this.days =[
      {day: 'sun', names:[], grid:0 },
      {day: 'mon', names:[], grid:0 },
      {day: 'tue', names:[], grid:0 },
      {day: 'wed', names:[], grid:0 },
      {day: 'thu', names:[], grid:0 },
      {day: 'fri', names:[], grid:0 }, 
      {day: 'sat', names:[], grid:0 }
    ]
  }
  getRandomColor = () =>{
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    var color = "rgb(" +r +","+g+","+b+")";
    return color;
  }
}
