let express = require('express')

let app = express()

app.get('/', function (req, res) {
  res.send('tezt')
})

app.listen(3008, function() {
    console.log('3008')
})