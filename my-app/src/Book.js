const Book = () => {
    return ( 
        <div className="book">
            <OneBook title="it ends with us" author="collen hover" description="love story" date="2016"/>
        </div>
     );
}
const OneBook=(props)=>{
    return(
        <div>
            <h3>Title : {props.title}</h3>
            <h3>Author : {props.author}</h3>
            <h3>Description : {props.description}</h3>
            <h3>Date : {props.date}</h3>
        </div>
    )
}
export default Book;