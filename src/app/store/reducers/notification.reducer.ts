import {Action, createReducer, on} from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';
export const customerFeatureKey = 'customer';
export const initialState: any = {
  data: null
};

export const notificationReducer = createReducer(
  initialState,
   on(notificationActions.getNotificationsSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  }),
   on(notificationActions.getNotifications, (state) => ({...state})),
);

export function NotificationReducer(state: any | undefined, action: Action): any {
  return notificationReducer(state, action);
}
