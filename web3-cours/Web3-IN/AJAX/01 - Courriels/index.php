<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$data = $action->execute();
?>
<!DOCTYPE html>
<html>
	<head>
			<title>Mon engin de courriels</title>
			<meta charset="utf-8">
			<link rel="stylesheet" href="css/global.css">
			<script>
				const checkEmails = () => {
					let formData = new FormData(); // Création d'un <form>
					formData.append("username", "ken"); // <input type="text" name="username" value="ken">
					formData.append("password", "AAAaaa111");
					
					fetch("ajax.php", {
						method: 'POST',
						body: formData,
					})
					.then(response => response.json())
					.then(data => {
						
						let node = document.querySelector("#contenantCourriels");
						node.innerText = data;
						console.log(data);
						setTimeout(checkEmails, 1000);
					})
					
					// Appelle ajax.php
					// lorsqu'il y aura un résultat, modifie la page		
				}		

				setTimeout(checkEmails, 1000);
			</script>
	</head>
	<body>
		<div class="container">
			<h1>Mes courriels</h1>
	
			<p>Vous avez actuellement</p>
			<div id="contenantCourriels">--</div> 
			<p>nouveaux courriels.</p>

			<div class="refresh-section">
				<button onclick="checkEmails()">
					<img src="images/refresh.png" alt="Rafraîchir">
				</button>
			</div>
		</div>
	</body>
</html>
