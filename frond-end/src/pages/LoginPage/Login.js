import React from 'react'

import "./Login.css";

function Login() {
	return (
		<div className="wrapper-login">
			<div className="content-login">
				<h3 className="title-login">Manage Medicine | <span>Đăng nhập</span> </h3>
				<div className="form-group">
					<input type="text" className="form-input" placeholder="abc@gmail.com" />
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

				<button type="button" className="btn-login">Đăng nhập</button>
			</div>
		</div>
	)
}

export default Login
