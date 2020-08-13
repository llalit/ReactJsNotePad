import React from 'react'; 

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';


import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

function Notes(props){

	const listdata={	
	  listStyleType:'none',
      margin:0,
      padding:0,
      alignConetnt:'left',
      
	}

	const fsize={
			fontsize:'40px',
			color:'black'
	}

	const f2s={
		fontSize:'25px',
	}

		return(
			<>
				 <IconButton aria-label="delete" style={fsize}>
				          <DeleteIcon  onClick={()=>{props.onSelect(props.id)}}/>    
		        </IconButton>
				         <span style={f2s}> {props.item}</span>
			
			</>
		)
}

export default Notes;