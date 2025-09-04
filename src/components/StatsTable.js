import React from "react";
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";

const StatsTable = ({ urls }) => {
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">URL Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Expiry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((u, i) => (
            <TableRow key={i}>
              <TableCell>http://localhost:3000/{u.shortCode}</TableCell>
              <TableCell>{u.longUrl}</TableCell>
              <TableCell>{u.clicks.length}</TableCell>
              <TableCell>{new Date(u.expiry).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StatsTable;