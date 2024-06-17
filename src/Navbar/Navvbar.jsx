import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types'
 
const Navvbar = (props) => {
    const title_nav1=props.title_nav1;
    const title_nav2=props.title_nav2;
    const title_nav3=props.title_nav3;
    const title_nav4=props.title_nav4;
    const title_nav5=props.title_nav5;

    return (
        <div className="navbar">
            <ul>
                <img src={logo} alt="Logo Image" />
                <li><a href="#">{title_nav1}</a></li>
                <li><a href="#">{title_nav2}</a></li>
                <li><a href="#">{title_nav3}</a></li>
                <li><a href="#">{title_nav4}</a></li>
                <li><a href="#">{title_nav5}</a></li>
                <li><FontAwesomeIcon icon={faGlobe} className="fa-globe" /></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Contact sales</a></li>
                <li><a href="#">Get started</a></li>
            </ul>
        </div>
    );
}
Navvbar.propTypes={
    title_nav1:propTypes.string.isRequired,
    title_nav2:propTypes.string.isRequired,
    title_nav3:propTypes.string.isRequired,
    title_nav4:propTypes.string.isRequired,
    title_nav5:propTypes.string.isRequired,
}


export default Navvbar;
