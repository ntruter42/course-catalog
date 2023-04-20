describe('courseCost', function () {
	it('Courses should get different prices across discount window', function () {
		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675.00,
			"discount": (5675 / 10) * 4,
			"amountDue": (5675 / 10) * 6
		}, courseCost("r1", "2023-05-21"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675.00,
			"discount": (5675 / 10) * 4,
			"amountDue": (5675 / 10) * 6
		}, courseCost("r1", "2023-05-21"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675.00,
			"discount": (5675 / 10) * 4,
			"amountDue": (5675 / 10) * 6
		}, courseCost("r1", "2023-05-21"));
});
});