import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().trim().required("Input your username").min(4),
  email: yup.string().email("Input your email").required("Put email please"),
  password: yup.string().required("Input Password").min(8),
  terms: yup.boolean().oneOf([true], "Accept or don't, IDC"),
});

export default formSchema;
