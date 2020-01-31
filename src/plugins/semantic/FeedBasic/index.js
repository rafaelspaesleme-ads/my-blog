import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css'

export default function FeedBasic(props) {
  return (
    <Feed className="item-feed">
      <Feed.Event className="item-feed-event">
      <Feed.Label image={props.avatarFeed} className="item-feed-label" />
      <Feed.Content className="item-feed-content">
        <Feed.Summary className="item-feed-summary">
          <Link to={props.linkFollowerFeed} className="item-link" >{props.nameFollowerFeed}</Link> postou uma questão no forúm.
          <Feed.Date className="item-feed-date" >{props.datePostForumFeed}</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text className="item-feed-extra" >
          {props.descriptionPostForumFeed}.
        </Feed.Extra>
        <Feed.Meta className="item-meta" >
          <Feed.Like>
            <Link to={props.linkCurrentForum}>
              <Icon name='comments' color="grey" className="item-icon" />{props.comentsForumFeed} comentarios até o momento.
            </Link>
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <hr className="line-feed" />
    </Feed>
  );
}
