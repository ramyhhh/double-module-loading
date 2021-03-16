import { DynamicModule, Module } from '@nestjs/common';
import { AuthService, DataService } from './services';

@Module({
  imports: [],
  providers: [DataService],
})
export class DataModule {
  static register(data_config: any): DynamicModule {
    return {
      module: DataModule
    }
  }
}

@Module({
  imports: [DataService],
  providers: [AuthService],
})
export class AuthModule {
  static register(auth_config: any): DynamicModule {
    return {
      module: AuthModule
    }
  }
}

@Module({
  imports: [DataModule.register({}), AuthModule.register({})],
  providers: [],
})
export class AppModule { }