INSERT INTO gimnasio (nombre,telefono,direccion) VALUES ('La maquina','3364000000','Italia 200');

INSERT INTO promocion (nombre,descripcion,descuento,fecha_ini,fecha_fin) VALUES ('Navidenia','Descuento del 10% en cualquier plan. Acumulable con otras promociones.',10,'2024-12-01','2024-12-31');
INSERT INTO promocion (nombre,descripcion,descuento,fecha_ini,fecha_fin) VALUES ('Universitario','Descuento del 20% en cualquier plan. No acumulable con otras promociones.',20,'2024-01-01','2024-12-31');
INSERT INTO promocion (nombre,descripcion,descuento,fecha_ini,fecha_fin) VALUES ('Deportista','Descuento del 10% los tres primeros meses en plan semestral y anual. No acumulable con otras promociones.',10,'2024-01-01','2024-12-31');

INSERT INTO plan (nombre,precio,descripcion) VALUES ('Mensual',9000,'Incluye control nutricional.Acceso 1 mes');
INSERT INTO plan (nombre,precio,descripcion) VALUES ('Trimestral',25000,'Incluye control nutricional.Acceso 3 meses');
INSERT INTO plan (nombre,precio,descripcion) VALUES ('Semestral',50000,'Incluye control nutricional.Acceso 6 meses');
INSERT INTO plan (nombre,precio,descripcion) VALUES ('Anual',80000,'Incluye control nutricional. Acceso todo el año');

INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (44867138,'Mateo','Nerli','Cernadas 363','336400000','mateo@gmail.com','2003-06-03','M',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (21888111,'Agustin','Natali','Las provincuas 1191','3364111110','agustin@gmail.com','2003-03-04','M',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (25123478,'Martin','Palermo','Maipi 300','336409874','martinv@gmail.com','1980-10-21','M',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (25785865,'Pablo','Perez','Mitre 1234','33647898','pablo@gmail.com','1970-10-21','M',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (30201014,'Maria','Perez','Nacion 178','3364789789','maria@gmail.com','2000-10-10','F',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (22147856,'Cecilia','Rodriguez','Maipu 178','3364229789','cecilia@gmail.com','1999-8-07','F',1);
INSERT INTO persona (dni,nombre,apellido,direccion,telefono,correo,fecha_nacimiento,sexo,gimnasio_codigo) VALUES (27777856,'Mariana','Fernandez','Don bosco 178','3364578654','Mariana@gmail.com','1997-8-07','F',1);

INSERT INTO cliente (dni,fecha_ini,fecha_fin,ocupacion,telefono_emergencia,codigo_plan,codigo_promocion) VALUES (44867138,'2023-10-01','2024-03-16','Universitario','3364510518',1,2);
INSERT INTO cliente (dni,fecha_ini,fecha_fin,ocupacion,telefono_emergencia,codigo_plan,codigo_promocion) VALUES (21888111,'2024-03-20','2018-07-01','Universitario','3364517878',1,2);
INSERT INTO cliente (dni,fecha_ini,fecha_fin,ocupacion,telefono_emergencia,codigo_plan,codigo_promocion) VALUES (25123478,'2022-05-01','2018-07-01','Deportista','3364147852',1,3);

INSERT INTO areas (nombre,descripcion,codigo_gimnasio) VALUES ('Recepcion','recepcionista',1);
INSERT INTO areas (nombre,descripcion,codigo_gimnasio) VALUES ('Musculacion','Area de musculatura',1);
INSERT INTO areas (nombre,descripcion,codigo_gimnasio) VALUES ('Spinning','Area spinning',1);
INSERT INTO areas (nombre,descripcion,codigo_gimnasio) VALUES ('nutricionista','Area de chequeo nutricional',1);

INSERT INTO empleado (dni,sueldo) VALUES (25785865,200000);
INSERT INTO empleado (dni,sueldo) VALUES (30201014,150000);
INSERT INTO empleado (dni,sueldo) VALUES (22147856,250000);
INSERT INTO empleado (dni,sueldo) VALUES (27777856,150000);

INSERT INTO recepcionista (dni) VALUE (30201014);
INSERT INTO entrenador (dni) VALUE  (25785865);
INSERT INTO nutricionista (dni) VALUES (22147856);
INSERT INTO enc_limpieza (dni) VALUE (27777856);

INSERT INTO fichaMedica (fecha,peso,talla,med_cintura,med_cadera,porc_grasa_corporal,objetivo,dni_cliente) VALUES ('2024-02-02',80,185,75,80,40,'Aumentar masa muscular',44867138);
INSERT INTO fichaMedica (fecha,peso,talla,med_cintura,med_cadera,porc_grasa_corporal,objetivo,dni_cliente) VALUES ('2024-04-02',100,160,90,70,50,'Disminuir grasa',21888111);
INSERT INTO fichaMedica (fecha,peso,talla,med_cintura,med_cadera,porc_grasa_corporal,objetivo,dni_cliente) VALUES ('2023-04-02',60,180,80,60,20,'Auementar masa mosculat y flexibilidad',25123478);

INSERT INTO operaciones_ficha (codigo_ficha,operacion) VALUES (1,'Opercion brazo');
INSERT INTO operaciones_ficha (codigo_ficha,operacion) VALUES (2,'Opercion ligamentos ');
INSERT INTO operaciones_ficha (codigo_ficha,operacion) VALUES (3,'Ninguna opercion');

INSERT INTO enfermedades_ficha (codigo_ficha,enfermedad) VALUES (1,'Ninguna enfermedad');
INSERT INTO enfermedades_ficha (codigo_ficha,enfermedad) VALUES (2,'Enfermedad respiratoria');
INSERT INTO enfermedades_ficha (codigo_ficha,enfermedad) VALUES (3,'Ninguna enfermedad');

INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Maquina caminadora','maquina caminadora marca fox 2020',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Maquina smith','Maquina smith 2022',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Mancuernas 5kg','Mancuernas de 5kg de hierro',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Pesas 1kg','Pesas de hierro',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('pesas 2kg','Pesas de hierro',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Pesas 5kg','Pesas de hierro',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Pesas 10kg','Pesas de hierro',1);
INSERT INTO listacosas (nombre,descripcion,gimnasio_codigo) VALUES ('Pesas 20kg','Pesas de hierro',1);

INSERT INTO categoriaproductos (nombre, descripcion) VALUES ('Ropa', 'Productos relacionados con ropa deportiva');
INSERT INTO categoriaproductos (nombre, descripcion) VALUES ('Suplementos', 'Productos relacionados con suplementos y nutrición deportiva');
INSERT INTO categoriaproductos (nombre, descripcion) VALUES ('Accesorios', 'Productos relacionados con accesorios de entrenamiento');
INSERT INTO categoriaproductos (nombre, descripcion) VALUES ('Bebidas', 'Productos relacionados con bebidas energéticas y suplementos líquidos');

INSERT INTO productos (nombre, descripcion, img, precio, createAt, categoriaId)
VALUES ('Remera de entrenamiento', 'Remera deportiva de alta calidad, transpirable y cómoda para entrenamientos intensos en el gimnasio.', 'remera_entrenamiento.jpg', 25, NOW(), 1),
       ('Barritas de proteína', 'Barritas energéticas ricas en proteínas ideales para consumir como snack antes o después del entrenamiento.', 'barritas_proteina.jpg', 2, NOW(), 2),
       ('Straps para levantamiento de pesas', 'Straps acolchados para levantamiento de pesas, diseñados para mejorar el agarre y la seguridad durante los entrenamientos con pesas.', 'straps_pesas.jpg', 10, NOW(), 3),
       ('Bebida energizante', 'Bebida energizante con una mezcla especial de vitaminas y cafeína para mejorar el rendimiento durante el entrenamiento.', 'bebida_energizante.jpg', 3, NOW(), 4);




