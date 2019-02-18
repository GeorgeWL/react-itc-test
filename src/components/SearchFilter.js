import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/SearchFilter.module.sass';
import PropTypes from 'prop-types';
// import _ from 'lodash';

const FILTER_OPTIONS = [
    {
        value: 'lastUpdated',
        label: 'Date'
    },
    {
        value: 'location',
        label: 'Location'
    },
    {
        value: 'title',
        label: 'Job Title'
    }
]

class SearchFilter extends Component {

    onChange = (evt) => {
        let value = evt.target.value
        console.log('value', value)
        this.props.onChange(value)
    }
    render(props) {
        let {
            value,
            className
        } = this.props;
        return (
            <select
                className={ClassNames('container', className)}
                value={value}
                onChange={this.onChange}
                required
            >
                {FILTER_OPTIONS.map((item, index) => {
                    return (
                        <option
                            key={index}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    )
                })}
            </select>
        )
    }
}
SearchFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

SearchFilter.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}
export default SearchFilter