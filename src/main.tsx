import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import UserStore from './store/UserStore.ts'
import { router } from './router/router.tsx'
import DeviceStore from './store/DeviceStore.ts'

export const Context = createContext(null as any)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
			<RouterProvider router={router} />
		</Context.Provider>
	</React.StrictMode>
)
