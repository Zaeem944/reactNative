import { ChatServices } from 'api/ChatServices'
import { conversationsActions } from './conversationsReducer'
import { TUser } from 'models/user'
import { useAppDispatch } from 'stores/hook'

let conversationAddedSubscriber: (() => void) | null = null

/**
 * Call this function to unsubscribe all subscriber when user logout
 */
export const unsubscribe = () => {
  conversationAddedSubscriber && conversationAddedSubscriber()
}

/**
 * Call this function as soon as possible after user logged in successfully
 * @param user firebase user information
 */
export const listenForConversationAdded = (user: TUser | null | undefined) => {
  if (!user) {
    return
  }
  conversationAddedSubscriber && conversationAddedSubscriber()

  conversationAddedSubscriber = ChatServices.listenForConversationAdd(
    user,
    (conversations) => {
      console.tron.log(conversations)
      // Insert conversations into store
      const dispatch = useAppDispatch()
      dispatch(conversationsActions.conversationsReceived(conversations))
    }
  )
}