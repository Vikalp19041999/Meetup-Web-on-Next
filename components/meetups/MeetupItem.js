import { useRouter } from "next/router";
import MeetupItemCSS from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={MeetupItemCSS.item}>
      <Card>
        <div className={MeetupItemCSS.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={MeetupItemCSS.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={MeetupItemCSS.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
