import React, { useState } from 'react'

import "./Login.css";

function Login() {

	const [valueFormLogin, setValueFormLogin] = useState({
		username: "",
		password: "",
	});

	const [errorFormLogin, setErrorFormLogin] = useState({
		username: "",
		password: "",
	});

	function handleChangeLogin(e) {
		const { name, value } = e.target;
		setValueFormLogin({
			...valueFormLogin,
			[name]: value,
		});
	}

	function handleSubmitLogin() {
		let isValue = true;

		const errorValue = {
			email: "",
			password: "",
		};

		if (valueFormLogin.email === "") {
			isValue = false;
			errorValue.email = "Vui lòng nhập email của bạn";
		} else {
			errorValue.email = "";
		}

		if (valueFormLogin.password === "") {
			isValue = false;
			errorValue.password = "Vui lòng nhập mật khẩu của bạn";
		} else {
			errorValue.password = "";
		}

		if (isValue) {
			setErrorFormLogin({ ...errorValue });
		} else {
			setErrorFormLogin({ ...errorValue });
		}
	}


	return (
		<div className="wrapper-login">
			<div className="content-login">
				<h3 className="title-login">Manage Medicine | <span>Đăng nhập</span> </h3>
				<div className="form-group">
					<input type="text" className="form-input" placeholder="tên người dùng" />
					<small className="form-error">Vui lòng nhập </small>
				</div>
				<div className="form-group">
					<input type="password" className="form-input" placeholder="mật khẩu " />
					<small className="form-error">Vui lòng nhập </small>
				</div>
				<div className="form-group">
					<select className="form-input-select">
						<option>
							1
						</option>
						<option>
							2
						</option>
					</select>
					<small className="form-error">Vui lòng nhập </small>
				</div>

				<button type="button" className="btn-login" >Đăng nhập</button>
			</div>
		</div>
	)
}

export default Login
