import React from 'react';

class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render(props) {
        return this.state.hasError ?
            <h1>Oooops. that not good</h1> :
            this.props.children
    }
}
export default ErrorBoundry;