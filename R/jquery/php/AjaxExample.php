<?php
//	header("Content-type: text/json; charset=utf-8"); 
	
    $coon=new mysqli("localhost","root","root","mysqls");
    
    if($coon->connect_error){
    	die("连接失败：" . $coon->connect_error);
    }else{
//  	echo ("连接成功");
    }
    
    $sql="SELECT id,username,password FROM user";
    
    $result=$coon->query($sql);
    if($result->num_rows>0){
    	while($row = $result->fetch_assoc()) {
//      echo "<br> id: ". $row["id"]. " - Name: ". $row["username"]. " " . $row["password"];
	    $datae[]=array('id'=>$row["id"],"username"=>$row["username"],"password"=>$row["password"]);
	    $data2[]=array('id'=>$row["id"],"username"=>$row["username"],"password"=>$row["password"]);
        }
    }else {
        echo "0 results";
    }
    $data_st[]=array("datae"=>$datae);
    $data_st[]=array("data2"=>$data2);
    echo json_encode($data_st);
?>