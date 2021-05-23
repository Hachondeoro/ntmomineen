const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient("8a95fadccec1d3c50487f39660963f");

// #region TeamCarousel
var TeamOneData = [
  {
    image: "./assets/images/cdubsa/members/tithira.jpg",
    title: "Tithira Munaweera",
    description: "President",
  },
  {
    image: "./assets/images/cdubsa/members/edin2.jpg",
    title: "Edin Tom",
    description: "Vice President",
  },
  {
    image: "./assets/images/cdubsa/members/iqbal2.jpg",
    title: "Iqbal Brar",
    description: "Secretary",
  },
  {
    image: "./assets/images/cdubsa/members/roy.jpg",
    title: "Roy Ma",
    description: "Treasurer",
  },
  {
    image: "./assets/images/cdubsa/members/gayan2.jpg",
    title: "Gayan Abeysekara",
    description: "Events Officer",
  },
  {
    image: "./assets/images/cdubsa/members/aishwarya.jpg",
    title: "Aishwarya Ray",
    description: "Undergraduate Officer",
  },
  {
    image: "./assets/images/cdubsa/members/rafita.jpg",
    title: "Rafita Riha",
    description: "Postgraduate Officer",
  },
  {
    image: "./assets/images/cdubsa/members/ruchini.jpg",
    title: "Ruchini Perera",
    description: "Assistant Treasurer",
  },
];

async function createRecord(title, description, image) {
  const path = await client.createUploadPath(image);
  const upload = await client.uploads.create({ path });
  const record = await client.items.create({
    itemType: "666740", // model ID
    title: title,
    description: description,
    image: {
      uploadId: upload.id,
    },
  });
  console.log(record);
}
TeamOneData.map((item) => {
  createRecord(item.title, item.description, item.image);
});

// #endregion


// node --experimental-modules  .\components\DatoCMS\test.js
// node .editor > Paste and enter

var PortfolioData = [
  {
    title: "Be Local Buy Local",
    image:"./assets/images/cdubsa/projects/belocalbuylocal2.jpg",
    url: "#",
  },
  {
    title: "CPA Networking Event",
    image:"./assets/images/cdubsa/projects/cpa networking event 4.jpg",
    url: "#",
  },
  {
    title: "CPA Networking Event",
    image:"./assets/images/cdubsa/projects/free tax clinic.jpg",
    url: "#",
  },
  {
    title: "Orientation Day",
    image:"./assets/images/cdubsa/projects/orientation day 2.jpg",
    url: "#",
  },
  {
    title: "Women's day",
    image:"./assets/images/cdubsa/projects/womensday.jpg",
    url: "#",
  },
];

async function createRecord(title, image) {
  const path = await client.createUploadPath(image);
  const upload = await client.uploads.create({ path });
  const record = await client.items.create({
    itemType: "667499", // model ID
    title: title,
    image: {
      uploadId: upload.id,
    },
  });
  console.log(record);
}
PortfolioData.map((item) => {
  createRecord(item.title, item.image);
});




// // Create records
// client.items.create({
//   itemType: "661078", // model ID
//   title: "Edin Tom",
//   description: "Vice President",
//   image: {
//     uploadId: "12333298",
//   },
// });

// // Upload image
// async function createUpload(file) {
//   const path = await client.createUploadPath(file);

//   const upload = await client.uploads.create({
//     path,
//     author: "New author!",
//   });
//   console.log(upload);
// }
// createUpload("./assets/images/cdubsa/cdu_transparent.png");
