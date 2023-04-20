function tutorWageCalculator(timesheet, level) {
	// create variables to store daily hours, total hours and hourly hourlyRate
	let weekHours = timesheet.split('-');
	let hoursSum = 0;
	let hourlyRate = 0;

	// set hourly hourlyRate for wages calculation
	switch (level) {
		case 1:
			hourlyRate = 75;
			break;
		case 2:
			hourlyRate = 90;
			break;
		case 3:
			hourlyRate = 105;
			break;
	}

	// check if weekHours contains more than 4 days and less than 8 days
	if (weekHours.length >= 5 && weekHours.length <= 7) {
		for (let hours of weekHours) {
			hoursSum += Number(hours);
		}
	} else {
		return 0;
	}

	return hoursSum * hourlyRate;
}
