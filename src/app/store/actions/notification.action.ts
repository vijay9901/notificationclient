import { createAction, props } from '@ngrx/store';

export const GET_NotificationS = '[Notification] Get Notifications';
export const GET_NotificationS_SUCCESS = '[Notification] Get Notifications Success';

export const getNotifications = createAction(
  GET_NotificationS
);

export const getNotificationsSuccess = createAction(
  GET_NotificationS_SUCCESS,
  props<{ data:any;  }>()
);






