import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import style from './NoMatch.scss';

const TEXT_NO_EXIST = 'This article does not exist';
const TEXT_LINK = 'Go Home';

const NoMatch = () => (
    <div className={style.noMatchContainer}>
        <h4>{TEXT_NO_EXIST}</h4>
        <Link to="/">{TEXT_LINK}</Link>
    </div>
);

export default withRouter(NoMatch);
