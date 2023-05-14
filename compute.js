function compute(){
    try {
        let str = document.getElementById("E_Display").textContent
        let arr = [...str.matchAll(/[0-9)][(]/g)]
        for (let i = 0; i < arr.length; i++) {
            str = str.slice(0,arr[i]['index']+(i+1))+"*"+str.slice(arr[i]['index']+(i+1))
        }
        str = eval(str.replace("()","").replace("^","**"))
        if(str != undefined){
            document.getElementById("V_Display").textContent = `= ${str}`
        }
        else{
            document.getElementById("V_Display").textContent = ``
        }
    } catch (error) {
        document.getElementById("V_Display").textContent = `Error`
        
    }
}

window.onload = function(){
    Array.from(document.getElementsByTagName("input")).forEach(elm => {
        switch (elm.value) {

            //DEL ONE
            case "Backspace":
                elm.addEventListener("click",f = function(){
                    try {
                        document.getElementById("E_Display").textContent = document.getElementById("E_Display").textContent.slice(0,-1);
                        compute();
                    }
                    catch (error) {null}
                })
                break;

            //ERASE
            case "C":
                elm.addEventListener("click",f = function(){try {
                    document.getElementById("E_Display").textContent = '';
                    compute();
                }catch (error) {
                    null
                }
                })
                break;

            //ADD CHAR
            default:
                elm.addEventListener("click",f = function(){
                    if (document.getElementById("E_Display").textContent.length == 0){
                        document.getElementById("E_Display").textContent += elm.value
                        compute();
                    }
                    else if ('-+/*^.'.includes(document.getElementById("E_Display").textContent.slice(-1)) && '-+/*^.'.includes(elm.value)){
                        document.getElementById("E_Display").textContent = `${document.getElementById("E_Display").textContent.slice(0,-1)}${elm.value}`;
                        compute();
                    }
                    else if (parseInt(document.getElementById("E_Display").clientWidth) <= 260 && document.getElementById("E_Display").textContent.length <= 26){
                        document.getElementById("E_Display").textContent += elm.value;
                        compute();
                    }
                })
                break;
        }
    }
)};
