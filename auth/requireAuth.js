import { useSelector } from "react-redux";
import NotAuthPage from "../Components/NotAuthPage";


const requireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const user = useSelector(state=>state.user.user);
        return user ? <ChildComponent {...props}/> : <NotAuthPage/>;
    };

    return ComposedComponent;
};

export default requireAuth;