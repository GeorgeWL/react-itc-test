import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/Pagination.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Pagination extends Component {

    render(props) {
        var {
            currentPageIndex,
            totalPageCount,
            className
        } = this.props;
        return (
            <div className={ClassNames('container', className)}>
                {
                    _.times(totalPageCount, index=> {
                        return (
                            <PaginationItem
                                active={index === currentPageIndex ? true : false}
                                index={index}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
Pagination.propTypes = {
    currentPageIndex: PropTypes.number.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    className: PropTypes.string
}

Pagination.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}


const PaginationItem = (props) => {
    const { active, index } = props
    return (
        <div
            className={ClassNames('item', active?'active':null)}
        >
            {index+1}
        </div>
    )
}

export default Pagination