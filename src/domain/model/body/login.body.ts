import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginBody {
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty()
  email!: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  password!: string
}
