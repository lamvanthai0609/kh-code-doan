import React from 'react';

import { useRoutes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

import { Category } from '@/pages/main/Category';
import { Watch } from '@/pages/main/Watch';
import { Profile } from '@/pages/main/Profile';
import { Auth } from '@/pages/main/Auth';
import { Login } from '@/pages/main/Auth/components/Login';
import { Register } from '@/pages/main/Auth/components/Register';
import { Home } from '@/pages/main/Home';
import { AdminLayout } from '@/layouts/AdminLayout';

export const routerList = [
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                element: <div>Dashboard</div>,
            },
            {
                path: 'category',
                title: 'Category',
                element: <div>Category</div>,
            },
            {
                path: 'movies',
                title: 'Movies',
                element: <div>Movies</div>,
            },
        ],
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/category',
                element: <Category />,
            },
            {
                path: '/watch/:id',
                element: <Watch />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ],
    },

    {
        path: '/*',
        element: <div>404</div>,
    },
];

export const Routes = () => useRoutes(routerList);
