import React from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './sideBar.module.scss';
import Search from '../search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const listBlogs = [
    {
        title: 'Blog 1',
        image: 'https://goeco.link/KsIHe',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        title: 'Blog 2',
        image: 'https://goeco.link/KsIHe',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        title: 'Blog 3',
        image: 'https://goeco.link/KsIHe',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        title: 'Blog 4',
        image: 'https://goeco.link/KsIHe',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner-sideBar')}>
                <Search />
                <div className={cx('menu')}>
                    <span className={cx('menu-header')}>
                        <Link to={config.routes.blog}>Blogs</Link>
                    </span>
                    <ul className={cx('menu-list')}>
                        {listBlogs.map((blog, index) => {
                            return (
                                <li key={index} className={cx('menu-list__item')}>
                                    <Link className={cx('menu-list__item--link')} to="/">
                                        <div className={cx('menu-list__item--img')}>
                                            <img src={blog.image} />
                                        </div>
                                        <div className={cx('menu-list__item--content')}>
                                            <h3>{blog.title}</h3>
                                            <p>{blog.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
