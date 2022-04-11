import { createFeatureSelector, createSelector } from '@ngrx/store';

const getPostsState = createFeatureSelector<any>('allstate');

export const getNotificationSelector = createSelector(getPostsState, (state)=>{
    return state;
});

