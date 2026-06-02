import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PureCompo from './PureCompo';
import WeatherApp from './components/WeatherApp';
import FetchUser from './components/FetchUser';
import App from './components/App4';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
