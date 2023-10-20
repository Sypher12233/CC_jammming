// import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <div>
      {props.passedTrack.map((track) => (
        <Track key={track.id} track={track} name={track.name} />
      ))}
    </div>
  );
}

export default Tracklist;
