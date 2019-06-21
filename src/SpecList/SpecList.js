import React, { Component } from 'react';
import SpecItem from '../SpecItem/SpecItem';

class SpecList extends Component { 
    render() { 
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <SpecItem 
                features={this.props.features}
                currentSelections={this.state.selected}
                handleUpdate={this.props.handleUpdate}/>
            </section>
        )
    }   
}

export default SpecList;