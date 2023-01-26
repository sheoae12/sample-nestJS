import { BoardStatus } from './board-status.enum';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;
}