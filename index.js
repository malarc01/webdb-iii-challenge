const express = require('express');
const helmet = require('helmet')
const knex = require('knex')

const knexConfig={
  client: 'sqlite3',
  connection:{
    filename:'./data/lambda.db3',

  },
  useNullAsDefault:true, //needed for sqlite

}
const db = knex(knexConfig);
const server = express();

server.use(helmet());
server.use(express.json());

//list all roles
server.get('/api/lambs',async(req,res)=>{
  //get the roles from the database
  try{
    const roles = await db('roles');
    res.status(200).json(roles);

  } catch(error) {
    res.status(500).json(error);
  }

})



const port = process.env.PORT || 5500;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);