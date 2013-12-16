(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,AlgoVisPage,Page,WebSharper,Html,Default,List;
 Runtime.Define(Global,{
  AlgoVisPage:{
   EntryPoint:Runtime.Class({
    get_Body:function()
    {
     return Page.Main();
    }
   }),
   Page:{
    Main:function()
    {
     var input,label;
     input=Default.Input(List.ofArray([Default.Text("")]));
     label=Default.Div(List.ofArray([Default.Text("")]));
     return Default.Div(List.ofArray([input,label,Default.Button(List.ofArray([Default.Text("Btn")]))]));
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  AlgoVisPage=Runtime.Safe(Global.AlgoVisPage);
  Page=Runtime.Safe(AlgoVisPage.Page);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  return List=Runtime.Safe(WebSharper.List);
 });
 Runtime.OnLoad(function()
 {
 });
}());
