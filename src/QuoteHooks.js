import React, { useEffect } from "react";

export default function Quote(props) {
  useEffect(() => {
    console.log(props.quote + "beans");
    return () => {
      console.log(props.quote + ": bye bye");
    };
  });

  return (
    <div>
      beans will make her dance + {JSON.stringify(props.quote.disruptions)}
    </div>
  );
}
