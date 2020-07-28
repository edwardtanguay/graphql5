import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const port = 3006;

app.get('/', (req, res) => {
	res.send('<h3>Site works.</h3>');
});

class Friend {
	constructor(id, fn, { firstName, lastName, gender, language, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
		this.email = email;
	}
}

const friendDatabase = {};

const root = {
	friend: () => {
		return {
			id: 234234343,
			firstName: "James",
			lastName: "Cook",
			gender: "male",
			language: "English",
			emails: [
				{ email: "james@lsdkfjsdjf.com" },
				{ email: "john323@lsdkfjsdjf.com" }
			]
		}
	},
	createFriend: ({ input }) => {
		let id = require('crypto').randomBytes(10).toString('hex');
		friendDatabase[id] = input;
		console.log(friendDatabase);
		return new Friend(id, input.firstName, input);
	}
};

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));

// query in graphiql like this:
// query {
//  hello
// }