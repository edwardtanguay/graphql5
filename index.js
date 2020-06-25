import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const port = 3006;

app.get('/', (req, res) => {
	res.send('<h3>Site works.</h3>');
});

const root = {
	friend: () => {
		return {
			id: 234234343,
			firstName: "James",
			lastName: "Cook",
			gender: "male",
			language: "English",
			email: "james@lsdkfjsdjf.com"
		}
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