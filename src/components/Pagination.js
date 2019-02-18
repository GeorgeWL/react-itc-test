import React, { Component } from 'react';
import ClassNames from 'classnames'
import Styles from './css/Pagination.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
class Pagination extends Component {

    render(props) {
        var {
            currentPageIndex,
            totalPageCount,
            onNext,
            onPrev,
            enableNext,
            enablePrev,
            onItemSelect,
            className
        } = this.props;
        enableNext = enableNext || currentPageIndex < totalPageCount;
        enablePrev = enablePrev || currentPageIndex > 0;
        return (
            <div className={ClassNames(Styles.container, className)}>
                <div
                    className={Styles.content}
                >
                    <div
                        onClick={onPrev}
                        className={ClassNames(Styles.btn, !enablePrev ? Styles.disabled : null)}
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </div>
                    {
                        _.times(totalPageCount, index => {
                            return (
                                <PaginationItem
                                    active={index === currentPageIndex ? true : false}
                                    index={index}
                                    key={index}
                                    onClick={()=>onItemSelect(index)}
                                />
                            )
                        })
                    }
                    <div
                        onClick={onNext}
                        className={ClassNames(Styles.btn, !enableNext ? Styles.disabled : null)}
                    >
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        )
    }
}
Pagination.propTypes = {
    currentPageIndex: PropTypes.number.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    enableNext: PropTypes.bool,
    enablePrev: PropTypes.bool,
    className: PropTypes.string
}

Pagination.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}


const PaginationItem = (props) => {
    const { active, index, onClick } = props
    return (
        <div
            className={ClassNames(Styles.item, active ? Styles.current : null)}
            onClick={onClick}
        >
            {index + 1}
        </div>
    )
}

export default Pagination