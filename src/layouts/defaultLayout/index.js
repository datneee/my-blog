import React from 'react';
import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Header from '~/layouts/components/header';
import SideBar from '../components/sideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <h1 className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner-container')}>
                    <SideBar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </h1>
    );
}

export default DefaultLayout;
