import { WhiteSpace } from "antd-mobile";
import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

import Activity from "components/Profile/Activity";
import CreatePost from "components/CreatePost/CreatePost";
import ErrorAlert from "../components/Alert/ErrorAlert";
import FeedWrapper from "components/Feed/FeedWrapper";
import ProfilePic from "components/Picture/ProfilePic";
import {
  ProfileLayout,
  BackgroundHeader,
  MenuIcon,
  UserInfoContainer,
  EditIcon,
  UserInfoDesktop,
  NameDiv,
  PlaceholderIcon,
  EditEmptyIcon,
  DescriptionDesktop,
  LocationDesktopDiv,
  LocationMobileDiv,
  IconsContainer,
  HelpContainer,
  LocationIcon,
  SocialIcon,
  DescriptionMobile,
  SectionHeader,
  CreatePostDiv,
  CreatePostIcon,
  DrawerHeader,
  CustomDrawer,
} from "../components/Profile/ProfileComponents";
import {
  FACEBOOK_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  GITHUB_URL,
} from "constants/urls";
import {
  postsReducer,
  postsState as initialPostsState,
} from "hooks/reducers/feedReducers";
import { ERROR_POSTS, FETCH_POSTS, SET_POSTS } from "hooks/actions/feedActions";
import {
  fetchUser,
  fetchUserError,
  fetchUserSuccess,
} from "hooks/actions/userActions";
import { UserContext, withUserContext } from "context/UserContext";
import { getInitials } from "utils/userInfo";

// ICONS
import createPost from "assets/icons/create-post.svg";
import menu from "assets/icons/menu.svg";
import edit from "assets/icons/edit.svg";
import editEmpty from "assets/icons/edit-empty.svg";
import facebookIcon from "assets/icons/social-facebook.svg";
import githubIcon from "assets/icons/social-github.svg";
import linkedinBlue from "assets/icons/social-linkedin-blue.svg";
import twitterBlue from "assets/icons/social-twitter-blue.svg";
import locationIcon from "assets/icons/location.svg";
import smileIcon from "assets/icons/smile-icon.svg";

const URLS = {
  github: [githubIcon, GITHUB_URL],
  facebook: [facebookIcon, FACEBOOK_URL],
  linkedin: [linkedinBlue, LINKEDIN_URL],
  twitter: [twitterBlue, TWITTER_URL],
  website: [smileIcon],
};

const getHref = (url) => (url.startsWith("http") ? url : `//${url}`);

const Profile = ({
  match: {
    params: { id: pathUserId },
  },
}) => {
  const { userProfileState, userProfileDispatch } = useContext(UserContext);
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState,
  );
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const { error, loading, user } = userProfileState;
  const {
    id: userId,
    about,
    firstName = "",
    lastName = "",
    location = {},
    needs = {},
    objectives = {},
    ownUser,
    urls = {},
  } = user || {};
  const needHelp = Object.values(needs).some((val) => val === true);
  const offerHelp = Object.values(objectives).some((val) => val === true);
  const { address } = location;

  useEffect(() => {
    (async function fetchProfile() {
      userProfileDispatch(fetchUser());
      try {
        const res = await axios.get(`/api/users/${pathUserId}`);
        userProfileDispatch(fetchUserSuccess(res.data));
      } catch (err) {
        const message = err.response?.data?.message || err.message;
        userProfileDispatch(
          fetchUserError(`Failed loading profile, reason: ${message}`),
        );
      }
    })();
  }, [pathUserId, userProfileDispatch]);
  useEffect(() => {
    (async function fetchPosts() {
      postsDispatch({ type: FETCH_POSTS });
      try {
        if (userId) {
          const res = await axios.get(`/api/posts?limit=-1&authorId=${userId}`);
          postsDispatch({
            type: SET_POSTS,
            posts: res.data,
          });
        }
      } catch (err) {
        const message = err.response?.data?.message || err.message;
        postsDispatch({
          type: ERROR_POSTS,
          error: `Failed loading activity, reason: ${message}`,
        });
      }
    })();
  }, [userId]);

  if (error) {
    return <ErrorAlert message={error} type="error" />;
  }
  if (loading) return <div>"loading"</div>;
  return (
    <ProfileLayout>
      <BackgroundHeader>
        <MenuIcon src={menu} />
      </BackgroundHeader>
      <UserInfoContainer>
        {ownUser && <EditIcon src={edit} onClick={() => setDrawer(true)} />}
        <ProfilePic noPic={true} initials={getInitials(firstName, lastName)} />
        <UserInfoDesktop>
          <NameDiv>
            {firstName} {lastName}
            <PlaceholderIcon />
            {ownUser && (
              <EditEmptyIcon src={editEmpty} onClick={() => setDrawer(true)} />
            )}
          </NameDiv>
          <DescriptionDesktop> {about} </DescriptionDesktop>
          {address ? (
            <LocationMobileDiv>{address}</LocationMobileDiv>
          ) : (
            <WhiteSpace />
          )}
          <IconsContainer>
            <HelpContainer>
              {needHelp && "I need help "}
              {offerHelp && "I want to help"}
            </HelpContainer>
            <LocationDesktopDiv>
              {address && <LocationIcon src={locationIcon} />}
              {needHelp && "I need help "}
              {offerHelp && "I want to help "} {address && `• ${address}`}
            </LocationDesktopDiv>
            <PlaceholderIcon />
            {Object.entries(urls).map(([name, url]) => {
              return (
                url && (
                  <a
                    href={
                      name === "website"
                        ? getHref(url)
                        : `${URLS[name][1]}${url}`
                    }
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon src={URLS[name][0]} />
                  </a>
                )
              );
            })}
          </IconsContainer>
        </UserInfoDesktop>
      </UserInfoContainer>
      <WhiteSpace />
      <div style={{ margin: "0 2.5rem" }}>
        <WhiteSpace />
        <DescriptionMobile>
          <SectionHeader> About</SectionHeader>
          {about}
        </DescriptionMobile>
        <WhiteSpace />
        <SectionHeader>
          {ownUser ? "My Activity" : "User Activity"}
          <PlaceholderIcon />
          {ownUser && (
            <>
              <CreatePostDiv>Create a post</CreatePostDiv>
              <CreatePostIcon
                src={createPost}
                onClick={() => setModal(!modal)}
              />
            </>
          )}
        </SectionHeader>
        <FeedWrapper>
          <Activity filteredPosts={postsState.posts} />
          {ownUser && (
            <CreatePost
              onCancel={() => setModal(false)}
              visible={modal}
              user={user}
            />
          )}
        </FeedWrapper>
      </div>
      {ownUser && (
        <CustomDrawer
          placement="bottom"
          closable={false}
          onClose={() => setDrawer(false)}
          visible={drawer}
          height="150px"
          key="bottom"
        >
          <DrawerHeader>
            <Link to="/edit-account">Edit Account Information</Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link to="/edit-profile">Edit Profile </Link>
          </DrawerHeader>
        </CustomDrawer>
      )}
      <WhiteSpace />
    </ProfileLayout>
  );
};

export default withUserContext(Profile);
