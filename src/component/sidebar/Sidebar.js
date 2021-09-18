import '../../css/Sidebar.css';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    return <div className='w3-col m5 l2 sidebar'>
        <h2 className="title">Sidebar</h2>
        <SidebarItem path="/" text="Home"/>
        <SidebarItem path="/search" text="Search"/>
        <SidebarItem path="/clock" text="Clock"/>
    </div>
}

export default Sidebar;