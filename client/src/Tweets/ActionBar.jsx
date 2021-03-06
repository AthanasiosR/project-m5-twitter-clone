import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import { useFeed } from "../homeFeed/HomeFeedProvider";

const ActionBar = ({ tweetId, isLiked, isRetweeted, numLikes }) => {
  const { handleToggleLike, handleToggleRetweet } = useFeed();

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action onClick={handleToggleRetweet} color="rgb(23, 191, 99)" size={40}>
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>
      <Action
        onClick={() => {
          handleToggleLike(tweetId);
        }}
        color="rgb(224, 36, 94)"
        size={40}
      >
        <LikeButton isLiked={isLiked} />
        {numLikes > 0 ? numLikes : null}
      </Action>

      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;