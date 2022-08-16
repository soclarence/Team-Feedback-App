import Header from "../Atoms/Header";
import EmployeeList from "../Employee/EmployeeList";
import AverageCount from "../Atoms/AverageCount";
// import FeedbackPost from "../Employee/FeedbackPost";
import DashHeader from "../Atoms/DashHeader";
import Question from "../Atoms/Question";
// import EmployeeFeedback from "../Employee/EmployeeFeedback";
import FeedbackList from "../Employee/FeedbackList";

function dashboard() {
    return(
        <div className="container px-11 lg:px-11 xl:px-11 md:px-0 sm:px-4 overflow-hidden mx-auto justify-center flex-col">
            <Header />
            <div className="mt-32 flex 2sm:flex-wrap-reverse flex-row w-auto pt-7">
                <div className="basis-full">
                    <DashHeader header="PLEASE Team"/>
                    <EmployeeList />
                </div>
                <div className="lg:mr-0 md:pl-11  basis-1/4 sm:mt-[-50px]">
                    <DashHeader header="Average Rating"/>
                    <AverageCount />
                </div>
            </div>

            <div className="flex md:flex-wrap lg:flex-nowrap 2sm:flex-wrap flex-row pt-16 space-x-4">
                <div className="basis-1/2">
                    <DashHeader header="Team Feedback"/>
                    <FeedbackList />
                </div>

                <div className="basis-1/2  2sm:pb-11">
                    <DashHeader header="Questions"/>
                    <div className="flex space-x-4 overflow-y-scroll  md:w-[750px] xl:w-[700px] lg:w-3/4 2sm:w-1/2">
                        <Question color={{backgroundColor: "#767DE8"}}
                        question = "Team experience and workplace rating" />
                        <Question color={{backgroundColor: "#F49D68"}}
                        question = "PLEASE CO. Employee rating. V.0.1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;