let gval
const _click = () => {
    const val = input.value
    gval = val
    if (val !== "") {
        const http = new EasyHttp();
        if (!document.querySelector(".danger")) {
            http.get(val).then((e) => {
                const msg = "API rate limit exceeded for 122.170.217.176. (But …t. Check out the documentation for more details.)"
                if (e.message === "Not Found" || e.message === msg) {
                    const ui = new Ui()
                    ui.clear();
                    ui.alt();
                }

                else {
                    console.log(e);
                    const ui = new Ui(e)
                    
                    ui.setData();
                    const btn = document.querySelector("button")
                }
            })
        }
    }
}
const __click = () => {
    if (gval) {
        open("https://github.com/" + gval);
    }
}

const btn = document.querySelector("button")
const input = document.querySelector("input")
input.addEventListener("keyup", _click)
btn.addEventListener("click", __click)