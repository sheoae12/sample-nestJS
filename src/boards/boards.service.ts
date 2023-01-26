import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { create } from 'domain';
import { BoardRepository } from './boards.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor (
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ) {}

    getAllBoards(): Promise<Board[]> {
        return this.boardRepository.find();
    }
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }


    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        return await this.boardRepository.createBoard(createBoardDto);
    }
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const {title, description} = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PULBIC
    //     }

    //     this.boards.push(board);
    //     return board;
    // }
    
    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne({where: {id:id}});

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }
    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }
    //     return found;
    // }

    async deleteBoard(id: number): Promise<void> {
        //remove()와 달리 delete()는 아이템이 반드시 존재하지 않더라도 영향 없음

        await this.boardRepository.delete(id);
    }
    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
        
    //     this.boards = this.boards.filter((board) => board.id === id);
    // }

    async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
        const board = await this.getBoardById(id);

        board.status = status;
        await this.boardRepository.save(board);

        return board;
    }
    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
