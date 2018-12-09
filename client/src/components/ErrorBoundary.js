import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
    }
  
    componentDidCatch(error, info) {
      // Catch errors in child component and re-renders with an error message
      this.setState({
        error: error
      });
      console.log(info.componentStack);
    }
  
    render() {
      if (this.state.error) {
        return (
          <div>
            <p> Something went wrong.. </p>
          </div>
        );
      }
      return this.props.children;
    }
  }

  