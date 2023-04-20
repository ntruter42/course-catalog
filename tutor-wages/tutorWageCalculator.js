function tutorWageCalculator(timesheet, level) {
	let weekHours = timesheet.split('-');
	let hoursSum = 0;
	let rate = 0;

	switch (level) {
		case 1:
			rate = 75;
			break;
		case 2:
			rate = 90;
			break;
		case 3:
			rate = 105;
			break;
		default:
			break;
	}

	if (weekHours.length >= 5 && weekHours.length <= 7) {
		for (let hours in weekHours) {
			hoursSum += Number(hours);
		}

		if (hoursSum > 40) {
			return hoursSum * rate;
		}
	} else {
		return 0;
	}
	return;
}