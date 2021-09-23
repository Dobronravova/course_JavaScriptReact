import React from 'react';
import'./post-list.css';
import { ListGroup } from 'reactstrap';

import PostListItem from '../post-list-item';
const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item; //выводим id из основного массива, чтобы не использовать его в PostListItem
        return (
            <li key={id} className="list-group-item">
                {/* <PostListItem label={item.label} important={item.important}/> */}
                <PostListItem {...itemProps}/>
            </li>
        );
    });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;