const Data = require("./Data")
const yargs = require("yargs")

//add command

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      Data.addPerson( x.fname , x.lname, x.id,x.age,x.city)
    }
})

// delete command

yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler:(x)=> {
       Data.deleteData(x.id)
    }
  
  })

// read command

  yargs.command({
    command: "read",
    describe : "to read data",
    builder : {
       id : {
         describe : "this is id desc in read command",
         demandOption : true,
         type : "string"
       }
    },
    handler: (x)=> {
       Data.readData(x.id)
    }
})

// list command

  yargs.command ({
    command : "list",
    describe : "to list data" ,
    handler : () => {
      Data.listData()
    }
  })


  yargs.parse()