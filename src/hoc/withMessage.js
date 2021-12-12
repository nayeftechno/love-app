export default function withMessage(WrappedComponent){
    function message(){
        return(<h1>Hello , World</h1>);
    };
    function WithMessage(props){
        return(<WrappedComponent {...props} message={message}/>);
    };
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithMessage.displayName = `WithMessage(${wrappedComponentName})`;
    return WithMessage;
};