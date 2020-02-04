let raveID= 3
const allRaves = [
  {
    id: 0,
    eventName: "Armagopolyspce",
    city: "Dallas",
    imgURL:"https://i.pinimg.com/originals/a0/8f/d9/a08fd98339b245588283c5e493c4cc61.jpg",
    date: "3/5/2020",
    RSVP: false,
    info: " new event coming to you"
  },
  {
    id: 1,
    eventName: "Rock-Out-With-Baguettes-Out",
    city: "Paris",
    imgURL:"https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FakXTTFdk1nG7TBH5ihqHyQ%2Flarger.jpg&width=1200&quality=80",
    date: "12/17/2020",
    RSVP: false,
    info:"planning a rave on in the Notre Dame basement, calling it Notre DAMN!!!"
  },{
    id: 2,
    eventName: "CaMeLcaSeSS",
    city: "dubai",
    imgURL:"https://www.thenational.ae/image/policy:1.668298:1508327500/rave.jpg?f=16x9&w=1200&$p$f$w=2bb5afe",
    date: "2/2/2020",
    RSVP: false,
    info:"bring a fan it's hot!!!! "
  }
];


module.exports = {
  getAllRaves: (req, res) => {
    res.status(200).json(allRaves);
  },
  createNewRaves: (req, res) => {
    const newRave = {
      id:raveID,
      ...req.body
    };
    allRaves.push(newRave);
    raveID++;
    res.status(200).json(allRaves);
  },
  rsvpNow: (req, res) => {
    const id = allRaves.findIndex(allRaves => allRaves.id === +req.params.id);
    const updateRave = {
      id,
      ...req.body
    }
    allRaves.splice(id,1,updateRave)
    res.status(200).json(allRaves);
  },
  removeRave: (req, res) => {
    console.log(req.params.id)
    const rsvpIndex = allRaves.findIndex(
      allRaves => allRaves.id == +req.params.id
    );
    console.log(rsvpIndex)
    allRaves.splice(rsvpIndex, 1);
    res.status(200).json(allRaves);
  }
};
