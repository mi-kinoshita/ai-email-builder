// import { Slider } from "@/components/ui/slider";
// import React from "react";

// function SliderField({ label, value, onHandleStyleChange, type }) {
//   const formattedValue = (value_) => {
//     console.log("value_: ", value_);
//     return Number(value_.toString().replace(type, ""));
//   };

//   return (
//     <div>
//       <label>
//         {label} ({value})
//       </label>
//       <Slider
//         defaultValue={[formattedValue(value)]}
//         max={100}
//         step={1}
//         onValueChange={(v) => onHandleStyleChange(v + type)}
//       />
//     </div>
//   );
// }

// export default SliderField;

import { Slider } from "@/components/ui/slider";
import React, { useState, useEffect } from "react";

function SliderField({ label, value, onHandleStyleChange, type }) {
  // formattedValue関数を定義
  const formattedValue = (value_) => {
    console.log("value_: ", value_);
    return Number(value_.toString().replace(type, ""));
  };

  const [sliderValue, setSliderValue] = useState(formattedValue(value));

  useEffect(() => {
    setSliderValue(formattedValue(value));
  }, [value]);

  const handleSliderChange = (v) => {
    setSliderValue(v[0]);
    onHandleStyleChange(v[0] + type);
  };

  return (
    <div>
      <label>
        {label} ({value})
      </label>
      <Slider
        value={[sliderValue]}
        max={100}
        step={1}
        onValueChange={handleSliderChange}
      />
    </div>
  );
}

export default SliderField;
