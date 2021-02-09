import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AppProps } from './App.types';

describe('App', () => {
    let props: AppProps;

    beforeEach(() => {
        props = {
            foo: 'bar'
        };
    });

    const renderComponent = () => render(<App {...props} />);

    it('should exist', () => {
        const component = renderComponent();
        expect(component).not.toBeNull();
    });
});
