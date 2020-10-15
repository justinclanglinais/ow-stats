import React from 'react'

export default function LoaderHOC(WrappedComponent) {
    return (
        class Loader extends React.Component {
            return <WrappedComponent />
        }
    ) 
}