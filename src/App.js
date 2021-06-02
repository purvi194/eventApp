import {Provider} from 'react-redux';
import {getStore} from './redux/store';
import DefaultContainer from './containers/DefaultContainer';

const App = () => {
    const store = getStore();

  return (
      <Provider store={store} >
          <DefaultContainer />
    </Provider>
  );
};

export default App;
