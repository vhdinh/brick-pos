import React from 'react';
import { HomeProps } from './Home.types';
import { HomeWrapper } from './Home.style';
import { withErrorBoundary } from '../withErrorBoundary';

function Home(props: HomeProps) {
    return (
        <HomeWrapper data-testid={'Home-wrapper'}>
            <p>
                Hello World!
            </p>
        </HomeWrapper>
    );
}

export default withErrorBoundary(Home);
