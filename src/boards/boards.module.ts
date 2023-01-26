import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BoardRepository } from './boards.repository';
import { TypeOrmExModule } from './../db/typeorm-ex.module';


@Module({
    imports: [
        TypeOrmExModule.forCustomRepository([BoardRepository]),
       // TypeOrmModule.forFeature(BoardRepository)
    ],
    controllers: [BoardsController],
    providers: [BoardsService]
})
export class BoardsModule {

}
