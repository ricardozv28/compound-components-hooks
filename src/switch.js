import "./switch.styles.css";
import React from "react";

// STOP! You should not have to change anything in this file to
// make it through the workshop. If tests are failing because of
// this switch not having properties set correctly, then the
// problem is probably in your implementation. Tip: Check
// your `render` method or the `getTogglerProps` method
// (if we've gotten to that part)
const Switch = React.memo(({ on, className, ...props }) => {
  console.log("render switch number:", props.number);
  const btnClassName = React.useMemo(
    () =>
      [className, "toggle-btn", on ? "toggle-btn-on" : "toggle-btn-off"]
        .filter(Boolean)
        .join(" "),
    [on, className]
  );
  return (
    <div>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={() => {
          // changing is handled by clicking the button
        }}
      />
      <button className={btnClassName} aria-label="Toggle" {...props} />
    </div>
  );
});

export { Switch };
