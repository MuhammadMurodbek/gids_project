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
  {label:'UZS', value:'sum'},
  {label:'RUBL', value:'ruble'},
  {label:'USD',value:'dollar'}
]
export const CurrencyProp = {
  sum:'SUM',
  ruble:'RUBL',
  dollar:'USD'
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