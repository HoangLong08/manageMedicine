-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2021 at 06:12 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `id_branch` int(11) NOT NULL,
  `id_group_employee` int(11) NOT NULL,
  `email` text NOT NULL,
  `name` text NOT NULL,
  `avatar` text NOT NULL,
  `address` text NOT NULL,
  `id_card` int(11) NOT NULL,
  `status` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices_sells`
--
ALTER TABLE `invoices_sells`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inv_sells_medicnes`
--
ALTER TABLE `inv_sells_medicnes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mdc_avl_prescriptions`
--
ALTER TABLE `mdc_avl_prescriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mdc_packaging_sizes`
--
ALTER TABLE `mdc_packaging_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging_size`
--
ALTER TABLE `packaging_size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices_packagings`
--
ALTER TABLE `prices_packagings`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `available_prescriptions`
--
ALTER TABLE `available_prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id_branch` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `groups_employees`
--
ALTER TABLE `groups_employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `groups_medicines`
--
ALTER TABLE `groups_medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices_buys`
--
ALTER TABLE `invoices_buys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices_sells`
--
ALTER TABLE `invoices_sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inv_sells_medicnes`
--
ALTER TABLE `inv_sells_medicnes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mdc_avl_prescriptions`
--
ALTER TABLE `mdc_avl_prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mdc_packaging_sizes`
--
ALTER TABLE `mdc_packaging_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `packaging_size`
--
ALTER TABLE `packaging_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prices_packagings`
--
ALTER TABLE `prices_packagings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
