import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import useStyles from './SinglePlantStyles'
import  { fetchPlantStats }   from '../../actions/plantStats'



function RenderPlant(props){
    console.log(props.plant)

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>           
        </div>
    )
}


function SinglePlant(props) {
    const classes = useStyles()
    const { fetchPlantStats } = props
    const { id } = props.match.params
    console.log(props)
    useEffect(() => {  
    
            fetchPlantStats(id)
    }, [id, fetchPlantStats])


    return (
        <div className={classes.root}>
            <RenderPlant plant={props.plant} />
      </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        plant: state.currentPlant
    }
}

export default connect(mapStateToProps, {fetchPlantStats})(SinglePlant)