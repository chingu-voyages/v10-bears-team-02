function sortQuery(arrayPlants) { 
    
    return arrayPlants
}

function filterQuery(arrayPlants) {
    let final = arrayPlants.filter(item => item.common_name !== null)
    return  final  //.filter(item => item.complete_data === true) 
}


module.exports = function filterSortQuery(array) { 
  return filterQuery(array)        
}

