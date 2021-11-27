import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('-----PureComp-----')
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureComp
