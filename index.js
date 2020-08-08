const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

data = {
  msg: "Welcome on DevStack Stack Channel",
  info: "This is a root endpoint",
  request:
    "Hey if you did'nt subscribed my YouTube channle please subscribe it",
};

app.route("/").get((req, res) => res.json(data));

app.route("/register").post((req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };
  return res.json({ msg: data, status: "Successfully Registered" });
});

app.route("/check/:value").get((req, res) => {
  if (req.params.value % 2) {
    res.json({ status: true, msg: "It is a even number" });
  } else {
    res.json({ status: false, msg: "It is a odd number" });
  }
});

app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
