const btn = document.getElementById("btn");
let counter = 0;
let counterinput = 10;

class Tarefa {
  constructor(nome, id, id_input) {
    this.nome = nome;
    this.id = id;
    this.id_input = id_input;
  }

  editar() {
    document.getElementById(this.id_input).disabled = false;
    document
      .getElementById(this.id_input)
      .addEventListener("mouseleave", () => {
        document.getElementById(this.id_input).disabled = true;
      });
  }

  remover() {
    document.getElementById(this.id).remove();
  }
  adicionar() {
    const btnedit = document.createElement("button");
    btnedit.textContent = "editar";
    const btnremove = document.createElement("button");
    btnremove.textContent = "remover";
    let lista = document.getElementById("lista");
    let viewtarefa = document.createElement("div");
    viewtarefa.id = this.id;
    viewtarefa.className = "viewtarefa";
    let tarefatxt = document.createElement("input");
    tarefatxt.type = "text";
    tarefatxt.value = this.nome;
    tarefatxt.id = this.id_input;
    tarefatxt.disabled = true;
    viewtarefa.appendChild(tarefatxt);
    viewtarefa.appendChild(btnremove);
    viewtarefa.appendChild(btnedit);
    lista.appendChild(viewtarefa);
    btnremove.addEventListener("click", () => {
      this.remover();
    });
    btnedit.addEventListener("click", () => {
      this.editar();
    });
  }
}

btn.addEventListener("click", () => {
  counterinput++;
  counter++;
  let nometarefa = document.getElementById("tarefa").value;
  let tarefa = new Tarefa(nometarefa, counter, counterinput);
  tarefa.adicionar();
});
