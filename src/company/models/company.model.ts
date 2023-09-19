import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICompany {
    name: string,
    address: string,
    phone: string
}
@Table({tableName: "company"})
export class Company extends Model <Company, ICompany> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.STRING(50),
        unique: true,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING(120)
    })
    address: string

    @Column({
        type: DataType.STRING,
        unique: true
    })
    phone: string
}
