var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function () {
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 3000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats", function (statistics) {
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Ուտել(Խոտակեր)</td><td>Ուտել(Գիշատիչ)</td><td>Ուտել(Սարքող)</td><td>Ուտել(Ամենակեր)</td><td>Բազմանալ (Խոտ)</td><td>Բազմանալ (Խոտակեր)</td><td>Բազմանալ (Գիշատիչ)</td><td>Բազմանալ (Դավաճան)</td><td>Մահանալ (Խոտակեր)</td><td>Բազմանալ (Գիշատիչ)</td></td></tr>";
    for (var st of statistics) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + st.timestamp + "</td>";
        tableHTML += "<td>" + st.eatingeatgrass + "</td>";
        tableHTML += "<td>" + st.eatingpredator + "</td>";
        tableHTML += "<td>" + st.eatingcreator + "</td>";
        tableHTML += "<td>" + st.eatingamenaker + "</td>";
        tableHTML += "<td>" + st.mulinggrass + "</td>";
        tableHTML += "<td>" + st.mulingeatgrass + "</td>";
        tableHTML += "<td>" + st.mulingpredator + "</td>";
        tableHTML += "<td>" + st.mulingdeceiver + "</td>";

        tableHTML += "<td>" + st.dieingeatgrass + "</td>";
        tableHTML += "<td>" + st.dieingpredator + "</td>";
        tableHTML += "</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

