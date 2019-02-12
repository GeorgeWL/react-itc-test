import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/SearchInput.module.sass';
import PropTypes from 'prop-types';
// import _ from 'lodash';

class SearchInput extends Component {

    onChange = (evt) => {
        let value = evt.target.value
        this.props.onChange(value)
    }
    render(props) {
        let {
            value,
            className
        } = this.props;
        return (
            <input
                className={ClassNames('container', className)}
                value={value}
                onChange={this.onChange}
            />
        )
    }
}
SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

SearchInput.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}
export default SearchInput