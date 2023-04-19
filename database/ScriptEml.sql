/*
Navicat MySQL Data Transfer

Source Server         : MySQL8
Source Server Version : 80026
Source Host           : 127.0.0.1:3316
Source Database       : ems

Target Server Type    : MYSQL
Target Server Version : 80026
File Encoding         : 65001

Date: 2023-04-19 06:57:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
`id`  bigint UNSIGNED NOT NULL AUTO_INCREMENT ,
`uuid`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`connection`  text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`queue`  text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`payload`  longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`exception`  longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`failed_at`  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (`id`),
UNIQUE INDEX `failed_jobs_uuid_unique` (`uuid`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
`id`  int UNSIGNED NOT NULL AUTO_INCREMENT ,
`migration`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`batch`  int NOT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=5

;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1'), ('2', '2014_10_12_100000_create_password_resets_table', '2'), ('3', '2019_08_19_000000_create_failed_jobs_table', '2'), ('4', '2019_12_14_000001_create_personal_access_tokens_table', '2'), ('5', '2022_10_03_211757_create_permission_tables', '2');
COMMIT;

-- ----------------------------
-- Table structure for model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE `model_has_permissions` (
`permission_id`  bigint UNSIGNED NOT NULL ,
`model_type`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`model_id`  bigint UNSIGNED NOT NULL ,
PRIMARY KEY (`permission_id`, `model_id`, `model_type`),
FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
INDEX `model_has_permissions_model_id_model_type_index` (`model_id`, `model_type`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of model_has_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE `model_has_roles` (
`role_id`  bigint UNSIGNED NOT NULL ,
`model_type`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`model_id`  bigint UNSIGNED NOT NULL ,
PRIMARY KEY (`role_id`, `model_id`, `model_type`),
FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
INDEX `model_has_roles_model_id_model_type_index` (`model_id`, `model_type`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of model_has_roles
-- ----------------------------
BEGIN;
INSERT INTO `model_has_roles` VALUES ('1', 'App\\Models\\User', '1'), ('2', 'App\\Models\\User', '2'), ('2', 'App\\Models\\User', '4'), ('2', 'App\\Models\\User', '5'), ('2', 'App\\Models\\User', '8'), ('1', 'App\\Models\\User', '9'), ('2', 'App\\Models\\User', '9'), ('2', 'App\\Models\\User', '10'), ('2', 'App\\Models\\User', '11'), ('2', 'App\\Models\\User', '12'), ('2', 'App\\Models\\User', '13');
COMMIT;

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
`email`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`token`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`created_at`  timestamp NULL DEFAULT NULL ,
INDEX `password_resets_email_index` (`email`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
`id`  bigint UNSIGNED NOT NULL AUTO_INCREMENT ,
`name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`guard_name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`created_at`  timestamp NULL DEFAULT NULL ,
`updated_at`  timestamp NULL DEFAULT NULL ,
PRIMARY KEY (`id`),
UNIQUE INDEX `permissions_name_guard_name_unique` (`name`, `guard_name`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=59

;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
INSERT INTO `permissions` VALUES ('22', 'delete_user', 'web', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('23', 'create_user', 'web', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('24', 'create_user', 'create_user', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('25', 'index_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('26', 'destroy_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('27', 'store_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('28', 'update_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('29', 'edit_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('30', 'show_user', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('31', 'index_role', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('32', 'destroy_role', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('33', 'store_role', 'web', '2022-10-04 21:32:42', '2022-10-04 21:32:42'), ('34', 'update_role', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('35', 'edit_role', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('36', 'show_role', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('37', 'index_permission', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('38', 'store_permission', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('39', 'update_permission', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('40', 'edit_permission', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('41', 'show_permission', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43'), ('51', 'index_user', 'index_user', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('52', 'show_user', 'show_user', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('53', 'index_role', 'index_role', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('54', 'show_role', 'show_role', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('55', 'index_permission', 'index_permission', '2022-10-04 21:32:45', '2022-10-04 21:32:45'), ('56', 'show_permission', 'show_permission', '2022-10-04 21:32:45', '2022-10-04 21:32:45');
COMMIT;

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
`id`  bigint UNSIGNED NOT NULL AUTO_INCREMENT ,
`tokenable_type`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`tokenable_id`  bigint UNSIGNED NOT NULL ,
`name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`token`  varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`abilities`  text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL ,
`last_used_at`  timestamp NULL DEFAULT NULL ,
`created_at`  timestamp NULL DEFAULT NULL ,
`updated_at`  timestamp NULL DEFAULT NULL ,
PRIMARY KEY (`id`),
UNIQUE INDEX `personal_access_tokens_token_unique` (`token`) USING BTREE ,
INDEX `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`, `tokenable_id`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE `role_has_permissions` (
`permission_id`  bigint UNSIGNED NOT NULL ,
`role_id`  bigint UNSIGNED NOT NULL ,
PRIMARY KEY (`permission_id`, `role_id`),
FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
INDEX `role_has_permissions_role_id_foreign` (`role_id`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci

;

-- ----------------------------
-- Records of role_has_permissions
-- ----------------------------
BEGIN;
INSERT INTO `role_has_permissions` VALUES ('22', '1'), ('23', '1'), ('24', '1'), ('25', '1'), ('26', '1'), ('27', '1'), ('28', '1'), ('29', '1'), ('30', '1'), ('31', '1'), ('32', '1'), ('33', '1'), ('34', '1'), ('35', '1'), ('36', '1'), ('37', '1'), ('38', '1'), ('39', '1'), ('40', '1'), ('41', '1'), ('22', '2'), ('25', '2'), ('30', '2'), ('31', '2'), ('36', '2'), ('37', '2'), ('41', '2');
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
`id`  bigint UNSIGNED NOT NULL AUTO_INCREMENT ,
`name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`guard_name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`created_at`  timestamp NULL DEFAULT NULL ,
`updated_at`  timestamp NULL DEFAULT NULL ,
PRIMARY KEY (`id`),
UNIQUE INDEX `roles_name_guard_name_unique` (`name`, `guard_name`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=2

;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('1', 'Admin', 'web', '2022-10-04 21:32:39', '2022-10-04 21:32:39'), ('2', 'Basico', 'web', '2022-10-04 21:32:43', '2022-10-04 21:32:43');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
`id`  bigint UNSIGNED NOT NULL AUTO_INCREMENT ,
`name`  varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`lastname`  varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`phone`  varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL ,
`email`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`email_verified_at`  timestamp NULL DEFAULT NULL ,
`password`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
`remember_token`  varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL ,
`created_at`  timestamp NULL DEFAULT NULL ,
`updated_at`  timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP ,
`deleted_at`  timestamp NULL DEFAULT NULL ,
PRIMARY KEY (`id`),
UNIQUE INDEX `users_email_unique` (`email`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=13

;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'Administrador', '', '30033333', 'admin@eml.com', null, '$2y$10$iXqb7yFR8LCWc5u.LscQEe/0T48Rz1uT0JKMNSZ1Hjts8uCZinihC', 'V0tRPUyoreFALT3UYsXyvNsHaE7C0mGlwE39fWMhVLTsgFct4RJYRmDv74BE', '2022-10-04 21:32:39', '2023-04-16 22:03:34', null), ('2', 'Basico', '', '31133333', 'basico@eml.com', null, '$2y$10$26OJJdU5DMO0lUKCD9WlluRZ.Mj.IZJGJ2QfqsGYhwHzlpSBKd4k.', null, '2022-10-04 21:32:44', '2023-04-16 12:43:43', null), ('4', 'Juan', 'Medina S', '3001234567', 'juan@eml.com', null, 'juan123456', null, '2023-04-16 14:42:55', '2023-04-16 15:07:14', null), ('5', 'Camilo', 'Valbuena S', '3111234567', 'camilo@eml.com', null, '$2y$10$9RtkN4UTuWOibARjtL7.euoX/Y3YH/MXwq0aSZlExaBAeD/KRFC0O', null, '2023-04-16 15:57:08', '2023-04-16 15:21:24', null), ('8', 'sandra', 'valb', '300', 'sandra@eml.com', null, '$2y$10$GzHIIsvF/WUstUqg9AmFj.SvlJVwRz3Hi5viJZC.N7aOrkzVj5iYq', null, '2023-04-16 23:39:38', '2023-04-16 23:39:38', null), ('9', 'carlos', 'gomez b', '123', 'caadmin@eml.com', null, '$2y$10$/rKMu8Zt8pjjHWqaN6cutuT9jZyHRplnwz5hsxKNlQiksgJX/KZ/e', null, '2023-04-16 23:40:35', '2023-04-17 01:55:37', '2023-04-17 01:55:37'), ('11', 'yese', 'Medina', '300', 'yese@eml.com', null, '$2y$10$suHPqqq2Z6NpxwDT/Q13ceqAou7sNRzbivZrmAS0tf9RS8DWm6lC6', null, '2023-04-17 00:29:04', '2023-04-17 01:59:52', '2023-04-17 01:59:52'), ('13', 'prueba', 'prueba', null, 'prueba@eml.com', null, '$2y$10$3p4fpaflw9dw93nNraT5p.6XQ4KqAgkGV4crNUgr9EfrJNJHFugUi', null, '2023-04-17 02:18:48', '2023-04-17 02:18:48', null);
COMMIT;

-- ----------------------------
-- Auto increment value for migrations
-- ----------------------------
ALTER TABLE `migrations` AUTO_INCREMENT=5;

-- ----------------------------
-- Auto increment value for permissions
-- ----------------------------
ALTER TABLE `permissions` AUTO_INCREMENT=59;

-- ----------------------------
-- Auto increment value for roles
-- ----------------------------
ALTER TABLE `roles` AUTO_INCREMENT=2;

-- ----------------------------
-- Auto increment value for users
-- ----------------------------
ALTER TABLE `users` AUTO_INCREMENT=13;
