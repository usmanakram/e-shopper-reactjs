import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/header";
import HomeEshopper from "./component/homeEshopper";
import ShopEshopper from "./component/shopEshopper";
import ProductDetailsEshoper from "./component/productDetailsEshoper";
import CheckoutEshoper from "./component/checkoutEshoper";
import CartEshoper from "./component/cartEshoper";
import LoginEshoper from "./component/loginEshoper";
import BlogEshoper from "./component/blogEshoper";
import SingleBlogEshoper from "./component/singleBlogEshoper";
import NotFound from "./component/notFound";
import ContectEshopper from "./component/contectEshopper";

import Footer from "./component/footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/shop" component={ShopEshopper} />
        <Route path="/home" component={HomeEshopper} />
        <Route path="/product-details" component={ProductDetailsEshoper} />
        <Route path="/checkout" component={CheckoutEshoper} />
        <Route path="/cart" component={CartEshoper} />
        <Route path="/login" component={LoginEshoper} />
        <Route path="/blog" component={BlogEshoper} />
        <Route path="/blog-single" component={SingleBlogEshoper} />
        <Route path="/404" component={NotFound} />
        <Route path="/contact-us" component={ContectEshopper} />
        <Route path="/" exact component={HomeEshopper} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
