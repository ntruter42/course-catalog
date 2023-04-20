describe('courseCost', function () {
	it('Courses should get different prices across discount window', function () {
		const result = {
			"status": "success",
			"code": "r1",
			"description": "",
			"cost": "",
			"discount": "",
			"amountDue": ""
		};

		assert.deepEqual(result, courseCost("r1", "2023-05-21"));
	});
});