import { Modal } from 'antd';

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
  
  export function success() {
    Modal.success({
      content: 'Arizangiz muvaffaqiyatli junatildi !!!',
    });

  }
  
  export function error() {
    Modal.error({
      title: 'Arizangiz junatilmadi',
      content: 'Arizani junatishda xatolik mavjud...',
    });
  }
  
  export function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }