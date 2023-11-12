const express = require('express')
const app = express() 
const PORT = 8000

const synths = {
  'sequential prophet x': {
    'brand': 'Sequential',
    'year': '2018',
    'synthType': 'Hybrid',
    'blurb': 'A hybrid synthesizer from Sequential, released in 2018. It features a 61-key keyboard and combines sample playback with digital oscillators to create unique sounds. The Prophet X is known for its ability to create complex and evolving textures.'
  },
  'moog grandmother': {
    'brand': 'Moog',
    'year': '2018',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Moog, released in 2018. It features a 32-note keyboard and is designed to be a semi-modular synth, meaning that it can be used without patch cables, but also has patch points for more advanced sound design. The Grandmother is known for its warm and classic Moog sound.'
  },
  'novation peak': {
    'brand': 'Novation',
    'year': '2017',
    'synthType': 'Hybrid',
    'blurb': 'A hybrid synthesizer from Novation, released in 2017. It features an 8-voice polyphonic engine and combines digital oscillators with analog filters to create a wide range of sounds. The Peak is known for its versatility and ability to create both classic and modern synth sounds.'
  },
  'nord lead a1': {
    'brand': 'Nord',
    'year': '2014',
    'synthType': 'Virtual Analog',
    'blurb': 'A virtual analog synthesizer from Nord, released in 2014. It features a 49-key keyboard and is designed to be a performance-oriented synth, with a streamlined interface and easy-to-use controls. The Lead A1 is known for its bright and punchy sound.'
  },
  'elektron digitone': {
    'brand': 'Elektron',
    'year': '2018',
    'synthType': 'Digital',
    'blurb': 'A digital synthesizer from Elektron, released in 2018. It features a 37-key keyboard and is designed to be a powerful FM synth, with a unique interface that makes it easy to create complex sounds. The Digitone is known for its ability to create rich and evolving textures.'
  },
  'korg minilogue': {
    'brand': 'Korg',
    'year': '2016',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Korg, released in 2016. It features a 37-key keyboard and is designed to be a polyphonic synth, meaning that it can play multiple notes at once. The Minilogue is known for its classic analog sound and easy-to-use interface.'
  },
  'roland jupiter xm': {
    'brand': 'Roland',
    'year': '2020',
    'synthType': 'Digital',
    'blurb': 'A digital synthesizer from Roland, released in 2020. It features a 37-key keyboard and is designed to be a powerful synth, with a unique interface that makes it easy to create complex sounds. The Jupiter XM is known for its ability to create rich and evolving textures.'
  },
  'behringer neutron': {
    'brand': 'Behringer',
    'year': '2018',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Behringer, released in 2018. It features a 25-key keyboard and is designed to be a semi-modular synth, meaning that it can be used without patch cables, but also has patch points for more advanced sound design. The Neutron is known for its versatility and affordability.'
  },
  'arturia microfreak': {
    'brand': 'Arturia',
    'year': '2019',
    'synthType': 'Digital',
    'blurb': 'A digital synthesizer from Arturia, released in 2019. It features a unique touch keyboard and is designed to be a hybrid synth, combining digital oscillators with analog filters to create a wide range of sounds. The MicroFreak is known for its versatility and affordability.'
  },
  'dreadbox nyx v2': {
    'brand': 'Dreadbox',
    'year': '2019',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Dreadbox, released in 2019. It features a 37-key keyboard and is designed to be a semi-modular synth, meaning that it can be used without patch cables, but also has patch points for more advanced sound design.'
  },
  'yamaha montage 8': {
    'brand': 'Yamaha',
    'year': '2016',
    'synthType': 'Digital',
    'blurb': 'A digital synthesizer from Yamaha, released in 2016. It features an 88-key keyboard and is designed to be a performance-oriented synth, with a streamlined interface and easy-to-use controls. The Montage 8 is known for its realistic acoustic instrument sounds.'
  },
  'dave smith prophet rev2': {
    'brand': 'Dave Smith',
    'year': '2017',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Dave Smith, released in 2017. It features a 61-key keyboard and is designed to be a polyphonic synth, meaning that it can play multiple notes at once. The Prophet Rev2 is known for its classic analog sound and advanced modulation capabilities.'
  },
  'korg wavestate': {
    'brand': 'Korg',
    'year': '2020',
    'synthType': 'Digital',
    'blurb': 'A digital synthesizer from Korg, released in 2020. It features a 37-key keyboard and is designed to be a powerful synth, with a unique interface that makes it easy to create complex sounds. The Wavestate is known for its ability to create evolving and complex textures.'
  },
  'roland jd-xi': {
    'brand': 'Roland',
    'year': '2015',
    'synthType': 'Hybrid',
    'blurb': 'A hybrid synthesizer from Roland, released in 2015. It features a 37-key keyboard and combines digital and analog sound engines to create a wide range of sounds. The JD-Xi is known for its versatility and affordability.'
  },
  'arturia matrixbrute': {
    'brand': 'Arturia',
    'year': '2016',
    'synthType': 'Analog',
    'blurb': 'An analog synthesizer from Arturia, released in 2016. It features a 49-key keyboard and is designed to be a powerful synth, with a unique interface that makes it easy to create complex sounds. The MatrixBrute is known for its ability to create massive and complex sounds.'
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/api/:synthName', (req, res) => {
  const synthName = req.params.synthName.toLowerCase();
  const matchingSynths = Object.keys(synths).filter(key => key.startsWith(synthName));

  if (matchingSynths.length > 0) {
    const matchingSynthsData = matchingSynths.reduce((obj, synth) => {
      obj[synth] = synths[synth];
      return obj;
    }, {});
    res.json(matchingSynthsData);
  } else {
    res.status(404).json({
      error: 'Synth not found'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

