import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"
import { Provider } from "react-redux";
import store from "./store/store.js";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
      
</StrictMode>
)