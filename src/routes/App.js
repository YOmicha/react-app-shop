import React  from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import '../styles/global.css';
import Appcontext from '../context/Appcontext';
import useInitialState from '../hooks/useInicialState';

const App = () => {
    const initialState = useInitialState();
    
    return (
        <Appcontext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={ <Home />} />
                        <Route path='/login' element={ <Login />} />
                        <Route path='/recovery-password' element={ <RecoveryPassword />}/>
                        <Route path='/send-email' element={ <SendEmail />}/>
                        <Route path='/new-password' element={ <NewPassword />}/>
                        <Route path='/account' element={ <MyAccount />}/>
                        <Route path='/singup' element={ <CreateAccount />}/>
                        <Route path='/checkout' element={ <Checkout />}/>
                        <Route path='/orders' element={ <Orders />}/>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>            
            </BrowserRouter>
    </Appcontext.Provider>
    );
}

export default App;