import {put} from 'redux-saga/effects';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirt-date');
    yield put({
        type: actionTypes.AUTH-INFO
    });
}