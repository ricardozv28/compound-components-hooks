// Flexible Compound Components with context

import React from "react";
import { Switch } from "./switch";

const ToggleContext = React.createContext({ on: false, toggle: () => {} });

function Toggle(props) {
  const [on, setToggle] = React.useState(props.on || false);
  const toggle = () => setToggle(state => !state);
  const contextValue = React.useMemo(() => ({ on, toggle }), [on]);
  return (
    <ToggleContext.Provider value={contextValue}>
      {props.children}
    </ToggleContext.Provider>
  );
}

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

function On(props) {
  const { on } = React.useContext(ToggleContext);
  return <>{on ? props.children : null}</>;
}

function Off(props) {
  const { on } = React.useContext(ToggleContext);
  return <>{on ? null : props.children}</>;
}

function Button(props) {
  const { on, toggle } = React.useContext(ToggleContext);
  return <Switch on={on} onClick={toggle} {...props} />;
}

function Usage() {
  const [myOn, setMyOn] = React.useState(false);
  const on = myOn ? "on" : "off";
  return (
    <>
      <div>useState</div>
      <div>This button is {on}</div>
      <Switch number={1} on={myOn} onClick={() => setMyOn(state => !state)} />
      <hr />
      <div>Context</div>
      <Toggle on={true}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <div>
          <div>
            <Toggle.Button number={2} />
          </div>
        </div>
      </Toggle>
      <hr />
      <Toggle>
        <div>useState</div>
        <div>This button is {on}</div>
        <Switch number={3} on={myOn} onClick={() => setMyOn(state => !state)} />
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button number={4} />
        <div>
          <div>
            <Toggle.On>Nested On</Toggle.On>
            <Toggle.Off>Nested Off</Toggle.Off>
            <Toggle.Button number={5} />
          </div>
        </div>
      </Toggle>
    </>
  );
}

export { Usage };
