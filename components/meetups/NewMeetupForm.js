import { useRef } from "react";
import NewMeetupFormCSS from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={NewMeetupFormCSS.form} onSubmit={submitHandler}>
                <div className={NewMeetupFormCSS.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={NewMeetupFormCSS.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={NewMeetupFormCSS.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={NewMeetupFormCSS.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea
                        type="description"
                        required
                        row="5"
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={NewMeetupFormCSS.actions}>
                    <button>ADD MEETUP</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
