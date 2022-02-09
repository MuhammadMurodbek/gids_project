import { Modal} from 'antd';

export function info({title, content}) {
  Modal.info({
    title: title || 'This is a notification message',
    content: (
      <div>
          {
            content || <>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </>
          }
      </div>
    ),
    onOk() {},
  });
}

export function success({content, fn}) {
  Modal.success({
    content: content || 'some messages...some messages...',
    onOk() {
        fn()
    },
  },)
}

export function error({title, content}) {
  Modal.error({
    title: title || 'This is an error message',
    content: content || 'some messages...some messages...',
  });
}

export function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}