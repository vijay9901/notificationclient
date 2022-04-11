import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationService } from '../notification.service';
import { Store } from '@ngrx/store';
import { getNotifications } from '../store/actions/notification.action'

@Component({
  selector: 'app-createnotification',
  templateUrl: './createnotification.component.html',
  styleUrls: ['./createnotification.component.css'],
  providers: [NotificationService]
})
export class CreatenotificationComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  companyname: string;
  companynumber:number;
  companytype:string;
  market:string;
  public notifications:any;
  public columns = ['companyname','companynumber','companytype','market'];


  constructor(private service :NotificationService,private _snackBar: MatSnackBar,private store: Store<any>) { }

 callState() {
  this.store.select('allstate').subscribe((data)=>{
    const { notificationState } = data;
    this.notifications = notificationState.data;
    console.log('  this.notifications  ', this.notifications )
  })
  this.store.dispatch(getNotifications());
  }

  ngOnInit() {

  this.callState()
  
  }

    createNotification() {
      this.store.dispatch(getNotifications());
      this.successMsg = '';
      this.errorMsg = '';
      this.service.createNotification( this.companyname , this.companynumber,this.companytype, this.market)
        .subscribe((notification: any) => {
      
          this.companyname = '';
          this.companynumber = null;
          this.companytype = '';
          this.market = '';

          this.successMsg = `Notification created successfully`;
          this._snackBar.open( this.successMsg , "", {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });

          this.callState()
   },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this._snackBar.open(error.error.message, "", {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-warn']
          });
        });
    }
}
