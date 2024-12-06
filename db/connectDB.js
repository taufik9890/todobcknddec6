const mongoose = require('mongoose');

let connectDB = ()=>{

    mongoose.connect(process.env.DB_URL)
      .then(() => {
        console.log('Connected!')
      }).catch((err)=>{
        console.log(err);
      });
}


// 'mongodb+srv://mernian:Z4LL7psaFM27NGh6@cluster0.kmznmbg.mongodb.net/mernianeccomerce?retryWrites=true&w=majority'

module.exports = connectDB