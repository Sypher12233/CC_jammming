// import styles from "./Track.module.css";

function Track(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.song}</h3>
    </div>
  );
}

export default Track;
