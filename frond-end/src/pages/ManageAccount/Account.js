import React from 'react'

import "./Account.css";


const columns = [
	{
		title: 'STT',
		dataIndex: 'STT',
		key: 'STT',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
];

function Account() {
	return (
		<div className="wrapper-content">
			<h1 className="title-page">Quản lý tài khoản</h1>
		</div>
	)
}

export default Account
