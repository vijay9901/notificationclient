import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { NotificationReducer} from './notification.reducer';
import { environment } from '../../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  notificationState :NotificationReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];





