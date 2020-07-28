let people = [
	{
		"firstName": "James",
		"lastName": "Cook",
		"language": "English",
	},
	{
		"firstName": "Wilfred",
		"lastName": "Owen",
		"language": "English",
	},
	{
		"firstName": "Henry",
		"lastName": "Hopkins",
		"language": "English",
	}
]

people = people.map(p => {
	p.idCode = require('crypto').randomBytes(10).toString('hex');
	return p;
})

console.log(people);