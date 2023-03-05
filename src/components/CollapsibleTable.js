import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./CollapsibleTable.css";

function Row(props) {
  const [collapse, setCollapse] = useState(false);

  const { row, handler } = props;
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.woNum}
        </TableCell>
        <TableCell align="right">{row.creationDate}</TableCell>
        <TableCell align="right">
          <span
            className={
              row.woStatusText === "Completed"
                ? "status-completed"
                : "status-inProgress"
            }
          >
            {row.woStatusText}
          </span>
        </TableCell>

        <TableCell align="right">
          <button className="manage-btn" onClick={() => handler(row)}>
            Manage
          </button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={collapse} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Aktivitäten
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell align="right">Kundennachricht</TableCell>
                    <TableCell align="right">Start der Aktivität</TableCell>
                    <TableCell align="right">Ende der Aktivität</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activities.map((activityRow) => (
                    <TableRow key={activityRow.activityCode}>
                      <TableCell component="th" scope="row">
                        {activityRow.activityCode}
                      </TableCell>
                      <TableCell align="right">
                        {activityRow.customerMessage}
                      </TableCell>
                      <TableCell align="right">{`${activityRow.activityStart.startDate}, ${activityRow.activityStart.startTime}`}</TableCell>
                      <TableCell align="right">{`${activityRow.activityFinish.finishDate}, ${activityRow.activityFinish.finishTime}`}</TableCell>

                      <TableCell align="right">{activityRow.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="right">Erstellt am</TableCell>
            <TableCell align="right">Status</TableCell>

            <TableCell align="right">Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.data &&
            props.data.data.map((row) => (
              <Row key={row.woNum} row={row} handler={props.handler} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
