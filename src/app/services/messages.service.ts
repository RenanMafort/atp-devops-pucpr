import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';

  constructor() {
  }

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 4000)
  }

  clear(){
    this.message = '';
  }
  // Exemplo de código JavaScript com vulnerabilidades

// 1. Exemplo de XSS (Cross-Site Scripting)
 welcomeUser() {
    var name = document.getElementById('name').value;
    document.getElementById('welcome-message').innerHTML = 'Bem-vindo, ' + name + '!';
}

// 2. Exemplo de Injeção de SQL
 searchProducts() {
    var searchTerm = document.getElementById('search-term').value;
    var sqlQuery = "SELECT * FROM produtos WHERE nome = '" + searchTerm + "'";
    // Executar a consulta SQL...
}

// 3. Exemplo de Validação de Entrada Insuficiente
 authenticateUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        // Autenticar o usuário...
    } else {
        // Exibir mensagem de erro...
    }
}

}
