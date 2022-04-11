import { useEffect, useMemo } from "react";
//import classes from './App.module.scss';
// import Appbar from './components/Navigation/Appbar/Appbar';
// import Sidebar from './components/Navigation/Sidebar/Sidebar';
// import Topbar from './components/Navigation/Topbar/Topbar';
// import Dashboard from './containers/Dashboard/Dashboard';
// import Detail from './containers/Detail/Detail';
import Auth from "./containers/auth/Auth";
import Content from "./containers/Content";
import Admin from "./admin";
import { connect } from "react-redux";
import { checkAuth } from "./store/actions/authActions";
import Loader from "./components/UI/loader/Loader";
function App(props) {
  useEffect(() => {
    // check local storage for auth informations such as token, username, and userId when app start
    props.onCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onCheckAuth]);

  const routes = useMemo(() => {
    if (props.token) {
      if (
        props.role == "teacher" ||
        props.role == "admin" ||
        props.role == "operator"
      ) {
        return <Admin />;
      } else if (props.role == "student") {
        return <Content />;
      }
    } else {
      return <Auth />;
    }
  }, [props.token, props.role]);

  return (
    <>
      {routes}
      {props.loader && <Loader />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    role: state.auth.role,
    loader: state.errors.loader,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCheckAuth: () => dispatch(checkAuth()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
