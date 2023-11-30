import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-member.component.html',
  styleUrl: './create-member.component.css'
})
export class CreateMemberComponent implements OnInit {

  member: any = {}

  constructor(
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  createPost() {
    this.member.date = new Date();
    this.http.post('http://localhost:7276/api/members', this.member).subscribe(
      response => { this.home() },
      error => { console.log (error)}
    );
  }

  cancel(){
    console.log("cancel create post");
  }

  home() {

  }

}
