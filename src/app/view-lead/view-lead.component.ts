import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  Companyname: any;
  email: any;
  mobile: any;
  projectvalue: any;
  status: any; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arul', Companyname: 'Quest golobal', email: 'arul@gmail.com', mobile:'0987654321',  projectvalue: '250000', status: 'pending', },
  {position: 1, name: 'Arul', Companyname: 'Quest golobal', email: 'arul@gmail.com', mobile:'0987654321',  projectvalue: '250000', status: 'pending', },
  {position: 1, name: 'Arul', Companyname: 'Quest golobal', email: 'arul@gmail.com', mobile:'0987654321',  projectvalue: '250000', status: 'pending', },
  {position: 1, name: 'Arul', Companyname: 'Quest golobal', email: 'arul@gmail.com', mobile:'0987654321',  projectvalue: '250000', status: 'pending', },
 

];

@Component({
  selector: 'app-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrls: ['./view-lead.component.css']
})
export class ViewLeadComponent {
  displayedColumns: string[] = ['position', 'name', 'Company name', 'email', 'mobile', 'project value', 'status', 'edit','delete'];
  dataSource = ELEMENT_DATA;
}
