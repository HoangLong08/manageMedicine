-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2021 at 05:24 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manage_medicine`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `id_employee` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `password` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `id_employee`, `user_name`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'elizabeth001', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04'),
(2, 2, 'hebe002', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04'),
(3, 3, 'ladonna003', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04'),
(4, 4, 'jezabel004', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04'),
(5, 5, 'miranda005', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04'),
(6, 6, 'verity006', '12345678', '', '2021-11-28 22:21:04', '2021-11-28 22:21:04');

-- --------------------------------------------------------

--
-- Table structure for table `available_prescriptions`
--

CREATE TABLE `available_prescriptions` (
  `id` int(11) NOT NULL,
  `disease` text NOT NULL,
  `symptom` text NOT NULL,
  `dosage_method` text NOT NULL,
  `number_sold` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `available_prescriptions`
--

INSERT INTO `available_prescriptions` (`id`, `disease`, `symptom`, `dosage_method`, `number_sold`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Antipyretic', 'fever over 40 degrees, fatigue, weakness and tremors in the limbs', '4 pill / 1 day', '8', '', '2021-11-28 21:12:34', '2021-11-28 21:12:34'),
(2, 'Stomachache', 'Fulminant hepatitis is a dangerous inflammation of the liver that can quickly become life-threatening. You may also hear this condition called “fulminant liver failure” or', '2 pill / 1 day', '4', '', '2021-11-28 21:12:34', '2021-11-28 21:12:34'),
(3, 'Swollen limbs, joints', 'Migraine headaches are common in people under 45 years of age, especially women. Migraine headaches usually affect only one side of the head, can appear suddenly and last a few hours, ...', '6 pill / 1 day', '12', '', '2021-11-28 21:12:34', '2021-11-28 21:12:34'),
(4, 'Pain relief', 'Body and joint pain. Exhausted limbs, wounds, pain relief for nerves', '4 pill / 1 day', '4', '', '2021-11-28 21:12:34', '2021-11-28 21:12:34');

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id_branch` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id_branch`, `name`, `address`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Drugstore 10A Quang Trung', '10A Quang Trung - Ha Dong - Hanoi', '', '2021-11-28 21:50:20', '2021-11-28 21:50:20'),
(2, 'Drugstore No. 1 - Ha Tay Pharmaceutical Joint Stock Company', '80 Quang Trung - Ha Dong - Hanoi', '', '2021-11-28 21:50:20', '2021-11-28 21:50:20'),
(3, 'Viet Thanh Pharmaceutical Co., Ltd', 'Counter 70C9 - Ngoc Khanh Pharmacy Center - Ba Dinh - Hanoi', '', '2021-11-28 21:50:20', '2021-11-28 21:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Adelaide Agnes', '0988585568', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(2, 'Ceridwen Christabel', '0916175566', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(3, 'Doris Elfleda', '0987898882', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(4, 'Genevieve Halcyon', '0912040325', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(5, 'Iphigenia Joyce', '0904352749', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(6, 'Kerenza Louisa', '0902210733', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(7, 'Olwen Philomena', '0934447788', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(8, 'Tryphena Xavia', '0983109724', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(9, 'Tryphena Sigourney', '0985861886', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34'),
(10, 'Phoebe Neala', '0904629579', '', '2021-11-28 21:40:34', '2021-11-28 21:40:34');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `id_branch` int(11) NOT NULL,
  `id_group_employee` int(11) NOT NULL,
  `name` text NOT NULL,
  `avatar` text NOT NULL,
  `address` text NOT NULL,
  `phone` text NOT NULL,
  `id_card` int(11) NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `id_branch`, `id_group_employee`, `name`, `avatar`, `address`, `phone`, `id_card`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Elizabeth Lysandra', 'https://lavenderstudio.com.vn/wp-content/uploads/2019/10/dich-vu-chup-anh-profile-02-1-1024x682.jpg', '13 Lo Duc, Ngo Thi Nham, Hai Ba Trung, Hanoi', '5930349535', 1, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06'),
(2, 1, 2, 'Guinevere Hebe', 'https://www.chuphinhsanpham.vn/wp-content/uploads/2018/09/chup-anh-cv-dep-2.jpg', '43 Nguyen Sieu, Hoan Kiem District, Hanoi', '567890427', 2, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06'),
(3, 2, 1, 'Letitia Ladonna', 'https://xoaimedia.com/wp-content/uploads/2021/03/chup-anh-profile-ca-nhan.jpg', '66 To Hien Thanh, Bui Thi Xuan, Hoan Kiem, Hanoi', '097853687', 3, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06'),
(4, 2, 2, 'Keisha Jezebel', 'https://tiemchupanh.com/wp-content/uploads/2020/06/MG_2414.jpg', '43 Nguyen Sieu, Hoan Kiem District, Hanoi', '099846657', 4, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06'),
(5, 3, 1, 'Elizabeth Miranda', 'https://hthaostudio.com/wp-content/uploads/2020/08/Nam-Phuong-3-1180x760.jpg', '9A Nguyen Thiep, Dong Xuan, Hoan Kiem, Hanoi', '0922445656', 5, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06'),
(6, 3, 2, 'Philomena Verity', 'https://live.staticflickr.com/65535/50663931897_814b68e94b_k.jpg', 'B2 R6 Vincom Royal City, 72A Nguyen Trai, Thanh Xuan, Hanoi', '0324445674', 6, '', '2021-11-28 22:15:06', '2021-11-28 22:15:06');

-- --------------------------------------------------------

--
-- Table structure for table `groups_employees`
--

CREATE TABLE `groups_employees` (
  `id` int(11) NOT NULL,
  `name_group` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups_employees`
--

INSERT INTO `groups_employees` (`id`, `name_group`, `status`, `created_at`, `updated_at`) VALUES
(1, 'management staff', '', '2021-11-28 22:00:53', '2021-11-28 22:00:53'),
(2, 'Salesman', '', '2021-11-28 22:00:53', '2021-11-28 22:00:53');

-- --------------------------------------------------------

--
-- Table structure for table `groups_medicines`
--

CREATE TABLE `groups_medicines` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups_medicines`
--

INSERT INTO `groups_medicines` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Food function', 'Functional foods are products of natural origin or are processed foods with added \"functional\" substances. Like medicinal foods, functional foods are located at the intersection between food and medicine and people also call functional foods as medicinal foods.', '', '2021-11-28 20:58:59', '2021-11-28 20:58:59'),
(2, 'Mother and baby', 'During pregnancy, to supplement the necessary nutritional content for the body, many pregnant women have turned to functional foods to help improve their health. But not everyone can easily distinguish between drugs and functional foods, which leads to abuse or improper use without knowing that the drug may cause harm to the fetus.', '', '2021-11-28 20:58:59', '2021-11-28 20:58:59'),
(3, 'Household medicine', 'Some antipyretic capsules can be kept for rectal use in case the child needs urgent fever reduction. When using antipyretic drugs, the doses need to be separated by 6 hours, overdose can cause poisoning.', '', '2021-11-28 20:58:59', '2021-11-28 20:58:59');

-- --------------------------------------------------------

--
-- Table structure for table `invoices_buys`
--

CREATE TABLE `invoices_buys` (
  `id` int(11) NOT NULL,
  `id_branch` int(11) NOT NULL,
  `id_employee` int(11) NOT NULL,
  `data_payment` text NOT NULL,
  `total_discount` text NOT NULL,
  `total_payment` text NOT NULL,
  `payment` text NOT NULL,
  `change_` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoices_buys`
--

INSERT INTO `invoices_buys` (`id`, `id_branch`, `id_employee`, `data_payment`, `total_discount`, `total_payment`, `payment`, `change_`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Lozenges increase resistance royal jelly Vitamin C', '12', '124', '112', '0', '', '2021-11-28 22:41:43', '2021-11-28 22:41:43'),
(2, 1, 1, 'Eugica Herbal Throat Spray Eugica Herbal Throat\r\n', '35', '535', '500', '0', '', '2021-11-28 22:41:43', '2021-11-28 22:41:43'),
(3, 1, 2, 'Eugica Herbal Throat Spray Eugica Herbal Throat\r\n', '0', '342', '342', '0', '', '2021-11-28 22:42:15', '2021-11-28 22:42:15'),
(4, 2, 3, 'Diabetna Tea Helps Lower Blood Sugar\r\n\r\n', '10', '340', '330', '0', '', '2021-11-28 22:43:46', '2021-11-28 22:43:46'),
(5, 2, 3, 'Nasal and eyewash Sodium Chloride 0.9% Pharmedic', '0', '339', '339', '0', '', '2021-11-28 22:43:46', '2021-11-28 22:43:46'),
(6, 2, 3, 'Bao Thanh lozenges without sugar', '20', '120', '100', '0', '', '2021-11-28 22:43:46', '2021-11-28 22:43:46'),
(7, 2, 4, 'Ambroxol 30mg Boston medicine for cough with phlegm', '7', '667', '660', '0', '', '2021-11-28 22:44:27', '2021-11-28 22:44:27'),
(8, 3, 5, 'Bao Thanh lozenges without sugar', '50', '550', '500', '0', '', '2021-11-28 22:46:31', '2021-11-28 22:46:31'),
(9, 3, 5, 'Lozenges increase resistance royal jelly Vitamin C', '10', '350', '340', '0', '', '2021-11-28 22:46:31', '2021-11-28 22:46:31'),
(10, 3, 5, 'Nasal and eyewash Sodium Chloride 0.9% Pharmedic', '10', '420', '410', '0', '', '2021-11-28 22:46:31', '2021-11-28 22:46:31'),
(11, 3, 6, 'Ambroxol 30mg Boston medicine for cough with phlegm', '0', '900', '900', '0', '', '2021-11-28 22:47:26', '2021-11-28 22:47:26');

-- --------------------------------------------------------

--
-- Table structure for table `invoices_sells`
--

CREATE TABLE `invoices_sells` (
  `id` int(11) NOT NULL,
  `id_invoice_order` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_employee` int(11) NOT NULL,
  `date_payment` text NOT NULL,
  `id_voucher` int(11) NOT NULL,
  `total_discount` text NOT NULL,
  `total_payment` text NOT NULL,
  `payment` text NOT NULL,
  `change_` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoices_sells`
--

INSERT INTO `invoices_sells` (`id`, `id_invoice_order`, `id_customer`, `id_employee`, `date_payment`, `id_voucher`, `total_discount`, `total_payment`, `payment`, `change_`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'Lozenges increase resistance royal jelly Vitamin C', 1, '0', '231', '231', '0', '', '2021-11-28 22:57:51', '2021-11-28 22:57:51'),
(2, 0, 2, 2, 'Nasal and eyewash Sodium Chloride 0.9% Pharmedic', 3, '30', '546', '516', '0', '', '2021-11-28 22:57:51', '2021-11-28 22:57:51'),
(3, 3, 7, 4, 'Ambroxol 30mg Boston medicine for cough with phlegm', 2, '45', '645', '600', '0', '', '2021-11-28 23:03:16', '2021-11-28 23:03:16'),
(4, 4, 8, 5, 'Lozenges increase resistance royal jelly Vitamin C', 1, '0', '87', '87', '0', '', '2021-11-28 23:03:16', '2021-11-28 23:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `inv_buys_medicines`
--

CREATE TABLE `inv_buys_medicines` (
  `id` int(11) NOT NULL,
  `id_packaging_size` int(11) NOT NULL,
  `id_medicine` int(11) NOT NULL,
  `id_invoice_buy` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inv_buys_medicines`
--

INSERT INTO `inv_buys_medicines` (`id`, `id_packaging_size`, `id_medicine`, `id_invoice_buy`, `quantity`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, 900, '4', '', '2021-11-28 23:19:59', '2021-11-28 23:19:59'),
(2, 1, 2, 2, 454, '45', '', '2021-11-28 23:19:59', '2021-11-28 23:19:59'),
(3, 3, 4, 3, 5000, '5', '', '2021-11-28 23:19:59', '2021-11-28 23:19:59');

-- --------------------------------------------------------

--
-- Table structure for table `inv_sells_medicnes`
--

CREATE TABLE `inv_sells_medicnes` (
  `id` int(11) NOT NULL,
  `id_invoice_sell` int(11) NOT NULL,
  `id_medicine` int(11) NOT NULL,
  `id_packaging_size` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inv_sells_medicnes`
--

INSERT INTO `inv_sells_medicnes` (`id`, `id_invoice_sell`, `id_medicine`, `id_packaging_size`, `quantity`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 18979, 1, 2, 100, '15', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(2, 8586, 2, 2, 979, '20', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(3, 99666, 3, 1, 777, '90', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(4, 3423, 4, 3, 8789, '5', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(5, 342, 5, 1, 8907, '3', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(6, 352355, 6, 2, 877, '85', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(7, 45555, 7, 3, 655, '7', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(8, 1221, 8, 3, 897, '10', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35'),
(9, 221, 9, 2, 67, '70', '', '2021-11-28 23:17:35', '2021-11-28 23:17:35');

-- --------------------------------------------------------

--
-- Table structure for table `mdc_avl_prescriptions`
--

CREATE TABLE `mdc_avl_prescriptions` (
  `id` int(11) NOT NULL,
  `id_available_prescription` int(11) NOT NULL,
  `id_medicine` int(11) NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mdc_avl_prescriptions`
--

INSERT INTO `mdc_avl_prescriptions` (`id`, `id_available_prescription`, `id_medicine`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 9, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(2, 2, 7, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(3, 3, 7, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(4, 4, 8, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(5, 1, 9, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(6, 1, 6, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(7, 4, 1, '', '2021-11-28 21:34:25', '2021-11-28 21:34:25'),
(8, 2, 3, '', '2021-11-28 21:35:16', '2021-11-28 21:35:16'),
(9, 2, 5, '', '2021-11-28 21:35:16', '2021-11-28 21:35:16'),
(10, 2, 2, '', '2021-11-28 21:35:16', '2021-11-28 21:35:16');

-- --------------------------------------------------------

--
-- Table structure for table `mdc_packaging_sizes`
--

CREATE TABLE `mdc_packaging_sizes` (
  `id` int(11) NOT NULL,
  `id_branch` int(11) NOT NULL,
  `id_packaging_size` int(11) NOT NULL,
  `id_medicine` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mdc_packaging_sizes`
--

INSERT INTO `mdc_packaging_sizes` (`id`, `id_branch`, `id_packaging_size`, `id_medicine`, `quantity`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, 235, '', '2021-11-28 23:23:09', '2021-11-28 23:23:09'),
(2, 2, 1, 2, 979, '', '2021-11-28 23:23:09', '2021-11-28 23:23:09'),
(3, 3, 3, 9, 777, '', '2021-11-28 23:23:09', '2021-11-28 23:23:09');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `id_group_medicine` int(11) NOT NULL,
  `ingredient` text NOT NULL,
  `avatar` text NOT NULL,
  `name` text NOT NULL,
  `information` text NOT NULL,
  `uses` text NOT NULL,
  `method` text NOT NULL,
  `advantage` text NOT NULL,
  `storage` text NOT NULL,
  `warning` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `id_group_medicine`, `ingredient`, `avatar`, `name`, `information`, `uses`, `method`, `advantage`, `storage`, `warning`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Main active ingredients: Royal jelly is equivalent to 1.25mg of total protein, 25mg of vitamin C.\r\nJust enough for 1 pill.', 'https://cdn.jiohealth.com/pharmacy/product/P01026C/P01026C_1_l.jpg', 'Lozenges increase resistance royal jelly Vitamin C', 'Vitamin C royal jelly lozenges foster children, the elderly and the convalescence period, increasing resistance in colds and flus.', 'Target Users:\r\nUse for adults and children.\r\nDosage & Usage:\r\nChildren: 3 - 6 tablets/day.\r\nAdults: 8 - 12 tablets/day.', 'Preserve:\r\nStore in a cool, dry place, away from direct sunlight.\r\nThe standard temperature is below 30 degrees Celsius and the humidity is not more than 70%.\r\nKeep out of reach of children.', 'Save 5% for Loyal Customers, 100% Genuine Products', '1209', 'Read the user manual carefully before use.\r\nIf you need more information, please consult your doctor.', '', '2021-11-28 21:23:11', '2021-11-28 21:23:11'),
(2, 1, 'Vitamin C-60.0mg\r\nVitamin PP-.16.0mg\r\nVitamin E-6.0mg\r\nVitamin B5-5.0mg\r\nVitamin B1-1.4mg\r\nVitamin B2-1.4mg\r\nVitamin B6-1.4mg\r\nFolic Acid-160mcg\r\nAccessories - just enough for 1 tablet', 'https://cdn.jiohealth.com/pharmacy/product/P03149H/P03149H_1_l.jpg?t=15', 'Multi OPC effervescent tablets support vitamin supplements for the body', 'Support vitamin supplements for the body, support health, support to reduce fatigue due to vitamin deficiency.\r\nNote: This food is not a medicine, does not have the effect of replacing medicine.', 'User object\r\nUsed for people with an unbalanced diet, people with absorption disorders, vitamin deficiencies.\r\nHow to use\r\nDissolve the tablet in about 200ml of boiled and cooled water. Take 1 pill each time. Drink 1-2 times a day.', 'Preserve\r\nStore in a cool, dry place, below 300C, protected from light.', 'Pharmacist free consultation', '45243', 'Do not use if sensitive to any ingredient of the product.', '', '2021-11-28 21:23:11', '2021-11-28 21:23:11'),
(3, 1, 'Honey: 200.50 mg. Chamomile Extract: 134.67 mg. Menthol: 80.20 mg. Licorice Root Extract: 30.59 mg. Eucalyptol: 8.49 mg. Propolis: 3.01 mg. Aloe Vera: 1.00 mg. Excipients: Water, ethyl alcohol, glycerin, sorbitol 70% solution, macrogolglycerol hydroxystearate 40, propylene glycol, menthol, sucralose, potassium sorbate, citric acid anhydrous, orange flavor.', 'https://cdn.jiohealth.com/pharmacy/product/P01768H/P01768H_2_l.jpg?t=15', 'Eugica Herbal Throat Spray Eugica Herbal Throat Spray Eugica Herbal Throat Spray\r\nEugica herbal throat spray', 'Pharyngitis is one of the common diseases of the respiratory tract. Although the disease is not dangerous, if not treated right away, the sore throat will last for a long time, it will turn into other diseases that are difficult to treat. Therefore, it is essential to prevent and treat a sore throat right away.\r\n\r\nMega We care\'s herbal throat spray Eugica is a safe product that provides immediate comfort and is very convenient for those who use their voices a lot such as teachers, speakers, singers, staff members, etc. salesman….', '\r\nTarget Users:\r\nAdults and children 12 years and older.\r\n\r\nDosage & Usage:\r\nSpray directly into the oral cavity, throat 2-3 times and then swallow, should use daily.', 'Preserve:\r\nStore in a dry place, protected from light, below 30°C.', 'ok', '897', 'Keep out of reach of CHILDREN.\r\nDo not use for people who are allergic to any of the ingredients', '', '2021-11-28 21:23:11', '2021-11-28 21:23:11'),
(4, 1, 'Gymnema sylvestre: 1.3g\r\nBitter gourd (Momordica charantia): 0.5g\r\nJiaogulan (Gynostemma pentaphyllum): 0.2g', 'https://cdn.jiohealth.com/pharmacy/product/P03011H/P03011H_1_l.jpg?t=15', 'Diabetna Tea Helps Lower Blood Sugar', 'Helps lower blood sugar, supports the treatment of type I and type II diabetes, stabilizes blood sugar and prevents complications of diabetes.\r\nCombined with specific treatment drugs to improve the effectiveness of blood sugar control.\r\nSupport to lower blood fat, prevent atherosclerosis.', 'Target Users:\r\nUse as directed by the Doctor.\r\nDosage & Usage:\r\nDip the tea bag into a cup containing about 100-150ml of boiling water, wait for 3-5 minutes.\r\nDrink 1 bag each time, 3 times a day, 30 minutes after meals.\r\nPersist in taking at least 1 month for the best effect.\r\nSafe, can be used every day.', 'Preserve:\r\nStore below 30°C and 70% humidity.\r\nAvoid direct light on the product.\r\nDo not use the medicine past the expiration date indicated on the package.\r\nKeep medicine out of reach of children.', 'Fast delivery in 2 hours', '3633', 'Careful:\r\nThis product is not a medicine and is not a substitute for medicine.\r\nRead the user manual carefully before use.', '', '2021-11-28 21:23:11', '2021-11-28 21:23:11'),
(5, 3, 'Each bottle contains:\r\nMain active ingredient: Sodium chloride 0.9%.\r\nDistilled water just enough 10ml', 'https://cdn.jiohealth.com/pharmacy/product/P00353C/P00353C_3_l.jpg?t=15', 'Nasal and eyewash Sodium Chloride 0.9% Pharmedic', 'Eye drops - Nasal Sodium Chloride 0.9% to support hygiene of the nose and eyes in cases of runny nose, sore throat, flu, virus, bacteria... However, physiological saline is not a medicine and limits its use. daily.\r\nThe drug has the main ingredient is Sodium Chloride, capable of providing necessary ions for the body. Solution of eyewash - Nasal Sodium Chloride 0.9% is an isotonic solution compared with body fluids, the osmotic pressure is almost equal, so it is possible with chloride and Bicarbonate ions to regulate the acid balance. alkaline.', 'Point:\r\nUsed to wash eyes and nose.\r\nTreatment of stuffy nose, runny nose, allergic rhinitis.\r\nCan be used for babies.\r\nContraindications:\r\nNot available\r\nTarget Users:\r\nAdults and children\r\nCan be used for babies.\r\nDosage & Usage:\r\nInstill or wash eyes, nasal passages, 1-3 drops each time, 1-3 times a day or more.', 'Preserve:\r\nStore in a cool, dry place, away from direct sunlight, at a temperature below 30 degrees Celsius', 'Save 5% for Loyal Customers', '6545', 'Careful:\r\nContraindications: Hypersensitivity to the components of the drug', '', '2021-11-28 21:29:18', '2021-11-28 21:29:18'),
(6, 3, 'Each tablet contains:\r\nMain active ingredients: Xuyen Boi sample 0.4g, Qua Lau kernel 0.2g, Pi Ba Diep 0.5g, Vien Chi 0.1g, Ginseng 0.1g, Almonds 0.2g, Phuc Linh 0.1g, Ginger 0.1g, Tran tare 0.1g, Salted Apricot (O mai) 0.5g, Sand wings 0.4g, Licorice 0.1g, Sale halves 0.1g, Menthol 0.1mg, Five berries 0.05g\r\nExcipients: Isomalt . Sugar', 'https://cdn.jiohealth.com/pharmacy/product/P00912G/P00912G_1_l.jpg?t=15', 'Bao Thanh lozenges without sugar', 'Bao Thanh lozenges without sugar help to supplement waste, except cough, chemical phlegm.\r\nRuler:\r\nChronic cough, persistent cough, persistent cough for a long time does not go away\r\nCough due to seasonal allergies\r\nCough due to cold, flu\r\nCough with wind, dry cough, cough with phlegm\r\nSupport in the treatment of pharyngitis, bronchitis, pneumonia\r\nCases of sore throat, dry throat, itchy throat, hoarseness ..', 'Đối Tượng Sử Dụng:\r\nNgười lớn và trẻ 3 tuổi trở lên.\r\n\r\nĐặc biệt dành cho người tiểu đường\r\n\r\nLiều Dùng & Cách Dùng:\r\nTrẻ em từ 3 tuổi đến 10 tuổi: Mỗi lần ngậm 1 viên, ngày 3 – 4 lần\r\n\r\nTrẻ em trên 10 tuổi: Mỗi lần ngậm 1 viên, ngày 5 – 6 lần\r\n\r\nNgười lớn: Mỗi lần ngậm 1 viên, ngày 6 -8 lần.\r\n\r\nDùng được cho phụ nữ có thai trên 3 tháng và phụ nữ cho con bú.\r\n\r\nNgậm cho đến khi tan hết hoặc nhai trước khi nuốt.', 'Preserve:\r\nStore in a cool, dry place, away from direct sunlight.\r\nThe standard temperature is below 30 degrees Celsius and the humidity is not more than 70%.\r\nKeep out of reach of children.', 'Family medicine cabinet\r\nEar, Nose, Throat Medicine', '4353', 'Careful:\r\nLike other lozenges, Bao Thanh lozenges are not suitable for children under 3 years old because of the risk of choking when sucking.', '', '2021-11-28 21:29:18', '2021-11-28 21:29:18'),
(7, 3, 'Ingredient\r\nEach Ambroxol Boston tablet contains:\r\nActive ingredient: Ambroxol hydrochloride: 30mg\r\nExcipients: Lactose monohydrate, povidone K30, croscarmellose sodium, maltodextrin, magnesium stearate, microcrystallin cellulose just enough for one tablet.', 'https://cdn.jiohealth.com/pharmacy/product/P04449H/P04449H_2_l.jpg?t=15', 'Ambroxol 30mg Boston medicine for cough with phlegm', 'Ambroxol Boston is a mucolytic agent for the respiratory tract, used in the following cases: Acute and chronic diseases of the respiratory tract accompanied by abnormal bronchial secretions, especially in acute exacerbations of chronic bronchitis, asthma. bronchi, asthmatic bronchitis.', '\r\nTarget Users:\r\nAdults and children over 5 years old\r\nDosage & Usage:\r\nDosage\r\nHow to use: Ambroxol Boston is taken orally with water after eating.\r\nAmount:\r\nAdults and children over 10 years old: 30mg/time x 3 times daily. Then twice a day if used for a long time.\r\nChildren 5 - 10 years old: 15mg/time x 3 times daily. Then twice a day if used for a long time.', 'Preserve\r\nStore in a dry place, below 30°C, protected from light.', '100% genuine product', '786', 'Careful:\r\nAmbroxol should be used with caution in patients with a history of peptic ulcer disease and cases of hemoptysis, as ambroxol may dissolve fibrin clots and cause re-bleeding. dyspepsia, nausea, vomiting) have been reported.', '', '2021-11-28 21:29:18', '2021-11-28 21:29:18'),
(8, 2, '2-way non-woven fabric, RO purified water, Vitamin C essence, skin conditioner...', 'https://cdn.jiohealth.com/pharmacy/product/P01153G/P01153G_1_l.jpg?t=15', 'Mamamy wet wipes 30 pieces cool scent (Pink)', 'Mamamy wet wipes are made from imported 2-way non-woven fabric with a production process that complies with GMP standards.\r\nThick, soft, lint-free, high elasticity\r\nNatural grape sugar: Has a superior moisturizing effect, nourishes and softens the skin without causing irritation\r\nAntibacterial agent: Anti-rash, anti-heat rash, especially suitable for use on young children', 'Target Users:\r\nUsed for all objects\r\nDosage & Usage:\r\nUse 1 time\r\nDo not put dirty paper in the toilet\r\nAfter use, close the packaging to keep moisture and avoid bacteria', 'Preserve:\r\nAvoid direct sunlight.\r\nAvoid storing in high temperature places.', 'Fast delivery in 2 hours', '6578', 'Careful:\r\nDo not throw used tissues in the toilet', '', '2021-11-28 21:32:05', '2021-11-28 21:32:05'),
(9, 2, 'Pure mineral oil.', 'https://cdn.jiohealth.com/pharmacy/product/P01246C/P01246C_1_l.jpg?t=15', 'Johnson Baby Oil moisturizing massage oil 50ml', 'Johnson Baby Oil moisturizing massage oil 50ml belongs to the line of skin care products specifically for babies and babies. This is a famous product all over the world, researched and manufactured by Johnson & Johnson, a multinational corporation with extensive experience in the field of child care. Currently, Johnson Baby Oil 50ml moisturizing massage oil is being imported and distributed by Jio Pharmacy online pharmacy to Vietnamese consumers at affordable prices with guaranteed quality, safe for baby\'s health.', 'Target Users:\r\nBabies and young children\r\nDosage & Usage:\r\nApply directly to the area to be used.', 'Preserve:\r\nStore in a cool, dry place, away from direct sunlight.\r\nThe standard temperature is below 30 degrees Celsius and the humidity is not more than 70%.\r\nKeep out of reach of children.', 'Save 5% for Loyal Customers', '5674', 'Careful:\r\nPrecautions for use: For external use only.\r\nDo not use on open wounds.\r\nAvoid contact with eyes.\r\nKeep out of reach of CHILDREN.', '', '2021-11-28 21:32:05', '2021-11-28 21:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_size`
--

CREATE TABLE `packaging_size` (
  `id` int(11) NOT NULL,
  `type_quantitative` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `packaging_size`
--

INSERT INTO `packaging_size` (`id`, `type_quantitative`, `status`, `created_at`, `updated_at`) VALUES
(1, 'miligam', '', '2021-11-28 23:04:58', '2021-11-28 23:04:58'),
(2, 'boxes', '', '2021-11-28 23:04:58', '2021-11-28 23:04:58'),
(3, 'pill', '', '2021-11-28 23:04:58', '2021-11-28 23:04:58');

-- --------------------------------------------------------

--
-- Table structure for table `prices_packagings`
--

CREATE TABLE `prices_packagings` (
  `id` int(11) NOT NULL,
  `id_medicine_packaging_size` int(11) NOT NULL,
  `price` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `prices_packagings`
--

INSERT INTO `prices_packagings` (`id`, `id_medicine_packaging_size`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '90', '', '2021-11-28 23:23:56', '2021-11-28 23:23:56'),
(2, 2, '86', '', '2021-11-28 23:23:56', '2021-11-28 23:23:56'),
(3, 3, '56', '', '2021-11-28 23:23:56', '2021-11-28 23:23:56');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `code` text NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `effective_date` datetime NOT NULL,
  `expiration_date` datetime NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`id`, `name`, `code`, `description`, `quantity`, `effective_date`, `expiration_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 'FREESHIP', '3425225', 'Payment: All forms of payment\nShipping: Viettel Post, Fast Delivery, Economy Delivery, Fast VNPost, Economy VNPost, J&T Express, GrabExpress, Shopee Express, NowShip, Ninja Van, BEST Express, Shopee Express Bulky, Standard Express - Doora, Standard Express - LWE, Standard Express', 235, '2021-11-28 15:42:50', '2021-12-03 21:42:50', '', '2021-11-28 21:46:18', '2021-11-28 21:46:18'),
(2, 'TET15K', '889999', '$15,000 off\nMinimum application 1500,000 usd\nPayment: All forms of payment', 785, '2021-11-19 21:42:50', '2022-01-21 21:42:50', '', '2021-11-28 21:46:18', '2021-11-28 21:46:18'),
(3, '10K21', '5647744', 'Offer: Discount 10 usd Minimum Order 299usd', 77, '2021-11-28 15:42:50', '2021-12-31 21:45:15', '', '2021-11-28 21:46:18', '2021-11-28 21:46:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_employee` (`id_employee`);

--
-- Indexes for table `available_prescriptions`
--
ALTER TABLE `available_prescriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id_branch`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_branch` (`id_branch`),
  ADD KEY `id_group_employee` (`id_group_employee`),
  ADD KEY `id_card` (`id_card`);

--
-- Indexes for table `groups_employees`
--
ALTER TABLE `groups_employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups_medicines`
--
ALTER TABLE `groups_medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices_buys`
--
ALTER TABLE `invoices_buys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_branch` (`id_branch`),
  ADD KEY `id_employee` (`id_employee`);

--
-- Indexes for table `invoices_sells`
--
ALTER TABLE `invoices_sells`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_invoice_order` (`id_invoice_order`),
  ADD KEY `id_customer` (`id_customer`),
  ADD KEY `id_employee` (`id_employee`),
  ADD KEY `id_voucher` (`id_voucher`);

--
-- Indexes for table `inv_buys_medicines`
--
ALTER TABLE `inv_buys_medicines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_packaging_size` (`id_packaging_size`),
  ADD KEY `id_medicine` (`id_medicine`),
  ADD KEY `id_invoice_buy` (`id_invoice_buy`);

--
-- Indexes for table `inv_sells_medicnes`
--
ALTER TABLE `inv_sells_medicnes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_invoice_sell` (`id_invoice_sell`),
  ADD KEY `id_medicine` (`id_medicine`),
  ADD KEY `id_packaging_size` (`id_packaging_size`);

--
-- Indexes for table `mdc_avl_prescriptions`
--
ALTER TABLE `mdc_avl_prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_available_prescription` (`id_available_prescription`),
  ADD KEY `id_medicine` (`id_medicine`);

--
-- Indexes for table `mdc_packaging_sizes`
--
ALTER TABLE `mdc_packaging_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_branch` (`id_branch`),
  ADD KEY `id_packaging_size` (`id_packaging_size`),
  ADD KEY `id_medicine` (`id_medicine`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_group_medicine` (`id_group_medicine`);

--
-- Indexes for table `packaging_size`
--
ALTER TABLE `packaging_size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices_packagings`
--
ALTER TABLE `prices_packagings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_medicine_packaging_size` (`id_medicine_packaging_size`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `available_prescriptions`
--
ALTER TABLE `available_prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id_branch` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `groups_employees`
--
ALTER TABLE `groups_employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `groups_medicines`
--
ALTER TABLE `groups_medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `invoices_buys`
--
ALTER TABLE `invoices_buys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `invoices_sells`
--
ALTER TABLE `invoices_sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inv_buys_medicines`
--
ALTER TABLE `inv_buys_medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inv_sells_medicnes`
--
ALTER TABLE `inv_sells_medicnes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `mdc_avl_prescriptions`
--
ALTER TABLE `mdc_avl_prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `mdc_packaging_sizes`
--
ALTER TABLE `mdc_packaging_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `packaging_size`
--
ALTER TABLE `packaging_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `prices_packagings`
--
ALTER TABLE `prices_packagings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`id_group_employee`) REFERENCES `groups_employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`id_branch`) REFERENCES `branches` (`id_branch`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `invoices_buys`
--
ALTER TABLE `invoices_buys`
  ADD CONSTRAINT `invoices_buys_ibfk_1` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_buys_ibfk_2` FOREIGN KEY (`id_branch`) REFERENCES `branches` (`id_branch`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `invoices_sells`
--
ALTER TABLE `invoices_sells`
  ADD CONSTRAINT `invoices_sells_ibfk_1` FOREIGN KEY (`id_customer`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_sells_ibfk_2` FOREIGN KEY (`id_voucher`) REFERENCES `vouchers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_sells_ibfk_3` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inv_buys_medicines`
--
ALTER TABLE `inv_buys_medicines`
  ADD CONSTRAINT `inv_buys_medicines_ibfk_1` FOREIGN KEY (`id_invoice_buy`) REFERENCES `invoices_buys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inv_buys_medicines_ibfk_2` FOREIGN KEY (`id_medicine`) REFERENCES `medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inv_buys_medicines_ibfk_3` FOREIGN KEY (`id_packaging_size`) REFERENCES `packaging_size` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inv_sells_medicnes`
--
ALTER TABLE `inv_sells_medicnes`
  ADD CONSTRAINT `inv_sells_medicnes_ibfk_2` FOREIGN KEY (`id_medicine`) REFERENCES `medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inv_sells_medicnes_ibfk_3` FOREIGN KEY (`id_packaging_size`) REFERENCES `packaging_size` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mdc_avl_prescriptions`
--
ALTER TABLE `mdc_avl_prescriptions`
  ADD CONSTRAINT `mdc_avl_prescriptions_ibfk_1` FOREIGN KEY (`id_available_prescription`) REFERENCES `available_prescriptions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mdc_avl_prescriptions_ibfk_2` FOREIGN KEY (`id_medicine`) REFERENCES `medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mdc_packaging_sizes`
--
ALTER TABLE `mdc_packaging_sizes`
  ADD CONSTRAINT `mdc_packaging_sizes_ibfk_1` FOREIGN KEY (`id_medicine`) REFERENCES `medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mdc_packaging_sizes_ibfk_2` FOREIGN KEY (`id_branch`) REFERENCES `branches` (`id_branch`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mdc_packaging_sizes_ibfk_3` FOREIGN KEY (`id_packaging_size`) REFERENCES `packaging_size` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medicines`
--
ALTER TABLE `medicines`
  ADD CONSTRAINT `medicines_ibfk_1` FOREIGN KEY (`id_group_medicine`) REFERENCES `groups_medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `prices_packagings`
--
ALTER TABLE `prices_packagings`
  ADD CONSTRAINT `prices_packagings_ibfk_1` FOREIGN KEY (`id_medicine_packaging_size`) REFERENCES `mdc_packaging_sizes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
