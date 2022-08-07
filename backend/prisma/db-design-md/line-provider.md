### LINE アカウント関連

```mermaid
erDiagram

client

lineProvider{
  id number
  name string
  clientId number FK
}

lineChannel{
  name string
  lineProviderId number
  channelId string
  channelSecret string
}

liffChannel{
  id number PK
  name string
  channelId string
  channelSecret string
}

liffApp{
  id number PK
  name string
  liffUrl string
  endpointUrl string
}

lineChannel_lineUser{
  lineChannelId number PK "FKも含む"
  lineUserId number PK　"FKも含む"
}

lineUser

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
  - 最初から紐付けるのは自動で無理っぽいな。
  - メールアドレスとパスワードでの管理が必要になってくる
  - line アカウントの強みがない。
  - 一意な ID 発行して、サービス用の LINE アカウントで登録すると見れるよ。みたいなのがいいのかも
  - stripe の CustomerId どうするか問題はある。

[結論]

- サービスが複雑になるのを防ぐ。Google カレンダーなどに連携するなど別の要件で対応する。
