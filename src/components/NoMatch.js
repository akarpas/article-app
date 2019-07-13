import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import style from './NoMatch.scss';

const NoMatch = () => (
    <div className={style.noMatchContainer}>
        <h4>This article does not exist</h4>
        <Link to="/">Go Home</Link>
    </div>
);

export default withRouter(NoMatch);
