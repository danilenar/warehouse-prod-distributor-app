function myFunction() {
  var actualizaPrecio = SpreadsheetApp.openById("1FwpVBrCk9hSqpYbPYOkkZ1MOqMEscNWAjoF7dBZjs4U");
  var listaPrecios = SpreadsheetApp.openById("1klQXXhJYCAEzrUO-xWDdHCtJFLf9zcqoQYLJs80yibI");
  var sheetActualizaPrecio = actualizaPrecio.getRange("a1:c100");
  var datos = sheetActualizaPrecio.getValues();
  var nuevaLista = listaPrecios.getSheetByName("nuevaLista");
  var uFNuevaLista = nuevaLista.getLastRow();
  var guardar = [];
  var j = 0 ;
  var f = new Date();
  for (i = 0 ; i < datos.length ; i++ ){
    valor = datos[i][0];
    if( valor == 1 ){
      guardar[j] = [];
      guardar[j] = [ f , datos[i][1] , datos[i][2] ];
      j++;
    }
  }
  nuevaLista.insertRowsAfter(uFNuevaLista, guardar.length );
  nuevaLista.getRange(uFNuevaLista+1, 1 , guardar.length , 3).setValues(guardar);
  sheetActualizaPrecio.clearContent();
}
