import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NotificationService } from '../notification.service';

interface Notification {
  companyId: string;
  notifications: any
    
  };

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [NotificationService]
})
export class NotificationComponent implements OnInit {

  name = 'Angular';
  public status:any;
  public companyName:any;
  constructor(private service :NotificationService){

    this.service.getAllNotifications()
    .subscribe((company: any) => {
      this.companyName = company;
    })
    
  }
  onChange(companyname:any) {
    console.log(companyname);
  let  companyId =  this.companyName.filter(el => el.companyname === companyname)[0].companyId;
  console.log(" companyId ",companyId)

    this.service.getNotifications(companyId)
    .subscribe((notification: any) => {
      this.status = [{
        companyId :this.comapanyName( notification.companyId),
        notifications:this.notify(notification)
      }];
      console.log(    this.status )
    })
}
  matchDates(dates:any){ 
   
    return {
      senddate:dates.senddate,
      status :  moment(new Date()).isBefore(new Date(dates.senddate))
    }
  }
notify(notify:any){
  
  return notify.notifications.map(this.matchDates)
  

}

comapanyName(companyId:any){
 
 
 return  this.companyName.filter(el => el.companyId === companyId)[0].companyname;
  

}
  ngOnInit() {
 
  }

  
}
