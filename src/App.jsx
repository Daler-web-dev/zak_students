import {Button, FormControl, TextField} from '@mui/material';
import { Box } from '@mui/system';
import {FaTelegramPlane} from 'react-icons/fa'
import "./App.css";
import Layout from './components/Layout';

const arr = [
	{
		id: 1,
		name: "React js",
		link: "reactjs.org"
	},
	{
		id: 1,
		name: "React js",
		link: "reactjs.org"
	},
	{
		id: 1,
		name: "React js",
		link: "reactjs.org"
	},
]

function App() {


	const submit = (evt) => {
		evt.prevetnDefault()

		let fm = new FormData(evt.target)

	}

	return (
		<Layout>
			<center>
				<form onSubmit={submit} >
					<TextField placeholder="todo something" id="filled-basic" label="Lets create" variant="filled" />
					<Button variant="contained" sx={{height: "100" }} >create</Button>
				</form>
			</center>

			<Box sx={{width: "70%", margin: "100px auto", background: "red"}} >
			</Box>

		</Layout>
	);
}

export default App;
