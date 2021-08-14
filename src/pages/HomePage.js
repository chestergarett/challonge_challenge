import './HomePage.css';

import QuickShortcutSidebar from '../components/QuickShortcutSidebar/QuickShortcutSidebar';
import MainSidebar from '../components/MainSidebar/MainSidebar';
import MainBody from '../components/MainBody/MainBody';

const HomePage = ({auth, user}) => {

    return (
            <div className='main-app'>
                <div className='quick-shortcut-sidebar'>
                    <QuickShortcutSidebar />
                </div>
                <div className='main-sidebar'>
                    <MainSidebar user={user} />
                </div>
                <div className='main-body'>
                    <MainBody auth={auth}/>
                </div>
            </div>
    )
}

export default HomePage;