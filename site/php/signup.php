<?php 
	require "db.php";
 
	$data = $_POST;
	if ( isset($data['do_signup'])) {
		
		$errors = array();
		if ( trim($data['login']) == '' ) {
			$errors[] = 'Введите логин';
		}
		if ( ($data['password']) == '' ) {
			$errors[] = 'Введите пароль';
		}
		if ( ($data['password2']) != $data['password'] ) {
			$errors[] = 'Повторный пароль введён не верно!';
		}
		if ( trim($data['email']) == '' ) {
			$errors[] = 'Введите почту';
		}
		if ( R::count('users', "login = ?", array($data['login'])) > 0 ) {
			$errors[] = 'Пользователь с таким логиом уже существует';
		}
		if ( R::count('users', "email = ?", array($data['email'])) > 0 ) {
			$errors[] = 'Пользователь с таким Email уже существует';
		}
		if ( empty($errors) ) {
			$user = R::dispense('users');
			$user->login = $data['login'];
			$user->email = $data['email'];
			$user->password = password_hash($data['password'], PASSWORD_DEFAULT);
			R::store($user);
			echo '<div style="color: green;">Вы успешно зарегестрированы</div><hr>';
		} else{
			echo '<div style="color: red;">'.array_shift($errors).'</div><hr>';
		}

	}


 ?>
