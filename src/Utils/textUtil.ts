export const getInitials = (name: string) => {
	const names = name.split(' ');
	let initials = '';

	for (let i = 0; i < names.length; i++) {
		const initial = names[i].charAt(0).toUpperCase();
		initials += initial;

		if (initials.length >= 2) {
			break;
		}
	}

	return initials;
};

export const shortTime = (time: string) => {
	const convertedTime = time.substring(0, 5);
	return convertedTime;
};

export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString('default', { month: 'short' });
	const year = date.getFullYear().toString().slice(-2);

	return `${day} ${month} ${year}`;
};
