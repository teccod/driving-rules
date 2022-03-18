import Header from './components/Header/Header';
import Backg from './components/Background/Background'
import Content from './components/Content/Content'
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Backg />
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
