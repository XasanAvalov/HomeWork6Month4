import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IDriver{
    firts_name: string;
    last_name: string;
    phone: string;
    driver_licanse: string;
}
@Table({tableName: 'driver'})
export class Driver extends Model<Driver, IDriver>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    first_name: string

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    last_name: string

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    driver_licanse: string
}