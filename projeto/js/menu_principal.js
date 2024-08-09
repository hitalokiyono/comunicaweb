document.addEventListener("DOMContentLoaded", function() {
    // Mostra o indicador de carga
    document.getElementById("loader").style.display = "block";

    // Evento de carregamento completo
    window.addEventListener("load", function() {
        // Esconde o indicador de carga
        document.getElementById("loader").style.display = "none";
    });
});



document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu2");
    var target = event.target;

    // Verifica se o alvo do clique não é o menu ou um de seus filhos
    if (!menu.contains(target)) {
        // Fecha o menu
        menu.style.display = "none";
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        const selectPermissao = document.querySelectorAll(".select-permissao");
        selectPermissao.forEach(function(select) {
            select.addEventListener("change", function() {
                const permissaoSelecionada = select.value;
                const idUsuario = select.getAttribute("data-id");
                // Redireciona para o arquivo PHP responsável pela atualização com a variável permissao, ação "update_permission" e o ID do usuário
                window.location.href = "./permissao.php?action=update_permission&permissao=" + permissaoSelecionada + "&id=" + idUsuario;
            });
        });
    });

document.getElementById('userInfoForm');
function toggleMenu() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
     

    } else {
        sidenav.style.width = "200px";
    
    }    
}

    document.getElementById('userInfoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        showPasswordFields();
    });
    
    function showPasswordFields() {
        var username = document.getElementById('username').value;
    
        axios.post('./verificarnome.php', { username: username })
            .then(function(response) {
                if (response.data.exists) {
                    alert("Usuário já cadastrado. Por favor, escolha outros dados.");
                } else {
                    showPasswordFieldsHTML(username);
                }
            })
            .catch(function(error) {
                console.error('Erro:', error);
            });
    }



    function showPasswordFieldsHTML(username) {
        document.getElementById('userInfoForm').style.display = 'none';
    
        var passwordFieldsHTML = `
            <form id="passwordForm" onsubmit="return validatePasswords('${username}')" method="post">
                <input type="hidden" name="nickname" value="${username}">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" maxlength="8" minlength="8" required oninput="validateUsername(this)" required>
                <label for="confirmPassword">Confirmar senha:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" maxlength="8" minlength="8" required>
                <input type="submit" value="Entrar">
            </form>
        `;
        document.getElementById('loginForm').innerHTML += passwordFieldsHTML;
    }
    
    function validatePasswords(username) {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
    
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return false;
        }
    
        var formData = new FormData();
        formData.append('nickname', username);
        formData.append('password', password);
    
        axios.post('./cadastrar.php', formData)
            .then(function(response) {
                if (response.data.success) {
                    // Exibe mensagem de sucesso
                    alert(response.data.message);
                    window.location.href = "./index.php";
                    // Faça mais ações conforme necessário
                } else {
                    // Exibe mensagem de erro
                    alert(response.data.message);
                }
            })
            .catch(function(error) {
                // Exibe mensagem de erro em caso de falha na requisição
                console.error('Erro:', error);
            });
    
        return false;
    }
    function validateUsername(input) {
        var username = input.value;
        var regex = /^[a-zA-Z0-9]+$/; // Permite apenas letras maiúsculas e minúsculas e números
    
        if (!regex.test(username) && username !== "") {
            alert("Por favor, use apenas letras e números.");
            input.value = username.replace(/[^\w]/gi, ''); // Remove caracteres especiais
        }
    }


    document.getElementById('loginefetForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        login(); // Chama a função de login
    });

    function login() {
        var username1 = document.getElementById('username1').value;
        var password1 = document.getElementById('password1').value;
        console.log(username1, password1)
        axios.post('./entrar.php', { username1: username1, password1: password1 })
            .then(function(response) {
        
                if (response.data.exists) {
                    sessionStorage.setItem('username', username1);
                    alert("Autenticação bem-sucedida!");
                    window.location.href = "./index.php";   
                } else {
    
                    alert("ops algo de errado deu certo!!!!");
                }
            })
            .catch(function(error) {
              
                console.error('Erro:', error);
                alert("Erro ao fazer login. Tente novamente mais tarde.");
            });

        // Impede o envio padrão do formulário
        return false;
    }

    function logout(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        axios.post('./logout.php')
            .then(function(response) {
                if (response.data.success) {   
                    window.location.href = "./index.php";
                  
                } else {
                    alert("erro ao sair ");
                }
            })
            .catch(function(error) {
                console.error('Erro:', error);
                alert("Erro ao fazer logout. Tente novamente mais tarde.");
            });
    }


    function toggleMenu2() {
        console.log("Toggle menu clicked");
        var menu = document.getElementById("menu2");
        if (menu.style.display === "block") {
            console.log("Menu is currently open, closing it");
            menu.style.display = "none";
        } else {
            console.log("Menu is currently closed, opening it");
            menu.style.display = "block";
        }
    }
    
    function toggleMenu2(event) {
        event.stopPropagation(); // Impede a propagação do evento para o documento
        var menu = document.getElementById("menu2");
    

        if (menu.style.display === "block") {
            menu.style.display = "none";
        
        } else {
            menu.style.display = "block";
        }
    }
    

    

    function confirmarExclusao(id, acao) {
        if(confirm("Tem certeza que deseja continuar?")) {
            window.location.href = "./excluir.php?id=" + id + "&acao=" + acao;
        }
    }
    

    $(document).ready(function() {
        // Function to move the carousel
        function moveCarousel() {
            var $firstItem = $('.banner-item:first');
            var $nextItem = $firstItem.next('.banner-item');
            
            // Torna o próximo item visível
            $nextItem.css('display', 'block');
            
            $firstItem.animate({marginLeft: "-100%"}, 0, function() {
                $firstItem.appendTo('#carousel').css('margin-left', 0);
            });
            
            // Esconde os itens que não estão sendo chamados
            $('.banner-item:not(:first)').css('display', 'none');
        }
        setInterval(moveCarousel, 10000); // 30 segundos em milissegundos
    });
    

    document.getElementById("butaobanner").onclick = function() {
        // Redireciona para a página desejada
        window.location.href = "./banners.php";
    };


    
    document.getElementById("meuBotao").addEventListener("click", function() {
        window.location.href = "./banners.php";
      });
      
      
      