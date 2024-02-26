const fs = require("fs")

//add logic

const addPerson = (fname, lname, id ,age ,city) =>{
    const allData = loadData()

    const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })
      if (duplicatedDate.length == 0) { 
    allData.push({
        id : id,
        fname : fname,
        lname : lname,
        age : age,
        city : city
    })
 savaAllData(allData)
      } else {
        console.log("ERROR DUPLICATED ID")
      }
}

const loadData = () =>{ 
   try {
    const DataJson = fs.readFileSync("data.json").toString()
    return  JSON.parse(DataJson)
   }
   catch {
    return  []
   }
}

const savaAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("Data.json" , AllDataJson )
}

//delete logic

const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
       return obj.id !== id 
      
    })
    savaAllData(dataToKeep)
    
    console.log("you have already deleted an Item")
 }

 //read logic

 const readData = (id) => {

    const allData = loadData()

    const itemNeeded = allData.find((obj)=>{
       return  obj.id == id 
    })

    if (itemNeeded) {
      console.log(itemNeeded.id)
    } else {
      console.log("id needed not found")
    }
   
}

//list logic

const  listData = () => {
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.age,obj.city)
    })
}



module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
  }