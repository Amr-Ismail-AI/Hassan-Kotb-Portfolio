import { FaWhatsapp, FaTelegram, FaGithub, FaLinkedin, FaWhatsappSquare  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const SocialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/hsnkotb?tab=repositories",
        icon: FaGithub ,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/hsnkotb",
        icon: FaLinkedin,
    },
    {
        name: "Whatsapp",
        href: "https://api.whatsapp.com/send?phone=201097082987",
        icon: FaWhatsapp,
    },
    {
        name: "Telegram",
        href: "https://t.me/+201097082987",
        icon: FaTelegram,
    },
    {
        name: "Gmail",
        href: "https://mail.google.com/mail/u/0/#search/hsnkotb%40outlook.com",
        icon: HiOutlineMail,
    },
];

export default SocialLinks