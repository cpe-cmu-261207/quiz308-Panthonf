
import './App.css';
import Post from './components/Post';
import { comments } from './data/comments';
import Comment from './components/Comment';

function App() {
  return (
    <div className="p-2">
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">
        <Post></Post>
        <div className="">
          {comments.map(x => <Comment username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}></Comment>)}
        </div>
      </div>
    </div>
  );
}

export default App;
