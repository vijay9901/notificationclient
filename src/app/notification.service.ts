import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Notification {
  companyId: string;
  notifications: any;
}

@Injectable({
  providedIn: 'root'
})


export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(companyId:string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`http://localhost:3000/notification/company/${companyId}`);
  }
  getAllNotifications(): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/notification/companies-list`);
  }

  createNotification(companyname: string,companynumber:number,companytype:string,market:string): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/notification/company-details`,{companyname,companytype,companynumber,market});
  }
   
     
}
