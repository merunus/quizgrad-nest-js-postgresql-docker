// users/dto/create-user.dto.ts
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
	@IsEmail()
	email: string;

	@IsString()
	@MinLength(4)
	username: string;

	@IsString()
	@MinLength(6)
	password: string;
}
