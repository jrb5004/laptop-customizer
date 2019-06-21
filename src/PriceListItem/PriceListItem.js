import React, { Component } from 'react';

class PriceListItem extends Component {
    render() {   
        return(
            <div>
                {
                Object.keys(this.props.currentSelections)
                     .map(key => <div className="summary__option" key={key}>
                       <div className="summary__option__label">{key}  </div>
                       <div className="summary__option__value">{this.props.currentSelections[key].name}</div>
                       <div className="summary__option__cost">
                         { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                             .format(this.props.currentSelections[key].cost) }
                       </div>
                   </div>)
                }
            </div>
        )
    }
}

export default PriceListItem;