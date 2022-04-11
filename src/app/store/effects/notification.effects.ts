

  import { NotificationService } from '../../notification.service';
  import { exhaustMap, map } from 'rxjs/operators';
  import {
    getNotifications, getNotificationsSuccess
  } from '../actions/notification.action';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class NotificationEffects {
    constructor(
      private actions$: Actions,
      private notificationService: NotificationService,
    ) {}
  
    getAllNotifications$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getNotifications),
        exhaustMap(() => {
          return this.notificationService.getAllNotifications().pipe(
              
            map((data) => {
                console.log(" user effetcs is success",data)
              return getNotificationsSuccess({data});
            })
          );
        })
      );
    });
  
   
  
  }
  
