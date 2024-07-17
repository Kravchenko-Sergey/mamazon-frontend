import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AdminPage } from './pages/AdminPage.tsx'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts.ts'
import { ShopPage } from './pages/ShopPage.tsx'
import { BasketPage } from './pages/BasketPage.tsx'
import { AuthPage } from './pages/AuthPage.tsx'
import { DevicePage } from './pages/DevicePage.tsx'

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
