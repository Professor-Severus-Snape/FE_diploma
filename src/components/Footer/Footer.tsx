import { useEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import './footer.css';

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const refElement = useRef<HTMLDivElement | null>(null);

  const handleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);

    if (!isClicked) {
      setIsClicked(true); // после первого клика (чтобы не было прокрутки при перезагрузке стр-цы)
    }
  };

  // Сработает при изменении состояния isCollapsed:
  useEffect(() => {
    // Прокручиваем только если элемент не коллабирован:
    if (isClicked && refElement.current && !isCollapsed) {
      refElement.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isClicked, isCollapsed]);

  return (
    <footer id="footer" className="footer">
      {!isCollapsed && (
        <div className="footer__top-container">
          <div className="footer__contacts">
            <h4 className="footer__title">Свяжитесь с нами</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <a
                  href="tel:8 (800) 000 00 00"
                  className="footer__contact-link phone"
                ></a>
                <span className="footer__contact">8 (800) 000 00 00</span>
              </li>
              <li className="footer__contact-item">
                <a
                  href="mailto:inbox@mail.ru"
                  className="footer__contact-link mail"
                ></a>
                <span className="footer__contact">inbox@mail.ru</span>
              </li>
              <li className="footer__contact-item">
                <a
                  href="skype:tu.train.tickets?call"
                  className="footer__contact-link skype"
                ></a>
                <span className="footer__contact">tu.train.tickets</span>
              </li>
              <li className="footer__contact-item">
                <a
                  href="https://yandex.ru/maps/?text=Москва, Московская 27-35 555 555"
                  target="_blank"
                  className="footer__contact-link map"
                ></a>
                <span className="footer__contact">
                  г. Москва
                  <br />
                  ул. Московская 27-35
                  <br />
                  555 555
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__subscribe">
            <h4 className="footer__title">Подписка</h4>
            <p className="footer__text">Будьте в курсе событий</p>
            <form className="subscribe-form">
              <label className="subscribe-form__label visually-hidden">
                Подписаться
              </label>
              <input
                type="email"
                className="subscribe-form__input"
                placeholder="e-mail"
              />
              <button type="submit" className="subscribe-form__btn">
                Отправить
              </button>
            </form>
            <h4 className="footer__title">Подписывайтесь на нас</h4>
            <ul className="footer__subscribe-list">
              <li className="footer__subscribe-item">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="footer__subscribe-link youtube"
                ></a>
              </li>
              <li className="footer__subscribe-item">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="footer__subscribe-link linkedin"
                ></a>
              </li>
              <li className="footer__subscribe-item">
                <a
                  href="https://accounts.google.com/"
                  target="_blank"
                  className="footer__subscribe-link google"
                ></a>
              </li>
              <li className="footer__subscribe-item">
                <a
                  href="http://facebook.com/"
                  target="_blank"
                  className="footer__subscribe-link facebook"
                ></a>
              </li>
              <li className="footer__subscribe-item">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="footer__subscribe-link twitter"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="footer__bottom-container" ref={refElement}>
        <Logo />
        <span
          className={isCollapsed ? 'footer__down' : 'footer__up'}
          onClick={handleCollapse}
        ></span>
        <a
          href="https://github.com/Professor-Severus-Snape"
          target="_blank"
          className="footer__copyrights"
        >
          2025 Julia Fokanova
        </a>
      </div>
    </footer>
  );
};

export default Footer;
