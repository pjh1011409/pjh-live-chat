import ChannelList from '@components/ChannelList';
import CreateChannelModal from '@components/CreateChannelModal';
import DMList from '@components/DMList';
import InviteWorkspaceModal from '@components/InviteWorkspaceModal';
import Menu from '@components/Menu';
import CreateWorkSpaceModal from '@components/CreateWorkSpaceModal';
import Channel from '@pages/Channel';
import DirectMessage from '@pages/DirectMessage';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import gravatar from 'gravatar';
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';

import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './styles';
import useSocket from '@hooks/useSocket';

const Workspace = () => {
  const params = useParams<{ workspace?: string }>();
  const { workspace } = params;
  const [socket, disconnectSocket] = useSocket(workspace);

  const { data: userData, mutate: revalidateUser } = useSWR<IUser | false>(
    '/api/users',
    fetcher
  );
  const { data: channelData } = useSWR<IChannel[]>(
    userData ? `/api/workspaces/${workspace}/channels` : null,
    fetcher
  );
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] =
    useState(false);
  const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] =
    useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);

  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout')
      .then(() => {
        revalidateUser();
      })
      .catch(error => {
        console.dir(error);
        toast.error(error.response?.data, { position: 'bottom-center' });
      });
  }, []);

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  }, []);

  const onClickAddChannel = useCallback(() => {
    setShowCreateChannelModal(true);
  }, []);

  const onClickInviteWorkspace = useCallback(() => {
    setShowInviteWorkspaceModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
    setShowCreateChannelModal(false);
    setShowInviteWorkspaceModal(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu(prev => !prev);
  }, []);

  const toggleWorkspaceModal = useCallback(() => {
    setShowWorkspaceModal(prev => !prev);
  }, []);

  useEffect(() => {
    return () => {
      console.info('disconnect socket', workspace);
      disconnectSocket();
    };
  }, [disconnectSocket, workspace]);
  useEffect(() => {
    if (channelData && userData) {
      console.info('???????????????', socket);
      socket?.emit('login', {
        id: userData?.id,
        channels: channelData.map(v => v.id),
      });
    }
  }, [socket, userData, channelData]);

  if (userData === false) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div>
      <Header>
        {userData && (
          <RightMenu>
            <span onClick={onClickUserProfile}>
              <ProfileImg
                src={gravatar.url(userData.email, { s: '28px', d: 'retro' })}
                alt={userData.nickname}
              />
            </span>
            {showUserMenu && (
              <Menu
                style={{ right: 0, top: 38 }}
                show={showUserMenu}
                onCloseModal={onClickUserProfile}
              >
                <ProfileModal>
                  <img
                    src={gravatar.url(userData.email, {
                      s: '36px',
                      d: 'retro',
                    })}
                    alt={userData.nickname}
                  />
                  <div>
                    <span id="profile-name">{userData.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                </ProfileModal>
                <LogOutButton onClick={onLogOut}>????????????</LogOutButton>
              </Menu>
            )}
          </RightMenu>
        )}
      </Header>
      <WorkspaceWrapper>
        <Workspaces>
          {userData?.Workspaces.map(ws => {
            return (
              <Link key={ws.id} to={`/workspace/${ws.url}/channel/??????`}>
                <WorkspaceButton>
                  {ws.name.slice(0, 1).toUpperCase()}
                </WorkspaceButton>
              </Link>
            );
          })}
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName onClick={toggleWorkspaceModal}>
            {userData?.Workspaces.find(v => v.url === workspace)?.name}
          </WorkspaceName>
          <MenuScroll>
            <Menu
              show={showWorkspaceModal}
              onCloseModal={toggleWorkspaceModal}
              style={{ top: 95, left: 80 }}
            >
              <WorkspaceModal>
                <h2>
                  {userData?.Workspaces.find(v => v.url === workspace)?.name}
                </h2>
                <button onClick={onClickInviteWorkspace}>
                  ????????????????????? ????????? ??????
                </button>
                <button onClick={onClickAddChannel}>?????? ?????????</button>
                <button onClick={onLogOut}>????????????</button>
              </WorkspaceModal>
            </Menu>
            <ChannelList />
            <DMList />
          </MenuScroll>
        </Channels>
        <Chats>
          <Suspense fallback={<div>?????????</div>}>
            <Routes>
              <Route path="/channel/:channel" element={<Channel />} />
              <Route path="/dm/:id" element={<DirectMessage />} />
            </Routes>
          </Suspense>
        </Chats>
      </WorkspaceWrapper>

      <CreateWorkSpaceModal
        show={showCreateWorkspaceModal}
        onCloseModal={onCloseModal}
        setShowCreateWorkspaceModal={setShowCreateWorkspaceModal}
      />

      <CreateChannelModal
        show={showCreateChannelModal}
        onCloseModal={onCloseModal}
        setShowCreateChannelModal={setShowCreateChannelModal}
      />
      <InviteWorkspaceModal
        show={showInviteWorkspaceModal}
        onCloseModal={onCloseModal}
        setShowInviteWorkspaceModal={setShowInviteWorkspaceModal}
      />
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Workspace;
