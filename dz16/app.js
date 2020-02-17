import template from './TodoItem.html.js';

class ToDoItem extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(template.content.cloneNode(true));
        var checkBox = this.shadowRoot.querySelector("input");

        checkBox.onchange = () => {
            this.shadowRoot.children[1].style.textDecoration = "none";
            if (checkBox.checked == true){
                this.shadowRoot.children[1].style.textDecoration = "line-through";
            }else {
                this.shadowRoot.children[1].style.textDecoration = "none";
            }
           
        }
    }
}

customElements.define("todo-item", ToDoItem)

