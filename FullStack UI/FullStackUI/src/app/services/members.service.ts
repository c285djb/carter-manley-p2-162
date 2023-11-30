import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseApiUrl : string = "https://localhost:7276";


  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]>{

    return this.http.get<Member[]>(this.baseApiUrl + '/api/members')

  }

  addMember(addMemberRequest: Member): Observable<Member>{
    addMemberRequest.id = '0000000-000000-0000-0000000';
    return this.http.post<Member>(this.baseApiUrl + '/api/members', addMemberRequest);
  }
}
