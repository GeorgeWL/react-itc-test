import React, { Component } from 'react';
import ClassNames from 'classnames'
// import './css/VacancyList.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';
import VacancyItem from './VacancyItem';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';

class VacancyList extends Component {
    state = {
        sortBy: 'lastUpdated',
        value: ''
    }
    onChangeVal = (value) =>{
        this.setState({
            value
        })
    }
    onChangeSortBy = (sortBy) =>{
        this.setState({
            sortBy
        })
    }
    render(props) {
        let { items, className } = this.props;
        const { sortBy, value } = this.state;
        items = _.sortBy(items, sortBy)
        return (
            <div className={ClassNames('container', className)}>
                <SearchInput
                    value={value}
                    onChange={this.onChangeVal}
                />
               <SearchFilter
                    value={sortBy}
                    onChange={this.onChangeSortBy}
               />
                {items.map((item, index) => {
                    return (
                        <VacancyItem
                            data={item}
                            key={index}
                        />
                    )
                })}
                <Pagination
                    currentPageIndex={0}
                    totalPageCount={items.length}
                />
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