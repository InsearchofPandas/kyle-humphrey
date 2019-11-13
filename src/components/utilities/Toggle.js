import { useState } from "react";

const Toggle = ({ children }) => {
  let [isToggled, setToggle] = useState(false);

  return children({
    isToggled,
    setToggle
  });
};

export default Toggle;

// how to call***
//{
/* <Toggle>
  ({(isToggled, setToggle)}) => (
  <div>
    {isToggled && <COMPONENT />}
    <button onClick={() => setToggle(!isToggled)}>Show/Hide</button>
  </div>
  )
</Toggle>; 
} */
