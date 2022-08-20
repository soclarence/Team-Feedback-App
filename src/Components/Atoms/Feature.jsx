

function Feature(props) {
    return(
        <div className="w-96">
            <img src={props.img} alt="feature" />
            <h1 className="font-bold py-4 text-xl">{props.heading}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default Feature;