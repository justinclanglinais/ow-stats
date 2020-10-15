import React from 'react'

export default function PrivacyHOC(WrappedComponent) {
    return (
        class Privacy extends React.Component {
            return <WrappedComponent />
        }
    ) 
}