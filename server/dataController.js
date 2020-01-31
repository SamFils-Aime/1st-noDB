const raveIndex=0

const allRaves = [
    { 
        id: 0, 
        city: 'Dallas', 
        imgURL: 'https://i.pinimg.com/originals/a0/8f/d9/a08fd98339b245588283c5e493c4cc61.jpg', 
        date: '3/5/2020',
        RSVP: false,
        info: " new event coming to you"
    },
    { 
        id: 1, 
        city: 'Paris', 
        imgURL: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FakXTTFdk1nG7TBH5ihqHyQ%2Flarger.jpg&width=1200&quality=80',
        Date: '12/17/2020',
        RSVP: false,
        info: "planning a rave on in the Notre Dame basement, calling it Notre DAMN!!!"
    }
];

module.exports = {
    getAllRaves: (req, res) => {
        res.status(200).json(allRaves);
    },
    createNewRaves:(req,res) =>{
        const newRave= {
            id,
            ...req.body
        }
        allRaves.push(newRaves)
        id++
        res.status(200).json(allRaves)
    },
    rsvpNow: (req,res)=> { 
        const rsvpIndex = allRaves.findIndex(rsvp => rsvp.id === req.params.id);
        allRaves[rsvpIndex].RSVP = !allRaves[rsvpIndex].RSVP ;
        res.status(200).json(allRaves);
    },
    removeRave: (req,res)=> {
        const rsvpIndex = allRaves.findIndex(rsvp => rsvp.id === req.params.id);
        allRaves.splice(rsvpIndex,1)
        res.status(200).json(allRaves)
    }



}


