var express = require('express')
var cors = require('cors')
var app = express()
const axios = require('axios');
const url = require('url');

require('dotenv').config()

// express stuff
app.use(cors());
app.use(express.static('./'))
app.use(express.json());

async function getCimisData(x, y, date) {
  let cimisUrl=`https://et.water.ca.gov/api/data`
  let res = await axios.get(cimisUrl,{ params: {
    appKey: process.env.APPKEY, 
    targets: `lat=${y},lng=${x}`,
    startDate: `${date}`,
    endDate: `${date}`,
    dataItems: 'day-asce-eto,day-sol-rad-avg'
  }});
  return res.data.Data.Providers;
}

app.get('/cimis', async (req,res) => {
  const { x, y, date } = req.query;
  console.log(`x: ${x}, y: ${y}, ${date}`);
  let response = await getCimisData(x,y,date)
  response.forEach((record) => {
    console.log(record)
    res.send(record)
  })
})


app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})