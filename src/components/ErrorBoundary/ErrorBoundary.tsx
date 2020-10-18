import * as React from 'react';
// need to create
// 1. Overlay
// 2. Error Image
// 3. Error Text

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: any) {
    return { hasErrored: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error);
  }

  render () {
    const { children } = this.props;
    const { hasError } = this.state;
    
    return hasError ? <p>ERROR</p>: children;
  }
}

export default ErrorBoundary;