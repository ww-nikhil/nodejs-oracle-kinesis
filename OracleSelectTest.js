var oracledb = require('oracledb');

// Get a non-pooled connection
oracledb.getConnection(
  {
	  user          : "Appjmrana",
	  password      : "s2gmraappjmrana",
	  connectString : "WWIDGMRA02V.DS.WEIGHTWATCHERS.DB:1521/S2GMRA.WEIGHTWATCHERS.COM"
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      // The statement to execute
    		"SELECT * "
    	    + "FROM ACTION_TYPE ",

     
      function(err, result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
        console.log(result.rows);     // [ [ 180, 'Construction' ] ]
        doRelease(connection);
      });
  });

// Note: connections should always be released when not needed
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}