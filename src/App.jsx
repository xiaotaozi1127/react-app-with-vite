import './App.css';
import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
    const [modalVisible, setModalVisible] = useState(false)

    function createPostHandler() {
        setModalVisible(true)
    }

    function stopPostingHandler() {
        setModalVisible(false)
    }

    return (
        <>
            <MainHeader onCreatePost={createPostHandler}/>
            <main>
                <PostList isPosting={modalVisible} onStopPosting={stopPostingHandler}/>
            </main>
        </>

    )
}

export default App


