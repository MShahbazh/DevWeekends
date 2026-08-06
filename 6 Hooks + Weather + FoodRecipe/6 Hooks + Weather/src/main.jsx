import { createRoot } from 'react-dom/client'
import './index.css'
import * as Components from '../src/components'
import { ContextProvider } from './Context/Context'


createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <Components.FeatureFlags/>
    </ContextProvider>
)
