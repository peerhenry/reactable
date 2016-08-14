class TableRetriever{
  
  getTableModel(uid, callback){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/defaultTable', true);
    request.onload = () => {
      if(request.status >= 200 && request.status < 400){
        var response = JSON.parse(request.responseText);
        var tableModel = {
          name: response["name"],
          header: response["header"],
          matrix: response["matrix"]
        };
        callback(tableModel);
      } else{
        console.log('We reached the target server, but it returned an error: ' + request.status);
      }
    };
    request.onerror = function(){
      console.log('There was a connection error...');
    }
    request.send();
  }
}

export default new TableRetriever; 