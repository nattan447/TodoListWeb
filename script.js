const btn=document.getElementById("btn");
let counter=0;
class Tarefa  {
    constructor(nome,id){
        this.nome=nome;
        this.id=id
    } 

editar()
{


}

    remover(){
document.getElementById(this.id).remove();
    }
    adicionar(){
        const btnremove=document.createElement("button");
        btnremove.textContent="remover"
        let lista=document.getElementById("lista")
        let viewtarefa=document.createElement("div")
        viewtarefa.id=this.id;
        let tarefatxt=document.createElement("p");
        tarefatxt.textContent=this.nome;
        viewtarefa.appendChild(tarefatxt)
        viewtarefa.appendChild(btnremove);
        lista.appendChild(viewtarefa)
        btnremove.addEventListener("click",()=>{
            this.remover();
        })
    }
}

btn.addEventListener("click",()=>{
    counter++
    let nometarefa=document.getElementById("tarefa").value;
    let tarefa=new Tarefa(nometarefa,counter);
    tarefa.adicionar();
})



