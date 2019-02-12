import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/VacancyItem.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

class VacancyItem extends Component {

    render(props) {
        var {
            data,
            className
        } = this.props;
        return (
            <div className={ClassNames('container', className)}>
                <h1>
                    {data.title}
                </h1>
                <small>
                    {moment(data.lastUpdated).format('MMM Do YY')}
                </small>
                <div className={'main'}>
                    <div
                        className={'content'}
                    >
                        {_.truncate(data.description, {length:250, separator:/\n?\t/})}
                    </div>
                    <div
                        className={'location'}
                    >
                        {
                            //feather icon here
                            data.location
                        }
                    </div>
                </div>
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