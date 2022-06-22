-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 22 2022 г., 13:54
-- Версия сервера: 5.7.33
-- Версия PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `drivingrules`
--

-- --------------------------------------------------------

--
-- Структура таблицы `countries_rule`
--

CREATE TABLE `countries_rule` (
  `id` int(11) NOT NULL,
  `Country_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Speed_limit_on_motorway_kmh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Speed_limit_on_dual_carriageway_kmh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Speed_limit_on_single_carriageway_kmh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Speed_limit_in_urban_area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Permitted_alcohol_level_` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Toll_roads` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Seatbelt_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Minimum_child_age_front_seat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Triangle_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `First_aid_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fire_extinguisher_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Spare_bulb_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Minimum_drivers_age` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tow_rope_required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `countries_rule`
--

INSERT INTO `countries_rule` (`id`, `Country_code`, `Country`, `Speed_limit_on_motorway_kmh`, `Speed_limit_on_dual_carriageway_kmh`, `Speed_limit_on_single_carriageway_kmh`, `Speed_limit_in_urban_area`, `Permitted_alcohol_level_`, `Toll_roads`, `Seatbelt_required`, `Minimum_child_age_front_seat`, `Triangle_required`, `First_aid_required`, `Fire_extinguisher_required`, `Spare_bulb_required`, `Minimum_drivers_age`, `Tow_rope_required`) VALUES
(1, 'A', 'Austria', '130', '100', '100', '50', '0.05', 'Yes', 'All', 'N/A', 'Yes', 'Yes', 'Recommended', 'No', '17', 'Yes'),
(2, 'AL', 'Albania', '110', 'N/A', '90', '40', '0', NULL, 'Yes[1]', 'N/A', 'Recommended', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(3, 'AND', 'Andorra', 'N/A', 'N/A', '90', '50', '0.05', NULL, 'Front', '10', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(4, 'B', 'Belgium', '120', '90', '70 (Flanders);\r\n90 (Wallonia)', '50', '0.05', 'No[2]', 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18 (17 with supervision of parents)', 'Yes'),
(5, 'BG', 'Bulgaria', '140', 'N/A', '90', '50', '0.05', 'Yes', 'All', '10', 'Yes', 'Yes', 'Yes', 'Yes', '18', 'Yes'),
(6, 'BIH', 'Bosnia and Herzegovina', '130', '100', '80', '50', '0.03', NULL, 'Yes[3]', '12', 'Yes', 'Yes', 'Recommended', 'Yes', '18', 'Yes'),
(7, 'BY', 'Belarus', '110', 'N/A', '90', '60', '0.03', 'Yes', 'Yes[4]', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(8, 'CH', 'Switzerland', '120', 'N/A', '80 (100 on limited-access roads)', '50', '0.05', 'Yes', 'All', NULL, 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(9, 'CY', 'Cyprus', '100', 'N/A', '80', '50', '0.05', NULL, 'All', '12', 'Yes, 2x', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(10, 'CZ', 'Czech Republic', '130 (urban 80)', '110 (urban 80)', '90', '50', '0 (tolerated 0.02)', 'Yes', 'All', NULL, 'Yes', 'Yes', 'Recommended', 'No', '18 (17 for B1 cars)', 'No'),
(11, 'D', 'Germany[5]', 'no or speed limit sign(130 recommended)', 'no or speed limit sign (130 recommended)', '100', '50', '0.05', 'No[6]', 'All', 'N/A', 'Yes', 'Yes', 'Recommended', 'No', '18 (17 with supervision of >30 years old driver)', 'No'),
(12, 'DK', 'Denmark', '130', 'N/A', '80', '50', '0.05', 'Yes', 'All', 'N/A', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(13, 'E', 'Spain', '120', '120', '90', '50', '0.05', 'Yes', 'All', 'N/A', 'Yes, 2x', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(14, 'EST', 'Estonia', '110', '110', '90', '50', '0', NULL, 'All', 'N/A', 'Yes', 'Yes', 'Yes', 'No', '18 (16 with supervision of a person with 2+ years of driving experience)', 'Yes'),
(15, 'F', 'France', '130 (rain/wet 110)', '110 (rain/wet 100)', '80', '50', '0.05', 'Yes', 'All', '10', 'Yes', 'Recommended', 'Recommended', 'No', '18 (15 with supervision of a person with 5+ years of driving experience)', 'Yes'),
(16, 'FIN', 'Finland', '120[7]', 'N/A', '80–100', '50', '0.05', 'No', 'All', '3', 'Yes', 'Recommended', 'Recommended', 'No', '17 (16 with supervision of a 25+ years old person with 5+ years of driving experience)', 'Yes'),
(17, 'FL', 'Liechtenstein', 'N/A', 'N/A', '80', '50', '0.08', NULL, 'All', 'N/A', 'Yes', 'Yes', 'Recommended', 'No', '18', 'Yes'),
(18, 'GB', 'United Kingdom', '113 (70 mph)', '113 (70 mph)', '97 (60 mph)', '48 (30 mph)', '0.08 (0.05 Scotland)', 'Yes', 'All', 'N/A', 'Recommended', 'Recommended', 'Recommended', 'No', '17', 'No'),
(19, 'GR', 'Greece', '130', 'N/A', '90', '50', '0.05', NULL, 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(20, 'H', 'Hungary', '130', '110', '90', '50', '0', 'Yes', 'All', '12', 'Yes', 'Yes', 'Recommended', 'No', '18 (17 with supervision of someone with 10+ years drive-experience)', 'Yes'),
(21, 'HR', 'Croatia', '130', '110', '80', '50', '0.05', 'Yes', 'All', '12', 'Yes', 'Yes', 'Recommended', 'Yes', '18', 'No'),
(22, 'I', 'Italy', '130', '110', '90', '50', '0.05', 'Yes', 'All', '12', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(23, 'IRL', 'Ireland', '120', 'N/A', '80 (local & regional roads);\r\n100 (national roads)', '50', '0.05', 'Yes[8]', 'All', 'N/A', 'Recommended', 'Recommended', 'Recommended', 'No', '17', 'Yes'),
(24, 'IS', 'Iceland', 'N/A', 'N/A', '90 (paved roads);\r\n80 (gravel roads)', '50', '0.05', NULL, 'All', '14', 'Yes', 'Recommended', 'Recommended', 'No', '17', 'Yes'),
(25, 'L', 'Luxembourg', '130', 'N/A', '90', '50', '0.05', NULL, 'All', '11', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(26, 'LT', 'Lithuania', '130', '110', '90', '50', '0.04', NULL, 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'No'),
(27, 'LV', 'Latvia', 'N/A', '90', '90', '50', '0.05', NULL, 'All', NULL, 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(28, 'M', 'Malta', 'N/A', 'N/A', '80', '50', '0.08', NULL, 'Yes[9]', '11', 'Recommended', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(29, 'MC', 'Monaco', 'N/A', 'N/A', NULL, '50', '0.05', NULL, 'N/A', '10', 'Recommended', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(30, 'MD', 'Moldova', 'N/A', 'N/A', '90', '50', '0', NULL, 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(31, 'NMK', 'North Macedonia', '130', 'N/A', '80', '60', '0.05', 'Yes', 'All', '12', 'Yes', 'Yes', 'Recommended', 'Yes', '18', 'Yes'),
(32, 'MNE', 'Montenegro', '120', 'N/A', '80', '50', '0.05', 'Yes', 'All', '12', 'Yes', 'Recommended', 'Recommended', 'No', NULL, 'Yes'),
(33, 'N', 'Norway', '110', 'N/A', '80', '50', '0.02', 'Yes', 'All', 'N/A', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(34, 'NL', 'Netherlands', '130', '100', '80', '50', '0.05', 'Yes[10]', 'All', '12', 'Recommended', 'Recommended', 'Recommended', 'No', '18 (17 with supervision of someone with 5+ years drive-experience)', 'Yes'),
(35, 'P', 'Portugal', '120', '100', '90', '50', '0.05', 'Yes', 'All', '12', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(36, 'PL', 'Poland', '140', '100 (120 on expressways)', '90 (100 on expressways)', '50', '0.02', 'Yes', 'All', 'N/A', 'Yes', 'Recommended', 'Yes', 'No', '18 (16 for B1 cars)', 'No'),
(37, 'RO', 'Romania', '130', '100 (110 on expressways)', '90', '50', '0', 'Yes', 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18 (16 for B1 cars)', 'No'),
(38, 'RSM', 'San Marino', 'N/A', 'N/A', '70', '50', '0.08', NULL, 'All', '12', 'Recommended', 'Recommended', 'Recommended', 'No', '18', 'Yes'),
(39, 'RUS', 'Russia[11]', '110', 'N/A', '90', '60', '0', 'Yes', 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(40, 'S', 'Sweden', '110', 'N/A', '70', '50', '0.02', 'Yes', 'All', 'N/A', 'Yes', 'Recommended', 'Recommended', 'No', '18', 'No'),
(41, 'SK', 'Slovakia', '130', '130', '90', '50', '0', 'Yes', 'All', '12', 'Yes', 'Yes', 'Recommended', 'Yes', '18 (17 with supervision of someone with 10+ years drive-experience)', 'Yes'),
(42, 'SLO', 'Slovenia', '130', '100', '90', '50', '0.05', NULL, 'All', '12', 'Yes', 'Yes', 'Recommended', 'No', '18', 'Yes'),
(43, 'SRB', 'Serbia', '120', '100', '80', '50', '0.03', 'Yes', 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(44, 'TR', 'Turkey', '120', '110 (cars) / 90 (rest)', '90', '50', '0.05', 'Yes', 'All', '10', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes'),
(45, 'UA', 'Ukraine', '130', '110', '90', '50', '0', 'Yes', 'All', '12', 'Yes', 'Yes', 'Yes', 'No', '18', 'Yes');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `countries_rule`
--
ALTER TABLE `countries_rule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `countries_rule`
--
ALTER TABLE `countries_rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
