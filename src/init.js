import TableauBuilder from './tableau/TableauBuilder.js';

(function() {

    var tableauBuilder = new TableauBuilder(tableau);
    var connector = tableauBuilder.makeSchema();
    connector = tableauBuilder.getData(connector);
    tableauBuilder.registerConnector(connector);
    
    window.onload = function(){
        document.getElementById("tableau-connect").addEventListener('click', function() {
            tableau.connectionName = "Facebook Posts";
            tableau.submit();
        });
    };
})();