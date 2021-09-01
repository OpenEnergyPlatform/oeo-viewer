import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";


import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue, red, orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: "#f7f7f7",
    borderColor: "#00688B",
    overflow: "auto",
    height: "400px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
});

export default function SimpleCard(props) {
  const {nodeInfo} = props;
  const classes = useStyles();
  return (
      <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography color="textSecondary">
              Name:
            </Typography>
            <Typography variant="h5" component="h2">
              {nodeInfo.name}
            </Typography>
            <br/>
            <Typography  color="textSecondary">
              ID:
            </Typography>
            <Typography variant="h5" component="h2">
              {nodeInfo.id}
            </Typography>
            <br/>
            {
              nodeInfo.description != undefined && nodeInfo.description.length != 0 ?
                  <div>
                    <Typography className={classes.pos} color="textSecondary">
                        Definition:
                      </Typography>
                      <Typography variant="body1" component="p">
                        {nodeInfo.description}
                      </Typography>
                    </div>
                  :null
            }
            <br/>
            {
              nodeInfo.editor_note != undefined && nodeInfo.editor_note.length != 0 ?
                  <div>
                    <Typography className={classes.pos} color="textSecondary">
                        Editor's note:
                      </Typography>
                      <Typography variant="body1" component="p">
                        {nodeInfo.editor_note}
                      </Typography>
                  </div>
                  :null
            }
        </CardContent>
      </Card>
  );
}
