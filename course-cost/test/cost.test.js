describe('courseCost', function () {
	it('Ruby on Rails course should get different prices across discount windows', function () {
		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675,
			"discount": (5675 / 10) * 4,
			"amountDue": (5675 / 10) * 6
		}, courseCost("r1", "2023-05-21"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675,
			"discount": (5675 / 10) * 2,
			"amountDue": (5675 / 10) * 8
		}, courseCost("r1", "2023-06-14"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675,
			"discount": 0,
			"amountDue": 5675
		}, courseCost("r1", "2023-12-02"));
	});

	it('Different courses should have different prices', function () {
		console.log(courseCost("p2", "2023-02-05"));
	
		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
			"cost": 5675,
			"discount": 0,
			"amountDue": 5675
		}, courseCost("r1", "2023-02-05"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Python",
			"cost": 7850,
			"discount": (7850 / 10) * 0,
			"amountDue": (7850 / 10) * 10
		}, courseCost("p1", "2023-02-05"));

		assert.deepEqual({
			"status": "success",
			"code": "r1",
			"description": "Intro to PHP course",
			"cost": 8990,
			"discount": 0,
			"amountDue": 8990
			}
			
			,
			
			courseCost("p2", "2023-02-05"));
	});
});