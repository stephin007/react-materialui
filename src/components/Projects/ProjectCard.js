import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FaFirefoxBrowser, FaGithub} from "react-icons/all";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        background: "rgba(0, 0, 0, 0.5)",
        margin:"20px"
    },
    media:{
        height: 400,
    },
    cardTitle:{
        fontFamily: "Nunito",
        fontWeight:"bold",
        fontSize : "2rem",
        color: "#fff"
    },
    cardDescription:{
        fontFamily: "Nunito",
        fontSize : "1.1rem",
        color: "#ddd"
    },
    cardButtons:{
        display: "flex",
        flexWrap: "wrap"
    },
    cardButton:{

    }
});

export default function ProjectCard({project}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={project.projTitle}
                    image={project.imgLink}
                    title={project.projTitle}
                    className={classes.media}
                />
                <CardContent>
                    <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
                        {project.projTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardButtons}>
                <a href={project.ghLink} style={{textDecoration:"none"}} className={classes.cardButton}>
                    <Button size="small" color="secondary" variant="contained" >
                    Github<FaGithub style={{fontSize:"20px", marginLeft:"10px"}}/>
                </Button></a>
                <a href={project.webLInk} style={{textDecoration:"none"}} className={classes.cardButton}>
                    <Button size="small" color="primary" variant="contained" >
                        Live <FaFirefoxBrowser style={{fontSize:"20px", marginLeft:"10px"}}/>
                    </Button>
                </a>

            </CardActions>
        </Card>
    );
}