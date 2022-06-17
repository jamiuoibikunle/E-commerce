import React from 'react';
import ReactDOM from 'react-dom';
import './styles/responsive.css'
import './index.css'
import reportWebVitals from './reportWebVitals';
import {CircularProgress} from '@material-ui/core'

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={
      <div className='SuspenseProgress'>

        <CircularProgress />
      
      </div>
  }>
    <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();