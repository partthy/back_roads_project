import tour1 from '../images/tour-1.jpeg'
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";



export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const servicesItems = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores officia.",
  },
];

export const toursCards = [
  {
    id: 1,
    tourImg: tour1,
    tourDate: "august 26th, 2025",
    tourTitle: "Tibet Adventure",
    tourDetail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "china",
    tourDays: "6 days",
    tourCost: "from $2100",
  },
  {
    id: 2,
    tourImg: tour2,
    tourDate: "october 1th, 2025",
    tourTitle: "Best of Java",
    tourDetail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "Indonesia",
    tourDays: "11 days",
    tourCost: "from $1400",
  },
  {
    id: 3,
    tourImg: tour3,
    tourDate: "September 15th, 2025",
    tourTitle: "Explore Hongkong",
    tourDetail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "Hong Kong",
    tourDays: "8 days",
    tourCost: "from $5000",
  },
  {
    id: 4,
    tourImg: tour4,
    tourDate: "December 5th, 2025",
    tourTitle: "Kenya Highlights",
    tourDetail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "kenys",
    tourDays: "20 days",
    tourCost: "from $3300",
  },
];
