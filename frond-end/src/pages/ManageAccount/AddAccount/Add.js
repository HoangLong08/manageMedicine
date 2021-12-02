import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/Button/Button';

import "./Add.css";
import getListEmployee from 'redux/api/listEmployee.api';
import postAddEmployee from 'redux/api/addEmployee.api';

function Add() {
	const navigate = useNavigate();

	const dispatchGetListEmployee = useDispatch();
	const dispatchAddEmployee = useDispatch();

	const listEmployee = useSelector((state) => state.listEmployeeSlice);
	const addEmployee = useSelector((state) => state.addEmployeeSlice);

	console.log("addEmployee: ", addEmployee)

	const [valueFormAdd, setValueFormAdd] = useState({
		username: "",
		password: "",
		employees_id: "1",
	});

	const [errorFormAdd, setErrorFormAdd] = useState({
		username: "",
		password: "",
	});

	useEffect(() => {
		if (addEmployee.data === "success") {
			return navigate("/quan-ly-tai-khoan");
		}
	}, [addEmployee, navigate]);

	useEffect(() => {
		dispatchGetListEmployee(getListEmployee());
	}, [dispatchGetListEmployee]);

	const handleChangeAdd = (e) => {
		const { name, value } = e.target;
		setValueFormAdd({
			...valueFormAdd,
			[name]: value,
		});
	}

	const handleCancel = () => {
		setErrorFormAdd({
			username: "",
			password: "",
		})
	}

	const changePageAddAccount = () => {
		return navigate("/quan-ly-tai-khoan");
	}

	function handleSubmitAdd() {
		let isValid = true;

		const errorValue = {
			username: "",
			password: "",
		};

		if (valueFormAdd.username === "") {
			isValid = false;
			errorValue.username = "Vui lòng nhập tên tài khoản của bạn";
		} else {
			errorValue.username = "";
		}

		if (valueFormAdd.password === "") {
			isValid = false;
			errorValue.password = "Vui lòng nhập mật khẩu của bạn";
		} else {
			errorValue.password = "";
		}

		if (isValid) {
			setErrorFormAdd({ ...errorValue });
			dispatchAddEmployee(postAddEmployee(valueFormAdd));
		} else {
			setErrorFormAdd({ ...errorValue });
		}
	}

	return (
		<div className="wrapper-content">
			<div className="content-top">
				<h1 className="title-page">Thêm tài khoản</h1>
				<div className="page-action">
					<Button content="Trở lại" handleClick={changePageAddAccount} background="rgb(95, 95, 255)" />
				</div>
			</div>
			<div className="content-bottom">
				<div className="form-account">
					<div className="form-group">
						<select
							className="form-input-select"
							name="employees_id"
							value={valueFormAdd.employees_id || ""}
							onChange={handleChangeAdd}
						>
							{listEmployee.load && (
								<option>
									loading
								</option>
							)}
							{!listEmployee.load && (
								listEmployee.data?.map((item) => {
									return (
										<option value={item.employees_id} key={item.employees_id}>
											{item.employees_name}
										</option>
									)
								})
							)}
						</select>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-input"
							placeholder="tên người dùng"
							name="username"
							value={valueFormAdd.username || ""}
							onChange={handleChangeAdd}
						/>
						{errorFormAdd.username && (
							<small className="form-error">{errorFormAdd.username}</small>
						)}
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-input"
							placeholder="mật khẩu"
							name="password"
							value={valueFormAdd.password || ""}
							onChange={handleChangeAdd}
						/>
						{errorFormAdd.password && (
							<small className="form-error">{errorFormAdd.password}</small>
						)}
					</div>
					<div className="action-page">
						<Button content="Hủy" handleClick={handleCancel} background="transparent" color="rgb(95, 95, 255)" />
						<Button content="Thêm tài khoản" handleClick={handleSubmitAdd} background="rgb(95, 95, 255)" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Add
