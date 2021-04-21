import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}


@Entity()
export class Info {

    @PrimaryGeneratedColumn()
    index: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    stadium: string;

    @Column()
    home: string;

    @Column()
    away: string;

}

@Entity()
export class Result {

    @PrimaryGeneratedColumn()
    index: number;

    @Column()
    date: string;

    @Column()
    stadium: string;

    @Column()
    No: Number;

    @Column()
    home: string;

    @Column()
    points: string;

    @Column()
    away: string;

    @Column()
    result: Number;
}
