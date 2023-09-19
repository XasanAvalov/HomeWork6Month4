import { Table, Model, Column, DataType } from "sequelize-typescript";


interface IBuilder {
    fullname: string;
    birth_day: string;
    salary: string;
    companyid: number;
}
@Table({tableName: 'builder'})
export class Builder extends Model <Builder, IBuilder>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    fullname: string

    @Column({
        type: DataType.STRING
    })
    birth_day: string

    @Column({
        type: DataType.STRING
    })
    salary: string

    @Column({
        type: DataType.INTEGER
    })
    companyid: number
}