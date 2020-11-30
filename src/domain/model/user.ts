import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'
import { IsDefined, IsEmail, IsInt, Min, IsString } from 'class-validator'

export class User {
  @IsInt()
  @Min(1)
  @IsDefined()
  @ApiModelProperty({ type: 'integer' })
  id!: number

  @IsDefined()
  @IsEmail()
  @ApiModelProperty()
  email!: string

  @IsDefined()
  @IsString()
  @ApiModelProperty()
  firstName!: string

  @IsDefined()
  @IsString()
  @ApiModelProperty()
  lastName!: string
}
