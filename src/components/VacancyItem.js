import React, { Component } from 'react';
import ClassNames from 'classnames'
import './css/VacancyItem.styl';
import PropTypes from 'prop-types';
import _ from 'lodash';

class VacancyItem extends Component {

    render(props) {
        var { title, description, location,salary, className } = this.props;
        return (
            <div className={ClassNames('container', className)}>

            </div>
        )
    }
}
VacancyItem.propTypes = {
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired, //will convert to localized string
    className : PropTypes.string 
}

VacancyItem.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}
