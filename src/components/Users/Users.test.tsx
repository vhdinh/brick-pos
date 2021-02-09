import React from 'react';
import { render } from '@testing-library/react';
import Users from './Users';
import { UsersProps } from './Users.types';

describe('Users', () => {
    let props: UsersProps;

    // beforeEach(() => {
    //     props = {
    //         foo: 'bar'
    //     };
    // });

    const renderComponent = () => render(<Users {...props} />);

    it('should exist', () => {
        const component = renderComponent();
        expect(component).not.toBeNull();
    });

});
