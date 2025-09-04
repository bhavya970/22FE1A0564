import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const UrlList = ({ urls }) => {
  return (
    <List>
      {urls.map((u, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`Short: http://localhost:3000/${u.shortCode}`}
            secondary={`Original: ${u.longUrl} | Expires: ${new Date(
              u.expiry
            ).toLocaleString()}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UrlList;