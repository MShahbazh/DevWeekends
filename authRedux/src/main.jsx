import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/RouterConfig'
import { RouterProvider } from 'react-router-dom'
import store from './ReduxStore/Store'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
)