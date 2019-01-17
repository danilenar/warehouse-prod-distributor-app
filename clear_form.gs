function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('borrar')
        .addItem('Borrar', 'borrar')
        .addToUi();
}
function borrar() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var ui = SpreadsheetApp.getUi();
    var sheet = ss.getSheetByName("borrar")
    var c = sheet.getRange(1, 1).getValue();
    var f = new Date();
    var r = f.addDays(1);
    if (f.getDay() == 5 || f.getDay() == 6) {
        r = f.addDays(3);
    }
    var fentrega = ((r.getDate()) + "/" + (r.getMonth() + 1) + "/" + r.getFullYear());
    //if(c =="ELIMINAR"){
    for (var i = 1; i <= 20; i++) {
        var data = ss.getSheetByName(i);
        data.getRange("d1:d2").clearContent();
        data.getRange("a5:b40").clearContent();
        data.getRange("b3").clearContent();
        data.getRange("d5:d40").clearContent();
        data.getRange("f5:f40").clearContent();
        data.getRange("b2").setValue(fentrega)
    }
    sheet.getRange(1, 1).clearContent();
    sheet.hideSheet();
    //};

}
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function duplicar() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    for(i=1;i<10;i++){                        
    ss.duplicateActiveSheet();
    ss.renameActiveSheet(i)
}}