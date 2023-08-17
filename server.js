const express = require('express')
const app = express() 
const PORT = 8000

const synths = {
  'sequential prophet x': {
    'brand': 'Sequential',
    'year': '2018',
    'synthType': 'Hybrid',
  },
  'moog grandmother': {
    'brand': 'Moog',
    'year': '2018',
    'synthType': 'Analog',
  },
  'novation peak': {
    'brand': 'Novation',
    'year': '2017',
    'synthType': 'Hybrid',
  },
  'nord lead a1': {
    'brand': 'Nord',
    'year': '2014',
    'synthType': 'Virtual Analog',
  },
  'elektron digitone': {
    'brand': 'Elektron',
    'year': '2018',
    'synthType': 'Digital',
  },
  'korg minilogue': {
    'brand': 'Korg',
    'year': '2016',
    'synthType': 'Analog',
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/api/:synthName', (req, res) => {
  const synthName = req.params.synthName.toLowerCase()
  if(synths[synthName]){
    res.json(synths[synthName])
  }else{
    res.status(404).json({
      error: 'Synth not found'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

