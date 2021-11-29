import React from 'react'
import { Table } from 'antd';
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


const data = [

]

function Account() {
	return (
		<div className="wrapper-content">
			<h1 className="title-page">Quản lý tài khoản</h1>
			<div className="wrapper-table">

				<Table columns={columns} dataSource={data} />
			</div>
		</div>
	)
}

export default Account
