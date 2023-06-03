import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import "../styles/navbar.css";
import "/styles/footer.css";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
