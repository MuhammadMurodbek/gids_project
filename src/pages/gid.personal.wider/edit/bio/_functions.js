import {validatorState} from "../../custom/validator"

export const checkValidation = (state) => {
    const {city, cost, country, currency, end_date, is_male, is_female, languages, people_count, start_date, who_need, why_need} = state;
    const v_city = validatorState(city, 'object', 0, 'Shahar kiritilmagan')
    const v_cost = validatorState(cost, 'max', 0, 'Narx kiritilmagan')
    const v_country = validatorState(country, 'object', 0, 'Davlat kiritilmagan')
    const v_currency = validatorState(currency, 'object', 0, 'Valyuta kiritilmagan')
    const v_end_date = validatorState(end_date, 'string', 0, 'Sana kiritilmagan')
    const v_start_date = validatorState(start_date, 'string', 0, 'Sana kiritilmagan')
    const v_is_male = validatorState(is_male, 'boolean', 0, 'isMale kiritilmagan')
    const v_is_female = validatorState(is_female, 'boolean', 0, 'isFemale kiritilmagan')
    const v_language = validatorState(languages, 'array', 0, 'Lang kiritilmagan')
    const v_people_count = validatorState(people_count, 'max', 0, 'People count kiritilmagan')
    const v_who_need = validatorState(who_need, 'string', 0, 'Kim kerakligi kiritilmagan')
    const v_why_need = validatorState(why_need, 'string', 0, 'Sabab kiritilmagan')
    
    let gender = v_is_male || v_is_female
    
    if(
        v_city==='' && 
        v_cost==='' && 
        v_country==='' && 
        v_currency==='' && 
        v_end_date==='' && 
        v_start_date==='' && 
        gender &&
        v_language==='' && 
        v_people_count==='' &&
        v_who_need==='' &&
        v_why_need===''
    ){
        return true;
    }else {
        let error = [v_city,v_currency,v_country,v_cost,v_end_date,v_start_date,v_language,v_people_count, v_who_need,v_why_need,gender]
        // console.log(error)
        return false;
    }
}