import PlaygroundActions from "../redux/playground";
import { call, put } from "redux-saga/effects";

export function* playgroundTestSaga(api, action) {
  const response = yield call(api.getUser, action.username);
  if (response.ok) {
    // yield console.log(response);
    yield put(PlaygroundActions.playground1Result(response.data));
  }
}
