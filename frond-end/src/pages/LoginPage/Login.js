import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import getListBranch from "redux/api/listBranch.api";
import postLogin from "redux/api/login.api";

import "./Login.css";

function Login() {
	const dispatchGetListBranch = useDispatch();
	const dispatchLogin = useDispatch();

	const listBranch = useSelector((state) => state.listBranchSlice);
	const login = useSelector((state) => state.loginSlice);
	console.log("login: ", login);

	const [error, setError] = useState(login.error)

	const [valueFormLogin, setValueFormLogin] = useState({
		username: "",
		password: "",
		branch_id: "1",
	});

	const [errorFormLogin, setErrorFormLogin] = useState({
		username: "",
		password: "",
	});

	useEffect(() => {
		setError(login.error);
	}, [login]);

	useEffect(() => {
		dispatchGetListBranch(getListBranch());
	}, [dispatchGetListBranch]);

	const deleteError = () => {
		setError("");
	}

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setValueFormLogin({
			...valueFormLogin,
			[name]: value,
		});
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			dispatchLogin(postLogin(valueFormLogin));
		}
	}

	function handleSubmitLogin() {
		let isValid = true;

		const errorValue = {
			username: "",
			password: "",
		};

		if (valueFormLogin.username === "") {
			isValid = false;
			errorValue.username = "Vui lòng nhập username của bạn";
		} else {
			errorValue.username = "";
		}

		if (valueFormLogin.password === "") {
			isValid = false;
			errorValue.password = "Vui lòng nhập mật khẩu của bạn";
		} else {
			errorValue.password = "";
		}

		if (isValid) {
			setErrorFormLogin({ ...errorValue });
			dispatchLogin(postLogin(valueFormLogin));
		} else {
			setErrorFormLogin({ ...errorValue });
		}
	}


	return (
		<div className="wrapper-login">
			<div className="content-login">
				<h3 className="title-login">Manage Medicine | <span>Đăng nhập</span> </h3>
				<div className="form-group">
					<input
						type="text"
						className="form-input"
						placeholder="tên người dùng"
						name="username"
						value={valueFormLogin.username || ""}
						onChange={handleChangeLogin}
					/>
					{errorFormLogin.username && (
						<small className="form-error">{errorFormLogin.username}</small>
					)}
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-input"
						placeholder="mật khẩu"
						name="password"
						value={valueFormLogin.password || ""}
						onChange={handleChangeLogin}
						onKeyDown={handleKeyDown}
					/>
					{errorFormLogin.password && (
						<small className="form-error">{errorFormLogin.password}</small>
					)}
				</div>

				<div className="form-group">
					<select
						className="form-input-select"
						name="branch_id"
						value={valueFormLogin.branch_id || ""}
						onChange={handleChangeLogin}>
						{listBranch.load && (
							<option>
								loading
							</option>
						)}
						{!listBranch.load && (
							listBranch.data?.map((item) => {
								return (
									<option value={item.branch_id} key={item.branch_id}>
										{item.branch_name}
									</option>
								)
							})
						)}
					</select>
				</div>
				{error.length > 0 && (
					<div className="list-error">
						{error}
						<button type="button" onClick={deleteError}>
							X
						</button>
					</div>
				)}
				{login.load && (
					<button type="button" className="btn-login">Loading ...</button>
				)}
				{!login.load && (
					<button type="button" className="btn-login" onClick={handleSubmitLogin}>Đăng nhập</button>
				)}
			</div>
		</div>
	)
}

export default Login
