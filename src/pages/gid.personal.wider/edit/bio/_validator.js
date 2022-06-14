import  * as yup from "yup";
export const userSchema = yup.object().shape({
    // country_api:yup.string(),
    // city_api:yup.string(),
    city:yup.number().required(),
    country:yup.number().required(),
    birthday:yup.string().required(),
    first_name:yup.string().min(3).required(),
    last_name:yup.string().min(3).required(),
    middle_name:yup.string().min(3),
    // bio:yup.string().min(3),
    gender:yup.string().min(4).required(),
})
