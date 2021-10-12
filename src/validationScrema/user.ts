import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Please enter valid email address.").required("Email is Required"),
  password: Yup.string().required("Password is required."),
  acceptTerms: Yup.boolean().oneOf([true], "Please accept term and condition.")
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required")
});

const AddEditMessageSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  body: Yup.string()
    .min(50, "Too Short!")
    .max(700, "Too Long!")
    .required("Required")
});

const Login1Schema = Yup.object().shape({
  email: Yup.string().required("Email or Phonenumber is Required"),
  password: Yup.string().required("Password is Required.")
});

export { SignupSchema, LoginSchema, ForgotPasswordSchema, AddEditMessageSchema, Login1Schema };
