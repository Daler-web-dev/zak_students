import { Button, FormControl, TextField, Box, Grid } from "@mui/material";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import CardItem from "./components/Card";
import Layout from "./components/Layout";
import CustomModal from "./components/Modal";

const arr = [
	{
		id: 1,
		name: "React js",
		link: "reactjs.org",
	},
	{
		id: 2,
		name: "Vue JS",
		link: "reactjs.org",
	},
	{
		id: 3,
		name: "Angular JS",
		link: "reactjs.org",
	},
];

function App() {
	const [todos, setTodos] = useState(arr);
	const [open, setOpen] = useState(false);
	const [itemToChange, setItemToChange] = useState();


	const submit = (event) => {
		event.preventDefault();

		let todo = {
			id: uuidv4(),
			link: "reactjs.org"
		}

		let fm = new FormData(event.target);

		fm.forEach((value, key) => {
			todo[key] = value
		})

		setTodos([...todos, todo])
	};

	const removeItem = (id) => {
		let filtered = todos.filter(el => el.id !== id)

		setTodos(filtered)
	}
	const editItem = (data) => {
		console.log(data);
	}


	const handleOpen = (item) => {
		setOpen(true)
		setItemToChange(item)
	};
	const handleClose = () => setOpen(false);


	return (
		<Layout>
			<center>
				<form onSubmit={submit}>
					<TextField
						placeholder="todo something"
						id="filled-basic"
						label="Lets create"
						variant="filled"
						name="name"
					/>
					<Button type="submit" variant="contained" sx={{ height: "100" }}>
						create
					</Button>
				</form>
			</center>

			<Grid
				container
				rowSpacing={2}
				mt={3}
				columnSpacing={2}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{todos.map((item) => (
					<Grid item xs={6} key={item.id} >
						<CardItem {...item} removeItem={removeItem} editOpen={handleOpen} />
					</Grid>
				))}
			</Grid>

			<CustomModal open={open} handleClose={handleClose} data={itemToChange} editFn={editItem} />
		</Layout>
	);
}

export default App;
