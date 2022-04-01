export type PermissionRole = "admin" | "user"

export interface User {
  email: string,
  token: string
  userId: string,
  expirationDate: Date,
  userPermission: PermissionRole
}

