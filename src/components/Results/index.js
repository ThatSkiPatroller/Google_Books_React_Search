import React, { useState } from 'react';
import Searchbar from '../Searchbar';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NoPic from '../Images/No-image-found.jpg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import axios from 'axios';


function Results (props) {

    const handleSaveSubmit = (e) => {
        // for (let i=0; i<props.books.length; i++) {
        //     console.log(e.target.parentElement.name)
        // }
        console.log(e.target.parentElement.name);
        // I don't think i have to save book info, just
        // loop through the saved ones in saved page
        
        console.log(e.target.parentElement.description);
        // axios.post('/books')
    }

    const handleView = (e) => {
        for (let i=0; i<props.books.length; i ++) {
            console.log(e.target.parentElement.name)
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 300,
          padding: 15,
          margin:10,
          maxHeight: 800,
          backgroundColor: '#e8f4fd',
          text: 'white'
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            })
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        media: {
          height: 400,
        },
      }));
      const [expandedId, setExpandedId] = React.useState(-1);

    //   with i as a paramater expandedId === i ? -1 : i 
      const handleExpandClick = () => {
          setExpandedId();
      }

    const classes= useStyles();

        const bookCards = props.books.map((book) => {

            let picture = '';
            if (book.volumeInfo.imageLinks.thumbnail) {
                picture = book.volumeInfo.imageLinks.thumbnail;
            } else {
                picture = {NoPic}
            }

            let title= '';
            if (book.volumeInfo.title) {
                title = book.volumeInfo.title;
            } else {
                title = 'No title found';
            }

            let bio='';
            if (book.volumeInfo.description) {
                bio = book.volumeInfo.description
            } else {
                bio = 'No description for this title found';
            }
            
            let authors = '';
            if (book.volumeInfo.authors) {
                authors = book.volumeInfo.authors;
            } else {
                authors = 'No authors for this title found';
            }

            let link = ''; 
            if (book.volumeInfo.infoLink) {
                link = book.volumeInfo.infoLink
            } else {

            }

            let id = '';
            if (book.id) {
                id = book.id
            }

            return(
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={picture}
                        title={title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Authors: {authors}
                            </Typography>
                            <Button size="small" color="primary" name={book.id} onClick={handleSaveSubmit}>
                            Save
                            </Button>
                            <Button size="small" color="primary" href={link}>
                            View
                            </Button>
                            
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedId,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expandedId}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                            <Collapse in={expandedId} timeout='auto' unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        About: {bio}
                                    </Typography>
                            </CardContent>
                            </Collapse>
                        </CardContent>
                    </CardActionArea>
            </Card>
            )
        })
    
    return(
    <div>
        <Grid container>
            {bookCards}
        </Grid>
    </div>
    )
}

export default Results;