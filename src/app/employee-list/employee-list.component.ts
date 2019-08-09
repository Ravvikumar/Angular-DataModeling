import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public data = [];
  constructor( private _employeeService: DataServiceService) { }

  ngOnInit() {
    this._employeeService.getData()
    .subscribe(data => this.data = data);
  }

}
