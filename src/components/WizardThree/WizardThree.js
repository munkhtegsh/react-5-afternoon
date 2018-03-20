import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProp } from '../../ducks/reducer';
class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={(e) => this.props.updateProp(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={(e) => this.props.updateProp(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={(e) => this.props.updateProp(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        propToBeUsedOn: state.propToBeUsedOn
    }
}

let actionCreator = {
    updateProp    
}

export default connect(mapStateToProps, actionCreator)(WizardThree); 
