function hideDef() {
    document.getElementById("sea").style.display = "block";
    document.getElementById("whale").style.display = "none";
}

function viewTopic(str) {
    var topic = document.getElementsByTagName("div");
    for(i=0; i< topic.length; i++){
        if(topic[i].id == str){
            document.getElementById(topic[i].id).style.display = "block"
        }else{
            document.getElementById(topic[i].id).style.display = "none"
        }
    }
}