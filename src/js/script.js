const list = [];

const addToList = () => {
    const text = getElem('input').value;
    if(text.trim() === ""){
        return getElem('alert').style.display  = 'block';
    }
    list.push(text);
    addedToList();
    reRenderList();
}
const reRenderList = () => {
    getElem('list').innerHTML = '';
    const elements = [];

    list.forEach((item)=> {
        elements.push(`<li>${item}</li>`);
    });
    getElem('list').innerHTML = elements.join('');
}
const getElem = (id) => {
    return document.getElementById(id);
}
const addedToList = () => {
    getElem('alert').style.display = 'none';
    getElem('input').value = "";
}
document.getElementById('button').addEventListener('click',addToList);