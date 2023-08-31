import { Gallery_Images_Data, Happy_Clients_Images } from "./images";

const { img1, img2, img3, img4, img5, img6, img7, img8, img9 } =
  Gallery_Images_Data;

const { client1, client2, client3 } = Happy_Clients_Images;

const API_URL = "https://api.svayurved.com/";
export const BLOGS_API_URL = API_URL + "getBlogs";
export const TREATMENTS_API_URL = API_URL + "getTreatments";
export const SESSIONS_API_URL = API_URL + "getSessions";
export const CONTACT_API_URL = API_URL + "user-contact";
export const PROGRAMS_API_URL = API_URL + "enroll-programs";

/* **** *** media data *** **** */
export const Media_Data = [
  {
    id: 1,
    type: "video",
    url: "https://www.youtube.com/embed/ozvzOMyEoBk",
    title: "How Ayurveda Works?",
  },
  {
    id: 2,
    type: "video",
    url: "https://www.youtube.com/embed/-ELpr7bsC24",
    title: "What is Gharbhasanskara?",
  },
  {
    id: 3,
    type: "video",
    url: "https://www.youtube.com/embed/DydfVpBeJ3U",
    title: "Abortion and its affects",
  },
  {
    id: 4,
    type: "video",
    url: "https://www.youtube.com/embed/R3GjatYxLuA",
    title: "Ayurved & Child Immunity",
  },
  {
    id: 5,
    type: "video",
    url: "https://www.youtube.com/embed/GLDOlD3glNs",
    title: "Excercise - What, How & Why?",
  },
  {
    id: 6,
    type: "video",
    url: "https://www.youtube.com/embed/Y0gv3OMV5Z0",
    title: "Beejsanskara - Step 1 of Gharbhasanskara",
  },

  { id: 7, type: "image", url: img1 },
  { id: 8, type: "image", url: img2 },
  { id: 9, type: "image", url: img3 },
  { id: 10, type: "image", url: img4 },
  { id: 11, type: "image", url: img5 },
  { id: 12, type: "image", url: img6 },
  { id: 13, type: "image", url: img7 },
  { id: 14, type: "image", url: img8 },
  { id: 15, type: "image", url: img9 },
];

export const happy_clients = {
  category: "Gharbhsanskar",
  clients: [
    { id: 1, img: client1 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 1, img: client1 },
  ],
};
