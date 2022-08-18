import EmployeeFeedback from "./EmployeeFeedback";

function createFeedback(item) {
    return <EmployeeFeedback
                key={item.id}
                item={item}
                />
}

function FeedbackList({feedback}) {
    return (
        <div>
            {feedback.map(createFeedback)}
        </div>
    )
}

export default FeedbackList;