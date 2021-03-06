declare module IntelliFactory {
    module WebSharper {
        module Control {
            module EventModule {
                var Choose : {
                    <_M1, _M2, _M3>(c: {
                        (x: _M1): _WebSharper.OptionProxy<_M2>;
                    }, e: any): any;
                };
                var Filter : {
                    <_M1, _M2>(ok: {
                        (x: _M1): boolean;
                    }, e: any): any;
                };
                var Map : {
                    <_M1, _M2, _M3>(f: {
                        (x: _M1): _M2;
                    }, e: any): any;
                };
                var Merge : {
                    <_M1, _M2, _M3>(e1: any, e2: any): any;
                };
                var Pairwise : {
                    <_M1, _M2>(e: any): any;
                };
                var Partition : {
                    <_M1, _M2>(f: {
                        (x: _M1): boolean;
                    }, e: any): any;
                };
                var Scan : {
                    <_M1, _M2, _M3>(fold: {
                        (x: _M1): {
                            (x: _M2): _M1;
                        };
                    }, seed: _M1, e: any): any;
                };
                var Split : {
                    <_M1, _M2, _M3, _M4>(f: {
                        (x: _M1): _WebSharper.ChoiceProxy12<_M2, _M3>;
                    }, e: any): any;
                };
            }
            module ObservableModule {
                var Pairwise : {
                    <_M1>(e: _Control.IObservableProxy<_M1>): _Control.IObservableProxy<any>;
                };
                var Partition : {
                    <_M1>(f: {
                        (x: _M1): boolean;
                    }, e: _Control.IObservableProxy<_M1>): any;
                };
                var Scan : {
                    <_M1, _M2>(fold: {
                        (x: _M1): {
                            (x: _M2): _M1;
                        };
                    }, seed: _M1, e: _Control.IObservableProxy<_M2>): _Control.IObservableProxy<_M1>;
                };
                var Split : {
                    <_M1, _M2, _M3>(f: {
                        (x: _M1): _WebSharper.ChoiceProxy12<_M2, _M3>;
                    }, e: _Control.IObservableProxy<_M1>): any;
                };
            }
            interface IObserverProxy<_T1> {
                OnCompleted(): void;
                OnError(x0: _WebSharper.ExceptionProxy): void;
                OnNext(x0: _T1): void;
            }
            interface IObservableProxy<_T1> {
                Subscribe(x0: _Control.IObserverProxy<_T1>): _WebSharper.IDisposableProxy;
            }
            interface FSharpEvent<_T1> {
            }
        }
    }
    
    import _WebSharper = IntelliFactory.WebSharper;
    import _Control = IntelliFactory.WebSharper.Control;
}
