import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import config from '~/config';
import { Menu, MenuItem } from '~/layouts/components/menu';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={config.routes.home}>
                        <img src="https://goeco.link/qbXJP" alt="Phạm Văn Đạt"></img>
                    </Link>
                </div>
                <Menu>
                    <MenuItem to="#" title="Trang chủ" />
                    <MenuItem to="#about" title="Về tôi" />
                    <MenuItem to="#album" title="Album" />
                    <MenuItem to="#contact" title="Kết nối" />
                </Menu>
            </div>
        </header>
    );
}

export default Header;
