import { IsDefined, IsEmail, IsInt, Min, IsString } from 'class-validator'

export class User {
  @IsInt()
  @Min(1)
  @IsDefined()
  id!: number

  @IsDefined()
  @IsEmail()
  email!: string

  @IsDefined()
  @IsString()
  firstName!: string

  @IsDefined()
  @IsString()
  lastName!: string
}
