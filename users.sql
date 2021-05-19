-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-05-2021 a las 06:19:14
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `users`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_users`
--

CREATE TABLE `tabla_users` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tabla_users`
--

INSERT INTO `tabla_users` (`id`, `id_usuario`, `nombre_usuario`, `correo`, `status`) VALUES
(1, 1, 'Carlos Manuel Perez Carrizal', 'cmpc2810@gmail.com', 'Activo'),
(2, 2, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(3, 3, 'Gustavo Sanchez Pérez', 'gsp@gmail.com', 'Inactivo'),
(4, 4, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(5, 5, 'Gustavo Sanchez Pérez', 'gsp@gmail.com', 'Activo'),
(6, 6, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(7, 7, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(8, 8, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(9, 9, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(10, 10, 'Gustavo Sanchez Pérez', 'gsp@gmail.com', 'Activo'),
(11, 11, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(12, 12, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(13, 13, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(14, 14, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(17, 21, 'Juan Angel Perez', 'jap@gmail.com', 'Activo'),
(18, 22, 'Juan Angel Perez', 'cmpc2810@gmail.com', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla_users`
--
ALTER TABLE `tabla_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_users`
--
ALTER TABLE `tabla_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
