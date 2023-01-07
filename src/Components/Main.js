import { Box, TextField, makeStyles, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
var CryptoJS = require("crypto-js");

const UseStyles=makeStyles({
    wrapper:{
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center',
        height:'100vh'
    },
    mbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'65%',
        border:'2px solid',
        flexDirection:'column',
        padding:'20px'
    },
    heading:{
        fontSize: [38, "!important"]
    },
    sbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'20px'
    },
    btn:{
        backgroundImage:'linear-gradient(45deg,#43cea2,#185a9d)',
        width:'15%',
        color:'white'
    },
    ans1:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundImage:'linear-gradient(45deg,#83a4d4,#b6fbff)',
        padding:'15px',
        margin:'5px'
    },
    ans2:{
        display:'none'
    }
})
const Main = () => {
    const classes=UseStyles();
    const [Text,setText]=useState();
    const [fans,setFans]=useState();
    const [abc,setAbc]=useState(classes.ans2);
    const SubmitHnadler=()=>{
        var answer = CryptoJS.AES.encrypt(JSON.stringify(Text), 'my-secret-key@123').toString();
        console.log(answer);
        setFans(answer);
        setAbc(classes.ans1);
    }
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.mbox}>
            <Typography className={classes.heading}>Text to SHA1</Typography>
            <Box className={classes.sbox}>
                <Typography>Enter Text Here :</Typography>
                <TextField
                required
                placeholder='text here'
                id="outlined-required"
                variant="outlined"
                style={{"marginLeft":'10px'}}
                onChange={(e)=>setText(e.target.value)}
                />
            </Box>
            <Button onClick={()=>SubmitHnadler()} className={classes.btn}>Submit</Button>
            <Box style={{"width":'100%',"display":'flex',"alignItems":'center',"justifyContent":'center'}}>
                <Typography className={abc}>SHA1 IS : {fans}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Main