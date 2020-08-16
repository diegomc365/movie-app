import React from 'react'

// functional component - arrow function
// when to use: 
// 1. for a smaller components
// 2. reusable-components
// 3. presentional components, partialy rith, w can use HOOKS and specify state

// const About = () => {
//     const message = "Hello World"
//     return (
//         <h1>Hello About Page - {message}</h1>
//     )
// }

// const About = () => {
//     const message = "Hello World"
//     return React.createElement('h1', null, 'I am generating this with createElement')
// }

// functional component - normal function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }

class About extends React.Component {
    
    render() {
        return (
            <h1>Hello I am class component</h1>
        )
    }

}

export default About;