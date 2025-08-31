/* // The data model for pet is as follows
{
    "sender": "John Smith",
    "message": "Great session on React components! I found the examples very helpful.",
    "rating": 5
  }
 */

let feedbackArray = []

let nextId = 1;

function getAll() {
    return feedbackArray;
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating){
        return false;
    }
    const newfeedBack = {
        id: nextId++,
        sender,
        message,
        rating,
    };
    feedbackArray.push(newfeedBack);
    return newfeedBack;
}

function findById(id) {
    const feedBack = feedbackArray.find((item) => item.id == id);
    if (feedBack) {
        return feedBack;
    }   else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const feedBack = findById(id);
    if (feedBack) {
        if (updatedData.sender) {
            feedBack.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedBack.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedBack.rating = updatedData.rating;
        }
        return feedBack;
    }
    return false;
}

function deleteOneById(id) {
    const feedBack = findById(id);
    if (feedBack) {
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter((feedBack) => feedBack.id != id);
        return feedbackArray.length < initialLength
    }
    return false;
}
if (require.main === module) {
    let result = addOne("John smith", "Great session on React components! I found the examples very helpful.", 5 )
    console.log(result)
    result = addOne("John Doe","Great JS exercise", 5)
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOne called:", updateOneById(1, {message: "Great react session", rating: 4}));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const FeedBack = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
};

module.exports = FeedBack;