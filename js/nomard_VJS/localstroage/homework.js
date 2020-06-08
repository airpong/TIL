const selected_CN = "mycountry"
const select = document.querySelector(".js-select")

select.addEventListener("change",(event) => {
    localStorage.setItem(selected_CN,select.value)
})
const init = () => {
    const my_cn = localStorage.getItem(selected_CN)
    if (my_cn !== null) {
        const targetOption = select.querySelector(`.${my_cn}`)
        targetOption.selected = true
        console.log(targetOption)
    }
}

init()