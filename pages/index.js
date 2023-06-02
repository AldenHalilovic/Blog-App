import Layout from "../components/Layout";
import { store } from "./app/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Layout>
      <Provider store={store}></Provider>
    </Layout>
  );
}
