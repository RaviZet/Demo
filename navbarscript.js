function setValue(val){
    document.getElementById("myValue").innerHTML = val
}

function getValue(){

    setValue(10);
}
function erase(){
document.getElementById("myValue").innerHTML = ''

}

// ----------------------------

function setListData(){
    

    const data = [

        {
            id : 'id1',
            name: 'name1'
        },
        {
            id : 'id2',
            name: 'name2'
        },
        {
            id : 'id3',
            name: 'name3'
        }

    ];
    
    let myListData = ''
    for(let i =0 ; i<data.length; i++){
       myListData = myListData + '<l1>' + data[i].name + '</li> <br>' 
    }
    document.querySelector('.navbar #nav-bar-list').innerHTML = myListData;
}

async function getApiData(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    return data;
}