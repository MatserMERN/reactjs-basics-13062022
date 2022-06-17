import React, { Component } from 'react'

class CommentsAPI extends Component {
    constructor() {
        super()

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => this.setState({ comments: data }))
    }
    render() {
        return (
            <>
                <h1>Comments API Data</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.comments.map(comment => (
                                <tr key={comment.id}>
                                    <td>{comment.id}</td>
                                    <td>{comment.name}</td>
                                    <td>
                                        <a href={`mailto: ${comment.email}?subject=${comment.name}&body=${comment.body}`}
                                        >{comment.email}</a>
                                    </td>
                                    <td>{comment.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default CommentsAPI