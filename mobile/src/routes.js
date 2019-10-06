import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

//é necessário colocar esse createAppContainer() por volta de todas as rotas, q nem era o <Route />
const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Routes;