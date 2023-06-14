import mysql from "mysql";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "efrei_vinted",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
    throw error;
  }
  console.log("Connecté à la base de données MySQL.");
});

export default connection;