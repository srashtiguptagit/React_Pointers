import {takeEvery} from 'redux-saga/effects';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATOR, logoutSaga),
    yield takeEvery(actionTypes.AUTH_ZERO, ABCSaga),
    yield takeEvery(actionTypes.ONE, ABCSaga)

}