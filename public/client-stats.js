var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Ուտել</td><td>Բազմանալ</td><td>Քանակ բազմանալու</td><td>Ընդհանուր քանակ</td><td>Մահանալ</td><td>tackCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.eating+"</td>";
        tableHTML+="<td>"+st.muling+"</td>";
        tableHTML+="<td>"+st.counting+"</td>";
        tableHTML+="<td>"+st.mulingcounting+"</td>";
        tableHTML+="<td>"+st.dieing+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

