import React from 'react';
import { connect } from 'react-redux'
import useStyles from './QueriedPlantsStyles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function RenderPlants(props) {  
    
    function renderPlant(plantId) {
        props.history.push(`/plant/${plantId}`)
    }
    return props.plants ? (
        props.plants.map((plant, index) => {
            return (
                <div key={index}>
                    <Divider />
                    <ListItemLink onClick={() => renderPlant(plant.id)} >
                        <ListItemText primary={plant.common_name} />
                    </ListItemLink>
                </div>
            )
        })
    ) : null
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function QueriedPlants(props) {  
    const classes = useStyles()

    console.log('navbar')
    React.useEffect (()=>{
      console.log('test')
    }, [])
  

    return (
        <div className={classes.root}>

        <List component="nav" aria-label="Plant Search Results">
            <RenderPlants {...props}/>
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