
class Database {
	objects = {};
	addObject(obj) {
		const idCode = require('crypto').randomBytes(10).toString('hex');
		this.objects[idCode] = obj;
	}
	output() {
		return this.objects;
	}
}

const person = {
	itemType: 'persons',
	firstName: 'Karl',
	lastName: 'Popper'
};

const building = {
	itemType: 'buildings',
	name: 'hospital',
	city: 'London',
	yearBuild: 1971
}

const db = new Database();
db.addObject(person);
db.addObject(building);

console.log(db.output());