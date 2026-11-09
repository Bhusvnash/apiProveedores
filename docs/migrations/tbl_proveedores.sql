-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-11-2026 a las 13:23:07
-- Versión del servidor: 13.0.2-MariaDB
-- Versión de PHP: 8.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedores`
--

CREATE TABLE `tbl_proveedores` (
  `id` int(11) NOT NULL,
  `nit` varchar(45) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `contacto` varchar(10) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `ciudad` varchar(100) NOT NULL,
  `estado` varchar(30) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_proveedores`
--

INSERT INTO `tbl_proveedores` (`id`, `nit`, `nombre`, `contacto`, `email`, `telefono`, `ciudad`, `estado`, `fecha`) VALUES
(1, '23_123_435', 'Davith.SA', '789988', 'pedro@gmail.com', '3219817460', 'Cartago', 'activo', '2026-11-09 12:36:23'),
(3, '23_123_432', 'Nequi', '546234', 'nequi@gmail.com', '3219817467', 'Bogota D.C', 'activo', '2026-11-09 13:21:36'),
(5, 't_123_4567', 'toyota', '23567588', 'toyota@gmail.com', '3139817460', 'Medellin', 'activo', '2026-11-09 13:22:56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_proveedores`
--
ALTER TABLE `tbl_proveedores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nit` (`nit`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_proveedores`
--
ALTER TABLE `tbl_proveedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
