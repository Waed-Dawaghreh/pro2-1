
function getallLocal() {
    var obj = Object.keys(localStorage).reduce(function(obj, key) {
        obj[key] = localStorage.getItem(key);
        return obj
    }, {});
    return obj;
}
function show() {
    $("#localTable tbody").html("")
    let allLocal = getallLocal();
    
    for (x in allLocal) {
        json=allLocal[x];
        let obj= JSON.parse(json);
        if(x !="n" && x !="u"&& x !="ph"&& x !="d"&& x !="pa" && x != "id")
        $("tbody").html(function(i,old) {
            return old+ `<tr style="background-color:${obj.bcolor} ; color:${obj.tcolor};" id="${parseInt(x)}"><td>${parseInt(x)}</td><td>${obj.task}</td><td>${obj.h}:${obj.m}</td><td><i class="fas fa-clipboard-check"></i></td></tr>`;
        })
    }
    //to removeItem
    $("tbody tr").dblclick(function(){
        let id = $(this).attr("id");
        localStorage.removeItem(""+id);
        show();
    });
}

$(document).ready(function(){
    //عرف الاي دي بالهوم بيج
    console.log(localStorage.getItem("id"));
    // localStorage.setItem("id",localStorage.length);
    console.log("(document).ready")
    show();
});


function clearr() {
    var r = confirm("Are you sure?");
    if (r == true) {
        localStorage.setItem("id",0);
        // $("#localTable tbody").html("");
        let allLocal = getallLocal();
    
    for (x in allLocal) {
        if(x !="n" && x !="u"&& x !="ph"&& x !="d"&& x !="pa" && x != "id"){
            localStorage.removeItem(x);
        }
    }
    show();
    }
}
function localSubmit() {
    let id = localStorage.getItem("id");
    localStorage.setItem("id",++id);
    let uvalue = $("#value").val();
    let h = $("#h").val();
    let m = $("#m").val();
    let bcolor = $("#bcolor").val();
    let tcolor = $("#tcolor").val();
    let obj ={'task' : uvalue, 'h':h,'m':m,'bcolor':bcolor,'tcolor':tcolor}
    localStorage.setItem(id, JSON.stringify(obj));
    // $("#localTable tbody").html(function(i,old) {
    //     return old+ `<tr id="${localStorage.length}"><td>${localStorage.length}</td><td>${uvalue}</td><td>${h}:${m}</td><td>test</td> </tr>`;
    // })
    show();
}
