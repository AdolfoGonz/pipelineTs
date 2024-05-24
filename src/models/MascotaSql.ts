import { Model, Sequelize } from "sequelize";

interface MascotaAttributes {
  id: number;
  nombre: string;
  edad: string;
  tipo: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Mascota extends Model<MascotaAttributes> implements MascotaAttributes {
    public id!: number;
    public nombre!: string;
    public edad!: string;
    public tipo!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Mascota.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Mascota",
    }
  );
  return Mascota;
};
