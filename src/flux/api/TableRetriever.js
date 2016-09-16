class TableRetriever{
  
  getTableModel(uid, callback){

    callback({
        uid: "1",
        name: "new table",
        header: ["column 1","column 2","column 3","column 4"],
        matrix: [
          ["A", "B", "C", "D"],
          ["A", "B", "C", "D"]
        ]
      });
    return;

    // uncomment when connecting to server:
    /*
    var request = new XMLHttpRequest();
    console.log('Starting XMLHttpRequest in TableRetriever');
    request.open('GET', 'http://localhost:3000/defaultTable', true);
    request.onload = () => {
      if(request.status >= 200 && request.status < 400){
        var response = JSON.parse(request.responseText);
        var tableModel = {
          name: response["name"],
          header: response["header"],
          matrix: response["matrix"],
          uid: response["uid"]
        };
        console.log('Now performing callback in TableRetriever');
        callback(tableModel);
      } else{
        console.log('We reached the target server, but it returned an error: ' + request.status);
      }
    };
    request.onerror = function(){
      console.log('There was a connection error...');
    }
    request.send();*/
  }
}

export default new TableRetriever; 