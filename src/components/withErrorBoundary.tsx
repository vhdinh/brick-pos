/* @author Copyright 2020 OpenMarket, Inc., a Division of Amdocs Digital Commerce Division All Rights Reserved. */
import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export function withErrorBoundary(WrappedComponent: any) {
    const ComponentWithErrorBoundary = (props: any) => {
        return (
            <ErrorBoundary>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };
    return ComponentWithErrorBoundary;
}

export default withErrorBoundary;
