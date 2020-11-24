import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

export default () => {
    return(
    <Styled.Container>
        Page not found. Go back to <Link to="/">Product Management Portal</Link>
    </Styled.Container>
    );
};