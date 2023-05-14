window.onkeydown = function (e) {
    switch (e['code']) {

        //erase
        case 'KeyC':
            document.getElementById("Button_C").click()
            break;


        //top digits
        case 'Digit1':
            document.getElementById("Button_1").click()    
            break;

        case 'Digit2' :
            document.getElementById("Button_2").click()
            break;

        case 'Digit3':
            document.getElementById("Button_3").click()
            break;

        case 'Digit4':
            document.getElementById("Button_4").click()   
            break;

        case 'Digit5':
            document.getElementById("Button_5").click()
            break;

        case 'Digit6':
            if(!e.shiftKey){document.getElementById("Button_6").click()}
            else{document.getElementById("Button_^").click()}   
            break;

        case 'Digit7':
            document.getElementById("Button_7").click()
            break;

        case 'Digit8':
            if(!e.shiftKey){document.getElementById("Button_8").click()}
            else{document.getElementById("Button_*").click()}  
            break;

        case 'Digit9':
            if(!e.shiftKey){document.getElementById("Button_9").click()}
            else{document.getElementById("Button_(").click()}  
            break;

        case 'Digit0':
            if(!e.shiftKey){document.getElementById("Button_0").click()}
            else{document.getElementById("Button_)").click()}  
            break;



        //numpad operators
        case 'NumpadDivide':
            document.getElementById("Button_/").click()   
            break;

        case 'NumpadMultiply':
            document.getElementById("Button_*").click()
            break;

        case 'NumpadSubtract':
            document.getElementById("Button_-").click()    
            break;

        case 'NumpadAdd' :
            document.getElementById("Button_+").click()
            break;


        //numpad    
        case 'Numpad0':
            document.getElementById("Button_9").click()   
            break;

        case 'Numpad1':
            document.getElementById("Button_0").click()
            break;

        case 'Numpad2':
            document.getElementById("Button_1").click()    
            break;

        case 'Numpad3' :
            document.getElementById("Button_2").click()
            break;

        case 'Numpad4':
            document.getElementById("Button_3").click()
            break;

        case 'Numpad5':
            document.getElementById("Button_4").click()   
            break;

        case 'Numpad5':
            document.getElementById("Button_5").click()
            break;

        case 'Numpad6':
            document.getElementById("Button_6").click()    
            break;

        case 'Numpad7':
            document.getElementById("Button_7").click()
            break;

        case 'Numpad8':
            document.getElementById("Button_8").click()
            break;

        case 'Numpad9':
            document.getElementById("Button_9").click()   
            break;


        case 'Backspace':
            document.getElementById("Backspace").click()
            break;

        default:
            break;
    }
}