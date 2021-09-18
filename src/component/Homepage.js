import React from 'react';
import '../css/Homepage.css';
import {withTrans} from './wrapper/Trans';

const HomepageBase = ({t}) => {
    return <div className="homepage">
        <h1>{t('Welcome to my app!')}</h1>
    </div>
}

const Homepage = withTrans(HomepageBase);

export default Homepage;