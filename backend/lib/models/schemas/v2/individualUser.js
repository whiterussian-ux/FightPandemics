const { Schema } = require("mongoose");
const { model: User } = require("./user");

function updateAuthorFirstNameReferences(firstName) {
  this.firstName = firstName;
  this.name = this.fullName;
  return firstName;
}

function updateAuthorLastNameReferences(lastName) {
  this.lastName = lastName;
  this.name = this.fullName;
  return lastName;
}

const individualUserSchema = new Schema(
  {
    firstName: {
      required: true,
      set: updateAuthorFirstNameReferences,
      type: String,
    },
    lastName: {
      set: updateAuthorLastNameReferences,
      type: String,
    },
    needs: {
      medicalHelp: { default: false, required: true, type: Boolean },
      otherHelp: { default: false, required: true, type: Boolean },
    },
    objectives: {
      donate: { default: false, required: true, type: Boolean },
      shareInformation: { default: false, required: true, type: Boolean },
      volunteer: { default: false, required: true, type: Boolean },
    },
    type: {
      enum: ["individual"],
      lowercase: true,
      required: true,
      type: String,
    },
    urls: {
      facebook: String,
      github: String,
      linkedin: String,
      twitter: String,
      website: String,
    },
  },
  { collection: "users" },
);

individualUserSchema.virtual("fullName").get(function getFullName() {
  return `${this.firstName} ${this.lastName}`;
});

const IndividualUser = User.discriminator(
  "IndividualUser",
  individualUserSchema,
);

exports.schema = individualUserSchema;
exports.model = IndividualUser;
