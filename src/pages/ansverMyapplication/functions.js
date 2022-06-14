import { Modal} from 'antd';

export function success() {
  Modal.success({
    content: 'Arizangiz bekor qilindi !!!',
  });
}

export function error() {
  Modal.error({
    title: 'Xatolik yuz berdi',
    content: 'Arizani bekor qilishda xatolik mavjud !!!',
  });
}


