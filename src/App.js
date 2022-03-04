import { useEffect, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import classes from './App.module.scss';
// import Appbar from './components/Navigation/Appbar/Appbar';
// import Sidebar from './components/Navigation/Sidebar/Sidebar';
// import Topbar from './components/Navigation/Topbar/Topbar';
// import Dashboard from './containers/Dashboard/Dashboard';
// import Detail from './containers/Detail/Detail';
import Auth from "./containers/auth/Auth";
import Home from "./containers/home/Home";
import { connect } from "react-redux";
import { checkAuth } from "./store/actions/authActions";

function App(props) {
  useEffect(() => {
    // check local storage for auth informations such as token, username, and userId when app start
    props.onCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onCheckAuth]);

  const routes = useMemo(() => {
    if (props.token || props.token === false) {
      return (
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Navigate replace to="/auth" />} />
        </Routes>
      );
    }
  }, [props.token]);

  return <div>{routes}</div>;
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCheckAuth: () => dispatch(checkAuth()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
