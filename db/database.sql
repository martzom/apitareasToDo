create database if not exists devslatam;

CREATE TABLE `tarea` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `asunto` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NOT NULL,
  `fechaInicio` VARCHAR(45) NOT NULL,
  `fechaFinal` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NOT NULL);