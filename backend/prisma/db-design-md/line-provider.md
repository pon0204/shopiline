### LINE アカウント関連

```mermaid
erDiagram

client{
  id number
}

lineProvider{
  id number PK
  clientId number FK
  name string
  description string
}

lineChannel{
  id number PK
  lineProviderId number FK
  name string
  description string
  channelId string
  channelSecret string
  accessToken string
  channelExpire Date
}

liffChannel{
  id number PK
  lineProvider number FK
  name string
  description string
  channelId string "unique"
  channelSecret string "unique"
}

liffApp{
  id number PK
  liffId string PK
  liffChannelId number FK
  name string
  liffUrl string "論理フィールド"
  endpointUrl string
  size enum "full・tall・compactのいずれか"
}

lineChannel_lineUser{
  lineChannelId number PK "FKも含む"
  lineUserId number PK　"FKも含む"
}

lineUser{
  lineProviderId number
}

client ||--|{ lineProvider :has
lineProvider ||--o{ lineChannel :has

lineProvider ||--o{ liffChannel : has
lineProvider ||--o{ lineUser : has
lineChannel ||--o{ lineChannel_lineUser :has
lineUser ||--o{ lineChannel_lineUser :has
liffChannel ||--o{ liffApp :has


```

### 思考メモ

[問題]

- そのユーザーが参加しているイベントを lineProvider 関係なく、横断的に見たい要件が考えられる。
  - user(サービスに対して、一意なユーザー) 1 : 多 lineUser(lineProviderId に紐づくユーザー情報)
  - 最初から紐付けるのは自動で無理っぽい。
    - メールアドレスとパスワードでの管理が必要になってくる
    - LIFF アプリの強みがなくなる
  - 一意な ID 発行して、サービス用の LINE アカウントで登録すると見れるよ。みたいなのがいいのかも
    - stripe の CustomerId どうするか問題はある。

[結論]

- サービスが複雑になるのを防ぐためやらない。Google カレンダーなどに連携するなど別の要件で対応する。
