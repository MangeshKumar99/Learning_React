import React, { Component } from 'react'
import axios from 'axios'
export class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({ posts: res.data })
        })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div>
                {
                    this.state.posts.map((post) =>
                        <h4 key={post.id}>
                            {post.title}
                        </h4>)

                }

            </div>
        )
    }
}

export default Post
