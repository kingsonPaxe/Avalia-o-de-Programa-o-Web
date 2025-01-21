
// Lista de matrículas e nomes
const studentNames = [
    { id: "1", name: "Jeovani Paxe" },
    { id: "2", name: "Pedro dos Santos" },
    { id: "3", name: "Edgar Baptista" },
    { id: "4", name: "Maria Paxe" }
];

let students = [];
let counter = 1; // Contador para o ID dos estudantes

// Preencher automaticamente o nome
function autoFillName() {
    const idAluno = document.getElementById("matricula").value;
    const nomeAluno = document.getElementById("name");
    const student = studentNames.find(s => s.id === idAluno);

    if (student) {
        nomeAluno.value = student.name;
    } else {
        nomeAluno.value = "Sem registro";
    }
}

// Atualizar o nome automaticamente ao inserir a matrícula
//document.getElementById("matricula").addEventListener("input", autoFillName);


// Função para atribuir notas
function assignGrades() {
    const name = document.getElementById("name").value;
    const matricula = document.getElementById("matricula").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if(!studentNames.find(s => s.id == matricula)) {
        alert("Verifique o número de matrícula");
        return
    }

    if ( isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Notas invalidas, verifique novamente");
        return
    }

    if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 20 || nota2 > 20 || nota3 > 20){
        alert("Notas atribuidas fora do intervalo académico");
        return
    } else (nota1 <= 20 && nota2 <= 20 && nota3 <= 20); {
        const media = (nota1 + nota2 + nota3) / 3;
        let status = media >= 10 ? 'Aprovado' : media >= 5 ? 'Recurso' : 'Reprovado';

      
        students.push({
            id: counter++,
            name,
            matricula,
            nota1,
            nota2,
            nota3,
            media: media.toFixed(2),
            status
    });

        alert(`Notas de ${name} atribuídas com sucesso!`);
        clearForm();
    }
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
}

// Função para exibir o popup com as notas dos estudantes
function viewGrades() {
    const popup = document.getElementById("popup");
    const tableBody = document.getElementById("data-table").querySelector("tbody");
    
    // Limpa as linhas existentes na tabela
    tableBody.innerHTML = "";

    // Adiciona os dados dos estudantes à tabela
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.nota1}</td>
            <td>${student.nota2}</td>
            <td>${student.nota3}</td>
            <td>${student.media}</td>
            <td>${student.status}</td>
        `;
        tableBody.appendChild(row);
    });

    // Exibe o popup
    popup.style.display = "flex";
}

// Função para fechar o popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Atualizar a hora do sistema
function updateSystemTime() {
    const relogio = document.getElementById('relogio');
    const actual = new Date();

    // Formata a hora
    const horas = actual.getHours().toString().padStart(2, '0');
    const minutos = actual.getMinutes().toString().padStart(2, '0');
    const segundos = actual.getSeconds().toString().padStart(2, '0');

    // Atualiza o conteúdo do elemento
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Alterar os lados
function mudarLados(){
    const container = document.querySelector(".container");
    const leftSide = container.querySelector(".left-side");
    const rightSide = container.querySelector(".right-side");
    const relogio = container.querySelector("#relogio")

    // Verificar a ordem atual e alternar
    if (leftSide.nextElementSibling === rightSide) {
        container.insertBefore(rightSide, leftSide); // Move o lado direito antes do lado esquerdo
    } else {
        container.insertBefore(leftSide, rightSide); // Move o lado esquerdo antes do lado direito
    }
}

// Atualizar a hora a cada segundo
setInterval(updateSystemTime, 1000);

// Executar uma vez ao carregar a página
updateSystemTime();


