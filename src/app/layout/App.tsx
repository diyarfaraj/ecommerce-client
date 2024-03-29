import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import PrivateRoute from "./PrivateRoute";
import Orders from "../../features/orders/Orders";
import OrderDetails from "../../features/orders/OrderDetails";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";
import Inventory from "../../features/admin/Inventory";

function App() {
  //const { setBasket } = useStoreContext();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);
  const paletteype = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteype,
      background: {
        default: paletteype === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function makeItDark() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initialising app..." />;
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer theme="colored" position="bottom-right" />
      <CssBaseline />
      <Header makeItDark={makeItDark} />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Container sx={{ mt: 4 }}>
            <Switch>
              <Route exact path="/catalog" component={Catalog} />
              <Route path="/catalog/:id" component={ProductDetails} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/server-error" component={ServerError} />
              <Route path="/basket" component={BasketPage} />
              <PrivateRoute path="/checkout" component={CheckoutWrapper} />
              <PrivateRoute path="/orders" component={Orders} />
              <PrivateRoute path="/inventory" component={Inventory} />
              <Route path="/order/:id" component={OrderDetails} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
