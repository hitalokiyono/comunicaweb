<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <?php require_once ("./menu_principal.php"); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilos.css">
    <title>comunicaweb</title>
</head>
<body>

<div class = "main">

 <div class="login"  onclick="login">
    <h3> REGISTRAR-SE:</h3>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF">
      </div>
      <div class="form-group">
        <label for="contato">Número de Contato:</label>
        <input type="tel" id="contato" name="contato" placeholder="Digite seu Número de Contato">
      </div>
      <div class="form-group">
        <label for="setor">Setor Atuante:</label>
        <input type="text" id="setor" name="setor" placeholder="Digite seu Setor Atuante">
      </div>
      <button type="submit">Registrar</button>
      <div class="forgot-password">
        <a href="#">Já possui uma conta? Faça login.</a>
      </div>
    </form>
  </div>
 </div>



<footer>
<div class = "footer">
<h3 id="fatec"> FATEC ARAÇATUBA PROJETO  </h3>
</div>
</footer>
<div class="video-container">
    <video autoplay muted loop id="video">
        <source src="./midia/videos/fundoprincipal.mp4" type="video/mp4">
    </video>
</div>
</div>
</body>
</html>
