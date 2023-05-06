const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('usermoneda', {
    id: {
      type: DataTypes.UUID, //es un numero random con numeros y letras que no se va a repetir. Porq cuando mando los datos de la api asi no se van a pisar los id
      defaultValue: DataTypes.UUIDV4, //
      allowNull: false, //allownull dice que no te permito que no este en vacio. si le pongo false le digo que no este vacio.
      primaryKey: true //es la clave primaria osea el id.
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: esto me sirve para un mail por ejemplo. suponiendo que registro mi mail luque11@gmail.com si viene otro a querer regristrarse con el mismo mail no lo deja
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saldo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecdata: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pagopending: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdindb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, 
    }
  });
};
