import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import './styles/responsive.css'
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BallTriangle } from  'react-loader-spinner'
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={
    <div className={styles.ball}>
    <BallTriangle
    height='100'
    width='100'
    color='grey' />
    </div>
  }>
    <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();