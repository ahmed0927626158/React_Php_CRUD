

<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

header("Access-Control-Allow-Methods: POST,GET");
//
header("Content-Type:application/json; charset=UTF-8");




$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "student";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   $postdata =file_get_contents("php://inpute");
   if(isset($postdata)&& !empty($postdata)) 
   {
   	$req= json_decode($postdata);
   	$fname=$req->id;
   	$emil=$req->email;
   	$username=$req->username;

   	$sql="INSERT INTO reactt values('$fname','$emil','$username')";

   	$quer=mysqli_query($conn,$sql);
   	
   }
   else
   {
   	echo "not insert";
   }

     //convert php data to json data

/*
$trp = mysqli_query($conn, "SELECT * from reactt");
    $rows = array();
    while($r = mysqli_fetch_array($trp)) {
        $rows[] = $r;
        //echo $r.'<br>';
    }
    echo json_encode($rows);

$data="Ahmed";

	$connect=mysqli_connect("localhost","root","","student");
	if(mysqli_connect_errno())
	{
		die("failded".mysqli_connect_error());
	}
	mysqli_set_charset($connect,"utf8");
	return $connect;

$conn=$connect;


$postdata=file_get_contents("php://input");

if(isset($postdata)&&!empty($postdata))
{
	$request=json_decode($postdata);
	$fname=$request->name;
	$email=$request->email;

	$sql="INSERT INTO reacts  values('$fname',' $email')";
}
else
{
	echo "not set";
}
*/



/*echo json_encode(array('message'=>'returned',));

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "student");
$query = "INSERT INTO reacts (name,email)
values(
'" . $_POST['name'] . "',
'" . $_POST['email'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
*/

?>