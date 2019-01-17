function guardar_data() {

    var ingresocelu = SpreadsheetApp.getActiveSpreadsheet();
    var bd = SpreadsheetApp.openById("12iwl4DkRgMMgDVCZILNPUvZ5-zS8VvalxkZOobrGFnU");
    var basedatos = bd.getSheetByName("base de datos");
    var hoja1 = ingresocelu.getSheetByName("1");
    var guardar = hoja1.getRange("f1").getValue();
    var direccion = hoja1.getRange("d2").getValue();
    var fecha = hoja1.getRange("b2").getValue();
    var uf = basedatos.getLastRow();
    var n = uf - 100;
    var cped = basedatos.getRange("b" + n + ":b").getValues();
    var maxcped = cped[0];
    var horario = hoja1.getRange("d1").getValue();

    //busco el maximo cped y lo guardo en maxcped
    for (var i = 0; i < cped.length - 1; i++) {
        if (maxcped < cped[i])
            maxcped = cped[i]
    }

    maxcped++;

    //variables datos a guardar
    var ahora = new Date();
    var concepto = hoja1.getRange("a5:a").getValues();
    var cnov = [];
    var cantidad = hoja1.getRange("b5:b").getValues();
    var subtotal = hoja1.getRange("c5:c").getValues();
    var codigo = hoja1.getRange("h5:h").getValues();
    var obs = hoja1.getRange("d5:d").getValues();
    var c = 0;



    //identifico las celdas ocupadas
    for (i = 0; i < concepto.length - 1; i++) {
        if (codigo[i].valueOf() != "") {
            cnov[c] = i;
            c++
        }
    }
    //prueba
    //hoja1.getRange("b18").setValue(cnov.join());
    //guardo la info en arrguardar
    var arrguardar = [];
    for (i = 0; i < cnov.length; i++) {
        var x = cnov[i];
        var cod = codigo[x];
        var cant = cantidad[x];
        var subt = subtotal[x];
        arrguardar[i] = [];
        arrguardar[i] = [fecha, maxcped, cod, direccion, concepto[x] + " " + obs[x], cant, subt, ahora, 1, horario];

    }

    //  imprimo en base de datos
    basedatos.insertRowsAfter(uf, cnov.length - 1);
    basedatos.getRange(uf, 1, cnov.length, 10).setValues(arrguardar);

}

function ejetutar() {
    //validacion
    var ui = SpreadsheetApp.getUi();
    var ingresocelu = SpreadsheetApp.getActiveSpreadsheet();
    var data = ingresocelu.getSheetByName("1");
    var rguardar = data.getRange("f1");
    var rdireccion = data.getRange("d2");
    var rfecha = data.getRange("b2");
    var caso = 0;

    if (!rdireccion.getValue())
        caso = 1;

    if (!rfecha.getValue())
        caso = 2;

    switch (caso) {

        case 0:
            {
                if (guardar == "guardar") {
                    pruebastandalone();
                    rguardar.clearContent();
                    var f = new Date();
                    var r = 1;
                    if (f.getDay() == 6) {
                        r = 2
                    }
                    var fentrega = ((f.getDate() + r) + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
                    data.getRange("d1:d2").clearContent();
                    data.getRange("a5:b40").clearContent();
                    data.getRange("b3").clearContent();
                    data.getRange("d5:d40").clearContent();
                    data.getRange("f5:f40").clearContent();
                    data.getRange("b2").setValue(fentrega)
                }
                break
            };

        case 1:
            {
                ui.alert("falta dirección");
                data.getActiveRange("d2");
                break
            }

        case 2:
            {
                ui.alert("falta fecha");
                data.getActiveRange("b2");
                break
            }
    }
}

function guardardatos() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var data = ss.getSheetByName("importacion ingreso celu");
  var data1 = ss.getSheetByName("base de datos");
  var ndatos = [];
  var datos = data.getRange("o2:x");
  var datos1 = data.getRange("Y2:Y");
  var info = datos.getValues();
  var info1 = datos1.getValues();
  var guardar = 0;
  for ( var i = 0; i< info.length - 1; i++)
  {
    var fila = info [i];
    var valor = info1 [i];
    guardar = valor
    if (guardar==1)  
    {
     ndatos.push(fila) 
    }}    
  for(i = 0; i <ndatos.length;i++)
  data1.appendRow(ndatos[i])
}

function pasarfecha() {
 var ss =  SpreadsheetApp.getActiveSpreadsheet();
 var hoja = ss.getSheetByName("base de datos");
 var rango = hoja.getRange("a2:A");
 var datos = rango.getValues();
 var guardar = [];
 for ( var i = 0 ; i < datos.length ; i++ ){
   guardar[i] = [];
   guardar[i][0] = ("0"+datos[i][0].getDate()).slice(-2)+("0"+datos[i][0].getMonth()).slice(-2)+(""+datos[i][0].getFullYear()).slice(-2);
 }
 hoja.getRange("r2:r").setValues(guardar);
}

