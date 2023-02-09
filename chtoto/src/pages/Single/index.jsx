import React, { useEffect, useState } from "react";
import moment from "moment";

function Single() {
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(false);

  useEffect(() => {
    let changeDate;
    if(start){
        changeDate = setInterval(() => setDate(new Date(), 1000));
    }
    return ()=> clearInterval(changeDate);
  }, [start]);

  return (
    <div>
      <h1>Privet</h1>
      <button onClick={() => setStart(!start)}>
        {start ? 'Vikluci' : 'Vkluci'}
      </button>
      {start ? <div>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div> : null}
    </div>
  );
}
export default Single;
