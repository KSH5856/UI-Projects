import { useState } from "react";
import { FolderStructure } from "./FolderStructure";

export const MenuItem = ({ item }) => {
  const [currentChild, setCurrentChild] = useState(true);
  const toggleComponent = (getCurrentLabel) => {
    setCurrentChild({
      ...currentChild,
      [getCurrentLabel]: !currentChild[getCurrentLabel],
    });
  };

  return (
    <div style={{ padding: "5px"  }}>
      <div style={{ display: "flex",  alignItems: "center", gap: "10px" }}>
        <p>{item.label}</p>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => toggleComponent(item.label)}
        >
          {currentChild[item.label] ? "-" : "+"}
        </span>
      </div>
      {item && item.children && item.children.length > 0
        ? currentChild[item.label] && (
            <FolderStructure folderItems={item.children} />
          )
        : null}
    </div>
  );
};
