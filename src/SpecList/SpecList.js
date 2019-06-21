import React, { Component } from 'react';
import SpecItem from '../SpecItem/SpecItem';

class SpecList extends Component { 
    render() { 
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {
                Object.keys(this.props.features)
                    .map(key => {
                      const options = this.props.features[key].map((item, index) => {
                        const selectedClass = item.name === this.props.currentSelections[key].name ? 'feature__selected' : '';
                        const featureClass = 'feature__option ' + selectedClass;
                        return <SpecItem 
                                key={index} 
                                keyName={key}
                                item={item} 
                                featureClass={featureClass} 
                                handleUpdate={this.props.handleUpdate}
                                />
                      });
                      return <div className="feature" key={key}>
                        <div className="feature__name">{key}</div>
                        <ul className="feature__list">
                            { options }
                        </ul>
                        </div>
                   })
                }
          
            </section>
        )
    }   
}

export default SpecList;