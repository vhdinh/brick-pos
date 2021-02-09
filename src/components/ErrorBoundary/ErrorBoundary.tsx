import React, { ErrorInfo } from 'react';
import { ErrorBoundaryWrapper } from './ErrorBoundary.style';

interface errorBoundaryState {
    error: Error;
    errorInfo: ErrorInfo;
    hasError: boolean;
}

// https://reactjs.org/docs/error-boundaries.html
// Error boundaries do not catch errors for:
// Event handlers
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)

export default class ErrorBoundary extends React.Component<any, errorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: { name: '', message: '' },
            errorInfo: { componentStack: '' },
            hasError: false
        };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ errorInfo, error });
        console.warn(this.state.error);
        console.warn(this.state.errorInfo);
    }

    // TODO: Update the error boundary display to how you want to display the error
    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryWrapper>
                    <div className={'error-boundary-msg'} data-testid={'error-boundary-msg'}>
                        An error has occurred.
                    </div>
                </ErrorBoundaryWrapper>
            );
        }
        return this.props.children;
    }
}
