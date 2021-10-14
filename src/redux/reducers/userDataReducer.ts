/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, REGISTER, FORGOT_PASSWORD } from "../constants/action-types";
import { UserData } from "../Actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setToken, getToken } from "../../util/utils";
import { ActionTypes } from "../action";
// import { Posts } from "../Actions";

const initialState = {
  progress: false,
  isLoading: false,
  isLoggedin: JSON.parse(getToken("isLoggedIn") || 'false'),
  isKencorLoggedin: false,
  isRegisterd: false,
  isForgotpasswordSuccess: false,
  authToken:'',
  user: {},
  posts: []
};

const reducer = persistReducer(
  { storage, key: "basecode-demo", whitelist: ["authToken"] }, (state: UserData = initialState, action: ActionTypes) => {
    switch (action.type) {
      case LOGIN.LOGIN_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          isLoading: true,
          progress: true
        };
      case LOGIN.LOGIN_SUCCESS:
        // eslint-disable-next-line no-case-declarations
        const user: any = action.payload; // { email: "", password: "", caT: "AV" };
        // user.email = "abc@gmail.com";
        // user.password = "anc";
        // setToken("login-auth-token", user.response.authOutput.authToken);
        // setToken("kencor-user", JSON.stringify(user.response));
        // setToken("isLoggedIn", 'true');
        return {
          ...state,
          user: user,
          ...action.payload,
          isLoggedin:true,
          authToken:user.response.authOutput.authToken,
          isLoading: false,
          progress: true

        };

      case LOGIN.LOGIN_ERORR:
        return {
          ...state,
          ...action.payload,
          isLoggedin: false,
          isLoading: false,
          progress: false
        };

      case REGISTER.REGISTER_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          isLoading: true
        };
      case REGISTER.REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isRegisterd: true,
          isLoading: false
        };
      case REGISTER.REGISTER_ERORR:
        return {
          ...state,
          ...action.payload,
          isRegisterd: false,
          isLoading: false
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_INITLIZATION:
        return {
          ...state,
          ...action.payload,
          isLoading: true
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isForgotpasswordSuccess: true,
          isLoading: false
        };
      case FORGOT_PASSWORD.FORGOT_PASSWORD_ERORR:
        return {
          ...state,
          ...action.payload,
          isForgotpasswordSuccess: false,
          isLoading: false
        };
 /*     case GET_POSTS.GET_POSTS_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case GET_POSTS.GET_POSTS_SUCCESS:
        const allPost = action.payload; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        return {
          ...state,
          isLoading: false,
          posts: allPost
        };

      case GET_POSTS.GET_POSTS_ERROR:
        return {
          ...state,
          isLoading: false
        };

      case ADD_POSTS.ADD_POSTS_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case ADD_POSTS.ADD_POSTS_SUCCESS:
        const newPost = action.payload || []; // [{ id: 2, body: "Abcd", title: "title", userId: 3 }, { id: 2, body: "Abcd", title: "title", userId: 3 }];
        const posts = state.posts;
        const arypost = Object.values(posts);
        arypost.unshift(newPost);
        return {
          ...state,
          isLoading: false,
          posts: arypost
        };

      case ADD_POSTS.ADD_POSTS_ERROR:
        return {
          ...state,
          isLoading: false
        };

      case UPDATE_POSTS.UPDATE_POSTS_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case UPDATE_POSTS.UPDATE_POSTS_SUCCESS:
        const updatePost: any = action.payload;
        const id = updatePost.id;
        const post = updatePost.post;
        const toupdatePost = Object.values(state.posts);
        const updated = toupdatePost.map(item => {
          if (item.id === id) {
            item.title = post.title;
            item.body = post.body;
          }
          return item;
        });

        return {
          ...state,
          isLoading: false,
          posts: updated
        };

      case UPDATE_POSTS.UPDATE_POSTS_ERROR:
        return {
          ...state,
          isLoading: false
        };

      case DELETE_POSTS.DELETE_POSTS_INITIALIZATION:
        return {
          ...state,
          isLoading: true
        };

      case DELETE_POSTS.DELETE_POSTS_SUCCESS:
        const i = action.payload;
        const del = Object.values(state.posts) || [];
        const deleted = del.filter((item) => item.id !== i);
        return {
          ...state,
          isLoading: false,
          posts: deleted
        };

      case DELETE_POSTS.DELETE_POSTS_ERROR:
        return {
          ...state,
          isLoading: false
        };*/

      default:
        return state;
    }
  }
);

export default reducer;
