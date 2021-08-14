import classes from './MainBody.module.css';
import BodyHeader from './BodyHeader';
import BodyDetail from './BodyDetail';

const MainBody = ({auth}) => {

    return (
        <div className={classes.mainBody}>
            <div className={classes.mainHeader}>
                <BodyHeader auth={auth}/>
            </div>
            <div className ={classes.mainDetail}>
                <BodyDetail/>
            </div>
        </div>
    )
}

export default MainBody;