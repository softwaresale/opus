import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.sass']
})
export class AssignmentListComponent implements OnInit {

  assignments = [0, 1, 2, 3].map(ct => `Assignment ${ct}`);

  constructor() { }

  ngOnInit(): void {
  }

}
