module.exports = (sequelize, DataType) => {

    const YearValid = sequelize.define('YearValid', {  
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
      },
      id_year: DataType.INTEGER,
      age: DataType.STRING(45),
    }, {
      timestamps: false,
      tableName: 'year'
    });

    return YearValid
  }
  