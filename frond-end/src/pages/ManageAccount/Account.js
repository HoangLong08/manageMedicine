import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import Button from 'components/common/Button/Button';
import "./Account.css";
import getListAccount from 'redux/api/account.api';

const columns = [
	{
		title: 'STT',
		dataIndex: 'STT',
		key: 'STT',
	},
	{
		title: 'Tên tài khoản',
		dataIndex: 'username',
		key: 'username',
	},
	{
		title: 'Tên nhân viên',
		dataIndex: 'employee',
		key: 'employee',
	},
	{
		title: 'Số điện thoại',
		dataIndex: 'phone',
		key: 'phone',
	},
	{
		title: 'Địa chỉ',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Trạng thái',
		dataIndex: 'activity',
		key: 'activity',
	},
	{
		title: 'Action',
		dataIndex: 'action',
		key: 'action',
	},
];

function Account() {
	const navigate = useNavigate();
	const dispatchGetListAccount = useDispatch();
	const listAccount = useSelector((state) => state.listAccountSlice);

	console.log("listAccount: ", listAccount);

	useEffect(() => {
		dispatchGetListAccount(getListAccount());
	}, [dispatchGetListAccount]);

	const changePageAddAccount = () => {
		return navigate('/them-tai-khoan');
	}

	function renderListAccount() {
		return listAccount.data?.map((item, index) => {
			return {
				key: index,
				STT: index + 1,
				username: item.user_name,
				employee: item.employees_name,
				phone: item.employees_phone,
				address: item.employees_address,
				activity: item.employees_status,
				action: (
					<div className="list-action">
						<button className="btn-edit"><i className="far fa-edit"></i></button>
						{/* <i className="far fa-lock-open-alt"></i> */}
						<button className="btn-lock"><i className="far fa-lock"></i></button>
					</div>
				)
			};
		});
	}

	return (
		<div className="wrapper-content">
			<div className="content-top">
				<h1 className="title-page">Quản lý tài khoản</h1>
				<div className="page-action">
					<Button content="Thêm tài khoản" handleClick={changePageAddAccount} background="rgb(95, 95, 255)" />
				</div>
			</div>
			<div className="wrapper-table">
				<Table loading={listAccount.load} columns={columns} dataSource={renderListAccount()} />
			</div>
		</div>
	)
}

export default Account
