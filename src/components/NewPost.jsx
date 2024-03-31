import classes from "./NewPost.module.css";
import {useState} from "react";
function NewPost({onCancel, onAddPost}) {
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    function onBodyChanged(event) {
        setBody(event.target.value)
    }

    function onAuthorChanged(event) {
        setAuthor(event.target.value)
    }

    function onFormSubmited(event) {
        event.preventDefault()
        const postData = {
            body: body,
            author: author
        }
        onAddPost(postData)
    }

    return (
        <form className={classes.form} onSubmit={onFormSubmited}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id={"body"} required={true} rows={3} onChange={onBodyChanged}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type={"text"} id={"name"} required={true} onChange={onAuthorChanged}/>
            </p>
            <p className={classes.actions}>
                <button type={"button"} onClick={onCancel}>Cancel</button>
                <button type={"submit"}>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
