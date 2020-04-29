var React = require('react');
import { NavLink } from 'react-router-dom';

const Header = (props) => (
      <div className="header">
        <div className="container">
          <div>
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
          </div>
          <div>
            <NavLink to="/" activeClassName="is-active" exact={true} className="header__links">Play</NavLink>
            <NavLink to="/info" activeClassName="is-active" exact={true}>About Me</NavLink>
          </div>
        </div>
      </div>
  );
      
  Header.defaultProps = {
    title: 'Indecision'
  };

  export default Header;