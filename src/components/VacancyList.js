import React, { Component } from 'react';
import ClassNames from 'classnames'
import Styles from './css/VacancyList.module.sass';
import PropTypes from 'prop-types';
import _ from 'lodash';
import VacancyItem from './VacancyItem';
import SearchInput from './SearchInput';
import SearchSort from './SearchSort';
import Pagination from './Pagination';
import Fuse from 'fuse.js'
const SEARCH_OPTIONS = {
    shouldSort: true,
    tokenize: true,
    //show all items ordered by relevance, or false to filter items
    findAllMatches: false,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [ //item keys to search in
        "title",
        // "location"
    ]
};
class VacancyList extends Component {
    state = {
        sortBy: 'lastUpdated',
        searchValue: '',
        currentPageIndex: 0
    }
    onChangeSearch = (searchValue) => {
        this.setState({
            searchValue
        })
    }
    onChangeSortBy = (sortBy) => {
        this.setState({
            sortBy
        })
    }
    paginateNext = () => {
        let { currentPageIndex } = this.state
        this.setState({
            currentPageIndex: ++currentPageIndex
        })
    }
    paginatePrev = () => {
        let { currentPageIndex } = this.state
        this.setState({
            currentPageIndex: --currentPageIndex
        })
    }
    paginateTo = (index) => {
        console.log('index', index + 1)
        this.setState({
            currentPageIndex: index
        })
    }
    render(props) {
        let { items, className } = this.props;
        const { sortBy, searchValue, currentPageIndex } = this.state;
        // change item sort
        items = _.sortBy(items, sortBy);
        // filter items by search
        let fuse = new Fuse(items, SEARCH_OPTIONS)
        items = searchValue.length ? fuse.search(searchValue) : items;
        // splitting item into pages
        const pageSize = 2;
        let pages = _.chunk(items, pageSize);
        let currentPage = pages[currentPageIndex];
        return (
            <div className={ClassNames(Styles.container, className)}>
                <div
                    className={Styles.searchBox}
                >
                    <SearchInput
                        value={searchValue}
                        onChange={this.onChangeSearch}
                    />
                    <SearchSort
                        value={sortBy}
                        onChange={this.onChangeSortBy}
                    />
                </div>
                {currentPage ? currentPage.map((item, index) => {
                    return (
                        <VacancyItem
                            data={item}
                            key={index}
                        />
                    )
                }) : <h2>No Items Found</h2>}
                <Pagination
                    currentPageIndex={currentPageIndex ? currentPageIndex : 0}
                    totalPageCount={currentPage ? pages.length : 1}
                    onNext={this.paginateNext}
                    onPrev={this.paginatePrev}
                    onItemSelect={this.paginateTo}
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