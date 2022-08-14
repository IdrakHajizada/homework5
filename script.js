//Task No 5
 function Start(){
    let week = prompt('Heftenin necenci gunudu?')
 
    if(week > 0){
        if(week < 6){
            alert('Bu gunler ish gunudu')
        }
    }
    else if(week = 6){
        alert('Dincel, ish gunu deyil')
    }
    else if(week === 'bazar'){
        alert('Dincel, ish gunu deyil')
    }
    else{
        alert('bu o deyil')
    }
 }




