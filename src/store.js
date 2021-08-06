import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  studentListReducer,
  studentDeleteReducer,
} from "./reducers/studentsReducer";
const reducers = combineReducers({
  studentsList: studentListReducer,
  studentDelete: studentDeleteReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
