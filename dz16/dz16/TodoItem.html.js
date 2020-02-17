const template = document.createElement('template');
template.innerHTML = `
<style>
:host([completed]) {
    text-decoration: line-through;
}
</style>
<label>
<input type="checkbox">
<slot>Notes</slot>
<span slot="note"></span>
</label>
`;

export default template;