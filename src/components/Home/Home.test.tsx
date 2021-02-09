import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { HomeProps } from './Home.types';

describe('Home', () => {
    let props: HomeProps;

    beforeEach(() => {
        props = {
            foo: 'bar'
        };
    });

    const renderComponent = () => render(<Home {...props} />);

    it('should exist', () => {
        const component = renderComponent();
        expect(component).not.toBeNull();
    });

});
