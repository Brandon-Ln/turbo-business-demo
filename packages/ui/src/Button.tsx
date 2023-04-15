import * as React from "react";


export default function Button() {
  let a = 123;

  debugger;

  React.useEffect(() => {
    console.log(a);
  }, []);

  return <button type="button">Boop</button>;
}

export const greeting = "hello";
