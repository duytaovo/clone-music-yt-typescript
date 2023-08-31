import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShareScreenButton } from 'src/components/ShareScreeenButton'
import { ChatButton } from 'src/components/ChatButton'
import { VideoPlayer } from 'src/components/VideoPlayer'
import { PeerState } from 'src/reducers/peerReducer'
import { RoomContext } from 'src/contexts/RoomContext'
import { Chat } from 'src/components/chat/Chat'
import { UserContext } from 'src/contexts/UserContext'
import { ChatContext } from 'src/contexts/ChatContext'
import { ws } from 'src/ws'
import { NameInput } from 'src/common/Name'

export const Room = () => {
  const { id } = useParams()
  const { stream, screenStream, peers, shareScreen, screenSharingId, setRoomId } = useContext(RoomContext)
  const { userName, userId } = useContext(UserContext)
  const { toggleChat, chat } = useContext(ChatContext)

  useEffect(() => {
    if (stream) ws.emit('join-room', { roomId: id, peerId: userId, userName })
  }, [id, userId, stream, userName])

  useEffect(() => {
    setRoomId(id || '')
  }, [id, setRoomId])

  const screenSharingVideo = screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream

  const { [screenSharingId]: sharing, ...peersToShow } = peers
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='bg-red-500 p-4 text-white'>Room id {id}</div>
      <div className='flex grow'>
        {screenSharingVideo && (
          <div className='w-4/5 pr-4'>
            <VideoPlayer stream={screenSharingVideo} />
          </div>
        )}
        <div className={`grid gap-4 ${screenSharingVideo ? 'grid-col-1 w-1/5' : 'grid-cols-4'}`}>
          {screenSharingId !== userId && (
            <div>
              <VideoPlayer stream={stream} />
              <NameInput />
            </div>
          )}

          {Object.values(peersToShow as PeerState)
            .filter((peer) => !!peer.stream)
            .map((peer) => (
              <div key={peer.peerId}>
                <VideoPlayer stream={peer.stream} />
                <div>{peer.userName}</div>
              </div>
            ))}
        </div>
        {chat.isChatOpen && (
          <div className='border-l-2 pb-28'>
            <Chat />
          </div>
        )}
      </div>
      <div className='fixed bottom-0 flex h-28 w-full items-center justify-center border-t-2 bg-white p-6'>
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton onClick={toggleChat} />
      </div>
    </div>
  )
}
