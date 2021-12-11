/* Date:1-6-2021 */

CREATE TABLE `publishers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` text,
  `password` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` enum('superadmin','admin') DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Date:14-06-2021 */
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_designation` varchar(100) NOT NULL,
  `author_name` varchar(100) NOT NULL,
  `author_bio` longtext NOT NULL,
  `author_img` text NOT NULL,
  `author_url` varchar(100) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
);