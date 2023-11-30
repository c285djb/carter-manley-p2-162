import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-members.component.html',
  styleUrl: './view-members.component.css'
})
export class ViewMembersComponent implements OnInit{


  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {

    this.httpClient.get('http://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    }
    );
  }
}
