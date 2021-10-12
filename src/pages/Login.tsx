import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Login1Schema } from "../validationScrema/user";
import { Store } from "../redux/Actions";
import { login } from "../redux/action";
import { Progress } from "reactstrap";
import { getToken } from "../util/utils";

export default function Login () {
  const { push } = useHistory();
  const isLoggedin:boolean =  useSelector((state: Store) => state.userDataReducer.isLoggedin); //JSON.parse(getToken("isLoggedIn") || 'false');
  const progres: boolean = useSelector((state: Store) => state.userDataReducer.progress);
  //   const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Login1Schema,
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    console.log("IS KENKOE LOGIN", isLoggedin);

    }
  });

  useEffect(() => {
    console.log("IS KENKOE LOGIN", isLoggedin);
    if (isLoggedin) {
      push("/home");
    }
  }, [isLoggedin]);
  const { errors, touched } = formik;
  return (
        <div className="app d-flex flex-column">
            <div className="content">
                <div className="login-page">
                    <div className="container">
                        <div className="login-container">
                            <div className="login-logo text-center">
                                <img src="/img/logo-small.png" height="60" alt="Logo Dark" />
                            </div>
                            <div className="login-box">
                                <form>
                                    <h1 className="text-primary fw-light mb-4 pb-1">Login</h1>
                                    <div className="form-group mb-3 ">
                                      <input type="text" className="form-control form-control-lg text-center" placeholder="Phone Number or Email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                        name="email"/>
                                        {errors.email && touched.email && (
                                            <div className="text-danger mt-2">{errors.email}</div>
                                        )}

                                    </div>
                                    <div className="form-group mb-3">
                                      <input type="text" className="form-control form-control-lg text-center" placeholder="Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                        name="password"/>
                                        {errors.password && touched.password && (
                                            <div className="text-danger mt-2">{errors.password}</div>
                                        )}

                                    </div>
                                    
                                    <div className="custom-control custom-checkbox mx-auto p-0 py-1 my-3 my-md-4 ms-4">
                                        <input type="checkbox" className="custom-control-input"
                                            id="remember-me" />
                                        <label className="custom-control-label position-relative"
                                            htmlFor="remember-me">Remember Me</label>
                  </div>
                  {progres && <div style={{ textAlign: "center", width: "360px" }}>
                  {/* <Spinner color="primary" ><span></span> </Spinner> */}
                    <Progress animated value={100} />
                    <br/> 
              </div>}

                                    <div className="form-action">
                                        <button type="button" className="btn btn-primary-theme btn-lg d-block w-100" onClick={() => { formik.handleSubmit(); }}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
