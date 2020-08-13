import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './Components/dataList';



function App() {
  const indata={
      width:'30vw',
      padding:'10px',
      border:'2px solid black',
      height:'40vw',
      overFlow:'hidden',
      backgroundColor:'#88E7C0'
  }

  const infield ={
    width:'25vw',
    height:'2.5vw',
    boxSizing:'border-box',
    paddingLeft:'40px',
    fontSize:'22px',
    color:'black',
  }

  const outdata={
      margin:0,
      padding:0,


     
  }

  const inpdata={
        widht:'350px',
        hieght:'10vw'
  }

  const btn={
    height:'45px',
    width:'3vw'
  }

  const container1={
     paddingTop:'20px',
     paddingLeft:'35vw'
          

  }

  //css ends 

  const [item, setItem] = useState();
  const [listd, setListd]=useState([]);


  const dataset=(e)=>{
      setItem(e.target.value);
  }

  const clickedd=()=>{
      setListd((oldItems)=>{
        return[...oldItems, item]
      })

      setItem('');
  }



  const deleteItem=(id)=>{
        setListd((oldItems)=>{
            return oldItems.filter((arr,index)=>{
                return(index!==id);
            })
        })
  }
  return (
    <div>
    <div style={container1}>
          <div style={indata}>
                <input type='text' style={infield} name='inlist' placeholder="enter item" onChange={dataset} value={item} />
                <button style={btn} onClick={clickedd}>Add</button>
          <div style={outdata}>

            {listd.map((v, i)=>{
                          return(
                              <div>
            
                              <Notes item={v} onSelect={deleteItem} id={i} key={i}/>
                              
                              </div>
                            )
            
                        })}
          </div>
          </div>
    </div>  
    </div>
  );
}

export default App;
