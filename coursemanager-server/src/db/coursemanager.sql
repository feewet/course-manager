DROP DATABASE IF EXISTS coursemanager;
CREATE DATABASE IF NOT EXISTS coursemanager;
USE coursemanager;

CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `...` (`course_id`),
  CONSTRAINT `...` FOREIGN KEY (`course_id`) 
  REFERENCES `course` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `...` (`module_id`),
  CONSTRAINT `...` FOREIGN KEY (`module_id`) 
  REFERENCES `module` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `course`
(`created`,`modified`,`title`)
VALUES
('2018-01-01','2018-02-02','CS5610');

INSERT INTO `course`
(`created`,`modified`,`title`)
VALUES
('2018-02-03','2018-03-04','CS5200');

INSERT INTO `module`
(`title`, `course_id`)
VALUES
("module", 1)