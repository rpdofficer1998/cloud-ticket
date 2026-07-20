const eventService = require('../services/event.service');

const getAllEvents = async (req, res) => {
    try {

    const events = await eventService.getAllEvents();

    res.json(events);
    } catch (error){
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }

};

module.exports = {
    getAllEvents
};