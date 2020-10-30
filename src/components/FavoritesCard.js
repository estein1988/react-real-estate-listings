// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 275,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// }))


// export default function FavoritesCard({favorite, clickAction}) {
//     const classes = useStyles();

//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     }

//     return (
//         <div className="home-cards">
//             <Card className={classes.root}>
//                 <CardHeader
//                 avatar={
//                     <Avatar aria-label="home-cards">
//                         {favorite.profile.id}
//                     </Avatar>
//                 }
//                 action={
//                     <IconButton aria-label="settings">
//                     <MoreVertIcon />
//                     </IconButton>
//                 }
//                 title={favorite.profile.name}
//                 subheader={favorite.profile.name}
//                 />
//                 <CardMedia
//                     className={classes.media}
//                     image="https://thememylogin.com/app/uploads/edd/2019/03/favorites.png"
//                     title="Home Image"
//                 />
//                 <CardContent>
//                     <Typography variant="body1" color="textSecondary" component="p">
//                         {'Beds: ' + favorite.profile.budget}
//                     </Typography>
//                 </CardContent>
//                 <CardActions disableSpacing>
//                     {/* <IconButton aria-label="add to favorites">
//                         <FavoriteIcon 
//                             onClick={() => clickAction(home)}
//                         />
//                     </IconButton> */}
//                 <IconButton
//                     className={clsx(classes.expand, {
//                         [classes.expandOpen]: expanded,
//                     })}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                 <ExpandMoreIcon />
//                 </IconButton>
//                 </CardActions>
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <CardContent>
//                         <Typography variant="h5">City:</Typography>
//                         <Typography paragraph>
//                             {favorite.profile.username}
//                         </Typography>
//                         <Typography variant="h5">State:</Typography>
//                         <Typography paragraph>
//                             {favorite.profile.social_level}
//                         </Typography>
//                         <Typography variant="h5">Zip:</Typography>
//                         <Typography paragraph>
//                             {favorite.profile.email}
//                         </Typography>
//                     </CardContent>
//                 </Collapse>
//             </Card>
//         </div>
//     )
// }