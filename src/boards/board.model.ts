export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}

export enum BoardStatus {
    PULBIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}