import moment from "moment";

export default function FormattedDate(props) {
  return <div>{moment(props.date).format("dddd HH:mm")}</div>;
}
