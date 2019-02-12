import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/VacancyItem.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';

class VacancyItem extends Component {

    render(props) {
        var {
            data,
            className
        } = this.props;
        return (
            <div className={ClassNames('container', className)}>

            </div>
        )
    }
}
VacancyItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        department: PropTypes.string,
        salary: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        lastUpdated: PropTypes.string.isRequired
    }).isRequired,
    className: PropTypes.string
}

VacancyItem.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}

export default VacancyItem