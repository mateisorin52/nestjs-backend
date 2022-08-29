import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Public } from 'src/common/decorators';
import { GetCurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { RtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signUpLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signUpLocal(dto);
  }
  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signInLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signInLocal(dto);
  }

  @Post('local/logout')
  @HttpCode(HttpStatus.OK)
  logOut(@GetCurrentUser('sub') userId: string) {
    return this.authService.logOut(userId);
  }
  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshToken(@GetCurrentUser() user: Request) {
    return this.authService.refreshToken(user['sub'], user['refreshToken']);
  }
}
