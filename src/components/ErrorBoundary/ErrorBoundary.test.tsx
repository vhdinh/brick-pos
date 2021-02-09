import React, { useState } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

afterEach(() => {
    cleanup();
});

function TestComponent(props: any) {
    const data: any = { firstName: 'Test' };
    const [text, setText] = useState(JSON.stringify(data));

    return (
        <div data-testid={'test-component'}>
            {text}
            <button type={'button'} data-testid={'test-component-btn'} onClick={() => setText(data)}>
                Click me
            </button>
        </div>
    );
}

test('should render child component', () => {
    const { getByTestId } = render(
        <ErrorBoundary>
            <TestComponent />
        </ErrorBoundary>
    );

    expect(getByTestId('test-component')).toBeTruthy();
});

test('should trigger error boundary', () => {
    const { getByTestId, rerender } = render(
        <ErrorBoundary>
            <TestComponent />
        </ErrorBoundary>
    );

    fireEvent.click(getByTestId('test-component-btn'));
    rerender(<ErrorBoundary />);
    expect(getByTestId('error-boundary-msg')).toBeTruthy();
});
