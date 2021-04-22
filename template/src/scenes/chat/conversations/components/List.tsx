import { TConversation } from 'models/conversation'
import React from 'react'
import { ConversationItem } from './Item'
import { FlatList } from 'react-native'

type ConversationListProps = {
  conversations: TConversation[]
  currentUserId: string
  onPressConversation: (conversation: TConversation) => void
}

export function ConversationList(props: ConversationListProps) {
  const { conversations, currentUserId, onPressConversation } = props

  const _renderItem = ({ item: data }: { item: TConversation }) => (
    <ConversationItem
      data={data}
      currentUserId={currentUserId}
      onPressConversation={onPressConversation}
    />
  )

  return <FlatList data={conversations} renderItem={_renderItem} />
}