import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Row , Col} from "react-bootstrap";






const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth:300,
    justifyContent:'center'
  },
  media: {
    height: 10,
  },
});
const Cards = () =>{
  const cardInfo = [
    
    {
      image:"../../img/download.jpg",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
   
    {
      image:"https://pics.freeicons.io/uploads/icons/png/17409946451553073813-512.png",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
    {
      image:"https://pics.freeicons.io/uploads/icons/png/17409946451553073813-512.png",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
    {
      image:"https://pics.freeicons.io/uploads/icons/png/17409946451553073813-512.png",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
    {
      image:"https://pics.freeicons.io/uploads/icons/png/17409946451553073813-512.png",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
    {
      image:"https://pics.freeicons.io/uploads/icons/png/17409946451553073813-512.png",
      title: "Upload A File ",
      text: "Csv,Cls ",
    },
    {
      image:"https://www.facebook.com/images/fb_icon_325x325.png",
      title: "Second Card ",
      text: "Third Card",
    },
    
  ];


const Render = (card, index) => {
const classes = useStyles();
  return (

     <div className={classes.root}>
       

    <Card key={index}  className="card">

 
          <CardActionArea>
            <CardMedia
            component="img"
            image ={card.image} style={{height:100 ,width:230}}
            
            title={card.title}/>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.text}
              </Typography>
            </CardContent>
          </CardActionArea>
   
        </Card>

        </div>  
       

  )
}
return(


  <div className="cardContainer">
  
    
  {cardInfo.map(Render)}
  </div>
)
}
export default Cards;
