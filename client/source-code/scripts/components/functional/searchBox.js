import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CustomSearchInput from "../presentational/customSearchInput.js";


export default function SearchBox(props) {
  const {
    searchHandler
  } = props;

  return (
        <Grid container
          direction="row"
        >
          <Grid item xs={1} style={{ paddingTop: "20px" }}>
            <Typography color="inherit" variant="subtitle1">
              Search classes:
            </Typography>
          </Grid>
          <Grid item xs={11} style={{ paddingTop: "10px" }}>
            <CustomSearchInput searchHandler={searchHandler} />
          </Grid>
        </Grid>
  );
}
