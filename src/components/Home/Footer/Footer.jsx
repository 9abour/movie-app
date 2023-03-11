import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import abdSabourLogo from "../../../../public/AbdSabour-Logo.png";

const Footer = () => {
	return (
		<footer
			style={{
				padding: "1rem",
				backgroundColor: "rgba(48, 30, 103, 0.41)",
				marginTop: "1rem",
			}}
		>
			<Typography sx={{ textAlign: "center", color: "#ffffff" }} variant="h6">
				Designed & Developed
			</Typography>
			<Box component="div">
				<button variant="span" className="main-btn btn-secondary name">
					abdSabour
				</button>
				<Box
					sx={{ width: 40, height: 40, marginTop: ".2rem" }}
					className="footer-logo"
					component="img"
					src={abdSabourLogo}
				/>
			</Box>
		</footer>
	);
};

export default Footer;
