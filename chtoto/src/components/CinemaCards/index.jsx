import React from "react";
import { POSTER } from "../Image";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
import { LinkStyle } from "../../assets/style";

const CinemaCards = (props) => {
  return (
    <Grid item md={1}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 540 }}
          image={`${POSTER}${props.poster_path}`}
        />
        <CardContent>
          <LinkStyle to='/id'>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
          </LinkStyle>
          <Typography variant="body2" color="text.secondary">
            {props.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CinemaCards;
