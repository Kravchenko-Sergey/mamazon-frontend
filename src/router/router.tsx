import { createBrowserRouter } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts.ts'
import { AdminPage } from '../pages/AdminPage.tsx'
import { BasketPage } from '../pages/BasketPage.tsx'
import { ShopPage } from '../pages/ShopPage.tsx'
import { AuthPage } from '../pages/AuthPage.tsx'
import { DevicePage } from '../pages/DevicePage.tsx'
import React from 'react'

export const router = createBrowserRouter([
	{
		path: ADMIN_ROUTE,
		element: <AdminPage />
	},
	{
		path: BASKET_ROUTE,
		element: <BasketPage />
	},
	{
		path: '/',
		component: <ShopPage />
	},
	{
		path: LOGIN_ROUTE,
		element: <AuthPage />
	},
	{
		path: REGISTRATION_ROUTE,
		element: <AuthPage />
	},
	{
		path: `${DEVICE_ROUTE}/:id`,
		element: <DevicePage />
	},
	{
		path: BASKET_ROUTE,
		element: <BasketPage />
	}
])
