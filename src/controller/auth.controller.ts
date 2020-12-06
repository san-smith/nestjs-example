import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard'
import { LocalAuthGuard } from 'src/domain/guard/local-auth.guard'
import { LoginBody } from 'src/domain/model/body/login.body'
import { AuthService } from 'src/domain/service/auth.service'

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() payload: LoginBody) {
    return this.authService.login(payload)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
