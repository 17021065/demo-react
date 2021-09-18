import {NavLink} from 'react-router-dom';
import '../../css/SidebarItem.css';

const SidebarItem = ({path, text}) => {
  return <NavLink 
      exact to={path} 
      activeClassName="active"
      className="item"
    >
      {text}
    </NavLink>
}

export default SidebarItem;