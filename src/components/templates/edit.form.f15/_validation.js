import  * as yup from "yup";

export const userSchema = yup.object().shape({
    city:yup.object().required(),
    company:yup.string().min(3).required(),
    country:yup.object().required(),
    first_name:yup.string().min(3).required(),
    last_name:yup.string().min(3).required(),
})