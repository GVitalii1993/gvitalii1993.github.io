<?php  
require "php/db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style/bootstrap.css">
	<link rel="stylesheet" href="style/style.css">
	<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="js/main.js"></script>
</head>
<body>
	<div class="container-s">
		<div class="nav-bar col-md-2">
			<div class="nav-button"></div>
			<div class="login-to-home">
				<a href="php/signup.php">регистрация</a>
			</div>
		</div>

		<div class="content">
			<div class="col-md-12 dir" >
				<?php 
				echo date ('d.m.Y.');

			 ?>
			</div>
		</div>
		
	</div>
	
</body>
</html>

