const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient("8a95fadccec1d3c50487f39660963f");

// Create TEAM MEMBERS
client.itemTypes
  .create({
    name: "Representative",
    apiKey: "representative",
    singleton: false,
    sortable: true,
    modularBlock: false,
    draftModeActive: false,
    tree: false,
    orderingDirection: null,
    collectionAppearance: "compact",
    orderingField: null,
    titleField: null,
  })
  .then((itemType) => {
    console.log(itemType);
  })
  .catch((error) => {
    console.error(error);
  });

// Fields
client.fields.create("representative", {
  label: "Title",
  fieldType: "string",
  apiKey: "title",
  position: 1,
  fieldset: null,
});

client.fields.create("representative", {
  label: "Description",
  fieldType: "text",
  apiKey: "description",
  position: 2,
  fieldset: null,
});

client.fields.create("representative", {
  label: "Image",
  fieldType: "file",
  apiKey: "image",
  position: 3,
  fieldset: null,
});
// npm install express -g
// cd ~/mynodeproject/
// npm link express

// node
// .editor

// Create Projects
client.itemTypes
  .create({
    name: "Project",
    apiKey: "project",
    singleton: false,
    sortable: true,
    modularBlock: false,
    draftModeActive: false,
    tree: false,
    orderingDirection: null,
    collectionAppearance: "compact",
    orderingField: null,
    titleField: null,
  })
  .then((itemType) => {
    console.log(itemType);
  })
  .catch((error) => {
    console.error(error);
  });

// Fields
client.fields.create("project", {
  label: "Title",
  fieldType: "string",
  apiKey: "title",
  position: 1,
  fieldset: null,
});

client.fields.create("project", {
  label: "Image",
  fieldType: "file",
  apiKey: "image",
  position: 3,
  fieldset: null,
});

