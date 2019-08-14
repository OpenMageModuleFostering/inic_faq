<?php
/**
 * FAQ for Magento
 *
 * @category   Inic
 * @package    Inic_Faq
 * @copyright  Copyright (c) 2013 Indianic
 */

$installer = $this;

$installer->startSetup();

$installer->run("
-- DROP TABLE IF EXISTS {$this->getTable('faq/faq')};
CREATE TABLE IF NOT EXISTS {$this->getTable('faq/faq')} (
  `faq_id` int(10) unsigned NOT NULL auto_increment,
  `question` tinytext NOT NULL default '',
  `answer` text NOT NULL default '',
  `creation_time` datetime default NULL,
  `update_time` datetime default NULL,
  `is_active` tinyint(1) NOT NULL default '1',
  `is_most_frequent` tinyint(1) NOT NULL default '1',
  PRIMARY KEY  (`faq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='FAQ items' AUTO_INCREMENT=1 ;

-- DROP TABLE IF EXISTS {$this->getTable('faq/faq_store')};
CREATE TABLE `{$this->getTable('faq/faq_store')}` (
  `faq_id` int(10) unsigned NOT NULL,
  `store_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`faq_id`,`store_id`),
  CONSTRAINT `FK_FAQ_FAQ_STORE_FAQ` FOREIGN KEY (`faq_id`) REFERENCES `{$this->getTable('faq/faq')}` (`faq_id`) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT `FK_FAQ_FAQ_STORE_STORE` FOREIGN KEY (`store_id`) REFERENCES `{$this->getTable('core/store')}` (`store_id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='FAQ items to Stores';
");

$installer->endSetup();
