import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux";
import Reactotron from "../../app/config/ReactotronConfig";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = Reactotron.createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
