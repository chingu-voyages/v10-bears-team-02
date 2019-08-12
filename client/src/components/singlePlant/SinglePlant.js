import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './SinglePlantStyles'
import  { fetchPlantStats, addPlant }   from '../../actions/plantStats'



function RenderPlant(props){  
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  } 

  const stringFromObject = (obj) => {     
    return Object.entries(obj).map((item, index) => {
        return item[0] + ': '+ item[1] + ' '
    })
  }

  const RenderDetailsObject = (objName, index) => {   
    return (
      <React.Fragment key={index}>
        {          
          <ExpansionPanelDetails >
              <Typography>
              {objName[0]}: {stringFromObject(objName[1])}   
              </Typography>
          </ExpansionPanelDetails>
        }        
      </React.Fragment>
    )       
  }
  
  const RenderDetails = (props) => {           
    return (          
      <>      
        {        
          Object.entries(props.details).map((detName, index) => {
            let details = []          
            if (typeof detName[1] === 'string') {              
              details.push(
                <ExpansionPanelDetails key={index}>
                  <Typography>
                    {detName[0]} : {detName[1]}
                  </Typography>
                </ExpansionPanelDetails>    
              )
            }
            if (typeof detName[1] === 'object') { 
              details.push(RenderDetailsObject(detName, index))
            }            
            return details
          })
        }
      </>
    )                
  }

  const RenderCategories = () => {  
    console.log(props)
    return (
    <>
      {
        Object.entries(props.plant).map((expTypes, typeIndex) => {          
          let panel = []
          if (expTypes[0] !== 'meta') {
            panel.push( (
            
              <ExpansionPanel square expanded={expanded === 'panel' + typeIndex} onChange={handleChange('panel' + typeIndex)} key={typeIndex}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id={"panel" + typeIndex + " d-header"}>
                  <Typography>{expTypes[0]}</Typography>
                </ExpansionPanelSummary>
                
                <RenderDetails details={expTypes[1]}/>
              

              </ExpansionPanel>
            ))
          }
          return panel
         
          }
        )
      }                                                       
    </>                           
  )}
  
  return (
    <div style={{padding: 10}}>
      <Button 
        size='small' 
        variant='outlined' 
        color='primary' 
        onClick={() => {
          props.addPlant(props.plant)
          props.history.push('/mygarden')
        }}
        >
        Add Plant to My Garden
      </Button>
      <RenderCategories />      
    </div>
  )
}


function SinglePlant(props) {
    const classes = useStyles()
    const { fetchPlantStats } = props
    const { id } = props.match.params   
    useEffect(() => {  
    
            fetchPlantStats(id)
    }, [id, fetchPlantStats])


    return (
      <div className={classes.root}>
        <RenderPlant {...props} />
      </div>
    )
}

function mapStateToProps(state) {   
    return {
        plant: state.currentPlant
    }
}

export default connect(mapStateToProps, {fetchPlantStats, addPlant})(SinglePlant)