import React from 'react';
import { connect } from 'react-redux'
import useStyles from './QueriedPlantsStyles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function RenderPlants(props) {
    return props.plants ? (
        props.plants.map((plant, index) => {
            return (
                <>
                <Divider />
                <ListItemLink href={"/plant/" + plant.id} key={index}>
                    <ListItemText primary={plant.common_name} />
                </ListItemLink>
                </>
            )
        })
    ) : null
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function QueriedPlants(props) {
    console.log(props)
    const classes = useStyles()

    return (
        <div className={classes.root}>

        <List component="nav" aria-label="Plant Search Results">
            <RenderPlants plants={props.plants}/>
        </List>
      </div>
    )
}

function mapStateToProps(state) {
    return {
        plants: state.searchResults
    }
}

export default connect(mapStateToProps)(QueriedPlants)