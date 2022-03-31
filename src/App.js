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
    if (props.token || props.token === false) {
      console.log("dddddd", props.isAdmin);
      props.isAdmin && console.log("dffffffffffffffffffff");
      if (props.isAdmin) {
        return <Admin />;
      } else {
        return <Content />;
      }
    } else {
      return <Auth />;
    }
  }, [props.token]);

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
    isAdmin: state.auth.isAdmin,
    loader: state.errors.loader,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCheckAuth: () => dispatch(checkAuth()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
