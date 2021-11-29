import React from 'react'
import { Navigate } from "react-router-dom";
import Sidebar from './components/common/Sidebar/Sidebar';


function PrivateRoute({ children }) {
	const auth = true;
	return auth ? <Sidebar content={children} /> : <Navigate to="/dang-nhap" />;
}

export default PrivateRoute
