
//import React from 'react';
import * as React from "react";

interface Props {
    foo: string;
}

export default class Tyyppi extends React.Component<Props, {}> {
    render() {
        return <span>This coming with types: {this.props.foo}</span>
    }
}
