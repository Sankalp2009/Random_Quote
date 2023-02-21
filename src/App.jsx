import './App.css'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios'
function App() 
{
   const [quote,setQuote] = useState("You can do it if you believe you can!")
   const [author, setAuthor] = useState("Napoleon Hill");

  //  Fetching Quotes for Api
    const getQuote = async()=>{
      const response = await axios.get("https://api.quotable.io/random")
      let Data = response.data;
      setQuote(Data.content)
      setAuthor(Data.author)
    }
  //   console.log(JSON.stringify(quote));
  //  console.log(JSON.stringify(author));

   const HandleClick = async()=>{
    getQuote();
   }
     return (
    <div className="App">
      <h2>Quote Generator App</h2>
      <Box className="Optimus">
        <p>{`"${quote}"`}</p>
        <h3>{`-${author}`}</h3>
      </Box>
       <Button variant="contained" fullWidth="true" onClick={HandleClick}>Generate</Button>
    </div>
  )
}

export default App
