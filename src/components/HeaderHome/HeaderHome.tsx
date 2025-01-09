import Line from '../Line/Line';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import Title from '../Title/Title';

import './headerHome.css';

const HeaderHome = () => {
  return (
    <header id="header-home" className="header-home">
      <div className="header-home__top-container">
        <Logo />
      </div>
      <Menu />
      <div className="header-home__content">
        <Title />
        <SearchForm />
      </div>
      <Line />
    </header>
  );
};

export default HeaderHome;
