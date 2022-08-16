import EmployeeFeedback from "./EmployeeFeedback";
import FeedbackData from "../../Data/FeedbakcData";

function createFeedback(FeedbackData) {
    return <EmployeeFeedback
                key={FeedbackData.id}
                photo={FeedbackData.img}
                name={FeedbackData.name}
                rate={FeedbackData.rate}
                reply={FeedbackData.reply}
                display={{display: "none"}}
                />
}

function FeedbackList() {
    return (
        <div>
            {FeedbackData.map(createFeedback)}
        </div>
    )
}

export default FeedbackList;