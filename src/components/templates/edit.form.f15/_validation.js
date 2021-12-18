import  * as yup from "yup";

export const userSchema = yup.object({
    company:yup.string().min(3),
    first_name:yup.string().min(3).required(),
    last_name:yup.string().min(3).required(),
})
export const nameV = yup.object().shape({name:yup.string().min(4).required()})
export const lastV = yup.object().shape({last:yup.string().min(4).required()})

export async function validatorCustom(){
    const error = await nameV.isValid({image:''})
    if(error){
        return "name da error"
    }else return null
}