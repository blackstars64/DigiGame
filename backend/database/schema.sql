CREATE TABLE `digimons` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `level` VARCHAR(15) NOT NULL
);

CREATE TABLE `users` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL UNIQUE,
  `email` VARCHAR(80)  NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) DEFAULT 'No description yet',
  `is_admin` BOOLEAN DEFAULT FALSE,
  `digi_point` INT DEFAULT '0',
  `register_date` DATE NOT NULL,
  `profile_img` INT DEFAULT '0'
);

CREATE TABLE `messages` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `message` VARCHAR(255) NOT NULL,
  `received` DATE NOT NULL,
  `users_id` INT
);

CREATE TABLE `collected` (
  `digimon_id` INT,
  `users_id` INT
);

ALTER TABLE `messages` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `collected` ADD FOREIGN KEY (`digimon_id`) REFERENCES `digimons` (`id`);

ALTER TABLE `collected` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);