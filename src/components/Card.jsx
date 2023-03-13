import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardItem({name, link, removeItem, id, editItem, editOpen}) {
	return (
		<Card sx={{ maxWidth: "100", border: "2px solid red" }}>
			<CardMedia
				sx={{ height: 140 }}
				image="/static/images/cards/contemplative-reptile.jpg"
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with
					over 6,000 species, ranging across all continents except
					Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button onClick={() => removeItem(id)} size="small" sx={{background: "red", color: "white"}} >remove</Button>
				<Button onClick={() => editOpen({id, name, link})} size="small" sx={{background: "blue", color: "white"}} >edit</Button>
				<Button size="small">{link}</Button>
			</CardActions>
		</Card>
	);
}
