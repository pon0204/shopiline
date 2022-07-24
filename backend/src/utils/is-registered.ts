type HasId = { readonly id: number };

function isRegistered<T>(entity: (HasId & T) | T): entity is HasId & T {
  return 'id' in entity;
}
