function cambfact() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 
 for (var i=1; i<=20;i++){
    var hoja = ss.getSheetByName(i);
    var relleno1 = hoja.getRange("a1:f47");
    var relleno2 = hoja.getRange("b8:e45");
    relleno1.setBackground("white")
    .setFontColor("black")
    .setHorizontalAlignment("center")
    .setBorder(true,true,true,true,true,true,"white", null);
    relleno2.setBorder(false,false,false,false,false,false,"#DCDCDC", null);
    hoja.getRange("f1:f2").setFontColor("white");
    hoja.getRange("a46:f46").setFontSize(18)
    .setFontStyle("bold");
 }
}

function ocultar() {
     var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i=1;i<21;i++){
    
    var sheet = ss.getSheetByName(i);
    var prueba =sheet.getRange("f1").getValue()
      
      if(typeof prueba == 'number')
      {sheet.showSheet()
      }
      else sheet.hideSheet()
    }
}

function eliminarmultiple() {
     var ss = SpreadsheetApp.getActiveSpreadsheet();
  for(i=1;i<20
      ;){
    var sheet = ss.getSheets()[1];
    ss.deleteSheet(sheet);
    i++}
}

function duplicar() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
  for(i=2;i<21;i++){                        
  ss.duplicateActiveSheet();
    ss.renameActiveSheet(i);
    ss.getActiveSheet().getRange(2,6).setValue(i);
}}