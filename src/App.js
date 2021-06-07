import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/../components/layout/navbar/Menu';
import HomePage from "./components/home/HomePage";
import DetailProduct from "./components/detail/DetailProduct";
import ContactPage from "./components/contact/ContactPage";
import AdminPage from "./components/admin/AdminPage";
import LoginPage from "./components/login/LoginPage";
import Layout from './components/layout/layout/Layout';
import Footer from './components/layout/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from "./context/AuthContext";

import theme from './styles/theme';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
			  <Router>
            <Menu />
            <Layout>
              <Switch>
						    <Route exact path="/">
							    <HomePage />
						    </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
                <Route path="/detail/:id">
                  <DetailProduct />
                </Route>
						    <Route path="/login">
							    <LoginPage />
						    </Route>
						    <Route path="/admin" exact>
							    <AdminPage />
						    </Route>
					    </Switch>
            </Layout>
        </Router>
      </AuthProvider>
        <Footer>&copyright 2021  Develop by Florinda Zeida</Footer>
      </ThemeProvider>
    </>
  );
}

export default App;


