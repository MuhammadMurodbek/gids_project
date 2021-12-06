import  * as yup from "yup";

// export const userSchema = yup.object({
//     phone_number:yup.number(),
//     email:yup.email(),
//     password:yup.string(),
// })
export const validationSchema = yup.object().shape({
    phone_number: yup
      .number()
      .required("Name is a required field"),
    email: yup
      .string()
      .email()
      .required("Email is a required field"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    password1: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    password2: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    // password2: yup
    //   .string()
    //   .required("Please confirm your password")
    //   .when("password1", {
    //     is: password1 => (password1 && password1.length > 0 ? true : false),
    //     then: yup.string().oneOf([yup.ref("password1")], "Password doesn't match")
    //   })
  });