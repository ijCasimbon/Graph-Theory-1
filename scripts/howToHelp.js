function hideDef() {
    var topic = document.getElementsByTagName("div");
    for(i=1; i< topic.length; i++){
        if(i == 1){
            document.getElementById(topic[i].id).style.display = "block"
        }else{
            document.getElementById(topic[i].id).style.display = "none"
        }
    }
}

function viewTopic(str) {
    var topic = document.getElementsByTagName("div");
    for(i=1; i< topic.length; i++){
        if(topic[i].id == str){
            document.getElementById(topic[i].id).style.display = "block"
        }else{
            document.getElementById(topic[i].id).style.display = "none"
        }
    }
}