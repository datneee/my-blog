import React from 'react';
import config from '~/config';
import { Home, Blog } from '~/pages';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.blog,
        component: Blog,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
