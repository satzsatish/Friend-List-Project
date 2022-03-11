import "./styles.css";
import FriendCard from "./Components/FriendCard/FriendCard";
import SearchFriend from "./Components/SearchFriend/SearchFriend";
import FriendHeading from "./Components/FriendHeading/FriendHeading";

export default function App() {
  /* const friendall = {
    width: 50%
  }*/
  return (
    <div className="App">
      <FriendHeading />
      <SearchFriend />
      <FriendCard name="satish" />
    </div>
  );
}
