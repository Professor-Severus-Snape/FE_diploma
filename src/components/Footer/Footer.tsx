import { useEffect, useRef, useState } from 'react';
import Contacts from '../Contacts/Contacts';
import Copyrights from '../Copyrights/Copyrights';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
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
            <Contacts />
          </div>

          <div className="footer__subscribe">
            <div className="footer__subscribe-form-container">
              <h4 className="footer__title">Подписка</h4>
              <p className="footer__text">Будьте в курсе событий</p>
              <SubscribeForm />
            </div>
            <div className="footer__socials">
              <h4 className="footer__title">Подписывайтесь на нас</h4>
              <Socials />
            </div>
          </div>
        </div>
      )}

      <div className="footer__bottom-container" ref={refElement}>
        <Logo />
        <span
          className={isCollapsed ? 'footer__down' : 'footer__up'}
          title={isCollapsed ? 'развернуть' : 'свернуть'}
          onClick={handleCollapse}
        ></span>
        <Copyrights />
      </div>
    </footer>
  );
};

export default Footer;
