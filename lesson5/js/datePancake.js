var dateNow=new Date(document.lastModified);
document.getElementById('currentDate').textContent=dateNow;

function showPancakes(){
    let today = new Date();
    if(today.getDay() == 5){
        document.getElementById("pancakes").style.display ="block";
    }
}
