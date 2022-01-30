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

  export function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }