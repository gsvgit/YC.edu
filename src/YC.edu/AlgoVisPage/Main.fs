namespace AlgoVisPage

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.Sitelets


[<JavaScript>]
module Page =
    let Main () =
        let input = Input [Text ""]
        let label = Div [Text ""]
        Div [
            input
            label
            Button [Text "Btn"]
        ]

[<Sealed>]
type EntryPoint() =
    inherit Web.Control()

    [<JavaScript>]
    override __.Body =
        Page.Main() :> _
