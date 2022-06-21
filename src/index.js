import React from 'react';
import ReactDOM from 'react-dom';
import './styles/responsive.css'
import './index.css'
import {CircularProgress} from '@material-ui/core'
import styles from './styles/Spinner.module.css'

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={
      <div className='SuspenseProgress'>
        <CircularProgress className={styles.spinner} />
      </div>
  }>
    <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)