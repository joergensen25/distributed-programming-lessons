let personer=[]

let knap=document.querySelector("#addButton")
knap.onclick = () => 
    {
        let navn=document.querySelector("#navn").value
        let alder = parseInt(document.querySelector("#alder").value)
        if (!isNaN(alder)) {
            personer.push({id:Math.floor(Math.random()*1000), navn:navn,alder:alder})
            document.querySelector("#Vispersoner").innerHTML = generateTable();
        }else {
            alert("not a number")
        }

    }
    function ShowPerson(index, tr) {
        let p = personer[index];
        if (p!==null) {
            tr.style.backgroundColor='red';
            alert(p.navn + p.alder);
        }
    }
function generateTable() {
    let retur = "<table>";
    for(let i=0;i<personer.length;i++) {
        retur += `<tr onclick='ShowPerson(${i},this)' id=${personer[i].id}><td>${personer[i].navn}</td><td>${personer[i].alder}</td></tr>`
    }
    retur += "</table>"
    return retur
}