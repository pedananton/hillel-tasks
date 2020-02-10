class toDoItem extends HTMLElement {
    get completed(){
        return this.hasAttribute("completed");
    }
    set completed(val) {
        if(val) {
            this.setAttribute("completed", "");
        } else {
            this.removeAttribute("completed");
        }
    }
    constructor() {
        super();
        this.addEventListener("click", e=> {
            if (this.disabled) {
                return;
            }
            this.toggeleToDo();
        });
    }
    toggeleToDo() {
        // ..
    }
}
customElements.define("todo-item", toDoItem)

