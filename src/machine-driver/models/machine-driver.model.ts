import { Column, DataType, Table, Model } from "sequelize-typescript";


interface IMachineDriver{
    machineid: number;
    driverid: number
}
@Table({tableName: 'machine-driver'})
export class MachineDriver extends Model<MachineDriver, IMachineDriver>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column({
        type: DataType.INTEGER
    })
    machineid: number
    
    @Column({
        type: DataType.INTEGER
    })
    driverid: number
}