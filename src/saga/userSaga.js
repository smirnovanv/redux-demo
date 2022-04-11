import {put, takeEvery, call} from 'redux-saga/effects';
import { addManyCustomersAction, FETCH_CUSTOMERS } from 'store/customerReducer';

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchUserWorker() {
  const data = yield call(fetchUsers);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(addManyCustomersAction(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, fetchUserWorker);
}