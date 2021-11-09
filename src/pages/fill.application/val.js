import  * as yup from "yup";
export const userSchema = yup.object().shape({
    country:yup.string().required(),
    city:yup.string().required(),
    languages:yup.array().min(1).required(),
    currency:yup.string().required(),
    cost:yup.number().required(),
    end_date:yup.string().required(),
    start_date:yup.string().required(),
    why_need:yup.string().required(),
    who_need:yup.string().required(),
    people_count:yup.number().required(),
    is_male:yup.boolean().required(),
    is_female:yup.boolean().required(),
    is_consecutive:yup.boolean().required(),
    is_synchronous:yup.boolean().required(),
})
