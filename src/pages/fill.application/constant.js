import { Modal } from 'antd';
export const defaultState = {country:{},city:{},end_date:'',start_date:'',languages:[],cost:0,currency:{},people_count:0, is_male:false, is_female:false, who_need:'', why_need:'', is_synchronous:false, is_consecutive:false}

export function info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  export function warning(data) {
    Modal.warning({
      title: data,
      onOk() {
          window.location.href='/'
      },
    });
  }
export const currency = [
  {label:'UZS', value:'UZS'},
  {label:'RUB', value:'RUB'},
  {label:'USD',value:'USD'},
  {label:'EUR',value:'EUR'}
]
export const CurrencyProp = {
  UZS:'UZS',
  RUB:'RUB',
  USD:'USD'
}
export const defaultApiValueReset = {
  who_need:'',
  why_need:'',
  currency:'',
  people_count:'',
  is_writer:false,
  is_consecutive:false,
  is_synchronous:false,
  start_date:'',
  end_date:'',
  country:'',
  city:{},
  is_male:false,
  is_female:false,
  languages:[],
  consent:false

}