import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './AppRoutes.tsx'
import { store, persistor } from './redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
