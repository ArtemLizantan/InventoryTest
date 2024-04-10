import "./currentDate.scss";
import { LuClock } from "react-icons/lu";
import moment from "moment";
import { useEffect, useState } from "react";
moment().format();

const CurrentDate = () => {
  const [momentTime, setMomentTime] = useState(moment().format("HH:mm"));
  const momentDate = moment().format("DD MMM YYYY");

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Обновилось время в хедере");

      setMomentTime(moment().format("HH:mm"));
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="date">
      <div className="date__body">
        <div className="date__top">Today</div>
        <div className="date__bottom">
          <div className="date__bottom-current-item">{momentDate}</div>
          <div className="date__bottom-current-item date__bottom-current-item--time">
            <LuClock /> {momentTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDate;
