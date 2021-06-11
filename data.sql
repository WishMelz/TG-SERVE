/*
 Navicat Premium Data Transfer

 Source Server         : TGsercer
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : gz-cynosdbmysql-grp-7xmn52d3.sql.tencentcdb.com:29817
 Source Schema         : tgserver

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : 65001

 Date: 11/06/2021 14:29:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userId` int(11) NOT NULL COMMENT '用户id',
  `key` varchar(255) NOT NULL COMMENT '生成的key',
  `first_name` varchar(255) NOT NULL COMMENT '昵称',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  PRIMARY KEY (`id`,`userId`,`key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
