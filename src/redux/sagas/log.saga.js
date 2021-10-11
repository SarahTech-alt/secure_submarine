import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchLogs() {
    const response = yield axios.get('/api/logs');
    yield console.log(response);
    yield put({ type: 'SET_LOGS', payload: response.data });
  }

  function* logSaga() {
    yield takeLatest('FETCH_LOGS', fetchLogs);
  }



export default logSaga;