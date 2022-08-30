/*
mezoHozzadast egy on click eventel hívjuk meg a generálás gombbal, kikérjük, hogy az adott ember egyedül jön-e munkába vagy sem
majd,ha erre a válasz nemleges az az 0 akkor attól függően,hogy hány embert hoz magával generálja neki a táblát le.
*/
function mezoHozzaadas() {
    var munkabajaras = document.getElementById("munkabajaras").value;
    if (munkabajaras == 1) {
        innerhtml0();
        honapvalaszto();
        munkabajarasfun0();
    }
    else{
        var hanyan = document.getElementById("hanyan").value;
        if(hanyan == 1){
            innerhtml1();
            honapvalaszto();
            munkabajarasfun1();
        }
        else if(hanyan == 2)
        {
        innerhtml2();
        honapvalaszto();
        munkabajarasfun2();
        }
        else if(hanyan == 3)
        {
        innerhtml3();
        honapvalaszto();
        munkabajarasfun3();
        }
        else if(hanyan == 4)
        {
        innerhtml4();
        honapvalaszto();
        munkabajarasfun4();
        }
        else
        {
            innerhtml0();
            honapvalaszto();
            munkabajarasfun0();
        }
    }
}
//Az inner html a tábla fejrészét tölti be az információk alapján így nem fog szétcsúszni
function innerhtml0(){
    var inner0 = document.getElementById("inner0");
    inner0.innerHTML = "Dátum";
    var inner1 = document.getElementById("inner1");
    inner1.innerHTML = "honnan";
    var inner2 = document.getElementById("inner2");
    inner2.innerHTML = "hova";
    var inner3 = document.getElementById("inner3");
    inner3.innerHTML = "KM";
    var inner4 = document.getElementById("inner4");
    inner4.innerHTML = "Megjegyzés";
    var inner2a = document.getElementById("inner2a");
    inner2a.innerHTML = "";
    var inner2b = document.getElementById("inner2b");
    inner2b.innerHTML = "";
    var inner2c = document.getElementById("inner2c");
    inner2c.innerHTML = "";
    var inner2d = document.getElementById("inner2d");
    inner2d.innerHTML = "";   
}
//Az inner html a tábla fejrészét tölti be az információk alapján így nem fog szétcsúszni
function innerhtml1(){
    var inner0 = document.getElementById("inner0");
    inner0.innerHTML = "Dátum";
    var inner1 = document.getElementById("inner1");
    inner1.innerHTML = "honnan";
    var inner2 = document.getElementById("inner2");
    inner2.innerHTML = "hova";
    var inner3 = document.getElementById("inner3");
    inner3.innerHTML = "KM";
    var inner4 = document.getElementById("inner4");
    inner4.innerHTML = "Megjegyzés";
    var inner2a = document.getElementById("inner2a");
    inner2a.innerHTML = "Ember1";
    var inner2b = document.getElementById("inner2b");
    inner2b.innerHTML = "";
    var inner2c = document.getElementById("inner2c");
    inner2c.innerHTML = "";
    var inner2d = document.getElementById("inner2d");
    inner2d.innerHTML = "";
}
//Az inner html a tábla fejrészét tölti be az információk alapján így nem fog szétcsúszni
function innerhtml2(){
    var inner0 = document.getElementById("inner0");
    inner0.innerHTML = "Dátum";
    var inner1 = document.getElementById("inner1");
    inner1.innerHTML = "honnan";
    var inner2 = document.getElementById("inner2");
    inner2.innerHTML = "hova";
    var inner3 = document.getElementById("inner3");
    inner3.innerHTML = "KM";
    var inner4 = document.getElementById("inner4");
    inner4.innerHTML = "Megjegyzés";
    var inner2a = document.getElementById("inner2a");
    inner2a.innerHTML = "Ember1";
    var inner2b = document.getElementById("inner2b");
    inner2b.innerHTML = "Ember2";
    var inner2c = document.getElementById("inner2c");
    inner2c.innerHTML = "";
    var inner2d = document.getElementById("inner2d");
    inner2d.innerHTML = "";
}
//Az inner html a tábla fejrészét tölti be az információk alapján így nem fog szétcsúszni
function innerhtml3(){
    var inner0 = document.getElementById("inner0");
    inner0.innerHTML = "Dátum";
    var inner1 = document.getElementById("inner1");
    inner1.innerHTML = "honnan";
    var inner2 = document.getElementById("inner2");
    inner2.innerHTML = "hova";
    var inner3 = document.getElementById("inner3");
    inner3.innerHTML = "KM";
    var inner4 = document.getElementById("inner4");
    inner4.innerHTML = "Megjegyzés";
    var inner2a = document.getElementById("inner2a");
    inner2a.innerHTML = "Ember1";
    var inner2b = document.getElementById("inner2b");
    inner2b.innerHTML = "Ember2";
    var inner2c = document.getElementById("inner2c");
    inner2c.innerHTML = "Ember3";
    var inner2d = document.getElementById("inner2d");
    inner2d.innerHTML = "";
}
//Az inner html a tábla fejrészét tölti be az információk alapján így nem fog szétcsúszni
function innerhtml4(){
    var inner0 = document.getElementById("inner0");
    inner0.innerHTML = "Dátum";
    var inner1 = document.getElementById("inner1");
    inner1.innerHTML = "honnan";
    var inner2 = document.getElementById("inner2");
    inner2.innerHTML = "hova";
    var inner3 = document.getElementById("inner3");
    inner3.innerHTML = "KM";
    var inner4 = document.getElementById("inner4");
    inner4.innerHTML = "Megjegyzés";
    var inner2a = document.getElementById("inner2a");
    inner2a.innerHTML = "Ember1";
    var inner2b = document.getElementById("inner2b");
    inner2b.innerHTML = "Ember2";
    var inner2c = document.getElementById("inner2c");
    inner2c.innerHTML = "Ember3";
    var inner2d = document.getElementById("inner2d");
    inner2d.innerHTML = "Ember4";
}
//Munkabajaras function generálja le az input mezőket attól függően hány embert hozz magával az illető 0
function munkabajarasfun0(){
    var container0 = document.getElementById("container0");
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container2a = document.getElementById("container2a");
    var container2b = document.getElementById("container2b");
    var container2c = document.getElementById("container2c");
    var container2d = document.getElementById("container2d");
    //év lekérés
    var today = new Date();
    var yyyy = today.getFullYear();
    today = yyyy;
    //Törli a sorokat amikor újra kreállja az egészet és után pedig megcsinálja az új információt alapján
    while (container0.hasChildNodes() ) {
        container0.removeChild(container0.lastChild);
    }
    while (container1.hasChildNodes() ) {
        container1.removeChild(container1.lastChild);
    }
    while (container2.hasChildNodes() ) {
        container2.removeChild(container2.lastChild);
    }
    while (container3.hasChildNodes() ) {
        container3.removeChild(container3.lastChild);
    }
    while (container4.hasChildNodes() ) {
        container4.removeChild(container4.lastChild);
    }
    while (container2a.hasChildNodes() ) {
        container2a.removeChild(container2a.lastChild);
    }
    while (container2b.hasChildNodes() ) {
        container2b.removeChild(container2b.lastChild);
    }
    while (container2c.hasChildNodes() ) {
        container2c.removeChild(container2c.lastChild);
    }
    while (container2d.hasChildNodes() ) {
        container2d.removeChild(container2d.lastChild);
    }
    for (i = 0; i < number; i++) {
        //inputokat létrhozom
        var input0 = document.createElement("input");
        var input1 = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        //inputok megadása
        //FONTOS AZ INPUT 0 AMIBEN A "datum[]" VAN AZ TEXT MEZŐ
        input0.type = "text";
        input0.name = "datum[]";
        input0.value = today + "/" + name + "/" + (i + 1);
        input0.style = "width:120px;"
        input0.disabled = true;
        input0.class = "form-control";
        honapvalaszto();
        
        input1.type = "text";
        input1.name = "honnan[]";
        input1.class = "form-control";
        input1.placeholder = "Honnan";

        input2.type = "text";
        input2.name = "hova[]";
        input2.class = "form-control";
        input2.placeholder = "Hova";

        input3.type = "number";
        input3.name = "km[]";
        input3.style = "width:65px"
        input3.class = "form-control";
        input3.placeholder = "KM";

        input4.type = "textarea";
        input4.style = "width:200px; "
        input4.name = "megjegyzes[]";
        input4.class = "form-control";
        input4.placeholder = "Megjegyzés";

        container0.appendChild(input0);
        container1.appendChild(input1);
        container2.appendChild(input2);
        container3.appendChild(input3);
        container4.appendChild(input4);
        // Sor törtés,hogy megcsinálja a táblákat.
        container0.appendChild(document.createElement("br"));
        container1.appendChild(document.createElement("br"));
        container2.appendChild(document.createElement("br"));
        container3.appendChild(document.createElement("br"));
        container4.appendChild(document.createElement("br"));
    }
}
//Munkabajaras function generálja le az input mezőket attól függően hány embert hozz magával az illető 1
function munkabajarasfun1()
{  
    var container0 = document.getElementById("container0");
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container2a = document.getElementById("container2a");
    var container2b = document.getElementById("container2b");
    var container2c = document.getElementById("container2c");
    var container2d = document.getElementById("container2d");
    //év lekérés
    var today = new Date();
    var yyyy = today.getFullYear();
    today = yyyy;
    //Törli a sorokat amikor újra kreállja az egészet és után pedig megcsinálja az új információt alapján
    while (container0.hasChildNodes() ) {
        container0.removeChild(container0.lastChild);
    }
    while (container1.hasChildNodes() ) {
        container1.removeChild(container1.lastChild);
    }
    while (container2.hasChildNodes() ) {
        container2.removeChild(container2.lastChild);
    }
    while (container3.hasChildNodes() ) {
        container3.removeChild(container3.lastChild);
    }
    while (container4.hasChildNodes() ) {
        container4.removeChild(container4.lastChild);
    }
    while (container2a.hasChildNodes() ) {
        container2a.removeChild(container2a.lastChild);
    }
    while (container2b.hasChildNodes() ) {
        container2b.removeChild(container2b.lastChild);
    }
    while (container2c.hasChildNodes() ) {
        container2c.removeChild(container2c.lastChild);
    }
    while (container2d.hasChildNodes() ) {
        container2d.removeChild(container2d.lastChild);
    }
    
    for (i = 0; i < number; i++) {
        //inputokat létrhozom
        var input0 = document.createElement("input");
        var input1 = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        var input5 = document.createElement("input");
        //inputok megadása
        //FONTOS AZ INPUT 0 AMIBEN A "datum[]" VAN AZ TEXT MEZŐ
        input0.type = "text";
        input0.name = "datum[]";
        input0.value = today + "/" + name + "/" + (i + 1);
        input0.style = "width:120px; "
        input0.disabled = true;
        input0.class = "form-control";
        
        
        input1.type = "text";
        input1.name = "honnan[]";
        input1.style = ""
        input1.class = "form-control";
        input1.placeholder = "Honnan";

        input2.type = "text";
        input2.name = "hova[]";
        input2.style = ""
        input2.class = "form-control";
        input2.placeholder = "Hova";

        input3.type = "number";
        input3.name = "km[]";
        input3.style = " width:65px"
        input3.class = "form-control";
        input3.placeholder = "KM";

        input4.type = "textarea";
        input4.style = "width:200px; "
        input4.name = "megjegyzes[]";
        input4.class = "form-control";
        input4.placeholder = "Megjegyzés";

        input5.type = "text";
        input5.name = "plusember1[]";
        input5.style = ""
        input5.class = "form-control";
        input5.placeholder = "Vezetéknév Keresztnév";

        container0.appendChild(input0);
        container1.appendChild(input1);
        container2.appendChild(input2);
        container3.appendChild(input3);
        container4.appendChild(input4);
        container2a.appendChild(input5);
        // Sor törtés,hogy megcsinálja a táblákat.
        container0.appendChild(document.createElement("br"));
        container1.appendChild(document.createElement("br"));
        container2.appendChild(document.createElement("br"));
        container3.appendChild(document.createElement("br"));
        container4.appendChild(document.createElement("br"));
        container2a.appendChild(document.createElement("br"));

    }
}
//Munkabajaras function generálja le az input mezőket attól függően hány embert hozz magával az illető 2
function munkabajarasfun2(){
    var container0 = document.getElementById("container0");
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container2a = document.getElementById("container2a");
    var container2b = document.getElementById("container2b");
    //év lekérés
    var today = new Date();
    var yyyy = today.getFullYear();
    today = yyyy;
    //Törli a sorokat amikor újra kreállja az egészet és után pedig megcsinálja az új információt alapján
    while (container0.hasChildNodes() ) {
        container0.removeChild(container0.lastChild);
    }
    while (container1.hasChildNodes() ) {
        container1.removeChild(container1.lastChild);
    }
    while (container2.hasChildNodes() ) {
        container2.removeChild(container2.lastChild);
    }
    while (container3.hasChildNodes() ) {
        container3.removeChild(container3.lastChild);
    }
    while (container4.hasChildNodes() ) {
        container4.removeChild(container4.lastChild);
    }
    while (container2a.hasChildNodes() ) {
        container2a.removeChild(container2a.lastChild);
    }
    while (container2b.hasChildNodes() ) {
        container2b.removeChild(container2b.lastChild);
    }
    for (i = 0; i < number; i++) {
        //inputokat létrhozom
        var input0 = document.createElement("input");
        var input1 = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        var input5 = document.createElement("input");
        var input6 = document.createElement("input");
        //inputok megadása
        //FONTOS AZ INPUT 0 AMIBEN A "datum[]" VAN AZ TEXT MEZŐ
        input0.type = "text";
        input0.name = "datum[]";
        input0.value = today + "/" + name + "/" + (i + 1);
        input0.style = "width:120px; ;"
        input0.disabled = true;
        input0.class = "form-control";
        
        
        input1.type = "text";
        input1.name = "honnan[]";
        input1.style = ""
        input1.class = "form-control";
        input1.placeholder = "Honnan";

        input2.type = "text";
        input2.name = "hova[]";
        input2.style = ""
        input2.class = "form-control";
        input2.placeholder = "Hova";

        input3.type = "number";
        input3.name = "km[]";
        input3.style = " width:65px"
        input3.class = "form-control";
        input3.placeholder = "KM";

        input4.type = "textarea";
        input4.style = "width:200px; "
        input4.name = "megjegyzes[]";
        input4.class = "form-control";
        input4.placeholder = "Megjegyzés";

        input5.type = "text";
        input5.name = "plusember1[]";
        input5.style = ""
        input5.class = "form-control";
        input5.placeholder = "Vezetéknév Keresztnév";

        input6.type = "text";
        input6.name = "plusember2[]";
        input6.style = ""
        input6.class = "form-control";
        input6.placeholder = "Vezetéknév Keresztnév";

        container0.appendChild(input0);
        container1.appendChild(input1);
        container2.appendChild(input2);
        container3.appendChild(input3);
        container4.appendChild(input4);
        container2a.appendChild(input5);
        container2b.appendChild(input6);
        // Sor törtés,hogy megcsinálja a táblákat.
        container0.appendChild(document.createElement("br"));
        container1.appendChild(document.createElement("br"));
        container2.appendChild(document.createElement("br"));
        container3.appendChild(document.createElement("br"));
        container4.appendChild(document.createElement("br"));
        container2a.appendChild(document.createElement("br"));
        container2b.appendChild(document.createElement("br"));

    }
}
//Munkabajaras function generálja le az input mezőket attól függően hány embert hozz magával az illető 3
function munkabajarasfun3(){
    var container0 = document.getElementById("container0");
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container2a = document.getElementById("container2a");
    var container2b = document.getElementById("container2b");
    var container2c = document.getElementById("container2c");
    var container2d = document.getElementById("container2d");
    //év lekérés
    var today = new Date();
    var yyyy = today.getFullYear();
    today = yyyy;
    //Törli a sorokat amikor újra kreállja az egészet és után pedig megcsinálja az új információt alapján
    while (container0.hasChildNodes() ) {
        container0.removeChild(container0.lastChild);
    }
    while (container1.hasChildNodes() ) {
        container1.removeChild(container1.lastChild);
    }
    while (container2.hasChildNodes() ) {
        container2.removeChild(container2.lastChild);
    }
    while (container3.hasChildNodes() ) {
        container3.removeChild(container3.lastChild);
    }
    while (container4.hasChildNodes() ) {
        container4.removeChild(container4.lastChild);
    }
    while (container2a.hasChildNodes() ) {
        container2a.removeChild(container2a.lastChild);
    }
    while (container2b.hasChildNodes() ) {
        container2b.removeChild(container2b.lastChild);
    }
    while (container2c.hasChildNodes() ) {
        container2c.removeChild(container2c.lastChild);
    }
    while (container2d.hasChildNodes() ) {
        container2d.removeChild(container2d.lastChild);
    }
    for (i = 0; i < number; i++) {
        //inputokat létrhozom
        var input0 = document.createElement("input");
        var input1 = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        var input5 = document.createElement("input");
        var input6 = document.createElement("input");
        var input7 = document.createElement("input");
        
        //inputok megadása
        //FONTOS AZ INPUT 0 AMIBEN A "datum[]" VAN AZ TEXT MEZŐ
        input0.type = "text";
        input0.name = "datum[]";
        input0.value = today + "/" + name + "/" + (i + 1);
        input0.style = "width:120px; ;"
        input0.disabled = true;
        input0.class = "form-control";
        
        
        input1.type = "text";
        input1.name = "honnan[]";
        input1.style = ""
        input1.class = "form-control";
        input1.placeholder = "Honnan";

        input2.type = "text";
        input2.name = "hova[]";
        input2.style = ""
        input2.class = "form-control";
        input2.placeholder = "Hova";

        input3.type = "number";
        input3.name = "km[]";
        input3.style = " width:65px"
        input3.class = "form-control";
        input3.placeholder = "KM";

        input4.type = "textarea";
        input4.style = "width:200px; "
        input4.name = "megjegyzes[]";
        input4.class = "form-control";
        input4.placeholder = "Megjegyzés";

        input5.type = "text";
        input5.name = "plusember1[]";
        input5.style = ""
        input5.class = "form-control";
        input5.placeholder = "Vezetéknév Keresztnév";

        input6.type = "text";
        input6.name = "plusember2[]";
        input6.style = ""
        input6.class = "form-control";
        input6.placeholder = "Vezetéknév Keresztnév";

        input7.type = "text";
        input7.name = "plusember3[]";
        input7.style = ""
        input7.class = "form-control";
        input7.placeholder = "Vezetéknév Keresztnév";

    

        container0.appendChild(input0);
        container1.appendChild(input1);
        container2.appendChild(input2);
        container3.appendChild(input3);
        container4.appendChild(input4);
        container2a.appendChild(input5);
        container2b.appendChild(input6);
        container2c.appendChild(input7);
        
        // Sor törtés,hogy megcsinálja a táblákat.
        container0.appendChild(document.createElement("br"));
        container1.appendChild(document.createElement("br"));
        container2.appendChild(document.createElement("br"));
        container3.appendChild(document.createElement("br"));
        container4.appendChild(document.createElement("br"));
        container2a.appendChild(document.createElement("br"));
        container2b.appendChild(document.createElement("br"));
        container2c.appendChild(document.createElement("br"));
        
    }
}
//Munkabajaras function generálja le az input mezőket attól függően hány embert hozz magával az illető 4
function munkabajarasfun4(){
    var container0 = document.getElementById("container0");
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container2a = document.getElementById("container2a");
    var container2b = document.getElementById("container2b");
    var container2c = document.getElementById("container2c");
    var container2d = document.getElementById("container2d");
    //év lekérés
    var today = new Date();
    var yyyy = today.getFullYear();
    today = yyyy;
    //Törli a sorokat amikor újra kreállja az egészet és után pedig megcsinálja az új információt alapján
    while (container0.hasChildNodes() ) {
        container0.removeChild(container0.lastChild);
    }
    while (container1.hasChildNodes() ) {
        container1.removeChild(container1.lastChild);
    }
    while (container2.hasChildNodes() ) {
        container2.removeChild(container2.lastChild);
    }
    while (container3.hasChildNodes() ) {
        container3.removeChild(container3.lastChild);
    }
    while (container4.hasChildNodes() ) {
        container4.removeChild(container4.lastChild);
    }
    while (container2a.hasChildNodes() ) {
        container2a.removeChild(container2a.lastChild);
    }
    while (container2b.hasChildNodes() ) {
        container2b.removeChild(container2b.lastChild);
    }
    while (container2c.hasChildNodes() ) {
        container2c.removeChild(container2c.lastChild);
    }
    while (container2d.hasChildNodes() ) {
        container2d.removeChild(container2d.lastChild);
    }
    for (i = 0; i < number; i++) {
        //inputokat létrhozom
        var input0 = document.createElement("input");
        var input1 = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        var input5 = document.createElement("input");
        var input6 = document.createElement("input");
        var input7 = document.createElement("input");
        var input8 = document.createElement("input");
        //inputok megadása
        //FONTOS AZ INPUT 0 AMIBEN A "datum[]" VAN AZ TEXT MEZŐ
        input0.type = "text";
        input0.name = "datum[]";
        input0.value = today + "/" + name + "/" + (i + 1);
        input0.style = "width:120px;"
        input0.disabled = true;
        input0.class = "form-control";
        
        
        input1.type = "text";
        input1.name = "honnan[]";
        input1.style = ""
        input1.class = "form-control";
        input1.placeholder = "Honnan";

        input2.type = "text";
        input2.name = "hova[]";
        input2.style = ""
        input2.class = "form-control";
        input2.placeholder = "Hova";

        input3.type = "number";
        input3.name = "km[]";
        input3.style = " width:65px"
        input3.class = "form-control";
        input3.placeholder = "KM";

        input4.type = "textarea";
        input4.style = "width:200px; "
        input4.name = "megjegyzes[]";
        input4.class = "form-control";
        input4.placeholder = "Megjegyzés";

        input5.type = "text";
        input5.name = "plusember1[]";
        input5.style = ""
        input5.class = "form-control";
        input5.placeholder = "Vezetéknév Keresztnév";

        input6.type = "text";
        input6.name = "plusember2[]";
        input6.style = ""
        input6.class = "form-control";
        input6.placeholder = "Vezetéknév Keresztnév";

        input7.type = "text";
        input7.name = "plusember3[]";
        input7.style = ""
        input7.class = "form-control";
        input7.placeholder = "Vezetéknév Keresztnév";

        input8.type = "text";
        input8.name = "plusember4[]";
        input8.style = ""
        input8.class = "form-control";
        input8.placeholder = "Vezetéknév Keresztnév";

        container0.appendChild(input0);
        container1.appendChild(input1);
        container2.appendChild(input2);
        container3.appendChild(input3);
        container4.appendChild(input4);
        container2a.appendChild(input5);
        container2b.appendChild(input6);
        container2c.appendChild(input7);
        container2d.appendChild(input8);
        // Sor törtés,hogy megcsinálja a táblákat.
        container0.appendChild(document.createElement("br"));
        container1.appendChild(document.createElement("br"));
        container2.appendChild(document.createElement("br"));
        container3.appendChild(document.createElement("br"));
        container4.appendChild(document.createElement("br"));
        container2a.appendChild(document.createElement("br"));
        container2b.appendChild(document.createElement("br"));
        container2c.appendChild(document.createElement("br"));
        container2d.appendChild(document.createElement("br"));
    }
}
//Kiválasztjuk a hónapot és ez továbbítja az adott hónap nevét és ,hogy hánynapos az a hónap
function honapvalaszto(){
    const d = new Date();
    let month = d.getMonth();
    if (month == 0) {
        number = 31;
        name = "Január";
    }
    else if (month == 1) {
        number = 28;
        name = "Február";
    }
    else if (month == 2) {
        number = 31;
        name = "Március"
    }
    else if (month == 3) {
        number = 30;
        name = "Április"
    }
    else if (month == 4) {
        number = 31;
        name = "Május"
    }
    else if (month == 5) {
        number = 30;
        name = "Június"
    }
    else if (month == 6) {
        number = 31;
        name = "Július"
    }
    else if (month == 7) {
        number = 31;
        name = "Agusztus"
    }
    else if (month == 8) {
        number = 30;
        name = "Szeptember"
    }
    else if (month == 9) {
        number = 31;
        name = "Október"
    }
    else if (month == 10) {
        number = 30;
        name = "November"
    }
    else if (month == 11) {
        number = 31;
        name = "December"
    }
}
//Megjeleníti nekünk a divet attól függően a value az adott selectben lévő optiopnnek 0/1
function displayDiv(id, elementValue) {
    document.getElementById(id).style.display = elementValue.value == 0 ? 'block' : 'none';
    document.getElementById(id).style.display = elementValue.value == 1 ? 'none' : 'block';
}
