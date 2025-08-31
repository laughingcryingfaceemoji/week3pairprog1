const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
        const feedbacks=Feedback.getAll()
        res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating } = req.body;

    const newfeedBack = Feedback.addOne(sender, message, rating);

    if (newfeedBack){
        res.json(newfeedBack);    
    } else {
        res.status(500).json({ message: "Failed to create a feedback"});
    }
};

const getFeedbackById = (req, res) => {
    const feedBackId = req.params.feedbackId;
    const feedback = Feedback.findById(feedBackId);
    if (feedback) {
        res.json(feedback);
    } else {
        res.status(404).json({ message: "feedback not found"});
    }
};

const updateFeedback = (req, res) => {
    const feedBackId = req.params.feedbackId;
    const {sender, message, rating} = req.body;

    const updatedfeedback = Feedback.updateOneById(feedBackId,{sender, message, rating});

    if (updatedfeedback) {
        res.json(updatedfeedback)
    } else {
        res.status(404).json({ message: "feedback not found"});
    }
};

const deleteFeedback = (req, res) => {
    const feedBackId = req.params.feedbackId;

    const isDeleted = Feedback.deleteOneById(feedBackId);

    if (isDeleted) {
        res.json({ message: "feedback deleted successfully"});
    } else {
        res.status(404).json({message: "feedback not found "})
    }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};