import * as Yup from "yup";

export const LoginwithEmailSchema = (
  emailrequire,
  validEmailRequire,
  passwordRequire
) => {
  return Yup.object().shape({
    email: Yup.string(emailrequire)
      .email(validEmailRequire)
      .required(emailrequire),
    password: Yup.string(passwordRequire).required()
  });
};

export const UpdateProfileSchema = (
         firstNameRequired,
         nameRequired,
         emailRequired,
         validEmailRequired,
         passwordValidation,
         toShortValidation,
  toLongValidation,
         comparePasswordValidation
       ) => {
         return Yup.object().shape({
           first_name: Yup.string(firstNameRequired).required(
             firstNameRequired
           ),
           name: Yup.string(nameRequired).required(nameRequired),
           email: Yup.string(emailRequired)
             .email(validEmailRequired)
             .required(emailRequired),
           password: Yup.string()
             .min(6, toShortValidation)
             .max(16, toLongValidation)
             .required(passwordValidation),
           repear_password: Yup.string().when("password", {
             is: (val) => (val && val.length > 0 ? true : false),
             then: Yup.string().oneOf(
               [Yup.ref("password")],
               comparePasswordValidation
             ),
           }),
         });
};
       
export const AdminAddUserSchema = (
  nameRequired,
  firstNameRequired,
  emailRequired,
  validEmailRequired,
  passwordValidation,
  toShortValidation,
  toLongValidation,
) => {
  return Yup.object().shape({
    name: Yup.string(nameRequired).required(nameRequired),
    first_name: Yup.string(firstNameRequired).required(firstNameRequired),
    email: Yup.string(emailRequired)
      .email(validEmailRequired)
      .required(emailRequired),
    password: Yup.string()
      .min(6, toShortValidation)
      .max(16, toLongValidation)
      .required(passwordValidation),
  });
};


export const EditUserSchema = (
  nameRequired,
  firstNameRequired,
  emailRequired,
  validEmailRequired,
) => {
  return Yup.object().shape({
    name: Yup.string(nameRequired).required(nameRequired),
    first_name: Yup.string(firstNameRequired).required(firstNameRequired),
    email: Yup.string(emailRequired)
      .email(validEmailRequired)
      .required(emailRequired),
  });
};


export const AdminAddReportSchema = (
  nameRequired,
  descriptionRequired,
  identifierRequired,
) => {
  return Yup.object().shape({
    name: Yup.string(nameRequired).required(nameRequired),
    description: Yup.string(descriptionRequired).required(descriptionRequired),
    identifier: Yup.string(identifierRequired).required(identifierRequired),
  });
};
export const AdminEditUserSchema = (
  nameRequired,
  firstNameRequired,
  emailRequired,
  validEmailRequired,
) => {
  return Yup.object().shape({
    name: Yup.string(nameRequired).required(nameRequired),
    first_name: Yup.string(firstNameRequired).required(firstNameRequired),
    email: Yup.string(emailRequired)
      .email(validEmailRequired)
      .required(emailRequired),
  });
};

export const ManageProfileSchema = (
  firstNameRequired,
  nameRequired,
  emailRequired,
  validEmailRequired,
) => {
  return Yup.object().shape({
    first_name: Yup.string(firstNameRequired).required(firstNameRequired),
    name: Yup.string(nameRequired).required(nameRequired),
    email: Yup.string(emailRequired)
      .email(validEmailRequired)
      .required(emailRequired),
    
  });
};


export const FreeTextSchema = Yup.object().shape({
  input_Value: Yup.string("Please enter values").required()
});

export const ForgotPasswordSchema = (emailrequire, validEmailRequire) =>
  Yup.object().shape({
    email: Yup.string(emailrequire)
      .email(validEmailRequire)
      .required(emailrequire)
  });

export const CreateEventSchema = (
         tooShort,
         tooLong,
         eventErrorMessage,
         locationErrorMessage
       ) =>
         Yup.object().shape({
           event_name: Yup.string()
             .min(2, tooShort)
             .max(50, tooLong)
             .required(eventErrorMessage),
           location: Yup.string().required(locationErrorMessage)
         });

export const CreateGroupSchema = (
         tooShort,
         tooLong,
         groupErrorMessage,
         descriptionErrorMessage
       ) =>
         Yup.object().shape({
           group_name: Yup.string()
             .min(2, tooShort)
             .max(50, tooLong)
             .required(groupErrorMessage),
         });

export const CreateMailSchema = (
         tooShort,
         tooLong,
         groupErrorMessage,
         DescriptionErrorMessage
       ) =>
         Yup.object().shape({
           name: Yup.string()
             .min(2, tooShort)
             .max(50, tooLong)
             .required(groupErrorMessage),
         });


export const ChangePasswordSchema =( tooShort,
  tooLong,
  passwordRequire,
  samePasswordError)=> Yup.object().shape({
  newpass: Yup.string()
    .min(6, tooShort)
    .max(16, tooLong)
    .required(passwordRequire),
  confirmPassword: Yup.string().when("newpass", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("newpass")], samePasswordError)
  })
  });


  
export const RecoverPasswordSchema = (
         currentPasswordValidation,
         toShortValidation,
         toLongValidation,
         passwordValidation,
         comparePasswordValidation
       ) =>
         Yup.object().shape({
           current_password: Yup.string(currentPasswordValidation).required(
             currentPasswordValidation
           ),
           new_password: Yup.string()
             .min(6, toShortValidation)
             .max(16, toLongValidation)
             .required(passwordValidation),
           repear_password: Yup.string().when("new_password", {
             is: val => (val && val.length > 0 ? true : false),
             then: Yup.string().oneOf(
               [Yup.ref("new_password")],
               comparePasswordValidation
             )
           })
         });
