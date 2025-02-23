import { useState } from 'react';
import './modal.css';

// TODO: заголовок, текст и тип модального окна брать из глобального стейта!
const Modal = () => {
  let type = 'error';
  type = 'warning';

  // TODO: ссылаться на глобальный стейт!
  const [isOpen, setIsOpen] = useState(true);

  const handlerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            {type === 'error' ? (
              <header className="modal__header modal__header_error">
                <span className="modal__icon modal__icon_error"></span>
              </header>
            ) : (
              <header className="modal__header modal__header_warning">
                <span className="modal__icon modal__icon_warning"></span>
              </header>
            )}

            <div className="modal__info">
              <h3 className="modal__title">
                {/* {title} */}
                Таким образом консультация с широким активом в значительной
                степени обуславливает создание модели развития.
              </h3>

              <p className="modal__text">
                {/* {text} */}
                Повседневная практика показывает, что сложившаяся структура
                организации играет важную роль в формировании существенных
                финансовых и административных
              </p>
            </div>

            <div className="modal__footer">
              <div className="modal__close" onClick={handlerClose}>
                Понятно
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
