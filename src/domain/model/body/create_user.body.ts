import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserBody {
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  @ApiModelProperty()
  email!: string

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  password!: string
}
