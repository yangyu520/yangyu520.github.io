<?php
	$arr=["user"=>"admin","age"=>25,"sex"=>"男"];

	$callback=$_GET["callback"];

	$str=json_encode($arr);

	echo $callback($str);