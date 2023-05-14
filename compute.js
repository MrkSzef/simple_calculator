function compute(){
    try {
        let str = document.getElementById("E_Display").textContent
        let arr = [...document.getElementById("E_Display").textContent.matchAll(/[0-9)][(]/g)]
        for (let i = 0; i < arr.length; i++) {
            str = str.slice(0,arr[i]['index']+(i+1))+"*"+str.slice(arr[i]['index']+(i+1))
        }
        str = eval(str.replace("()","").replace("^","**"))
        if(str==undefined){
            document.getElementById("V_Display").textContent = ``
        }
        else{
            document.getElementById("V_Display").textContent = `= ${str}`
        }
    } catch (error) {
        document.getElementById("V_Display").textContent = `Error`
        
    }
}

window.onload = function(){
    Array.from(document.getElementsByTagName("input")).forEach(elm => {
        if (elm.value === "Backspace"){
            elm.addEventListener("click",f = function(){try {
                document.getElementById("E_Display").textContent = document.getElementById("E_Display").textContent.slice(0,-1);
                compute();
            } catch (error) {
                null
            }
        })}
        else if (elm.value === "C"){
            elm.addEventListener("click",f = function(){try {
                document.getElementById("E_Display").textContent = '';
                compute();
            } catch (error) {
                null
            }
        })}
        else{
            elm.addEventListener("click",f = function(){
                if (document.getElementById("E_Display").textContent.length == 0){
                    document.getElementById("E_Display").textContent += elm.value
                    compute();
                }
                else if ('-+/*^.'.includes(document.getElementById("E_Display").textContent.slice(-1)) && '-+/*^.'.includes(elm.value)){
                    document.getElementById("E_Display").textContent = `${document.getElementById("E_Display").textContent.slice(0,-1)}${elm.value}`;
                    compute();
                }
                else if (document.getElementById("E_Display").textContent.length <= 14){
                    document.getElementById("E_Display").textContent += elm.value
                    compute();
                }
            })
        };
    })
};
