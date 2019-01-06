import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {updateSort} from './actions';
import Selectbox from './selectbox';

const sortBy = [
    { value: '', label: 'Select' },
    { value: 'lowestprice', label: 'Lowest to highest' },
    { value: 'highestprice', label: 'Highest to lowest' }
  ];

class Sort extends Component {
    static propTypes ={
        updateSort : PropTypes.func.isRequired,
        sort: PropTypes.string.isRequired
    };

handleSort = value => {
      this.props.updateSort(value);
};

render(){
    return (
        <div className="sort">
             Order By
            <Selectbox options ={ sortBy} handleOnChange={this.handleSort} />
         </div>
      );
 }
}

const mapStateToProps = state => ({
    sort: state.sort.get('type')
});

export default connect(mapStateToProps,{updateSort})(Sort);