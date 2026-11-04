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
    function FindPerson(id) {
        for (let i=0;i<personer.length;i++) {
            if (personer[i].id === id) {
                return personer[i];
            }
        }
        return null;
    }
    function ShowPerson(id) {
        let p = FindPerson(id);
        if (p!==null) {
            alert(p.navn);
        }
    }
function generateTable() {
    let retur = "<table>";
    for(let person of personer) {
        retur += `<tr onclick=ShowPerson(${person.id}) id=${person.id}><td>${person.navn}</td><td>${person.alder}</td></tr>`
    }
    retur += "</table>"
    return retur
}