## 字节难度的sql知识
经典关系型数据库
写一条sql sql语句，创建表avator 用户头像
CREATE TABLE `avatar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mimetype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


- 评论表
CREATE TABLE `comment` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `userId` int(11) NOT NULL,
    `articleId` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    KEY `articleId` (`articleId`),
    CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`articleId`) REFERENCES `article` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- 索引,要建为了查询的效率但是也不能乱建
普通索引userId,对应上,如果没有的话就需要全部查询


- 作为一家公司最大的负担是用户表
    - 字段一般就在2-3个
    自增id name 手机号

- 命令台操作
    
    
