import React from 'react'
import { Route, Routes } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/ManageAccount/Account';
import Add from 'pages/ManageAccount/AddAccount/Add';

function SwitchLayout() {
	return (
		<Routes>
			<Route exact path="/" element={<LoginPage />} />
			<Route exact path="/dang-nhap" element={<LoginPage />} />
			<Route
				exact
				path="/thong-ke"
				element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				}
			/>
			<Route
				exact
				path="/quan-ly-tai-khoan"
				element={
					<PrivateRoute>
						<Account />
					</PrivateRoute>
				}
			/>
			<Route
				exact
				path="/them-tai-khoan"
				element={
					<PrivateRoute>
						<Add />
					</PrivateRoute>
				}
			/>
		</Routes>
	)
}

export default SwitchLayout
