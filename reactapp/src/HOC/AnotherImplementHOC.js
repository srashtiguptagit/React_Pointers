

const WithClass = (WrappedComponent, className) => {
    
    return props => {
        <WrappedComponent />
    }
    // => By this appraoch we are passing a function within function whicjh returns JSX functional component.
    
}