import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { RackDisplayProps } from "./types";
import { tableColumnsTitles } from "./const";

const RackDisplay: React.FC<RackDisplayProps> = ({ racks, numRacks }) => (
  <Box component="section">
    {Array.from({ length: numRacks }).map((_, index) => (
      <TableContainer
        component={Paper}
        key={index}
        sx={{ mb: 2, mt: 2, ml: 1, mr: 1 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="rack table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", bgcolor: "grey.100" }}
                colSpan={tableColumnsTitles.length}
              >
                Rack {index + 1}
              </TableCell>
            </TableRow>
            <TableRow>
              {Boolean(racks.length) ? (
                tableColumnsTitles.map((title, index) => (
                  <TableCell key={title} align={index ? "right" : "left"}>
                    {title}
                  </TableCell>
                ))
              ) : (
                <TableCell align={"center"}>
                  The rack is empty. Add test tubes or load example tubes and
                  sort them.
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          {Boolean(racks.length) && (
            <TableBody>
              {racks[index].testTubes.map((tube) => (
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
          )}
        </Table>
      </TableContainer>
    ))}
  </Box>
);

export default RackDisplay;
