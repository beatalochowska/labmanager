import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { TubesDisplayProps } from "./types";
import { tableColumnsTitles } from "../RackDisplay/const";

const TubesDisplay: React.FC<TubesDisplayProps> = ({ tubes }) => (
  <Box component="section">
    <TableContainer component={Paper} sx={{ mb: 1 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={tableColumnsTitles.length}
              sx={{ fontWeight: "bold", bgcolor: "grey.100" }}
            >
              Available tubes
            </TableCell>
          </TableRow>
          <TableRow>
            {tableColumnsTitles.map((title, index) => (
              <TableCell key={title} align={index ? "right" : "left"}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tubes.map((tube) => (
            <TableRow
              key={tube.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.values(tube).map((value, index) => (
                <TableCell key={value} align={index ? "right" : "left"}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default TubesDisplay;
