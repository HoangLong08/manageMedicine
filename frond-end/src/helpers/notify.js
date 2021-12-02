import { notification } from 'antd';
// topLeft topRight bottomLeft bottomRight
export const openNotificationWithIcon = (type, notify, placement) => {
	notification[type]({
		message: '',
		description: notify,
		duration: 2,
		placement
	});
};