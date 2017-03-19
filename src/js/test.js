import testUtil from './utilities/testUtil';
import $ from 'jquery';
import jQuery from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

var util = new testUtil();
util.testMethod()
$('#test-jquery').text('hello world - jquery');