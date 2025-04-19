import { MenuItem } from "./MenuItem";

export const FolderStructure = ({ folderItems }) => {
  return (
    <div style={{ color:'black'}}>
      {folderItems
        ? folderItems.map((item, key) => {
            return (
              <div key={key}>
                <div>
                  <MenuItem item={item} />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
