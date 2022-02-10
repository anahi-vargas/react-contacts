import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { ContactsProvider } from "./contexts/ContactContext"
import { AuthProvider } from './contexts/AuthContext';
import App from './components/App';
import ContactsPage from './components/contacts';
import LoginPage from './components/login';
import RegisterPage from './components/register'
import ContactDetailsPage from './components/contact-details';
import ContactCreatePage from './components/contact-create';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';

ReactDOM.render
(
  <React.StrictMode>
    <AuthProvider>
    <ContactsProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<PrivateRoute><ContactsPage /></PrivateRoute>} /> 
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts/:index" element={<PrivateRoute><ContactDetailsPage /></PrivateRoute>} />
          <Route path="contacts/add" element={<PrivateRoute><ContactCreatePage /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </ContactsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
