var Table=[];
if(localStorage.getItem("Products")!=null)
{
    Table=JSON.parse(localStorage.getItem("Products"));
}
function Add()
{
    var Pname=document.getElementById("name");
    var Pcate=document.getElementById("category");
    var Ppric=document.getElementById("price");
    var Pdesc=document.getElementById("description");
    var Product ={
        Name: Pname.value,
        Category: Pcate.value,
        Price: Ppric.value,
        Description: Pdesc.value,
        Checked:false,
    };
    Table.push(Product);
    localStorage.setItem("Products",JSON.stringify(Table));
}
window.onload=function()
{
    if(localStorage.getItem("Uindex")!=null)
    {
        var newIndex=JSON.parse(localStorage.getItem("Uindex"));
        var index=newIndex.curIndex;
        var cur=Table[index];
        var Pname=document.getElementById("name");
        var Pcate=document.getElementById("category");
        var Ppric=document.getElementById("price");
        var Pdesc=document.getElementById("description");
        Pname.value=cur.Name;
        Pcate.value=cur.Category;
        Ppric.value= cur.Price;
        Pdesc.value=cur.Description;
        var btn=document.getElementById("btn1");
        btn.innerText="Save Product";
        btn.onclick=function(){
            Table[index]={
                Name: Pname.value,
                Category: Pcate.value,
                Price: Ppric.value,
                Description: Pdesc.value,
            }
            localStorage.setItem("Products",JSON.stringify(Table));
            Pname.value="";
            Pcate.value="";
            Ppric.value= "";
            Pdesc.value= "";
            btn.innerText="Add Product";
            btn.onclick=Add;
            localStorage.removeItem("Uindex");
        }
    }
}
function Validate()
{
    var input=document.getElementById("name").value;
    var pattern=/^[A-Z][a-z]{2,8}$/
    if(pattern.test(input)==false)
    {
        document.getElementById("error").style.visibility="visible";
    }
    else 
    {
        document.getElementById("error").style.visibility="hidden";
        var btn=document.getElementById("btn1");
        btn1.onclick=Add;
    }
    console.log(pattern.test(input));

}
