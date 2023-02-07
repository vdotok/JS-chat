export interface MessageModel {
    id: string,
    to: string,
    key: string,
    from: string,
    type: string,
    content: string,
    size: number,
    isGroupMessage: boolean,
    status: number,
    date: number,
}

export interface receiptModel {
    receiptType: number,
    key: string,
    messageId: string,
    date: number,
    from: string,
    to: string,
}

export interface fileModel {
    id: string,
    from: string,
    topic: string,
    key: string,
    type: string,
    date: number
}

export interface onlineOfflineModel {
    channel: string,
    event: string,
    time: number,
    who: any
}

export interface typingModel {
    content: string
    date: number
    from: string,
    id: string,
    isGroupMessage: false
    key: string,
    size: 0
    status: 0
    to: string,
    type: "typing"
}

