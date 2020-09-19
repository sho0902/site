import React, { useState, useEffect } from 'react';
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios, { AxiosResponse } from 'axios';

const useMybusiness = () => {
  const [rows, setRows] = useState(Array);
  const createData = (
    name: string,
    address: string,
    rating: number,
    place_id: number
  ) => {
    return { name, address, rating, place_id };
  };

  rows.push(createData("test", "test", 5.0, 1200000000));
  rows.push(createData("test2","sample",3.0,111111111));

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  useEffect(() => {
    rows.push(createData("test3","sample",4.0,111111111));
    /*
    var args = {
      data: {},
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Credentials": "true",
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    axios.get('https://cors-anywhere.herokuapp.com/' + "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDTphZ8THxS0RZB7eL_QQMXEhWeS2oAVog&query=ADlive&language=ja&location=33.5980136,130.4659506", args)
      .then(function (response: AxiosResponse) {
        console.log(response.data['results']);
        rows.push(createData(response.data['results'], "address", 5.0, 120000))
        setRows(rows);
      })
      .catch(function (error: AxiosResponse) {
        return error;
      })
    */
    });

  return (
    <GenericTemplate title="テスト">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell align="right">住所</TableCell>
              <TableCell align="right">評価</TableCell>
              <TableCell align="right">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row:any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.place_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default useMybusiness;
