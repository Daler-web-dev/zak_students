import React, {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function CustomModal({ handleClose, open, data, editFn }) {
    const [value, setValue] = useState('');

	return (
		<div>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<Box sx={style}>
					<TextField
						placeholder={data?.name}
						label="Change text"
						variant="filled"
						name="name"
                        onKeyUp={(e) => setValue(e.target.value)}
					/>
                    <Button onClick={() => editFn({id: data.id, changeText: value })} >Change</Button>
				</Box>
			</Modal>
		</div>
	);
}
