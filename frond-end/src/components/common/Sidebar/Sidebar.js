import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header'

import "./Sidebar.css";
function Sidebar({ content }) {
	return (
		<>
			<Header />
			<div className="wrapper-bottom">
				<ul className="sidebar">
					<li className="item-menu">
						<NavLink to="/thong-ke" className={(navData) => navData.isActive ? "active-link" : ""}>Thống kê</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-tai-khoan" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý tài khoản</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-nhan-vien" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý nhân viên</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-khach-hang" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý khách hàng</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-chi-nhanh" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý chi nhánh</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-nhom-thuoc" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý nhóm thuốc</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-thuoc" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý thuốc</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-don-vi-thuoc" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý đơn vị thuốc</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-toa-thuoc" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý toa thuốc</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-hoa-don-mua" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý hóa đơn mua</NavLink>
					</li>
					<li className="item-menu">
						<NavLink to="/quan-ly-hoa-don-ban" className={(navData) => navData.isActive ? "active-link" : ""}>Quản lý hóa đơn bán</NavLink>
					</li>
				</ul>
				<div className="content-sidebar">
					{content}
				</div>
			</div>
		</>
	)
}

export default Sidebar
