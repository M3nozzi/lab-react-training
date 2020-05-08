import React, { Component } from 'react';

class BoxColor extends Component {
    
    constructor(props) {
        super(props);

        // console.log(props);
        this.componentHex = this.componentHex.bind(this);
        this.rgbHex = this.rgbHex.bind(this);
    }

    componentHex(num) {
        const hex = num.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    rgbHex(r, g, b) {
        return '#' + this.componentHex(r) + this.componentHex(g) + this.componentHex(b);
    }

    render() {
        return(
            <div style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
                <p> rgb({ this.props.r}, {this.props.g}, {this.props.b}) </p>
                <p>{this.rgbHex(this.props.r, this.props.g, this.props.b)}</p>
            </div>
        );
    }
}

export default BoxColor;