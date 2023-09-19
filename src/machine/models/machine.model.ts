import { Column, DataType, Table, Model } from "sequelize-typescript";


interface IMachine{
    model: string;
    name: string;
    companyid: number;
}
@Table({tableName: 'machine'})
export class Machine extends Model <Machine, IMachine>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    model: string

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.INTEGER
    })
    companyid: number
}