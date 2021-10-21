/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
import { GET_PHYSICIAN } from "../constants/action-types";
import { PhysicianData } from "../Actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../action";

const initialState = {
  progress: false,
  isLoading: false,
  physicianList:[]
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: PhysicianData = initialState, action: ActionTypes) => {
    switch (action.type) {
     case GET_PHYSICIAN.GET_PHYSICIAN_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case GET_PHYSICIAN.GET_PHYSICIAN_SUCCESS:
        const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        // console.log("action.payload PHS", allPost);
        return {
          ...state,
          isLoading: false,
          physicianList: allPost
        };

      case GET_PHYSICIAN.GET_PHYSICIAN_ERROR:
        return {
          ...state,
          isLoading: false
        };

      default:
        return state;
    }
  }
);

export default reducer;
