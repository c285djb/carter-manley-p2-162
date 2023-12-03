import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-view-members',
//   standalone: true,
//   imports: [CommonModule
// ],
  templateUrl: './view-members.component.html',
  styleUrl: './view-members.component.css'
})
export class ViewMembersComponent implements OnInit{

  member: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:7276/api/members/').subscribe(member => {
      this.member = member;
    }
    );
  }


}
