import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}))


export default function HomeCard({home, clickAction}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="home-cards">
            <Card className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="home-cards">
                        {home.id}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={home.street}
                subheader={home.budget}
                />
                <CardMedia
                    className={classes.media}
                    image={home.photo}
                    title="Home Image"
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {'Price: $' + home.price}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon 
                            onClick={() => clickAction(home)}
                        />
                    </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h5">Favorited By:</Typography>
                        <Typography paragraph>
                            {home.profiles.map(profile => profile.name).join(', ')}
                        </Typography>
                        <Typography variant="h5">Email:</Typography>
                        <Typography paragraph>
                            {home.profiles.map(profile => profile.email).join(', ')}
                        </Typography>
                        <Typography variant="h5">Budget:</Typography>
                        <Typography paragraph>
                            {home.profiles.map(profile => profile.budget).join(', ')}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}