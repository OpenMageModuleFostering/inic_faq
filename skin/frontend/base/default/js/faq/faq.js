/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    design
 * @package     base_default
 * @copyright   Copyright (c) 2013 Inic
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
function setAllQuesTr(){
	var parent_detail = $$(".faq-grid-list");
	for(var x=0;x<parent_detail.length;x++)
	{
		var prd_detail = parent_detail[x].getElementsByClassName("faq-question");
		var height=0;
		for(var i=0;i<prd_detail.length;i++){
			if(parseInt(height)<parseInt(prd_detail[i].clientHeight)) {
				height = prd_detail[i].clientHeight;
			}
		}
		for(i=0;i<prd_detail.length;i++){
			if(height!=0){
				prd_detail[i].style.height=height+"px";
			}
		}
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

function expand(linkele){
	if(linkele.innerHTML=="Expand All"){
		linkele.innerHTML="Collaps All";
		$('expand-collaps').addClassName("collaps");
		$('expand-collaps').removeClassName("expand");
	}else{
		linkele.innerHTML="Expand All";
		$('expand-collaps').addClassName("expand");
		$('expand-collaps').removeClassName("collaps");
	}
	
	$$('.faq-question').each(function(element) {
		element.next().toggle();
	})
}
addLoadEvent(setAllQuesTr);