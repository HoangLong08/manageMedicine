import React from 'react'
import { AvatarAdmin, Logo } from '../../../assets';

import "./Header.css";
function Header() {
	return (
		<div className="wrapper-header">
			<div className="header-left">
				<img src={Logo} alt="logo" className="image-logo" />
				<p>Mangage Medicine</p>
			</div>
			<div className="header-right">
				<div className="wrapper-avatar">
					<img src={AvatarAdmin} alt="admin" className="avatar" />
					<p className="name-avatar">Nguyen Anh</p>
				</div>
			</div>
		</div>
	)
}

export default Header
