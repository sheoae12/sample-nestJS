import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardRepository } from './boards.repository';
import { TypeOrmExModule } from './../db/typeorm-ex.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports: [
        TypeOrmExModule.forCustomRepository([BoardRepository]),
       // TypeOrmModule.forFeature(BoardRepository)
       AuthModule,
    ],
    controllers: [BoardsController],
    providers: [BoardsService]
})
export class BoardsModule {

}
