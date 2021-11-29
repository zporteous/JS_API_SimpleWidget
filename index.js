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

async function getCimisData(x, y, sd, ed) {
  let cimisUrl=`https://et.water.ca.gov/api/data`
  let res = await axios.get(cimisUrl,{ params: {
    appKey: process.env.APPKEY, 
    targets: `lat=${y},lng=${x}`,
    startDate: `${sd}`,
    endDate: `${ed}`,
    dataItems: 'day-asce-eto,day-sol-rad-avg'
  }});
  return res.data.Data.Providers;
}

app.get('/cimis', async (req,res) => {
  const { x, y, sd, ed } = req.query;
  console.log(`x: ${x}, y: ${y}, ${sd}, ${ed}`);
  let recordsArray = await getCimisData(x,y,sd,ed)
  res.send(recordsArray)
})


app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})