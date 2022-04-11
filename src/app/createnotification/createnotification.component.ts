import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationService } from '../notification.service';

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
 

  constructor(private service :NotificationService,private _snackBar: MatSnackBar) { }


  ngOnInit() {
  }

    // }
   
    createNotification() {

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
