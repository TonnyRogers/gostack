import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
// import {  } from './actions';

export function* getall() {}

export default all(takeLatest('@', getall));
