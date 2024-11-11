
import { Provider } from 'react-redux';
import Screen_TodoList from './src/screens/Screen_TodoList';
import Store from './src/redux/Store';

export default function App() {
  return (
    <Provider store={Store}>
          <Screen_TodoList/>
    </Provider>
  );
}


