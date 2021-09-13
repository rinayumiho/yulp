import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import SearchBar from '../search_bar/search_bar';
import SplashBusinesses from '../splash_businesses/splash_businesses';
import SplashAbout from '../splash_about/splash_about';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="splash-top-container">
                    <div className="splash-main-top">
                        <div className="nav-bar-container">
                            <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout} />
                            <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses} />
                        </div>
                        <div className="splash-logo-container">
                            <Link to="/"><img className="splash-logo" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" /></Link>
                        </div>
                    </div>

                </div>
                <div className="splash_businesses">
                    <SplashBusinesses searchBusinesses={this.props.searchBusinesses}></SplashBusinesses>
                </div>
                <div>
                    <SplashAbout></SplashAbout>
                </div>
            </div>
        );
    }
}

export default Splash;