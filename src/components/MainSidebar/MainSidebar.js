import classes from './MainSidebar.module.css';
import SidebarHeader from './SidebarHeader';
import SidebarDetails from './SidebarDetails';
import SidebarFooter from './SidebarFooter';

const MainSidebar = ({user, selected}) => {
    return(
        <div className={classes.mainSidebar}>
            <div className={classes.sidebarHeader}>
                <SidebarHeader selected={selected} />
            </div>
            <div className={classes.sidebarDetails}>
                <SidebarDetails/>
            </div>
            <div className={classes.sidebarFooter}>
                <SidebarFooter user={user}/>
            </div>
        </div>
    )
}

export default MainSidebar;
