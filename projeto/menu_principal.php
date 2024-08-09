<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/menu_principal.css">
</head>
<body>
    <div id="loader" style="display: none; width: 100%; height: 100%; background-color: white;"></div>
    <div class="controlador">
        <div class="navbar">
            <div class="menu-icon" onclick="toggleMenu()">
                <div class="line" id="a"></div>
                <div class="line" id="b"></div>
                <div class="line" id="c"></div>
            </div>
            
         <!-- #region   novo code  -->
         <div class="comunica">
            <h3>ComunicaWeb.DEV</h3>
            </div>
            
            <div class="navlogin">
                <?php 
                session_start();
                if (isset($_SESSION['username'])) {
                    echo "<div class='main'>";
                    echo "<label id='coin_value' style='margin-right: 3px; margin-top: 3px; font-family: 'Optus Black', sans-serif;'>" . $_SESSION['coin'] . "</label>";
                    echo '<img src="../img/coins.png" style="width: 40px; margin-right:10px; border:0px; height: 50px; background-color: black;">';
                    echo "<label style=' margin-left:10px;     margin-right: 15px;'> Bem-vindo, " . $_SESSION['username'] . "</label>";
                    echo '<button class="menu-icon" style="background-color: white;" onclick="toggleMenu2(event)">';
                    echo '<img src="' . "../imguser/" . $_SESSION['imagem'] . '" alt="Ícone de Tela Principal" style="padding: 0px;">';
                    echo '</button>'; 
                    echo "</div>";
                } else {
                   echo '<button class="login-button" onclick="cancelarentrada()">Entrar</button>';
                    echo '<button class="signup-button" onclick="cancelarCadastro()">Cadastrar</button>';
                }
                ?>
            </div>
        </div>

        <div class="sidenav" id="mySidenav" onclick="toggleMenu()">
            <div class="links">
                <a href=".\index.php" id="option1">
                    <span style="display: inline-flex; align-items: center;">
                        <img src="/botao-home.png" alt="Ícone de Tela Principal" style="width: 25px; height: 25px; margin-right: 5px;">
                        <span>HOME</span>
                    </span>
                </a>
                <?php  
                if(isset($_SESSION['username'])) {
                    echo '<a href=".\banners.php" id="option1">';
                    echo '<span style="display: inline-flex; align-items: center;">';
                    echo '<img src="..\img\banner.gif" alt="Ícone de banner" style="width: 25px; height: 25px; margin-right: 5px;">';
                    echo '<span>BANNERS</span>';
                    echo'</span>';
                    echo '</a>';
                    
                    echo '<a href=".\visualizarcarta.php" id="option1">';
                    echo '<span style="display: inline-flex; align-items: center;">';
                    echo '<img src="..\img\cartas.gif" alt="Ícone de Tela Principal" style="width: 25px; height: 25px; margin-right: 5px;">';
                    echo '<span>CARTAS</span>';
                    echo '</span>';
                    echo '</a>';

                    echo '<a href=".\visualizartime.php" id="option1">';
                    echo '<span style="display: inline-flex; align-items: center;">';
                    echo '<img src="..\img\campoi.gif" alt="Ícone de Tela Principal" style="width: 25px; height: 25px; margin-right: 5px;">';
                    echo '<span>TIMES</span>';
                    echo '</span>';
                    echo '</a>';
                }
                ?>
            </div>
        </div>

        <div class="menu2" id="menu2" onclick="toggleMenu2(event)">
            <div class="menu2img">
                <a id="imga" href="./usermain.php">
                    <span>MINHA CONTA</span>
                    <?php 
                    $imagem_usuario = isset($_SESSION['imagem']) ? $_SESSION['imagem'] : null;

                    if ($imagem_usuario === null || empty($imagem_usuario)) {
                        $imagem_usuario = 'main.png';
                    }
                    ?>
                    <img id="profile-image" src="<?php echo '../imguser/' . $imagem_usuario; ?>" style="width: 190px; height: 50px;">
                </a>
            </div>

            <a href="./index.php">
                <span style="display: inline-flex; align-items: center; color: white;"> 
                    <span>HOME</span>
                </span>
            </a>

            <?php
            if (isset($_SESSION['nivel']) && $_SESSION['nivel'] !== 'user') {
                echo '<a href="./controleuser.php">';
                echo '<span style="display: inline-flex; align-items: center; color: white;">';
                echo '<span>GERENCIAR</span>';
                echo '</span>';
                echo '</a>';
            }
            ?>

            <a id="logout" onclick="logout(event)">
                <span style="display: inline-flex; align-items: center;">
                    <span>DESLOGAR</span>
                </span>
            </a>
        </div>
    </div>
    <script src="./js/menu_principal.js"></script>

</body>
</html>
