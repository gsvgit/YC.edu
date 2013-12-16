declare module AlgoVisPage {
    module Page {
        var Main : {
            (): _Html.Element;
        };
    }
    interface EntryPoint {
        get_Body(): _Html.IPagelet;
    }
    
    import _Html = IntelliFactory.WebSharper.Html;
}
