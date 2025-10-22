import React , {useState} from 'react'
import {TABS} from "../../constants/index.jsx"
import {Tab, AnimatePresence, Content} from "../../constants/index.js"

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
  
    const handleSetSelected = (val) => {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      } else if (val === null) {
        setDir(null);
      }
  
      setSelected(val);
    };
  
    return (
      <div
        onMouseLeave={() => handleSetSelected(null)}
        className="relative flex h-fit gap-2"
      >
        {TABS.map((t) => {
          return (
            <Tab
              key={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
              tab={t.id}
            >
              {t.title}
            </Tab>
          );
        })}
  
        <AnimatePresence>
          {selected && <Content dir={dir} selected={selected} />}
        </AnimatePresence>
      </div>
    );
  };

export default Tabs