import React, { Component } from 'react';
import ClassNames from 'classnames'
import PropTypes from 'prop-types';
import Styles from './css/SearchInput.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
            <div
                className={Styles.container}
            >
                <input
                    className={ClassNames(className)}
                    value={value}
                    placeholder={'Search Jobs Here'}
                    onChange={this.onChange}
                />
                <div
                    className={Styles.btn}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
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