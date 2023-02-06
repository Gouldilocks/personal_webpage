import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    borderRadius: theme.spacing(0),
    "&:hover": {
      backgroundColor: "lightgray"
    }
  },
  media: {
    height: 140
  }
}));

export default function Tutoring() {
  const classes = useStyles();
  return (
    <>
          <Card
            className={classes.root}
            onClick={() => {
              window.location.href = "https://calendly.com/gouldilocks/cshourtutoring";
            }
          }
          >
            <CardMedia
              component="img"
              src="https://www.averett.edu/wp-content/uploads/tutoring-clipart.png"
            />
            <CardContent>
              Click Here to Schedule a Tutoring Session
            </CardContent>
          </Card>
    </>
  );
}