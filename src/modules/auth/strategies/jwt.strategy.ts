import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { EStrategies } from "src/models/strategies";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, EStrategies.JWT) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: `${process.env.JWT_SECRET}`
		});
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}