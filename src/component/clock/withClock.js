import React from "react";

const withClock = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                time: new Date().toString().split(" ")[4], 
                timeHavePassed: 0,
            };
        }

        componentDidMount() {
            this.clock = setInterval(() => {
                const now = new Date().toString().split(" ")[4];
                this.setState({time: now, timeHavePassed: this.state.timeHavePassed+1});
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.clock);
        }

        render() {
            return <WrappedComponent time={this.state.time} timeHavePassed={this.state.timeHavePassed}/>;
        } 
    }
}

export default withClock;