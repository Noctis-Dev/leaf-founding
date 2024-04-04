import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProjectDataProvider } from './hooks/useProjectData'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProjectDataProvider>
      <App />
    </ProjectDataProvider>
  </React.StrictMode>,
)
