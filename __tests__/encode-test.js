jest.dontMock('../')

describe('x-www-form-urlencoded: encode'
, function () {
	it([	'it should encode a given string `s` into '
		, '`application/x-www-form-urlencoded` format.'
	].join("")
	, function () {
		var xform = require('../')
		, encoded
		
		encoded = xform.encode(" %&+£€")
	
		expect(encoded).toBe("+%25%26%2B%C2%A3%E2%82%AC")
	})
})
