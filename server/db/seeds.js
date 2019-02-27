use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    firstName: "Ian",
    secondName: "Bone",
    email: "mrB@gmail.com",
    checkedIn: false
  },
  {
    firstName: "Joe",
    secondName: "Blogs",
    email: "JoeBlogs@gmail.com",
    checkedIn: true
  },
  {
    firstName: "Sponge",
    secondName: "Bob",
    email: "spongebob@gmail.com",
    checkedIn: true
  },
  {
    firstName: "Barry",
    secondName: "Snail",
    email: "barrysnail@gmail.com",
    checkedIn: false
  },
  {
    firstName: "Patrick",
    secondName: "starfish",
    email: "patrickstarfish@gmail.com",
    checkedIn: false
  },
  {
    firstName: "Mr",
    secondName: "Crab",
    email: "mrcrab@gmail.com",
    checkedIn: false
  },
  {
    firstName: "Squdward",
    secondName: "Squid",
    email: "squidwardsquid@gmail.com",
    checkedIn: true
  },
]);
