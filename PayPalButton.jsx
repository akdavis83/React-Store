import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const PayPalButton = ({ totalPrice }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AUiKUtHdGtZ2kmb9zC8LLMIMgcywnJ97hNxcEF8bUnDKUjre7CFXK8nzdJwjGN0WLs55-MrncpofVZhZ" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;