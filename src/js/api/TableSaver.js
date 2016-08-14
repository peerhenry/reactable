class TableSaver{

  saveTable(tableModel, callback){
    // ajax post table.
    $.ajax({
      url: "http://localhost:3000/saveTable",
      type: "POST",
      date: tableModel,
      success: function(resultData){
        var response = JSON.parse(request.responseText);
        var tableModel = {
          name: response["name"],
          header: response["header"],
          matrix: response["matrix"]
        };
        callback(tableModel);
      },
      error: function(){
        console.log('Error with saveTable post in TableSaver');
      }
    });
  }

}

export default new TableSaver;