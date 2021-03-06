import React, { Component } from 'react';
import ClassNames from 'classnames'
import Styles from './css/VacancyItem.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
class VacancyItem extends Component {

    render(props) {
        var {
            data,
            className
        } = this.props;
        return (
            <div className={ClassNames(Styles.container, className)}>
                <h2
                >
                    {data.title}
                </h2>
                <small>
                    {moment(data.lastUpdated).format('MMM Do YY')}
                </small>
                <div className={Styles.main}>
                    <div
                        className={Styles.content}
                    >
                        {_.truncate(data.description, { length: 250, separator: /\n?\t/ })}
                    </div>
                </div>
                <div
                    className={Styles.footer}
                >
                    <div className={Styles.location}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        {data.location}
                    </div>
                    <div
                        className={Styles.salary}
                    >
                        &pound;{data.salary.toLocaleString()} Annual Salary
                    </div>
                </div>
                <div className={Styles.subFooter}>
                    More Info
                    <FontAwesomeIcon
                        icon={faLongArrowAltRight}
                        className={Styles.more}
                    />
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