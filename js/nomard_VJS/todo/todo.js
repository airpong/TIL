const todoText = document.querySelector("input")
const todoForm = document.querySelector("form")
const todoPending = document.querySelector(".js-todoPending")
const todoFinish = document.querySelector(".js-todoFinish")
const todosPending = []
const todosFINISH = []
let ID = 1
const PENDING_LS = "pending"
const FINISHIED_LS = "finished"

const DeleteTodo = (event) => {
    const node = event.target
    console.log(node)
    const li = node.parentNode
    const targetul = li.parentNode
    let targetArray
    if(targetul.className === "js-todoPending") {
        targetArray = todosPending
    }
    else{
        targetArray = todosFINISH
    }
    console.log("li",li)
    const targetIndex = (targetArray.findIndex(obj => obj.id === parseInt(li.className)))
    popEl = targetArray.splice(targetIndex,1)
    targetul.removeChild(li)
    localStorage.setItem(PENDING_LS,JSON.stringify(todosPending))
    localStorage.setItem(FINISHIED_LS,JSON.stringify(todosFINISH))
    return [popEl[0],targetul]
}
const gotoAnother = (event) => {
    const tmpEl = DeleteTodo(event)
    console.log(tmpEl)
    let targetUl;
    let targetArray;
    let targetStroage;
    if (tmpEl[1].className === "js-todoPending"){
        targetUl = "js-todoFinish"
        targetArray = todosFINISH
        targetStroage = FINISHIED_LS
    }
    else {
        targetUl = "js-todoPending"
        targetArray = todosPending
        targetStroage = FINISHIED_LS
    }
    addText(tmpEl[0].text,tmpEl[0].id,targetUl)
    targetArray.push({
        text:tmpEl[0].text,
        id:tmpEl[0].id
    })
    localStorage.setItem(targetStroage,JSON.stringify(targetArray))
}

const addText = (text,id,where) => {
    const todoWhere = document.querySelector(`.${where}`)
    const tmpLi = document.createElement("li")
    const tmpBtnDelete = document.createElement("button")
    const tmpBtnFinish = document.createElement("button")
    const tmpSpan = document.createElement("span")
    tmpSpan.innerText = text + " "
    tmpBtnDelete.innerText = "❌"
    tmpBtnFinish.innerText = "✅"
    tmpLi.className = id
    tmpBtnDelete.addEventListener("click",DeleteTodo)
    tmpBtnFinish.addEventListener("click",gotoAnother)
    tmpLi.appendChild(tmpSpan)
    tmpLi.appendChild(tmpBtnDelete)
    tmpLi.appendChild(tmpBtnFinish)
    todoWhere.appendChild(tmpLi)
}

const addToFending = (event) => {
    event.preventDefault()
    todosPending.push({
        text: todoText.value,
        id : ID++
    })
    console.log(todosPending)
    addText(todoText.value,ID-1,"js-todoPending")
    todoText.value = ""
    localStorage.setItem(PENDING_LS,JSON.stringify(todosPending))
}

todoForm.addEventListener("submit",addToFending)

const init = () => {
    const startPending = JSON.parse(localStorage.getItem(PENDING_LS))
    startPending.forEach(el => {
        todosPending.push({
            text: el.text,
            id : el.id
        })
        addText(el.text,el.id,"js-todoPending")
    })
    const startFinish = JSON.parse(localStorage.getItem(FINISHIED_LS))
    startFinish.forEach(el => {
        todosFINISH.push({
            text: el.text,
            id : el.id
        })
        addText(el.text,el.id,"js-todoFinish")
    })
    
}

init()