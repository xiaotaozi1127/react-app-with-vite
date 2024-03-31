import classes from "./MainHeader.module.css";
import {MdPostAdd, MdMessage} from "react-icons/md"

function MainHeader({onCreatePost}) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage/>
                My Blog
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18}/>
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;
