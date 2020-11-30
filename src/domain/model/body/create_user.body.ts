import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'
import { IsDefined, IsEmail, IsString } from 'class-validator'

export class CreateUserBody {
  @IsDefined()
  @IsEmail()
  @ApiModelProperty()
  email!: string

  @IsDefined()
  @IsString()
  @ApiModelProperty()
  password!: string
}
