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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useMybusiness = () => {
  const createData = (
    name: string,
    address: string,
    rating: string,
    place_id: string
  ) => {
    return { name, address, rating, place_id };
  };
  const [rows, setRows] = useState([{}]);
  const [str, setStr] = useState("");

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  console.log(rows);
  useEffect(() => {
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
    axios.get('https://cors-anywhere.herokuapp.com/' + "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDTphZ8THxS0RZB7eL_QQMXEhWeS2oAVog&query=セブンイレブン&language=ja&location=33.5980136,130.4659506", args)
      .then(function (response: AxiosResponse) {
        const newRows = [];
        console.log(response.data['results']);
        for (let i = 0; i < response.data['results'].length; i++) {
          newRows.push(createData(response.data['results'][i]['name'], response.data['results'][i]['formatted_address'], response.data['results'][i]['rating'], response.data['results'][i]['place_id']));
          console.log(response.data['results'][i]['name']);
        }
        setRows([...newRows]);
      })
      .catch(function (error: AxiosResponse) {
        return error;
      })
  }, []);

  const handleOnClick = () => {
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
      axios.get('https://cors-anywhere.herokuapp.com/' + "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDTphZ8THxS0RZB7eL_QQMXEhWeS2oAVog&query="+ str +"&language=ja&location=33.5980136,130.4659506", args)
        .then(function (response: AxiosResponse) {
          const newRows = [];
          console.log(response.data['results']);
          for (let i = 0; i < response.data['results'].length; i++) {
            newRows.push(createData(response.data['results'][i]['name'], response.data['results'][i]['formatted_address'], response.data['results'][i]['rating'], response.data['results'][i]['place_id']));
            console.log(response.data['results'][i]['name']);
          }
          setRows([...newRows]);
        })
        .catch(function (error: AxiosResponse) {
          return error;
        })
  };

  return (
    <GenericTemplate title="テスト">
      <TableContainer component={Paper}>
        <Grid container>
          <Grid item xs={11}>
            <TextField
            id="standard-full-width"
            label="店舗名"
            style={{ margin: 8 }}
            placeholder="セブンイレブン"
            onChange={event => setStr(event.target.value)}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>
          <Grid item xs={1} justify="flex-end">
            <Button variant="contained" color="primary" onClick={handleOnClick}>
              Search
          </Button>
          </Grid>
        </Grid>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell align="left">住所</TableCell>
              <TableCell align="left">評価</TableCell>
              <TableCell align="left">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.rating}</TableCell>
                <TableCell align="left">{row.place_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default useMybusiness;
