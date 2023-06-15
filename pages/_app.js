import { Provider } from "react-redux";
import { persistor, store } from "../store";
import "../styles/navbar.css";
import "/styles/footer.css";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../Components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
