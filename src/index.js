import {Suspense,StrictMode,lazy} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/reducers"
import './i18n'
import Spinner from "./components/atom/loading.spinner.line"
// lazy(() => import('./style.css'));
import './style.css';
const App = lazy(() => import('./App'));
 

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div className="spin"><Spinner width="50px" height="50px" marginTop="200px"/></div> }>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

