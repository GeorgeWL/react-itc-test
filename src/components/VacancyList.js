import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/VacancyList.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';

class VacancyList extends Component {
    render(props) {
        let { items, className } = this.props;
        const { sortBy } = this.state;
        items = _.sortBy(items, sortBy)
        return (
            <div className={ClassNames('container', className)}>
                {JSON.stringify(items)}
            </div>
        )
    }
}
VacancyList.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
}

VacancyList.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}
export default VacancyList