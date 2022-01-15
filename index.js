var selectedRow = null
var dataArray = [];
var currentRow = null;
function onFormSubmit(event) {
    event.preventDefault()
    if (validate()) {
        var formData = readFormData();
        if (currentRow == null)
            insertNewRecord(formData);
        
    }
}



function readFormData() {
    var formData = {};
    formData["task"] = document.getElementById("task").value;
    formData["date"] = document.getElementById("date").value;
    // formData["complete"] = "No";
    formData["isCompleted"] = false;
    formData["isTask"] = false;
    
    return formData;
}

function insertNewRecord(data) {
    dataArray.push(data);
    console.log(dataArray);

    //ittrate data 
    rendorArray();
}
function rendorArray(){
    var table = document.getElementById("table_list").getElementsByTagName('tbody')[0]; 
    // var tbody = document.getElementById('table_list');
    table.innerHTML = '';  
    for(data in dataArray){
        var newRow = table.insertRow();
        cell1 = newRow.insertCell(0);
        if(dataArray[data].isCompleted){
            cell1.innerHTML = `<div class="form-check">
            <input type="checkbox" onclick="status(`+data+`)" class="form-check-input" style=" padding:8px; margin-top: 7px; visibility: hidden " checked="`+dataArray[data].isCompleted+`"
            disabled="`+dataArray[data].isCompleted+ `" " id="exampleCheck1" >
            <i class="fas fa-trash-alt" style="margin-left:2px;" onClick="onDelete(`+data+`)"></i>
            </div>` ;
            // document.getElementById("ttt").style.textDecoration = "line-through";


        }else{
            cell1.innerHTML = `<div class="form-check">
            <input type="checkbox" onclick="status(`+data+`)" class="form-check-input"  id="exampleCheck1">
          </div>`
           
        }

        
       
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = "<span style='"+ (dataArray[data].isCompleted ? "text-decoration: line-through" : "")+"'>"+dataArray[data].task+"</span>" ;
        cell1 = newRow.insertCell(2);
        cell1.innerHTML = "<span style='"+ (dataArray[data].isCompleted ? "text-decoration: line-through" : "")+"'>"+dataArray[data].date+"</span>" ;
        cell2 = newRow.insertCell(3);
        cell2.innerHTML = dataArray[data].isCompleted ? "Yes" : "NO" ;
       
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("task").value == "") {
        isValid = false;
        alert(" enter value ")
    } 
       
        return isValid;
    }

    function  status(index){
        var curentData = dataArray[index];
        curentData.isCompleted = true;
        
        dataArray[index] = curentData;
        rendorArray();
    }
   

    function onDelete(data) {
        if (confirm('Are you sure to delete this record ?')) {
            row = dataArray.splice(data,1);
            rendorArray();
        }
    }