import { useSelector } from "react-redux";
import NotAuthPage from "../Components/NotAuthPage";
import { useEffect } from "react";
import { useRouter } from "next/router";
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default,
    },
  };
}

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    useEffect(() => {
      !user && router.push("/not-auth");
    }, [user]);
    return user && <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

export default requireAuth;
