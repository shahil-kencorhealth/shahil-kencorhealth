/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import { shallow } from "enzyme";
import Login from "../pages/Login";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { ShallowMock } from "../shallow-mock";

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useHistory: () => ({ push: jest.fn() })
  };
});

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  userDataReducer: {
    loading: false,
    isLoggedin: true,
    isRegisterd: true,
    isForgotpasswordSuccess: true,
    user: Object
  }
});

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe("Input", () => {
  let Wrapper: any;

  beforeEach(() => {
    Wrapper = shallow(ShallowMock(<Login />, store));
  });

  it("Email input test", () => {
    const input = Wrapper.find("#txtEmail");

    console.log("InPUT VALUE", input.props().value);
    expect(input.props().value).toEqual("abc@gmail.com");
    expect(input.props().value).toMatchSnapshot();
  });

  it("Password input test", () => {
    const password = Wrapper.find("#txtPass");

    password.simulate("change", {
      target: {
        id: "txtPass",
        value: "abc"
      }
    });
    Wrapper.update();
    // Wrapper.find("#txtPass").instance().value = "abcdxyz";
    // const val: String = "val";
    // Wrapper.find("#txtPass").getDOMNode<HTMLInputElement>().value = val;
    // Wrapper.find("#txtPass").simulate("change");
    // password.simulate("change",
    //   { target: { value: "abcdxyz" } }
    // );

    console.log("InPUT VALUE", password.props().value);
    expect(password.props().value).toMatchSnapshot();

    // expect(password.props().value).toEqual("abcdxyz");
    // expect(password.props().value).toMatchSnapshot();
  });
});
