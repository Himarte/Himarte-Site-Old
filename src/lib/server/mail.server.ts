import nodemailer from "nodemailer";
import { SENDER_EMAIL, SENDER_PASSWORD, HOST_SERVER } from "$env/static/private";

const transporter = nodemailer.createTransport({
    name: "Site HIMARTE!",
    host: `${HOST_SERVER}`,
    port: 465,
    secure: true,
    auth: {
        user: `${SENDER_EMAIL}`,
        pass: `${SENDER_PASSWORD}`,
    },
});

export default transporter;
