import ChatStore from './chatStore'

class StoreRoot {
    chatStore = new ChatStore()
}

const storeRoot = new StoreRoot()

export default storeRoot
