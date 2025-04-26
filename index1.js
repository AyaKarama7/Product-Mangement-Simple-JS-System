var Table;
firstExcute();
function firstExcute()
{
    if(localStorage.getItem("Products")!=null)
    {
        Table=JSON.parse(localStorage.getItem("Products"));
        Display();
    }
}
function Display()//for second document
{
    var cartoona='';
    for(var i=0;i<Table.length;i++)
    {
        if(Table[i].Checked==false)
        {
            cartoona+=`<div class="tr">
                    <div class="td">${Table[i].Name}</div>
                    <div class="td">${Table[i].Category}</div>
                    <div class="td">${Table[i].Price}</div>
                    <div class="td">${Table[i].Description}</div>
                    <div class="td">
                        <i class="fas fa-check icon one" onclick="Check(${i})"></i>
                        <i class="fas fa-remove icon two" onclick="Delete(${i})"></i>
                        <i class="fas fa-pen icon three" onclick="Update(${i})"></i>
                    </div>
                    <div id="check"></div>
                </div>`;
        }
        else
        {
            cartoona+=`<div class="tr">
            <div class="td">${Table[i].Name}</div>
            <div class="td">${Table[i].Category}</div>
            <div class="td">${Table[i].Price}</div>
            <div class="td">${Table[i].Description}</div>
            <div class="td">
                <i class="fas fa-check icon one" onclick="Check(${i})"></i>
                <i class="fas fa-remove icon two" onclick="Delete(${i})"></i>
                <i class="fas fa-pen icon three" onclick="Update(${i})"></i>
            </div>
            <div id="check" style="visibility: visible;"></div>
            </div>`;
        }
    }
    document.getElementById("tb").innerHTML=cartoona;
}
function Check(index)
{
    if(Table[index].Checked===false)
    {
        Table[index].Checked=true;
    }
    else 
    {
        Table[index].Checked=false;
    }
    localStorage.setItem("Products",JSON.stringify(Table));
    Display();
}
function Delete(index)
{
    Table.splice(index,1);
    Display();
    localStorage.setItem("Products",JSON.stringify(Table));
}
function Update(index)
{
    var Uindex={
        curIndex:index,
    };
    console.log(Uindex.curIndex);
    localStorage.setItem("Uindex",JSON.stringify(Uindex));
    setTimeout(function(){
        window.location.href="index.html";
    },100);
}
function Search()
{
    var input=document.getElementById("searchInput").value;
    var cartoona='';
    for(var i=0;i<Table.length;i++)
    {
        if(Table[i].Name.toLowerCase().includes(input.toLowerCase())==false);
        else if(Table[i].Checked==false)
        {
            cartoona+=`<div class="tr">
                    <div class="td">${Table[i].Name}</div>
                    <div class="td">${Table[i].Category}</div>
                    <div class="td">${Table[i].Price}</div>
                    <div class="td">${Table[i].Description}</div>
                    <div class="td">
                        <i class="fas fa-check icon one" onclick="Check(${i})"></i>
                        <i class="fas fa-remove icon two" onclick="Delete(${i})"></i>
                        <i class="fas fa-pen icon three" onclick="Update(${i})"></i>
                    </div>
                    <div id="check"></div>
                </div>`;
        }
        else
        {
            cartoona+=`<div class="tr">
            <div class="td">${Table[i].Name}</div>
            <div class="td">${Table[i].Category}</div>
            <div class="td">${Table[i].Price}</div>
            <div class="td">${Table[i].Description}</div>
            <div class="td">
                <i class="fas fa-check icon one" onclick="Check(${i})"></i>
                <i class="fas fa-remove icon two" onclick="Delete(${i})"></i>
                <i class="fas fa-pen icon three" onclick="Update(${i})"></i>
            </div>
            <div id="check" style="visibility: visible;"></div>
            </div>`;
        }
    }
    document.getElementById("tb").innerHTML=cartoona;
}