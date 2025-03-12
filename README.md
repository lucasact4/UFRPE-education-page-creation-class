# Guia Básico de HTML, CSS, JavaScript e Bootstrap

## 1. Introdução
Este guia tem como objetivo ensinar os conceitos básicos de HTML, CSS, JavaScript e Bootstrap, utilizando como referência a estrutura de um projeto educativo simples.

---

## 2. HTML - Estruturando a Página
HTML (HyperText Markup Language) é a linguagem responsável por estruturar os conteúdos de uma página web.

### 2.1 Estrutura Básica
Cada página HTML segue uma estrutura básica:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educational Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Bem-vindo à Página Educativa</h1>
    </header>
    <main>
        <section>
            <h2>Seção de Exemplo</h2>
            <p>Este é um parágrafo de exemplo dentro de uma seção.</p>
        </section>
    </main>
    <footer>
        <p>Rodapé da página</p>
    </footer>
</body>
</html>
```

### 2.2 Elementos Importantes
- `<head>`: Contém metadados e links para estilos e scripts.
- `<body>`: Parte visível do site, onde ficam os conteúdos.
- `<header>`: Cabeçalho da página.
- `<main>`: Conteúdo principal.
- `<section>`: Seções organizadas.
- `<footer>`: Rodapé.
- `<a>`: Links.
- `<img>`: Imagens.
- `<ul>`, `<ol>`, `<li>`: Listas ordenadas e não ordenadas.

---

## 3. CSS - Estilizando a Página
CSS (Cascading Style Sheets) define a aparência dos elementos HTML.

### 3.1 Exemplo de Estilização
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}
header {
    background-color: #1E3053;
    color: white;
    padding: 20px;
    text-align: center;
}
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
```

### 3.2 Propriedades Importantes
- `background-color`: Define a cor de fundo.
- `color`: Define a cor do texto.
- `padding`: Espaçamento interno.
- `margin`: Espaçamento externo.
- `text-align`: Alinhamento de texto.
- `hover`: Efeito ao passar o mouse sobre um elemento.

---

## 4. JavaScript - Interatividade
JavaScript é usado para tornar a página interativa.

### 4.1 Exemplo de Código
```js
document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#ffb6b9", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
```

### 4.2 Explicação
- `document.getElementById("changeColorBtn")`: Seleciona o botão pelo ID.
- `.addEventListener("click", function() {...})`: Escuta o evento de clique.
- `document.body.style.backgroundColor = colors[...]`: Altera a cor do fundo.

---

## 5. Bootstrap - Layout Responsivo
Bootstrap é um framework CSS que facilita a criação de páginas responsivas.

### 5.1 Como Adicionar Bootstrap
Adicione o seguinte link no `<head>`:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

### 5.2 Exemplos de Uso
#### Botões:
```html
<a href="#" class="btn btn-primary">Clique Aqui</a>
```
#### Layout Responsivo:
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Coluna 1</div>
        <div class="col-md-6">Coluna 2</div>
    </div>
</div>
```

### 5.3 Classes Importantes
- `container`: Define uma área centralizada e responsiva.
- `row` e `col-md-6`: Criam uma estrutura de grade.
- `btn btn-primary`: Botões estilizados.
- `text-center`: Centraliza texto.
- `m-1`, `p-2`: Adiciona margens e espaçamentos.

---

## 6. Conclusão
Este guia apresenta os fundamentos básicos para iniciar no desenvolvimento web com HTML, CSS, JavaScript e Bootstrap. Com prática, é possível criar páginas mais interativas e sofisticadas. 🚀

