const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// post route to add new people
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log(" data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

// get method to get the person

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();

    console.log("data fetch ....");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error ..." });
  }
});

// parameterzied api

router.get("/:worktype", async (req, res) => {
  try {
    const workType = req.params.worktype;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("data fetch successfully...");
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "invalid worktype" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error...." });
  }
});

// update method

router.patch("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log("person data updated..");

    res.status(200).json(response);

    if (!response) {
      res.status(400).json({ message: " Person not found..." });
    }
  } catch (err) {
    res.status(500).json({ error: "internal server error...." });
  }
});

// delete methods

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
     console.log("Person data deleted");

    res.status(200).json( { message: " Person data has  deleted" });
   

    if (!response) {
      res.status(404).json({ message: " Person not found.." });
    }
  } catch (err) {
    res.status(500).json({ error: " internal server error.." });
  }
});

// comment added for testing purpose
module.exports = router;
