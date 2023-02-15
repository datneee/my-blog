import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/icons';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input spellCheck={false} placeholder="Search field for me..." />
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
