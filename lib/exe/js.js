var DOKU_BASE   = '/';var DOKU_TPL    = '/lib/tpl/bootstrap3/';var DOKU_COOKIE_PARAM = {"path":"\/","secure":false};Object.defineProperty(window, 'DOKU_UHN', { get: function() {console.warn('Using DOKU_UHN is deprecated. Please use JSINFO.useHeadingNavigation instead');return JSINFO.useHeadingNavigation; } });Object.defineProperty(window, 'DOKU_UHC', { get: function() {console.warn('Using DOKU_UHC is deprecated. Please use JSINFO.useHeadingContent instead');return JSINFO.useHeadingContent; } });LANG = {"search_toggle_tools":"\u691c\u7d22\u30c4\u30fc\u30eb\u3092\u8868\u793a\uff0f\u975e\u8868\u793a","willexpire":"\u7de8\u96c6\u4e2d\u306e\u6587\u66f8\u306e\u30ed\u30c3\u30af\u304c\u3001\u9593\u3082\u306a\u304f\u671f\u9650\u5207\u308c\u3068\u306a\u308a\u307e\u3059\u3002\\n\u7de8\u96c6\u306e\u7af6\u5408\u3092\u9632\u3050\u306b\u306f\u3001\u4e00\u5ea6\u300c\u30d7\u30ec\u30d3\u30e5\u30fc\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30ed\u30c3\u30af\u671f\u9650\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002","notsavedyet":"\u4fdd\u5b58\u3057\u3066\u3044\u306a\u3044\u5909\u66f4\u306f\u5931\u308f\u308c\u307e\u3059\u3002","searchmedia":"\u30d5\u30a1\u30a4\u30eb\u691c\u7d22","keepopen":"\u9078\u629e\u4e2d\u306f\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u9589\u3058\u306a\u3044","hidedetails":"\u8a73\u7d30\u3092\u975e\u8868\u793a","mediatitle":"\u30ea\u30f3\u30af\u8a2d\u5b9a","mediadisplay":"\u30ea\u30f3\u30af\u306e\u30bf\u30a4\u30d7","mediaalign":"\u4f4d\u7f6e","mediasize":"\u30a4\u30e1\u30fc\u30b8\u30b5\u30a4\u30ba","mediatarget":"\u30ea\u30f3\u30af\u5148","mediaclose":"\u9589\u3058\u308b","mediainsert":"\u633f\u5165","mediadisplayimg":"\u30a4\u30e1\u30fc\u30b8\u3092\u8868\u793a","mediadisplaylnk":"\u30ea\u30f3\u30af\u306e\u307f\u8868\u793a","mediasmall":"\u5c0f\u3055\u3044\u30b5\u30a4\u30ba","mediamedium":"\u901a\u5e38\u30b5\u30a4\u30ba","medialarge":"\u5927\u304d\u3044\u30b5\u30a4\u30ba","mediaoriginal":"\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30b5\u30a4\u30ba","medialnk":"\u8a73\u7d30\u30da\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af","mediadirect":"\u30aa\u30ea\u30b8\u30ca\u30eb\u3078\u306e\u76f4\u30ea\u30f3\u30af","medianolnk":"\u30ea\u30f3\u30af\u7121\u3057","medianolink":"\u753b\u50cf\u3078\u30ea\u30f3\u30af\u3057\u306a\u3044","medialeft":"\u753b\u50cf\u3092\u5de6\u306b\u5bc4\u305b\u308b","mediaright":"\u753b\u50cf\u3092\u53f3\u306b\u5bc4\u305b\u308b","mediacenter":"\u753b\u50cf\u3092\u4e2d\u592e\u306b\u5bc4\u305b\u308b","medianoalign":"\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3057\u306a\u3044","nosmblinks":"Windows \u306e\u5171\u6709\u30d5\u30a9\u30eb\u30c0\u3078\u30ea\u30f3\u30af\u306f Microsoft Internet Explorer \u3067\u3057\u304b\u6a5f\u80fd\u3057\u307e\u305b\u3093\u304c\u3001\u30ea\u30f3\u30af\u3092\u30b3\u30d4\u30fc\u3057\u3066\u8cbc\u308a\u4ed8\u3051\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u3002","linkwiz":"\u30ea\u30f3\u30af\u30a6\u30a3\u30b6\u30fc\u30c9","linkto":"\u30ea\u30f3\u30af\u5148\uff1a","del_confirm":"\u9078\u629e\u3057\u305f\u9805\u76ee\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f","restore_confirm":"\u672c\u5f53\u306b\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5fa9\u5143\u3057\u307e\u3059\u304b?","media_diff":"\u5dee\u5206\u306e\u8868\u793a\u65b9\u6cd5:","media_diff_both":"\u4e26\u3079\u3066\u8868\u793a","media_diff_opacity":"\u91cd\u306d\u3066\u900f\u904e\u8868\u793a","media_diff_portions":"\u91cd\u306d\u3066\u5207\u66ff\u8868\u793a","media_select":"\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e...","media_upload_btn":"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","media_done_btn":"\u5b8c\u4e86","media_drop":"\u3053\u3053\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059","media_cancel":"\u524a\u9664","media_overwrt":"\u65e2\u5b58\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4e0a\u66f8\u304d\u3059\u308b","data_insecure":"WARNING: It seems your data directory is not properly secured. Please read about <a href=\"https:\/\/www.dokuwiki.org\/security#web_access_security\">Web Access Security in DokuWiki<\/a>.","plugins":{"extension":{"reallydel":"\u3053\u306e\u62e1\u5f35\u6a5f\u80fd\u3092\u672c\u5f53\u306b\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u304b\uff1f","display_viewoptions":"\u8868\u793a\u30aa\u30d7\u30b7\u30e7\u30f3\uff1a ","display_enabled":"\u6709\u52b9","display_disabled":"\u7121\u52b9","display_updatable":"\u66f4\u65b0\u53ef\u80fd"},"indexmenu":{"indexmenuwizard":"Indexmenu\u30a6\u30a3\u30b6\u30fc\u30c9","index":"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9","options":"\u30aa\u30d7\u30b7\u30e7\u30f3","navigation":"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3","sort":"\u30bd\u30fc\u30c8","filter":"\u30d5\u30a3\u30eb\u30bf\u30fc","performance":"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9","namespace":"\u540d\u524d\u7a7a\u9593","nsdepth":"\u6df1\u5ea6","js":"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30c4\u30ea\u30fc\u306f\u3001Javasript\u306b\u3088\u3063\u3066\u72ec\u81ea\u306e\u30c6\u30fc\u30de\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059","theme":"\u30c6\u30fc\u30de","navbar":"\u73fe\u5728\u306e\u540d\u524d\u7a7a\u9593\u3067\u30c4\u30ea\u30fc\u3092\u958b\u304d\u307e\u3059\u3002","context":"\u540d\u524d\u7a7a\u9593\u304b\u3089\u30c4\u30ea\u30fc\u3092\u958b\u59cb\u3055\u305b\u307e\u3059","nocookie":"\u30e6\u30fc\u30b6\u30fc\u64cd\u4f5c\u7d50\u679c\u306e\u30ce\u30fc\u30c9\u306e\u958b\u9589\u3092\u8a18\u61b6\u3057\u307e\u305b\u3093\u3002","noscroll":"\u30b3\u30f3\u30c6\u30ca\u306e\u5e45\u306b\u5408\u308f\u306a\u3044\u5834\u5408\u3001\u30c4\u30ea\u30fc\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002","notoc":"\u76ee\u6b21\u30d7\u30ec\u30d3\u30e5\u30fc\u6a5f\u80fd\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002","tsort":"\u30bf\u30a4\u30c8\u30eb\u9806","dsort":"\u65e5\u4ed8\u9806","msort":"\u30e1\u30bf\u30fb\u30bf\u30b0\u9806","nsort":"\u540d\u524d\u7a7a\u9593\u3082\u30bd\u30fc\u30c8\u3059\u308b","hsort":"Sort headpage up","rsort":"\u30da\u30fc\u30b8\u30bd\u30fc\u30c8\u3092\u9006\u9806\u306b\u3059\u308b","nons":"\u30da\u30fc\u30b8\u306e\u307f\u8868\u793a","nopg":"\u540d\u524d\u7a7a\u9593\u306e\u307f\u8868\u793a","max":"How many levels to render with ajax when a node is opened. Additional are how many sublevels below that level are retrieved with AJAX instead of in one go. ","maxjs":"How many levels to render in the client browser when a node is opened","id":"Self defined cookie id for this indexmenu","insert":"Indexmenu\u306e\u633f\u5165","metanum":"\u30bd\u30fc\u30c8\u7528\u306e Meta number","insertmetanum":"Meta number \u306e\u8ffd\u52a0","page":"\u30da\u30fc\u30b8","revs":"\u5c65\u6b74","tocpreview":"\u76ee\u6b21\u30d7\u30ec\u30d3\u30e5\u30fc","editmode":"\u7de8\u96c6\u30e2\u30fc\u30c9","insertdwlink":"Insert as DWlink","insertdwlinktooltip":"Insert the link of this page in the edit box at cursor position","ns":"\u540d\u524d\u7a7a\u9593","search":"\u691c\u7d22\u4e2d\u2026","searchtooltip":"\u3053\u306e\u540d\u524d\u7a7a\u9593\u5185\u306e\u30da\u30fc\u30b8\u3092\u691c\u7d22\u3059\u308b\u3002","create":"\u4f5c\u6210","more":"More","headpage":"\u30d8\u30c3\u30c9\u30da\u30fc\u30b8","headpagetooltip":"Create a new headpage under this page","startpage":"\u30b9\u30bf\u30fc\u30c8\u30da\u30fc\u30b8","startpagetooltip":"\u3053\u306e\u30da\u30fc\u30b8\u306e\u4e0b\u306b\u65b0\u898f\u30b9\u30bf\u30fc\u30c8\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b","custompage":"Custom page...","custompagetooltip":"\u3053\u306e\u30da\u30fc\u30b8\u306e\u4e0b\u306b\u65b0\u898f\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b","acls":"Acls","purgecache":"\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30af\u30ea\u30a2","exporthtml":"HTML \u3067\u51fa\u529b\u3059\u308b","exporttext":"\u30c6\u30ad\u30b9\u30c8\u3067\u51fa\u529b\u3059\u308b","headpagehere":"Headpage here","headpageheretooltip":"\u3053\u306e\u540d\u524d\u7a7a\u9593\u5185\u306b\u65b0\u898f\u30d8\u30c3\u30c9\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b","newpage":"\u65b0\u898f\u30da\u30fc\u30b8","newpagetooltip":"\u3053\u306e\u540d\u524d\u7a7a\u9593\u5185\u306b\u65b0\u898f\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b","newpagehere":"New page here","insertkeywords":"Insert keyword(s) to search for within this namespace","insertpagename":"Insert the pagename to create","edit":"\u7de8\u96c6","loading":"Loading..."},"logviewer":{"filter":"Filter Loglines:"},"move":{"rename":"\u540d\u79f0\u5909\u66f4","cancel":"\u4e2d\u6b62","newname":"\u65b0\u30da\u30fc\u30b8\u540d\uff1a ","inprogress":"\u30da\u30fc\u30b8\u306e\u540d\u79f0\u5909\u66f4\u30fb\u30ea\u30f3\u30af\u306e\u66f8\u304d\u63db\u3048\u4e2d\u2026","complete":"\u540d\u79f0\u5909\u66f4\u64cd\u4f5c\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002","renameitem":"\u3053\u306e\u9805\u76ee\u3092\u540d\u79f0\u5909\u66f4\u3057\u307e\u3059\u3002","add":"\u65b0\u3057\u3044\u540d\u524d\u7a7a\u9593\u306e\u4f5c\u6210","duplicate":"\"%s\" \u306f\u3053\u306e\u540d\u524d\u7a7a\u9593\u5185\u306b\u65e2\u306b\u5b58\u5728\u3057\u307e\u3059\u3002"},"siteexport":{"loadingpage":"\u8aad\u307f\u8fbc\u307f","startdownload":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u958b\u59cb\u3059\u308b","downloadfinished":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u7d42\u4e86\u3057\u305f","finishedbutdownloadfailed":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5931\u6557\u3057\u305f"},"styling":{"loader":"\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u8aad\u8fbc\u307f\u4e2d\u3067\u3059\u30fb\u30fb\u30fb<br\/>\u3053\u306e\u8868\u793a\u304c\u6d88\u3048\u306a\u3044\u5834\u5408\u3001\u5909\u66f4\u3057\u305f\u8a2d\u5b9a\u5024\u306b\u554f\u984c\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002","popup":"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3068\u3057\u3066\u8868\u793a"}}};
var toolbar = [{"type":"format","title":"\u592a\u5b57","icon":"bold.png","key":"b","open":"**","close":"**","block":false},{"type":"format","title":"\u659c\u4f53","icon":"italic.png","key":"i","open":"\/\/","close":"\/\/","block":false},{"type":"format","title":"\u4e0b\u7dda","icon":"underline.png","key":"u","open":"__","close":"__","block":false},{"type":"format","title":"\u7b49\u5e45","icon":"mono.png","key":"m","open":"''","close":"''","block":false},{"type":"format","title":"\u6253\u6d88\u7dda","icon":"strike.png","key":"d","open":"<del>","close":"<\/del>","block":false},{"type":"autohead","title":"\u540c\u3058\u968e\u5c64\u306e\u898b\u51fa\u3057","icon":"hequal.png","key":"8","text":"\u898b\u51fa\u3057","mod":0,"block":true},{"type":"autohead","title":"\u4e0b\u306e\u968e\u5c64\u306e\u898b\u51fa\u3057","icon":"hminus.png","key":"9","text":"\u898b\u51fa\u3057","mod":1,"block":true},{"type":"autohead","title":"\u4e0a\u306e\u968e\u5c64\u306e\u898b\u51fa\u3057","icon":"hplus.png","key":"0","text":"\u898b\u51fa\u3057","mod":-1,"block":true},{"type":"picker","title":"\u898b\u51fa\u3057\uff08\u968e\u5c64\u3092\u9078\u629e\uff09","icon":"h.png","class":"pk_hl","list":[{"type":"format","title":"\u7b2c\u4e00\u898b\u51fa\u3057","icon":"h1.png","key":"1","open":"====== ","close":" ======\\n"},{"type":"format","title":"\u7b2c\u4e8c\u898b\u51fa\u3057","icon":"h2.png","key":"2","open":"===== ","close":" =====\\n"},{"type":"format","title":"\u7b2c\u4e09\u898b\u51fa\u3057","icon":"h3.png","key":"3","open":"==== ","close":" ====\\n"},{"type":"format","title":"\u7b2c\u56db\u898b\u51fa\u3057","icon":"h4.png","key":"4","open":"=== ","close":" ===\\n"},{"type":"format","title":"\u7b2c\u4e94\u898b\u51fa\u3057","icon":"h5.png","key":"5","open":"== ","close":" ==\\n"}],"block":true},{"type":"linkwiz","title":"\u5185\u90e8\u30ea\u30f3\u30af","icon":"link.png","key":"l","open":"[[","close":"]]","block":false},{"type":"format","title":"\u5916\u90e8\u30ea\u30f3\u30af","icon":"linkextern.png","open":"[[","close":"]]","sample":"http:\/\/example.com|\u5916\u90e8\u30ea\u30f3\u30af","block":false},{"type":"formatln","title":"\u8a18\u53f7\u4ed8\u304d\u30ea\u30b9\u30c8","icon":"ol.png","open":"  - ","close":"","key":"-","block":true},{"type":"formatln","title":"\u8a18\u53f7\u306a\u3057\u30ea\u30b9\u30c8","icon":"ul.png","open":"  * ","close":"","key":".","block":true},{"type":"insert","title":"\u6a2a\u7f6b\u7dda","icon":"hr.png","insert":"\\n----\\n","block":true},{"type":"mediapopup","title":"\u30a4\u30e1\u30fc\u30b8\u3084\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0\uff08\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u958b\u304d\u307e\u3059\uff09","icon":"image.png","url":"lib\/exe\/mediamanager.php?ns=","name":"mediaselect","options":"width=750,height=500,left=20,top=20,scrollbars=yes,resizable=yes","block":false},{"type":"picker","title":"\u30b9\u30de\u30a4\u30ea\u30fc","icon":"smiley.png","list":{"8-)":"cool.svg","8-O":"eek.svg","8-o":"eek.svg",":-(":"sad.svg",":-)":"smile.svg","=)":"smile2.svg",":-\/":"doubt.svg",":-\\":"doubt2.svg",":-?":"confused.svg",":-D":"biggrin.svg",":-P":"razz.svg",":-o":"surprised.svg",":-O":"surprised.svg",":-x":"silenced.svg",":-X":"silenced.svg",":-|":"neutral.svg",";-)":"wink.svg","m(":"facepalm.svg","^_^":"fun.svg",":?:":"question.svg",":!:":"exclaim.svg","LOL":"lol.svg","FIXME":"fixme.svg","DELETEME":"deleteme.svg"},"icobase":"smileys","block":false},{"type":"picker","title":"\u7279\u6b8a\u6587\u5b57","icon":"chars.png","list":["\u00c0","\u00e0","\u00c1","\u00e1","\u00c2","\u00e2","\u00c3","\u00e3","\u00c4","\u00e4","\u01cd","\u01ce","\u0102","\u0103","\u00c5","\u00e5","\u0100","\u0101","\u0104","\u0105","\u00c6","\u00e6","\u0106","\u0107","\u00c7","\u00e7","\u010c","\u010d","\u0108","\u0109","\u010a","\u010b","\u00d0","\u0111","\u00f0","\u010e","\u010f","\u00c8","\u00e8","\u00c9","\u00e9","\u00ca","\u00ea","\u00cb","\u00eb","\u011a","\u011b","\u0112","\u0113","\u0116","\u0117","\u0118","\u0119","\u0122","\u0123","\u011c","\u011d","\u011e","\u011f","\u0120","\u0121","\u0124","\u0125","\u00cc","\u00ec","\u00cd","\u00ed","\u00ce","\u00ee","\u00cf","\u00ef","\u01cf","\u01d0","\u012a","\u012b","\u0130","\u0131","\u012e","\u012f","\u0134","\u0135","\u0136","\u0137","\u0139","\u013a","\u013b","\u013c","\u013d","\u013e","\u0141","\u0142","\u013f","\u0140","\u0143","\u0144","\u00d1","\u00f1","\u0145","\u0146","\u0147","\u0148","\u00d2","\u00f2","\u00d3","\u00f3","\u00d4","\u00f4","\u00d5","\u00f5","\u00d6","\u00f6","\u01d1","\u01d2","\u014c","\u014d","\u0150","\u0151","\u0152","\u0153","\u00d8","\u00f8","\u0154","\u0155","\u0156","\u0157","\u0158","\u0159","\u015a","\u015b","\u015e","\u015f","\u0160","\u0161","\u015c","\u015d","\u0162","\u0163","\u0164","\u0165","\u00d9","\u00f9","\u00da","\u00fa","\u00db","\u00fb","\u00dc","\u00fc","\u01d3","\u01d4","\u016c","\u016d","\u016a","\u016b","\u016e","\u016f","\u01d6","\u01d8","\u01da","\u01dc","\u0172","\u0173","\u0170","\u0171","\u0174","\u0175","\u00dd","\u00fd","\u0178","\u00ff","\u0176","\u0177","\u0179","\u017a","\u017d","\u017e","\u017b","\u017c","\u00de","\u00fe","\u00df","\u0126","\u0127","\u00bf","\u00a1","\u00a2","\u00a3","\u00a4","\u00a5","\u20ac","\u00a6","\u00a7","\u00aa","\u00ac","\u00af","\u00b0","\u00b1","\u00f7","\u2030","\u00bc","\u00bd","\u00be","\u00b9","\u00b2","\u00b3","\u00b5","\u00b6","\u2020","\u2021","\u00b7","\u2022","\u00ba","\u2200","\u2202","\u2203","\u018f","\u0259","\u2205","\u2207","\u2208","\u2209","\u220b","\u220f","\u2211","\u203e","\u2212","\u2217","\u00d7","\u2044","\u221a","\u221d","\u221e","\u2220","\u2227","\u2228","\u2229","\u222a","\u222b","\u2234","\u223c","\u2245","\u2248","\u2260","\u2261","\u2264","\u2265","\u2282","\u2283","\u2284","\u2286","\u2287","\u2295","\u2297","\u22a5","\u22c5","\u25ca","\u2118","\u2111","\u211c","\u2135","\u2660","\u2663","\u2665","\u2666","\u03b1","\u03b2","\u0393","\u03b3","\u0394","\u03b4","\u03b5","\u03b6","\u03b7","\u0398","\u03b8","\u03b9","\u03ba","\u039b","\u03bb","\u03bc","\u039e","\u03be","\u03a0","\u03c0","\u03c1","\u03a3","\u03c3","\u03a4","\u03c4","\u03c5","\u03a6","\u03c6","\u03c7","\u03a8","\u03c8","\u03a9","\u03c9","\u2605","\u2606","\u260e","\u261a","\u261b","\u261c","\u261d","\u261e","\u261f","\u2639","\u263a","\u2714","\u2718","\u201e","\u201c","\u201d","\u201a","\u2018","\u2019","\u00ab","\u00bb","\u2039","\u203a","\u2014","\u2013","\u2026","\u2190","\u2191","\u2192","\u2193","\u2194","\u21d0","\u21d1","\u21d2","\u21d3","\u21d4","\u00a9","\u2122","\u00ae","\u2032","\u2033","[","]","{","}","~","(",")","%","\u00a7","$","#","|","@"],"block":false},{"type":"signature","title":"\u7f72\u540d\u306e\u633f\u5165","icon":"sig.png","key":"y","block":false},{"type":"picker","title":"Font size","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/picker.png","list":[{"type":"format","title":"Tiny Text","sample":"This is a tiny text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/xxs.png","open":"<fs xx-small>","close":"<\/fs>"},{"type":"format","title":"Very Small Text","sample":"This is a very small text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/xs.png","open":"<fs x-small>","close":"<\/fs>"},{"type":"format","title":"Small Text","sample":"This is a small text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/s.png","open":"<fs small>","close":"<\/fs>"},{"type":"format","title":"Medium Text (is bigger than default)","sample":"This is a medium size text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/m.png","open":"<fs medium>","close":"<\/fs>"},{"type":"format","title":"Large Text","sample":"This is a large text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/l.png","open":"<fs large>","close":"<\/fs>"},{"type":"format","title":"Very Large Text","sample":"This is a very large text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/xl.png","open":"<fs x-large>","close":"<\/fs>"},{"type":"format","title":"Huge Text","sample":"This is a huge text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/xxl.png","open":"<fs xx-large>","close":"<\/fs>"},{"type":"format","title":"Smaller than default text","sample":"This text is smaller than default text","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/smaller.png","open":"<fs smaller>","close":"<\/fs>"},{"type":"format","title":"Larger than default text","sample":"","icon":"..\/..\/plugins\/fontsize2\/images\/toolbar\/larger.png","open":"<fs larger>","close":"<\/fs>"}]},{"type":"mediapopup","title":"Icons","icon":"..\/..\/tpl\/dokuwiki\/images\/logo.png","url":"lib\/plugins\/icons\/exe\/popup.php?ns=","name":"icons","options":"width=800,height=600,left=20,top=20,toolbar=no,menubar=no,scrollbars=yes,resizable=yes","block":false},{"type":"mediapopup","title":"\u30b5\u30a4\u30c8\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3092\u633f\u5165","icon":"..\/..\/plugins\/siteexport\/images\/toolbar.png","url":"lib\/plugins\/siteexport\/exe\/siteexportmanager.php?ns=","options":"width=750,height=500,left=20,top=20,scrollbars=yes,resizable=yes","block":false},{"type":"picker","title":"Font color","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/picker.png","list":[{"type":"format","title":"White","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ffffff","open":"<fc #ffffff>","close":"<\/fc>"},{"type":"format","title":"Yellow","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ffff00","open":"<fc #ffff00>","close":"<\/fc>"},{"type":"format","title":"Red","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ff0000","open":"<fc #ff0000>","close":"<\/fc>"},{"type":"format","title":"Orange","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ffa500","open":"<fc #ffa500>","close":"<\/fc>"},{"type":"format","title":"Salmon","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=fa8072","open":"<fc #fa8072>","close":"<\/fc>"},{"type":"format","title":"Pink","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ffc0cb","open":"<fc #ffc0cb>","close":"<\/fc>"},{"type":"format","title":"Plum","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=dda0dd","open":"<fc #dda0dd>","close":"<\/fc>"},{"type":"format","title":"Purple","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=800080","open":"<fc #800080>","close":"<\/fc>"},{"type":"format","title":"Fuchsia","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=ff00ff","open":"<fc #ff00ff>","close":"<\/fc>"},{"type":"format","title":"Silver","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=c0c0c0","open":"<fc #c0c0c0>","close":"<\/fc>"},{"type":"format","title":"Aqua","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=00ffff","open":"<fc #00ffff>","close":"<\/fc>"},{"type":"format","title":"Teal","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=008080","open":"<fc #008080>","close":"<\/fc>"},{"type":"format","title":"Cornflower","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=6495ed","open":"<fc #6495ed>","close":"<\/fc>"},{"type":"format","title":"Sky Blue","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=87ceeb","open":"<fc #87ceeb>","close":"<\/fc>"},{"type":"format","title":"Aquamarine","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=7fffd4","open":"<fc #7fffd4>","close":"<\/fc>"},{"type":"format","title":"Pale Green","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=98fb98","open":"<fc #98fb98>","close":"<\/fc>"},{"type":"format","title":"Lime","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=00ff00","open":"<fc #00ff00>","close":"<\/fc>"},{"type":"format","title":"Green","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=008000","open":"<fc #008000>","close":"<\/fc>"},{"type":"format","title":"Olive","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=808000","open":"<fc #808000>","close":"<\/fc>"},{"type":"format","title":"Indian Red","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=cd5c5c","open":"<fc #cd5c5c>","close":"<\/fc>"},{"type":"format","title":"Khaki","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=f0e68c","open":"<fc #f0e68c>","close":"<\/fc>"},{"type":"format","title":"Powder Blue","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=b0e0e6","open":"<fc #b0e0e6>","close":"<\/fc>"},{"type":"format","title":"Sandy Brown","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=f4a460","open":"<fc #f4a460>","close":"<\/fc>"},{"type":"format","title":"Steel Blue","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=4682b4","open":"<fc #4682b4>","close":"<\/fc>"},{"type":"format","title":"Thistle","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=d8bfd8","open":"<fc #d8bfd8>","close":"<\/fc>"},{"type":"format","title":"Yellow Green","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=9acd32","open":"<fc #9acd32>","close":"<\/fc>"},{"type":"format","title":"Dark Violet","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=9400d3","open":"<fc #9400d3>","close":"<\/fc>"},{"type":"format","title":"Maroon","icon":"\/lib\/plugins\/typography\/images\/fontcolor\/color-icon.php?color=800000","open":"<fc #800000>","close":"<\/fc>"}]},{"type":"picker","title":"Font family","icon":"\/lib\/plugins\/typography\/images\/fontfamily\/picker.png","list":[{"type":"format","title":"Serif","sample":"","icon":"\/lib\/plugins\/typography\/images\/fontfamily\/serif.png","open":"<ff serif>","close":"<\/ff>"},{"type":"format","title":"Sans-serif","sample":"","icon":"\/lib\/plugins\/typography\/images\/fontfamily\/sans-serif.png","open":"<ff sans-serif>","close":"<\/ff>"}]},{"type":"picker","title":"Wrap \u30d7\u30e9\u30b0\u30a4\u30f3","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/picker.png","list":[{"type":"format","title":"\u591a\u6bb5\u7d44\u307f","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/column.png","open":"<WRAP group>\\n<WRAP half column>\\n","close":"\\n<\/WRAP>\\n\\n<WRAP half column>\\n\\n<\/WRAP>\\n<\/WRAP>\\n"},{"type":"format","title":"\u4e2d\u592e\u914d\u7f6e\u67a0","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/box.png","open":"<WRAP center round box 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u60c5\u5831\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/info.png","open":"<WRAP center round info 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u30d2\u30f3\u30c8\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/tip.png","open":"<WRAP center round tip 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u91cd\u8981\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/important.png","open":"<WRAP center round important 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u8b66\u544a\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/alert.png","open":"<WRAP center round alert 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u30d8\u30eb\u30d7\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/help.png","open":"<WRAP center round help 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/download.png","open":"<WRAP center round download 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"format","title":"TODO\u67a0","icon":"..\/..\/plugins\/wrap\/images\/note\/16\/todo.png","open":"<WRAP center round todo 60%>\\n","close":"\\n<\/WRAP>\\n"},{"type":"insert","title":"\u56de\u308a\u8fbc\u307f\u89e3\u9664","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/clear.png","insert":"<WRAP clear\/>\\n"},{"type":"format","title":"\u7279\u306b\u5f37\u8abf","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/em.png","open":"<wrap em>","close":"<\/wrap>"},{"type":"format","title":"\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/hi.png","open":"<wrap hi>","close":"<\/wrap>"},{"type":"format","title":"\u975e\u5f37\u8abf\uff08\u8584\u8272\u8868\u793a\uff09","icon":"..\/..\/plugins\/wrap\/images\/toolbar\/lo.png","open":"<wrap lo>","close":"<\/wrap>"}]}];


/* XXXXXXXXXX begin of lib/scripts/jquery/jquery.cookie.js XXXXXXXXXX */

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));



/* XXXXXXXXXX end of lib/scripts/jquery/jquery.cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of inc/lang/ja/jquery.ui.datepicker.js XXXXXXXXXX */

/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.ja = {
	closeText: "閉じる",
	prevText: "前",
	nextText: "次",
	currentText: "今日",
	monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月",
	"7月", "8月", "9月", "10月", "11月", "12月" ],
	monthNamesShort: [ "1月", "2月", "3月", "4月", "5月", "6月",
	"7月", "8月", "9月", "10月", "11月", "12月" ],
	dayNames: [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ],
	dayNamesShort: [ "日", "月", "火", "水", "木", "金", "土" ],
	dayNamesMin: [ "日", "月", "火", "水", "木", "金", "土" ],
	weekHeader: "週",
	dateFormat: "yy/mm/dd",
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "年" };
datepicker.setDefaults( datepicker.regional.ja );

return datepicker.regional.ja;

} );



/* XXXXXXXXXX end of inc/lang/ja/jquery.ui.datepicker.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/fileuploader.js XXXXXXXXXX */

/**
 * http://github.com/valums/file-uploader
 *
 * Multiple file upload component with progress-bar, drag-and-drop.
 * © 2010 Andrew Valums ( andrew(at)valums.com )
 *
 * Licensed under GNU GPL 2 or later and GNU LGPL 2 or later, see license.txt.
 */

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);

    from = from || 0;
    var len = arr.length;

    if (from < 0) from += len;

    for (; from < len; from++){
        if (from in arr && arr[from] === elt){
            return from;
        }
    }
    return -1;
};

qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Events

qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){
    // compareposition returns false in this case
    if (parent == descendant) return true;

    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        prefix = '&',
        add = function(nextObj, i){
            var nextTemp = temp
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {
                uristrings.push(
                    (typeof nextObj === 'object')
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)
                );
            }
        };

    if (!prefixDone && temp) {
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            if(obj.hasOwnProperty(i) && typeof obj[i] != 'function') {
                add(obj[i], i);
            }
        }
    } else {
        uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+');
};

//
//
// Uploader Classes
//
//

var qq = qq || {};

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        button: null,
        multiple: true,
        maxConnections: 3,
        // validation
        allowedExtensions: [],
        sizeLimit: 0,
        minSizeLimit: 0,
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        // messages
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
        },
        showMessage: function(message){
            alert(message);
        }
    };
    qq.extend(this._options, o);

    // number of files being uploaded
    this._filesInProgress = 0;
    this._handler = this._createUploadHandler();

    if (this._options.button){
        this._button = this._createUploadButton(this._options.button);
    }

    this._preventLeaveInProgress();
};

qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;
    },
    _createUploadButton: function(element){
        var self = this;

        return new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(input){
                self._onInputChange(input);
            }
        });
    },
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            }
        });

        return handler;
    },
    _preventLeaveInProgress: function(){
        var self = this;

        qq.attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}

            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;
        });
    },
    _onSubmit: function(id, fileName){
        this._filesInProgress++;
    },
    _onProgress: function(id, fileName, loaded, total){
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;
        if (result.error){
            this._options.showMessage(result.error);
        }
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){
            this._uploadFileList(input.files);
        } else {
            if (this._validateFile(input)){
                this._uploadFile(input);
            }
        }
        this._button.reset();
    },
    _uploadFileList: function(files){
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return;
            }
        }

        for (var i=0; i<files.length; i++){
            this._uploadFile(files[i]);
        }
    },
    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFile: function(file){
        var name, size;

        if (file.value){
            // it is a file input
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari
            name = file.fileName != null ? file.fileName : file.name;
            size = file.fileSize != null ? file.fileSize : file.size;
        }

        if (! this._isAllowedExtension(name)){
            this._error('typeError', name);
            return false;

        } else if (size === 0){
            this._error('emptyError', name);
            return false;

        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){
            this._error('sizeError', name);
            return false;

        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;
        }

        return true;
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];
        function r(name, replacement){ message = message.replace(name, replacement); }

        r('{file}', this._formatFileName(fileName));
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));

        this._options.showMessage(message);
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.')) ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
        var allowed = this._options.allowedExtensions;

        if (!allowed.length){return true;}

        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}
        }

        return false;
    },
    _formatSize: function(bytes){
        var i = -1;
        do {
            bytes = bytes / 1024;
            i++;
        } while (bytes > 99);

        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
    }
};


/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    // additional options
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template: '<div class="qq-uploader">' +
                '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                '<div class="qq-upload-button">Upload a file</div>' +
                '<ul class="qq-upload-list"></ul>' +
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">Cancel</a>' +
                '<span class="qq-upload-failed-text">Failed</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',

            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied
    qq.extend(this._options, o);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){
        var element = qq.getByClass(parent, this._options.classes[type])[0];
        if (!element){
            throw new Error('element not found ' + type);
        }

        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);
            }
        });

        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){
            if (!dz._isValidFileDrag(e)) return;

            dropArea.style.display = 'block';
        });
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){
                dropArea.style.display = 'none';
            }
        });
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';

        var text;
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {
            text = this._formatSize(total);
        }

        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        if (result.success){
            qq.addClass(item, this._classes.success);
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';

        this._listElement.appendChild(item);
    },
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;

        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){
            if (item.qqFileId == id) return item;
            item = item.nextSibling;
        }
    },
    /**
     * delegate click event for cancel link
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;

        qq.attach(list, 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (qq.hasClass(target, self._classes.cancel)){
                qq.preventDefault(e);

                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }
});

qq.UploadDropZone = function(o){
    this._options = {
        element: null,
        onEnter: function(e){},
        onLeave: function(e){},
        // is not fired when leaving element by hovering descendants
        onLeaveNotDescendants: function(e){},
        onDrop: function(e){}
    };
    qq.extend(this._options, o);

    this._element = this._options.element;

    this._disableDropOutside();
    this._attachEvents();
};

qq.UploadDropZone.prototype = {
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault();
                }
            });

            qq.UploadDropZone.dropOutsideDisabled = true;
        }
    },
    _attachEvents: function(){
        var self = this;

        qq.attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;

            var effect = e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
            } else {
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }

            e.stopPropagation();
            e.preventDefault();
        });

        qq.attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onEnter(e);
        });

        qq.attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onLeave(e);

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;

            self._options.onLeaveNotDescendants(e);
        });

        qq.attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;

            e.preventDefault();
            self._options.onDrop(e);
        });
    },
    _isValidFileDrag: function(e){
        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4
            isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox
        return dt && dt.effectAllowed != 'none' &&
            (dt.files || (!isWebkit && dt.types.contains && dt.types.contains('Files')));

    }
};

qq.UploadButton = function(o){
    this._options = {
        element: null,
        // if set to true adds multiple attribute to file input
        multiple: false,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'
    };

    qq.extend(this._options, o);

    this._element = this._options.element;

    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });

    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);
        }

        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },
    _createInput: function(){
        var input = document.createElement("input");

        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }

        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);

        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });

        this._element.appendChild(input);

        var self = this;
        qq.attach(input, 'change', function(){
            self._options.onChange(input);
        });

        qq.attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        qq.attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;
    }
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
    this._options = {
        debug: false,
        action: '/upload.php',
        // maximum number of concurrent uploads
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){}
    };
    qq.extend(this._options, o);

    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};
        qq.extend(copy, params);
        this._params[id] = copy;

        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);

        var max = this._options.maxConnections;

        if (this._queue.length >= max && i < max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', 'qqfile');
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();

        this._inputs[id] = fileInput;

        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }

        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        delete this._inputs[id];

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },
    _upload: function(id, params){
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    },
    _attachLoadEvent: function(iframe, callback){
        qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;

        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + doc.body.innerHTML);

        try {
            response = eval("(" + doc.body.innerHTML + ")");
        } catch(err){
            response = {};
        }

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);

        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];

    // current loaded size in bytes for each file
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';

    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }

        return this._files.push(file) - 1;
    },
    getName: function(id){
        var file = this._files[id];
        // fix missing name in Safari 4
        return file.fileName != null ? file.fileName : file.name;
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },
    /**
     * Returns uploaded bytes for file identified by id
     */
    getLoaded: function(id){
        return this._loaded[id] || 0;
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */
    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params['qqfile'] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;

        var name = this.getName(id);
        var size = this.getSize(id);

        this._options.onProgress(id, name, size, size);

        if (xhr.status == 200){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);

            var response;

            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }

            this._options.onComplete(id, name, response);

        } else {
            this._options.onComplete(id, name, {});
        }

        this._files[id] = null;
        this._xhrs[id] = null;
        this._dequeue(id);
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        this._files[id] = null;

        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;
        }
    }
});


/* XXXXXXXXXX end of lib/scripts/fileuploader.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/fileuploaderextended.js XXXXXXXXXX */

qq.extend(qq.FileUploader.prototype, {
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
            //handlerClass = 'UploadHandlerForm';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            },
            onUpload: function(){
                self._onUpload();
            }
        });

        return handler;
    },

    _onUpload: function(){
        this._handler.uploadAll(this._options.params);
    },

    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
        }
    },

    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, fileName);
        this._find(item, 'size').style.display = 'none';

        // name suggestion (simplified cleanID)
        var nameElement = this._find(item, 'nameInput');
        fileName = fileName.toLowerCase();
        fileName = fileName.replace(/([ !"#$%&\'()+,\/;<=>?@[\]^`{|}~:]+)/g, '_');
        fileName = fileName.replace(/^_+/,'');
        nameElement.value = fileName;
        nameElement.id = 'mediamanager__upload_item'+id;

        this._listElement.appendChild(item);
    }

});

qq.FileUploaderExtended = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template: '<div class="qq-uploader">' +
            '<div class="qq-upload-drop-area"><span>' + LANG.media_drop + '</span></div>' +
            '<div class="qq-upload-button">' + LANG.media_select + '</div>' +
            '<ul class="qq-upload-list"></ul>' +
            '<div class="qq-action-container">' +
            '  <button class="qq-upload-action" type="submit" id="mediamanager__upload_button">' + LANG.media_upload_btn + '</button>' +
            '  <label class="qq-overwrite-check"><input type="checkbox" value="1" name="ow" class="dw__ow"> <span>' + LANG.media_overwrt + '</span></label>' +
            '</div>' +
            '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
              '<span class="qq-upload-file hidden"></span>' +
            '  <input class="qq-upload-name-input edit" type="text" value="" />' +
            '  <span class="qq-upload-spinner hidden"></span>' +
            '  <span class="qq-upload-size"></span>' +
            '  <a class="qq-upload-cancel" href="#">' + LANG.media_cancel + '</a>' +
            '  <span class="qq-upload-failed-text error">Failed</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',
            nameInput: 'qq-upload-name-input',
            overwriteInput: 'qq-overwrite-check',
            uploadButton: 'qq-upload-action',
            file: 'qq-upload-file',

            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail',
            failedText: 'qq-upload-failed-text'
        }
    });

    qq.extend(this._options, o);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
    this._bindUploadEvent();
    this._setupDragDrop();
};

qq.extend(qq.FileUploaderExtended.prototype, qq.FileUploader.prototype);

qq.extend(qq.FileUploaderExtended.prototype, {
    _bindUploadEvent: function(){
        var self = this,
            list = this._listElement;

        qq.attach(document.getElementById('mediamanager__upload_button'), 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            qq.preventDefault(e);
            self._handler._options.onUpload();

            jQuery(".qq-upload-name-input").each(function (i) {
                jQuery(this).prop('disabled', true);
            });
        });
    },

    _onComplete: function(id, fileName, result){
        this._filesInProgress--;

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        var nameInput = this._find(item, 'nameInput');
        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, nameInput.value);
        qq.removeClass(fileElement, 'hidden');
        qq.remove(nameInput);
        jQuery('.qq-upload-button, #mediamanager__upload_button').remove();
        jQuery('.dw__ow').parent().hide();
        jQuery('.qq-upload-drop-area').remove();

        if (result.success){
            qq.addClass(item, this._classes.success);
            $link = '<a href="' + result.link + '" id="h_:' + result.id + '" class="select">' + nameInput.value + '</a>';
            jQuery(fileElement).html($link);

        } else {
            qq.addClass(item, this._classes.fail);
            var fail = this._find(item, 'failedText');
            if (result.error) qq.setText(fail, result.error);
        }

        if (document.getElementById('media__content') && !document.getElementById('mediamanager__done_form')) {
            var action = document.location.href;
            var i = action.indexOf('?');
            if (i) action = action.substr(0, i);
            var button = '<form method="post" action="' + action + '" id="mediamanager__done_form"><div>';
            button += '<input type="hidden" value="' + result.ns + '" name="ns">';
            button += '<input type="hidden" value="1" name="recent">';
            button += '<button type="submit">' + LANG.media_done_btn + '</button></div></form>';
            jQuery('#mediamanager__uploader').append(button);
        }
    }

});

qq.extend(qq.UploadHandlerForm.prototype, {
    uploadAll: function(params){
        this._uploadAll(params);
    },

    getName: function(id){
        var file = this._inputs[id];
        var name = document.getElementById('mediamanager__upload_item'+id);
        if (name != null) {
            return name.value;
        } else {
            if (file != null) {
                // get input value and remove path to normalize
                return file.value.replace(/.*(\/|\\)/, "");
            } else {
                return null;
            }
        }
    },

    _uploadAll: function(params){
         jQuery(".qq-upload-spinner").each(function (i) {
            jQuery(this).removeClass('hidden');
        });
        for (key in this._inputs) {
            this.upload(key, params);
        }

    },

    _upload: function(id, params){
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var nameInput = qq.toElement('<input name="mediaid" value="' + fileName + '" type="text">');
        form.appendChild(nameInput);

        var checked = jQuery('.dw__ow').is(':checked');
        var owCheckbox = jQuery('.dw__ow').clone();
        owCheckbox.attr('checked', checked);
        jQuery(form).append(owCheckbox);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    }
});

qq.extend(qq.UploadHandlerXhr.prototype, {
    uploadAll: function(params){
        this._uploadAll(params);
    },

    getName: function(id){
        var file = this._files[id];
        var name = document.getElementById('mediamanager__upload_item'+id);
        if (name != null) {
            return name.value;
        } else {
            if (file != null) {
                // fix missing name in Safari 4
                return file.fileName != null ? file.fileName : file.name;
            } else {
                return null;
            }
        }
    },

    getSize: function(id){
        var file = this._files[id];
        if (file == null) return null;
        return file.fileSize != null ? file.fileSize : file.size;
    },

    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);
        if (name == null || size == null) return;

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params['qqfile'] = name;
        params['ow'] = jQuery('.dw__ow').is(':checked');
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.send(file);
    },

    _uploadAll: function(params){
        jQuery(".qq-upload-spinner").each(function (i) {
            jQuery(this).removeClass('hidden');
        });
        for (key in this._files) {
            this.upload(key, params);
        }

    }
});



/* XXXXXXXXXX end of lib/scripts/fileuploaderextended.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/helpers.js XXXXXXXXXX */

/**
 * Various helper functions
 */

/**
 * A PHP-style substr_replace
 *
 * Supports negative start and length and omitting length, but not
 * str and replace arrays.
 * See http://php.net/substr-replace for further documentation.
 */
function substr_replace(str, replace, start, length) {
    var a2, b1;
    a2 = (start < 0 ? str.length : 0) + start;
    if (typeof length === 'undefined') {
        length = str.length - a2;
    } else if (length < 0 && start < 0 && length <= start) {
        length = 0;
    }
    b1 = (length < 0 ? str.length : a2) + length;
    return str.substring(0, a2) + replace + str.substring(b1);
}

/**
 * Bind variables to a function call creating a closure
 *
 * Use this to circumvent variable scope problems when creating closures
 * inside a loop
 *
 * @author  Adrian Lang <lang@cosmocode.de>
 * @link    http://www.cosmocode.de/en/blog/gohr/2009-10/15-javascript-fixing-the-closure-scope-in-loops
 * @param   functionref fnc - the function to be called
 * @param   mixed - any arguments to be passed to the function
 * @returns functionref
 */
function bind(fnc/*, ... */) {
    var Aps = Array.prototype.slice,
    // Store passed arguments in this scope.
    // Since arguments is no Array nor has an own slice method,
    // we have to apply the slice method from the Array.prototype
        static_args = Aps.call(arguments, 1);

    // Return a function evaluating the passed function with the
    // given args and optional arguments passed on invocation.
    return function (/* ... */) {
        // Same here, but we use Array.prototype.slice solely for
        // converting arguments to an Array.
        return fnc.apply(this,
                         static_args.concat(Aps.call(arguments, 0)));
    };
}

/**
 * Report an error from a JS file to the console
 *
 * @param e    The error object
 * @param file The file in which the error occurred
 */
function logError(e, file) {
    if (window.console && console.error) {
        console.error('The error "%s: %s" occurred in file "%s". ' +
            'If this is in a plugin try updating or disabling the plugin, ' +
            'if this is in a template try updating the template or switching to the "dokuwiki" template.',
            e.name, e.message, file);
        if(e.stack) {
            console.error(e.stack);
        }
    }
}



/* XXXXXXXXXX end of lib/scripts/helpers.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/delay.js XXXXXXXXXX */

/**
 * Manage delayed and timed actions
 *
 * @license GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author  Adrian Lang <lang@cosmocode.de>
 */

/**
 * Provide a global callback for window.setTimeout
 *
 * To get a timeout for non-global functions, just call
 * delay.add(func, timeout).
 */
var timer = {
    _cur_id: 0,
    _handlers: {},

    execDispatch: function (id) {
        timer._handlers[id]();
    },

    add: function (func, timeout) {
        var id = ++timer._cur_id;
        timer._handlers[id] = func;
        return window.setTimeout('timer.execDispatch(' + id + ')', timeout);
    }
};

/**
 * Provide a delayed start
 *
 * To call a function with a delay, just create a new Delay(func, timeout) and
 * call that object’s method “start”.
 */
function Delay (func, timeout) {
    this.func = func;
    if (timeout) {
        this.timeout = timeout;
    }
}

Delay.prototype = {
    func: null,
    timeout: 500,

    delTimer: function () {
        if (this.timer !== null) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    },

    start: function () {
        DEPRECATED('don\'t use the Delay object, use window.timeout with a callback instead');
        this.delTimer();
        var _this = this;
        this.timer = timer.add(function () { _this.exec.call(_this); },
                               this.timeout);

        this._data = {
            _this: arguments[0],
            _params: Array.prototype.slice.call(arguments, 2)
        };
    },

    exec: function () {
        this.delTimer();
        this.func.call(this._data._this, this._data._params);
    }
};



/* XXXXXXXXXX end of lib/scripts/delay.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/cookie.js XXXXXXXXXX */

/**
* Handles the cookie used by several JavaScript functions
*
* Only a single cookie is written and read. You may only save
* simple name-value pairs - no complex types!
*
* You should only use the getValue and setValue methods
*
* @author Andreas Gohr <andi@splitbrain.org>
* @author Michal Rezler <m.rezler@centrum.cz>
*/
var DokuCookie = {
    data: {},
    name: 'DOKU_PREFS',

    /**
     * Save a value to the cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    setValue: function(key,val){
        var text = [],
            _this = this;
        this.init();
        if (val === false){
            delete this.data[key];
        }else{
            val = val + "";
            this.data[key] = val;
        }


        //save the whole data array
        jQuery.each(_this.data, function (key, val) {
            if (_this.data.hasOwnProperty(key)) {
                text.push(encodeURIComponent(key)+'#'+encodeURIComponent(val));
            }
        });
        jQuery.cookie(this.name, text.join('#'), {expires: 365, path: DOKU_COOKIE_PARAM.path, secure: DOKU_COOKIE_PARAM.secure});
    },

    /**
     * Get a Value from the Cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @param def default value if key does not exist; if not set, returns undefined by default
     */
    getValue: function(key, def){
        this.init();
        return this.data.hasOwnProperty(key) ? this.data[key] : def;
    },

    /**
     * Loads the current set cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    init: function(){
        var text, parts, i;
        if(!jQuery.isEmptyObject(this.data)) {
            return;
        }
        text = jQuery.cookie(this.name);
        if(text){
            parts = text.split('#');
            for(i = 0; i < parts.length; i += 2){
                this.data[decodeURIComponent(parts[i])] = decodeURIComponent(parts[i+1]);
            }
        }
    }
};



/* XXXXXXXXXX end of lib/scripts/cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/script.js XXXXXXXXXX */

// if jQuery was loaded, let's make it noConflict here.
if ('function' === typeof jQuery && 'function' === typeof jQuery.noConflict) {
    jQuery.noConflict();
}

/**
 * Some browser detection
 */
var clientPC  = navigator.userAgent.toLowerCase(); // Get client info
var is_macos  = navigator.appVersion.indexOf('Mac') != -1;
var is_gecko  = ((clientPC.indexOf('gecko')!=-1) && (clientPC.indexOf('spoofer')==-1) &&
                (clientPC.indexOf('khtml') == -1) && (clientPC.indexOf('netscape/7.0')==-1));
var is_safari = ((clientPC.indexOf('applewebkit')!=-1) && (clientPC.indexOf('spoofer')==-1));
var is_khtml  = (navigator.vendor == 'KDE' || ( document.childNodes && !document.all && !navigator.taintEnabled ));
if (clientPC.indexOf('opera')!=-1) {
    var is_opera = true;
    var is_opera_preseven = (window.opera && !document.childNodes);
    var is_opera_seven = (window.opera && document.childNodes);
}

/**
 * Handler to close all open Popups
 */
function closePopups(){
    jQuery('div.JSpopup').hide();
}

jQuery(function () {
    jQuery(document).on('click', closePopups);
});



/* XXXXXXXXXX end of lib/scripts/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/qsearch.js XXXXXXXXXX */

/**
 * AJAX functions for the pagename quicksearch
 *
 * @license  GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author   Andreas Gohr <andi@splitbrain.org>
 * @author   Adrian Lang <lang@cosmocode.de>
 * @author   Michal Rezler <m.rezler@centrum.cz>
 */
jQuery.fn.dw_qsearch = function (overrides) {

    var dw_qsearch = {

        output: '#qsearch__out',

        $inObj: this,
        $outObj: null,
        timer: null,
        curRequest: null,

        /**
         * initialize the quick search
         *
         * Attaches the event handlers
         *
         */
        init: function () {
            var do_qsearch;

            dw_qsearch.$outObj = jQuery(dw_qsearch.output);

            // objects found?
            if (dw_qsearch.$inObj.length === 0 ||
                dw_qsearch.$outObj.length === 0) {
                return;
            }

            // attach eventhandler to search field
            do_qsearch = function () {
                // abort any previous request
                if (dw_qsearch.curRequest != null) {
                    dw_qsearch.curRequest.abort();
                }
                var value = dw_qsearch.getSearchterm();
                if (value === '') {
                    dw_qsearch.clear_results();
                    return;
                }
                dw_qsearch.$inObj.parents('form').addClass('searching');
                dw_qsearch.curRequest = jQuery.post(
                    DOKU_BASE + 'lib/exe/ajax.php',
                    {
                        call: 'qsearch',
                        q: encodeURI(value)
                    },
                    dw_qsearch.onCompletion,
                    'html'
                );
            };

            dw_qsearch.$inObj.on('keyup',
                function () {
                    if (dw_qsearch.timer) {
                        window.clearTimeout(dw_qsearch.timer);
                        dw_qsearch.timer = null;
                    }
                    dw_qsearch.timer = window.setTimeout(do_qsearch, 500);
                }
            );

            // attach eventhandler to output field
            dw_qsearch.$outObj.on('click', dw_qsearch.clear_results);
        },

        /**
         * Read search term from input
         */
        getSearchterm: function() {
            return dw_qsearch.$inObj.val();
        },

        /**
         * Empty and hide the output div
         */
        clear_results: function () {
            dw_qsearch.$inObj.parents('form').removeClass('searching');
            dw_qsearch.$outObj.hide();
            dw_qsearch.$outObj.text('');
        },

        /**
         * Callback. Reformat and display the results.
         *
         * Namespaces are shortened here to keep the results from overflowing
         * or wrapping
         *
         * @param data The result HTML
         */
        onCompletion: function (data) {
            var max, $links, too_big;
            dw_qsearch.$inObj.parents('form').removeClass('searching');

            dw_qsearch.curRequest = null;

            if (data === '') {
                dw_qsearch.clear_results();
                return;
            }

            dw_qsearch.$outObj
                .html(data)
                .show()
                .css('white-space', 'nowrap');

            // disable overflow during shortening
            dw_qsearch.$outObj.find('li').css('overflow', 'visible');

            $links = dw_qsearch.$outObj.find('a');
            max = dw_qsearch.$outObj[0].clientWidth; // maximum width allowed (but take away paddings below)
            if (document.documentElement.dir === 'rtl') {
                max -= parseInt(dw_qsearch.$outObj.css('padding-left'));
                too_big = function (l) {
                    return l.offsetLeft < 0;
                };
            } else {
                max -= parseInt(dw_qsearch.$outObj.css('padding-right'));
                too_big = function (l) {
                    return l.offsetWidth + l.offsetLeft > max;
                };
            }

            $links.each(function () {
                var start, length, replace, nsL, nsR, eli, runaway;

                if (!too_big(this)) {
                    return;
                }

                nsL = this.textContent.indexOf('(');
                nsR = this.textContent.indexOf(')');
                eli = 0;
                runaway = 0;

                while ((nsR - nsL > 3) && too_big(this) && runaway++ < 500) {
                    if (eli !== 0) {
                        // elipsis already inserted
                        if ((eli - nsL) > (nsR - eli)) {
                            // cut left
                            start = eli - 2;
                            length = 2;
                        } else {
                            // cut right
                            start = eli + 1;
                            length = 1;
                        }
                        replace = '';
                    } else {
                        // replace middle with ellipsis
                        start = Math.floor(nsL + ((nsR - nsL) / 2));
                        length = 1;
                        replace = '…';
                    }
                    this.textContent = substr_replace(this.textContent,
                        replace, start, length);

                    eli = this.textContent.indexOf('…');
                    nsL = this.textContent.indexOf('(');
                    nsR = this.textContent.indexOf(')');
                }
            });

            // reenable overflow
            dw_qsearch.$outObj.find('li').css('overflow', 'hidden').css('text-overflow', 'ellipsis');
        }


    };

    jQuery.extend(dw_qsearch, overrides);

    if (!overrides.deferInit) {
        dw_qsearch.init();
    }

    return dw_qsearch;
};

jQuery(function () {
    jQuery('#qsearch__in').dw_qsearch({
        output: '#qsearch__out'
    });
});



/* XXXXXXXXXX end of lib/scripts/qsearch.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/search.js XXXXXXXXXX */

jQuery(function () {
    'use strict';

    var $searchForm = jQuery('.search-results-form');
    if (!$searchForm.length) {
        return;
    }

    var $toggleAssistanceButton = jQuery('<button>')
        .addClass('toggleAssistant')
        .attr('type', 'button')
        .attr('aria-expanded', 'false')
        .text(LANG.search_toggle_tools)
        .prependTo($searchForm.find('fieldset'))
    ;

    $toggleAssistanceButton.on('click', function () {
        jQuery('.advancedOptions').toggle(0, function () {
            var $me = jQuery(this);
            if ($me.attr('aria-hidden')) {
                $me.removeAttr('aria-hidden');
                $toggleAssistanceButton.attr('aria-expanded', 'true');
                DokuCookie.setValue('sa', 'on');
            } else {
                $me.attr('aria-hidden', 'true');
                $toggleAssistanceButton.attr('aria-expanded', 'false');
                DokuCookie.setValue('sa', 'off');
            }
        });
    });

    if (DokuCookie.getValue('sa') === 'on') {
        $toggleAssistanceButton.trigger('click');
    }

    $searchForm.find('.advancedOptions .toggle div.current').on('click', function () {
        var $me = jQuery(this);
        $me.parent().siblings().removeClass('open');
        $me.parent().siblings().find('ul:first').attr('aria-expanded', 'false');
        $me.parent().toggleClass('open');
        if ($me.parent().hasClass('open')) {
            $me.parent().find('ul:first').attr('aria-expanded', 'true');
        } else {
            $me.parent().find('ul:first').attr('aria-expanded', 'false');
        }
    });

});



/* XXXXXXXXXX end of lib/scripts/search.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/tree.js XXXXXXXXXX */

jQuery.fn.dw_tree = function(overrides) {
    var dw_tree = {

        /**
         * Delay in ms before showing the throbber.
         * Used to skip the throbber for fast AJAX calls.
         */
        throbber_delay: 500,

        $obj: this,

        toggle_selector: 'a.idx_dir',

        init: function () {
            this.$obj.on('click', this.toggle_selector, this,
                               this.toggle);
            jQuery('ul:first', this.$obj).attr('role', 'tree');
            jQuery('ul', this.$obj).not(':first').attr('role', 'group');
            jQuery('li', this.$obj).attr('role', 'treeitem');
            jQuery('li.open > ul', this.$obj).attr('aria-expanded', 'true');
            jQuery('li.closed > ul', this.$obj).attr('aria-expanded', 'false');
            jQuery('li.closed', this.$obj).attr('aria-live', 'assertive');
        },

        /**
         * Open or close a subtree using AJAX
         * The contents of subtrees are "cached" until the page is reloaded.
         * A "loading" indicator is shown only when the AJAX call is slow.
         *
         * @author Andreas Gohr <andi@splitbrain.org>
         * @author Ben Coburn <btcoburn@silicodon.net>
         * @author Pierre Spring <pierre.spring@caillou.ch>
         */
        toggle: function (e) {
            var $listitem, $sublist, timeout, $clicky, show_sublist, dw_tree, opening;

            e.preventDefault();

            dw_tree = e.data;
            $clicky = jQuery(this);
            $listitem = $clicky.closest('li');
            $sublist = $listitem.find('ul').first();
            opening = $listitem.hasClass('closed');
            dw_tree.toggle_display($clicky, opening);
            if ($sublist.is(':visible')) {
                $listitem.removeClass('open').addClass('closed');
                $sublist.attr('aria-expanded', 'false');
            } else {
                $listitem.removeClass('closed').addClass('open');
                $sublist.attr('aria-expanded', 'true');
            }

            // if already open, close by hiding the sublist
            if (!opening) {
                $sublist.dw_hide();
                return;
            }

            show_sublist = function (data) {
                $sublist.hide();
                if (typeof data !== 'undefined') {
                    $sublist.html(data);
                    $sublist.parent().attr('aria-busy', 'false').removeAttr('aria-live');
                    jQuery('li.closed', $sublist).attr('aria-live', 'assertive');
                }
                if ($listitem.hasClass('open')) {
                    // Only show if user didn’t close the list since starting
                    // to load the content
                    $sublist.dw_show();
                }
            };

            // just show if already loaded
            if ($sublist.length > 0) {
                show_sublist();
                return;
            }

            //prepare the new ul
            $sublist = jQuery('<ul class="idx" role="group"/>');
            $listitem.append($sublist);

            timeout = window.setTimeout(
                bind(show_sublist, '<li aria-busy="true"><img src="' + DOKU_BASE + 'lib/images/throbber.gif" alt="loading..." title="loading..." /></li>'), dw_tree.throbber_delay);

            dw_tree.load_data(function (data) {
                                  window.clearTimeout(timeout);
                                  show_sublist(data);
                              }, $clicky);
        },

        toggle_display: function ($clicky, opening) {
        },

        load_data: function (show_data, $clicky) {
            show_data();
        }
    };

    jQuery.extend(dw_tree, overrides);

    if (!overrides.deferInit) {
        dw_tree.init();
    }

    return dw_tree;
};



/* XXXXXXXXXX end of lib/scripts/tree.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/index.js XXXXXXXXXX */

var dw_index = jQuery('#index__tree').dw_tree({deferInit: true,
    load_data: function  (show_sublist, $clicky) {
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            $clicky[0].search.substr(1) + '&call=index',
            show_sublist, 'html'
        );
    }
});
jQuery(function () {
    var $tree = jQuery('#index__tree');

    dw_index.$obj = $tree;

    dw_index.init();
});



/* XXXXXXXXXX end of lib/scripts/index.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/textselection.js XXXXXXXXXX */

/**
 * Text selection related functions.
 */

/**
 * selection prototype
 *
 * Object that capsulates the selection in a textarea. Returned by DWgetSelection.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function selection_class(){
    this.start     = 0;
    this.end       = 0;
    this.obj       = null;
    this.scroll    = 0;
    this.fix       = 0;

    this.getLength = function(){
        return this.end - this.start;
    };

    this.getText = function(){
        return (!this.obj) ? '' : this.obj.value.substring(this.start,this.end);
    };
}

/**
 * Get current selection/cursor position in a given textArea
 *
 * @link   http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @link   http://linebyline.blogspot.com/2006/11/textarea-cursor-position-in-internet.html
 * @returns object - a selection object
 */
function DWgetSelection(textArea) {
    var sel = new selection_class();

    textArea.focus();
    sel.obj   = textArea;
    sel.start  = textArea.selectionStart;
    sel.end    = textArea.selectionEnd;
    sel.scroll = textArea.scrollTop;
    return sel;
}

/**
 * Set the selection
 *
 * You need to get a selection object via DWgetSelection() first, then modify the
 * start and end properties and pass it back to this function.
 *
 * @link http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param {selection_class} selection  a selection object as returned by DWgetSelection()
 */
function DWsetSelection(selection){
    selection.obj.setSelectionRange(selection.start, selection.end);
    if(selection.scroll) selection.obj.scrollTop = selection.scroll;
}

/**
 * Inserts the given text at the current cursor position or replaces the current
 * selection
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param {string}  text           the new text to be pasted
 * @param {selection_class}  selection     selection object returned by DWgetSelection
 * @param {int}     opts.startofs  number of charcters at the start to skip from new selection
 * @param {int}     opts.endofs    number of characters at the end to skip from new selection
 * @param {boolean} opts.nosel     set true if new text should not be selected
 */
function pasteText(selection,text,opts){
    if(!opts) opts = {};
    // replace the content

    selection.obj.value =
        selection.obj.value.substring(0, selection.start) + text +
        selection.obj.value.substring(selection.end, selection.obj.value.length);

    // set new selection
    if (is_opera) {
        // Opera replaces \n by \r\n when inserting text.
        selection.end = selection.start + text.replace(/\r?\n/g, '\r\n').length;
    } else {
        selection.end = selection.start + text.length;
    }


    // modify the new selection if wanted
    if(opts.startofs) selection.start += opts.startofs;
    if(opts.endofs)   selection.end   -= opts.endofs;

    // no selection wanted? set cursor to end position
    if(opts.nosel) selection.start = selection.end;

    DWsetSelection(selection);
}


/**
 * Format selection
 *
 * Apply tagOpen/tagClose to selection in textarea, use sampleText instead
 * of selection if there is none.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertTags(textAreaID, tagOpen, tagClose, sampleText){
    var txtarea = jQuery('#' + textAreaID)[0];

    var selection = DWgetSelection(txtarea);
    var text = selection.getText();
    var opts;

    // don't include trailing space in selection
    if(text.charAt(text.length - 1) == ' '){
        selection.end--;
        text = selection.getText();
    }

    if(!text){
        // nothing selected, use the sample text and select it
        text = sampleText;
        opts = {
            startofs: tagOpen.length,
            endofs: tagClose.length
        };
    }else{
        // place cursor at the end
        opts = {
            nosel: true
        };
    }

    // surround with tags
    text = tagOpen + text + tagClose;

    // do it
    pasteText(selection,text,opts);
}

/**
 * Wraps around pasteText() for backward compatibility
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertAtCarret(textAreaID, text){
    var txtarea = jQuery('#' + textAreaID)[0];
    var selection = DWgetSelection(txtarea);
    pasteText(selection,text,{nosel: true});
}



/* XXXXXXXXXX end of lib/scripts/textselection.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/toolbar.js XXXXXXXXXX */

// used to identify pickers
var pickercounter=0;

/**
 * Create a toolbar
 *
 * @param  string tbid       ID of the element where to insert the toolbar
 * @param  string edid       ID of the editor textarea
 * @param  array  tb         Associative array defining the buttons
 * @param  bool   allowblock Allow buttons creating multiline content
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function initToolbar(tbid,edid,tb, allowblock){
    var $toolbar, $edit;
    if (typeof tbid == 'string') {
        $toolbar = jQuery('#' + tbid);
    } else {
        $toolbar = jQuery(tbid);
    }

    $edit = jQuery('#' + edid);

    if ($toolbar.length == 0 || $edit.length == 0 || $edit.attr('readOnly')) {
        return;
    }

    if (typeof allowblock === 'undefined') {
        allowblock = true;
    }

    //empty the toolbar area:
    $toolbar.html('');

    jQuery.each(tb, function (k, val) {
        if (!tb.hasOwnProperty(k) || (!allowblock && val.block === true)) {
            return;
        }
        var actionFunc, $btn;

        // create new button (jQuery object)
        $btn = jQuery(createToolButton(val.icon, val.title, val.key, val.id,
                                       val['class']));

        // type is a tb function -> assign it as onclick
        actionFunc = 'tb_'+val.type;
        if( jQuery.isFunction(window[actionFunc]) ){
            $btn.on('click', bind(window[actionFunc],$btn,val,edid) );
            $toolbar.append($btn);
            return;
        }

        // type is a init function -> execute it
        actionFunc = 'addBtnAction'+val.type.charAt(0).toUpperCase()+val.type.substring(1);
        if( jQuery.isFunction(window[actionFunc]) ){
            var pickerid = window[actionFunc]($btn, val, edid);
            if(pickerid !== ''){
                $toolbar.append($btn);
                $btn.attr('aria-controls', pickerid);
                if (actionFunc === 'addBtnActionPicker') {
                    $btn.attr('aria-haspopup', 'true');
                }
            }
            return;
        }

        alert('unknown toolbar type: '+val.type+'  '+actionFunc);
    });
}

/**
 * Button action for format buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_format(btn, props, edid) {
    var sample = props.sample || props.title;
    insertTags(edid,
               fixtxt(props.open),
               fixtxt(props.close),
               fixtxt(sample));
    pickerClose();
    return false;
}

/**
 * Button action for format buttons
 *
 * This works exactly as tb_format() except that, if multiple lines
 * are selected, each line will be formatted seperately
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_formatln(btn, props, edid) {
    var sample = props.sample || props.title,
        opts,
        selection = DWgetSelection(jQuery('#'+edid)[0]);

    sample = fixtxt(sample);
    props.open  = fixtxt(props.open);
    props.close = fixtxt(props.close);

    // is something selected?
    if(selection.getLength()){
        sample = selection.getText();
        opts = {nosel: true};
    }else{
        opts = {
            startofs: props.open.length,
            endofs: props.close.length
        };
    }

    sample = sample.split("\n").join(props.close+"\n"+props.open);
    sample = props.open+sample+props.close;

    pasteText(selection,sample,opts);

    pickerClose();
    return false;
}

/**
 * Button action for insert buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_insert(btn, props, edid) {
    insertAtCarret(edid,fixtxt(props.insert));
    pickerClose();
    return false;
}

/**
 * Button action for the media popup
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_mediapopup(btn, props, edid) {
    window.open(
        DOKU_BASE+props.url+encodeURIComponent(NS)+'&edid='+encodeURIComponent(edid),
        props.name,
        props.options);
    return false;
}

/**
 * Button action for automatic headlines
 *
 * Insert a new headline based on the current section level
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_autohead(btn, props, edid){
    var lvl = currentHeadlineLevel(edid),
        tags;

    // determine new level
    lvl += props.mod;
    if(lvl < 1) lvl = 1;
    if(lvl > 5) lvl = 5;

    tags = (new Array(8 - lvl)).join('=');
    insertTags(edid, tags+' ', ' '+tags+"\n", props.text);
    pickerClose();
    return false;
}


/**
 * Add button action for picker buttons and create picker element
 *
 * @param  jQuery      btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionPicker($btn, props, edid) {
    var pickerid = 'picker'+(pickercounter++);
    var picker = createPicker(pickerid, props, edid);
    jQuery(picker).attr('aria-hidden', 'true');

    $btn.click(
        function(e) {
            pickerToggle(pickerid,$btn);
            e.preventDefault();
            return '';
        }
    );

    return pickerid;
}

/**
 * Add button action for the link wizard button
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function addBtnActionLinkwiz($btn, props, edid) {
    dw_linkwiz.init(jQuery('#'+edid));
    jQuery($btn).click(function(e){
        dw_linkwiz.val = props;
        dw_linkwiz.toggle();
        e.preventDefault();
        return '';
    });
    return 'link__wiz';
}


/**
 * Show/Hide a previously created picker window
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerToggle(pickerid,$btn){
    var $picker = jQuery('#' + pickerid),
        pos = $btn.offset();
    if ($picker.hasClass('a11y')) {
        $picker.removeClass('a11y').attr('aria-hidden', 'false');
    } else {
        $picker.addClass('a11y').attr('aria-hidden', 'true');
    }
    var picker_left = pos.left + 3,
        picker_width = $picker.width(),
        window_width = jQuery(window).width();
    if (picker_width > 300) {
        $picker.css("max-width", "300");
        picker_width = 300;
    }
    if ((picker_left + picker_width + 40) > window_width) {
        picker_left = window_width - picker_width - 40;
    }
    if (picker_left < 0) {
        picker_left = 0;
    }
    $picker.offset({left: picker_left, top: pos.top+$btn[0].offsetHeight+3});
}

/**
 * Close all open pickers
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerClose(){
    jQuery('.picker').addClass('a11y');
}


/**
 * Replaces \n with linebreaks
 */
function fixtxt(str){
    return str.replace(/\\n/g,"\n");
}

jQuery(function () {
    initToolbar('tool__bar','wiki__text',toolbar);
    jQuery('#tool__bar').attr('role', 'toolbar');
});



/* XXXXXXXXXX end of lib/scripts/toolbar.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/edit.js XXXXXXXXXX */

/**
 * Functions for text editing (toolbar stuff)
 *
 * @todo most of the stuff in here should be revamped and then moved to toolbar.js
 * @author Andreas Gohr <andi@splitbrain.org>
 */

/**
 * Creates a toolbar button through the DOM
 * Called for each entry of toolbar definition array (built by inc/toolbar.php and extended via js)
 *
 * Style the buttons through the toolbutton class
 *
 * @param {string} icon      image filename, relative to folder lib/images/toolbar/
 * @param {string} label     title of button, show on mouseover
 * @param {string} key       hint in title of button for access key
 * @param {string} id        id of button, and '<id>_ico' of icon
 * @param {string} classname for styling buttons
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Michal Rezler <m.rezler@centrum.cz>
 */
function createToolButton(icon,label,key,id,classname){
    var $btn = jQuery(document.createElement('button')),
        $ico = jQuery(document.createElement('img'));

    // prepare the basic button stuff
    $btn.addClass('toolbutton');
    if(classname){
        $btn.addClass(classname);
    }

    $btn.attr('title', label).attr('aria-controls', 'wiki__text');
    if(key){
        $btn.attr('title', label + ' ['+key.toUpperCase()+']')
            .attr('accessKey', key);
    }

    // set IDs if given
    if(id){
        $btn.attr('id', id);
        $ico.attr('id', id+'_ico');
    }

    // create the icon and add it to the button
    if(icon.substr(0,1) !== '/'){
        icon = DOKU_BASE + 'lib/images/toolbar/' + icon;
    }
    $ico.attr('src', icon);
    $ico.attr('alt', '');
    $ico.attr('width', 16);
    $ico.attr('height', 16);
    $btn.append($ico);

    // we have to return a DOM object (for compatibility reasons)
    return $btn[0];
}

/**
 * Creates a picker window for inserting text
 *
 * The given list can be an associative array with text,icon pairs
 * or a simple list of text. Style the picker window through the picker
 * class or the picker buttons with the pickerbutton class. Picker
 * windows are appended to the body and created invisible.
 *
 * @param  {string} id    the ID to assign to the picker
 * @param  {Array}  props the properties for the picker
 * @param  {string} edid  the ID of the textarea
 * @return DOMobject    the created picker
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function createPicker(id,props,edid){
    // create the wrapping div
    var $picker = jQuery(document.createElement('div'));

    $picker.addClass('picker a11y');
    if(props['class']){
        $picker.addClass(props['class']);
    }

    $picker.attr('id', id).css('position', 'absolute');

    function $makebutton(title) {
        var $btn = jQuery(document.createElement('button'))
            .addClass('pickerbutton').attr('title', title)
            .attr('aria-controls', edid)
            .on('click', bind(pickerInsert, title, edid))
            .appendTo($picker);
        return $btn;
    }

    jQuery.each(props.list, function (key, item) {
        if (!props.list.hasOwnProperty(key)) {
            return;
        }

        if(isNaN(key)){
            // associative array -> treat as text => image pairs
            if (item.substr(0,1) !== '/') {
                item = DOKU_BASE+'lib/images/'+props.icobase+'/'+item;
            }
            jQuery(document.createElement('img'))
                .attr('src', item)
                .attr('alt', '')
                .css('height', '16')
                .appendTo($makebutton(key));
        }else if (typeof item == 'string'){
            // a list of text -> treat as text picker
            $makebutton(item).text(item);
        }else{
            // a list of lists -> treat it as subtoolbar
            initToolbar($picker,edid,props.list);
            return false; // all buttons handled already
        }

    });
    jQuery('body').append($picker);

    // we have to return a DOM object (for compatibility reasons)
    return $picker[0];
}

/**
 * Called by picker buttons to insert Text and close the picker again
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerInsert(text,edid){
    insertAtCarret(edid,text);
    pickerClose();
}

/**
 * Add button action for signature button
 *
 * @param  {jQuery} $btn   Button element to add the action to
 * @param  {Array}  props  Associative array of button properties
 * @param  {string} edid   ID of the editor textarea
 * @return {string} picker id for aria-controls attribute
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionSignature($btn, props, edid) {
    if(typeof SIG != 'undefined' && SIG != ''){
        $btn.on('click', function (e) {
            insertAtCarret(edid,SIG);
            e.preventDefault();
        });
        return edid;
    }
    return '';
}

/**
 * Determine the current section level while editing
 *
 * @param {string} textboxId   ID of the text field
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function currentHeadlineLevel(textboxId){
    var field = jQuery('#' + textboxId)[0],
        s = false,
        opts = [field.value.substr(0,DWgetSelection(field).start)];
    if (field.form && field.form.prefix) {
        // we need to look in prefix context
        opts.push(field.form.prefix.value);
    }

    jQuery.each(opts, function (_, opt) {
        // Check whether there is a headline in the given string
        var str = "\n" + opt,
            lasthl = str.lastIndexOf("\n==");
        if (lasthl !== -1) {
            s = str.substr(lasthl+1,6);
            return false;
        }
    });
    if (s === false) {
        return 0;
    }
    return 7 - s.match(/^={2,6}/)[0].length;
}


/**
 * global var used for not saved yet warning
 */
window.textChanged = false;

/**
 * global var which stores original editor content
 */
window.doku_edit_text_content = '';
/**
 * Delete the draft before leaving the page
 */
function deleteDraft() {
    if (is_opera || window.keepDraft) {
        return;
    }

    var $dwform = jQuery('#dw__editform');

    if($dwform.length === 0) {
        return;
    }

    // remove a possibly saved draft using ajax
    jQuery.post(DOKU_BASE + 'lib/exe/ajax.php',
        {
            call: 'draftdel',
            id: $dwform.find('input[name=id]').val(),
            sectok: $dwform.find('input[name=sectok]').val()
        }
    );
}

/**
 * Activate "not saved" dialog, add draft deletion to page unload,
 * add handlers to monitor changes
 * Note: textChanged could be set by e.g. html_edit() as well
 *
 * Sets focus to the editbox as well
 */
jQuery(function () {
    var $editform = jQuery('#dw__editform');
    if ($editform.length == 0) {
        return;
    }

    var $edit_text = jQuery('#wiki__text');
    if ($edit_text.length > 0) {
        if($edit_text.attr('readOnly')) {
            return;
        }

        // set focus and place cursor at the start
        var sel = DWgetSelection($edit_text[0]);
        sel.start = 0;
        sel.end   = 0;
        DWsetSelection(sel);
        $edit_text.trigger('focus');

        doku_edit_text_content = $edit_text.val();
    }

    var changeHandler = function() {
        doku_hasTextBeenModified();

        doku_summaryCheck();
    };

    $editform.change(changeHandler);
    $editform.keydown(changeHandler);

    window.onbeforeunload = function(){
        if(window.textChanged) {
            return LANG.notsavedyet;
        }
    };
    window.onunload = deleteDraft;

    // reset change memory var on submit
    jQuery('#edbtn__save').on('click',
        function() {
            window.onbeforeunload = '';
            textChanged = false;
        }
    );
    jQuery('#edbtn__preview').on('click',
        function() {
            window.onbeforeunload = '';
            textChanged = false;
            window.keepDraft = true; // needed to keep draft on page unload
        }
    );

    var $summary = jQuery('#edit__summary');
    $summary.on('change keyup', doku_summaryCheck);

    if (textChanged) doku_summaryCheck();
});

/**
 * Updates textChanged variable if content of the editor has been modified
 */
function doku_hasTextBeenModified() {
    if (!textChanged) {
        var $edit_text = jQuery('#wiki__text');

        if ($edit_text.length > 0) {
            textChanged = doku_edit_text_content != $edit_text.val();
        } else {
            textChanged = true;
        }
    }
}

/**
 * Checks if a summary was entered - if not the style is changed
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function doku_summaryCheck(){
    var $sum = jQuery('#edit__summary'),
        missing = $sum.val() === '';
    $sum.toggleClass('missing', missing).toggleClass('edit', !missing);
}



/* XXXXXXXXXX end of lib/scripts/edit.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/editor.js XXXXXXXXXX */

/**
 * The DokuWiki editor features
 *
 * These are the advanced features of the editor. It does NOT contain any
 * code for the toolbar buttons and it functions. See toolbar.js for that.
 */

var dw_editor = {

    /**
     * initialize the default editor functionality
     *
     * All other functions can also be called separately for non-default
     * textareas
     */
    init: function(){
        var $editor = jQuery('#wiki__text');
        if($editor.length === 0) {
            return;
        }

        dw_editor.initSizeCtl('#size__ctl',$editor);

        if($editor.attr('readOnly')) {
            return;
        }

        $editor.keydown(dw_editor.keyHandler);

    },

    /**
     * Add the edit window size and wrap controls
     *
     * Initial values are read from cookie if it exists
     *
     * @param selector ctlarea the div to place the controls
     * @param selector editor  the textarea to control
     */
    initSizeCtl: function(ctlarea,editor){
        var $ctl      = jQuery(ctlarea),
            $textarea = jQuery(editor);

        if($ctl.length === 0 || $textarea.length === 0) {
            return;
        }

        $textarea.css('height', DokuCookie.getValue('sizeCtl') || '300px');

        var wrp = DokuCookie.getValue('wrapCtl');
        if(wrp){
            dw_editor.setWrap($textarea[0], wrp);
        } // else use default value

        jQuery.each([
            ['larger', function(){dw_editor.sizeCtl(editor,100);}],
            ['smaller', function(){dw_editor.sizeCtl(editor,-100);}],
            ['wrap', function(){dw_editor.toggleWrap(editor);}]
        ], function (_, img) {
            jQuery(document.createElement('img'))
                .attr('src', DOKU_BASE+'lib/images/' + img[0] + '.gif')
                .attr('alt', '')
                .on('click', img[1])
                .appendTo($ctl);
        });
    },

    /**
     * This sets the vertical size of the editbox and adjusts the cookie
     *
     * @param selector editor  the textarea to control
     * @param int val          the relative value to resize in pixel
     */
    sizeCtl: function(editor,val){
        var $textarea = jQuery(editor),
            height = parseInt($textarea.css('height')) + val;
        $textarea.css('height', height+'px');
        DokuCookie.setValue('sizeCtl',$textarea.css('height'));
    },

    /**
     * Toggle the wrapping mode of the editor textarea and adjusts the
     * cookie
     *
     * @param selector editor  the textarea to control
     */
    toggleWrap: function(editor){
        var $textarea = jQuery(editor),
            wrap = $textarea.attr('wrap');
        dw_editor.setWrap($textarea[0],
                          (wrap && wrap.toLowerCase() == 'off') ? 'soft' : 'off');
        DokuCookie.setValue('wrapCtl',$textarea.attr('wrap'));
    },

    /**
     * Set the wrapping mode of a textarea
     *
     * @author Fluffy Convict <fluffyconvict@hotmail.com>
     * @author <shutdown@flashmail.com>
     * @link   http://news.hping.org/comp.lang.javascript.archive/12265.html
     * @link   https://bugzilla.mozilla.org/show_bug.cgi?id=41464
     * @param  DomObject textarea
     * @param  string wrapAttrValue
     */
    setWrap: function(textarea, wrapAttrValue){
        textarea.setAttribute('wrap', wrapAttrValue);

        // Fix display for mozilla
        var parNod = textarea.parentNode;
        var nxtSib = textarea.nextSibling;
        parNod.removeChild(textarea);
        parNod.insertBefore(textarea, nxtSib);
    },

    /**
     * Make intended formattings easier to handle
     *
     * Listens to all key inputs and handle indentions
     * of lists and code blocks
     *
     * Currently handles space, backspace, enter and
     * ctrl-enter presses
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @fixme handle tabs
     * @param event e - the key press event object
     */
    keyHandler: function(e){
        if(jQuery.inArray(e.keyCode,[8, 10, 13, 32]) === -1) {
            return;
        }
        var selection = DWgetSelection(this);
        if(selection.getLength() > 0) {
            return; //there was text selected, keep standard behavior
        }
        var search    = "\n"+this.value.substr(0,selection.start);
        var linestart = Math.max(search.lastIndexOf("\n"),
                                 search.lastIndexOf("\r")); //IE workaround
        search = search.substr(linestart);

        if((e.keyCode == 13 || e.keyCode == 10) && e.ctrlKey) { // Ctrl-Enter (With Chrome workaround)
            // Submit current edit
            jQuery('#edbtn__save').trigger('click');
            e.preventDefault(); // prevent enter key
            return false;
        }else if(e.keyCode == 13){ // Enter
            // keep current indention for lists and code
            var match = search.match(/(\n  +([\*-] ?)?)/);
            if(match){
                var scroll = this.scrollHeight;
                var match2 = search.match(/^\n  +[\*-]\s*$/);
                // Cancel list if the last item is empty (i. e. two times enter)
                if (match2 && this.value.substr(selection.start).match(/^($|\r?\n)/)) {
                    this.value = this.value.substr(0, linestart) + "\n" +
                                 this.value.substr(selection.start);
                    selection.start = linestart + 1;
                    selection.end = linestart + 1;
                    DWsetSelection(selection);
                } else {
                    insertAtCarret(this.id,match[1]);
                }
                this.scrollTop += (this.scrollHeight - scroll);
                e.preventDefault(); // prevent enter key
                return false;
            }
        }else if(e.keyCode == 8){ // Backspace
            // unindent lists
            var match = search.match(/(\n  +)([*-] ?)$/);
            if(match){
                var spaces = match[1].length-1;

                if(spaces > 3){ // unindent one level
                    this.value = this.value.substr(0,linestart)+
                                 this.value.substr(linestart+2);
                    selection.start = selection.start - 2;
                    selection.end   = selection.start;
                }else{ // delete list point
                    this.value = this.value.substr(0,linestart)+
                                 this.value.substr(selection.start);
                    selection.start = linestart;
                    selection.end   = linestart;
                }
                DWsetSelection(selection);
                e.preventDefault(); // prevent backspace
                return false;
            }
        }else if(e.keyCode == 32){ // Space
            // intend list item
            var match = search.match(/(\n  +)([*-] )$/);
            if(match){
                this.value = this.value.substr(0,linestart)+'  '+
                             this.value.substr(linestart);
                selection.start = selection.start + 2;
                selection.end   = selection.start;
                DWsetSelection(selection);
                e.preventDefault(); // prevent space
                return false;
            }
        }
    }


};

jQuery(dw_editor.init);



/* XXXXXXXXXX end of lib/scripts/editor.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/locktimer.js XXXXXXXXXX */

/**
 * Class managing the timer to display a warning on a expiring lock
 */
var dw_locktimer = {
    timeout: 0,
    draft: false,
    timerID: null,
    lasttime: null,
    msg: LANG.willexpire,
    pageid: '',
    fieldsToSaveAsDraft: [
        'input[name=prefix]',
        'textarea[name=wikitext]',
        'input[name=suffix]',
        'input[name=date]',
    ],
    callbacks: [],

    /**
     * Initialize the lock timer
     *
     * @param {int}    timeout Length of timeout in seconds
     * @param {bool}   draft   Whether to save drafts
     * @param {string} edid    Optional; ID of an edit object which has to be present
     */
    init: function(timeout,draft,edid){
        var $edit;

        edid = edid || 'wiki__text';

        $edit = jQuery('#' + edid);
        if($edit.length === 0 || $edit.attr('readonly')) {
            return;
        }

        // init values
        dw_locktimer.timeout  = timeout*1000;
        dw_locktimer.draft    = draft;
        dw_locktimer.lasttime = new Date();

        dw_locktimer.pageid   = jQuery('#dw__editform').find('input[name=id]').val();
        if(!dw_locktimer.pageid) {
            return;
        }

        // register refresh event
        $edit.keypress(dw_locktimer.refresh);
        // start timer
        dw_locktimer.reset();
    },

    /**
     * Add another field of the editform to be posted to the server when a draft is saved
     */
    addField: function(selector) {
        dw_locktimer.fieldsToSaveAsDraft.push(selector);
    },

    /**
     * Add a callback that is executed when the post request to renew the lock and save the draft returns successfully
     *
     * If the user types into the edit-area, then dw_locktimer will regularly send a post request to the DokuWiki server
     * to extend the page's lock and update the draft. When this request returns successfully, then the draft__status
     * is updated. This method can be used to add further callbacks to be executed at that moment.
     *
     * @param {function} callback the only param is the data returned by the server
     */
    addRefreshCallback: function(callback) {
        dw_locktimer.callbacks.push(callback);
    },

    /**
     * (Re)start the warning timer
     */
    reset: function(){
        dw_locktimer.clear();
        dw_locktimer.timerID = window.setTimeout(dw_locktimer.warning, dw_locktimer.timeout);
    },

    /**
     * Display the warning about the expiring lock
     */
    warning: function(){
        dw_locktimer.clear();
        alert(fixtxt(dw_locktimer.msg));
    },

    /**
     * Remove the current warning timer
     */
    clear: function(){
        if(dw_locktimer.timerID !== null){
            window.clearTimeout(dw_locktimer.timerID);
            dw_locktimer.timerID = null;
        }
    },

    /**
     * Refresh the lock via AJAX
     *
     * Called on keypresses in the edit area
     */
    refresh: function(){
        var now = new Date(),
            params = 'call=lock&id=' + dw_locktimer.pageid + '&';

        // refresh every half minute only
        if(now.getTime() - dw_locktimer.lasttime.getTime() <= 30*1000) {
            return;
        }

        // POST everything necessary for draft saving
        if(dw_locktimer.draft && jQuery('#dw__editform').find('textarea[name=wikitext]').length > 0){
            params += jQuery('#dw__editform').find(dw_locktimer.fieldsToSaveAsDraft.join(', ')).serialize();
        }

        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            null,
            'json'
        ).done(function dwLocktimerRefreshDoneHandler(data) {
            dw_locktimer.callbacks.forEach(
                function (callback) {
                    callback(data);
                }
            );
        });
        dw_locktimer.lasttime = now;
    },

    /**
     * Callback. Resets the warning timer
     */
    refreshed: function(data){
        if (data.errors.length) {
            data.errors.forEach(function(error) {
                jQuery('#draft__status').after(
                    jQuery('<div class="error"></div>').text(error)
                );
            })
        }

        jQuery('#draft__status').html(data.draft);
        if(data.lock !== '1') {
            return; // locking failed
        }
        dw_locktimer.reset();
    }
};
dw_locktimer.callbacks.push(dw_locktimer.refreshed);



/* XXXXXXXXXX end of lib/scripts/locktimer.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/linkwiz.js XXXXXXXXXX */

/**
 * The Link Wizard
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 * @author Pierre Spring <pierre.spring@caillou.ch>
 */
var dw_linkwiz = {
    $wiz: null,
    $entry: null,
    result: null,
    timer: null,
    textArea: null,
    selected: null,
    selection: null,

    /**
     * Initialize the dw_linkwizard by creating the needed HTML
     * and attaching the eventhandlers
     */
    init: function($editor){
        // position relative to the text area
        var pos = $editor.position();

        // create HTML Structure
        if(dw_linkwiz.$wiz)
            return;
        dw_linkwiz.$wiz = jQuery(document.createElement('div'))
               .dialog({
                   autoOpen: false,
                   draggable: true,
                   title: LANG.linkwiz,
                   resizable: false
               })
               .html(
                    '<div>'+LANG.linkto+' <input type="text" class="edit" id="link__wiz_entry" autocomplete="off" /></div>'+
                    '<div id="link__wiz_result"></div>'
                    )
               .parent()
               .attr('id','link__wiz')
               .css({
                    'position':    'absolute',
                    'top':         (pos.top+20)+'px',
                    'left':        (pos.left+80)+'px'
                   })
               .hide()
               .appendTo('.dokuwiki:first');

        dw_linkwiz.textArea = $editor[0];
        dw_linkwiz.result = jQuery('#link__wiz_result')[0];

        // scrollview correction on arrow up/down gets easier
        jQuery(dw_linkwiz.result).css('position', 'relative');

        dw_linkwiz.$entry = jQuery('#link__wiz_entry');
        if(JSINFO.namespace){
            dw_linkwiz.$entry.val(JSINFO.namespace+':');
        }

        // attach event handlers
        jQuery('#link__wiz .ui-dialog-titlebar-close').on('click', dw_linkwiz.hide);
        dw_linkwiz.$entry.keyup(dw_linkwiz.onEntry);
        jQuery(dw_linkwiz.result).on('click', 'a', dw_linkwiz.onResultClick);
    },

    /**
     * handle all keyup events in the entry field
     */
    onEntry: function(e){
        if(e.keyCode == 37 || e.keyCode == 39){ //left/right
            return true; //ignore
        }
        if(e.keyCode == 27){ //Escape
            dw_linkwiz.hide();
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 38){ //Up
            dw_linkwiz.select(dw_linkwiz.selected -1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 40){ //Down
            dw_linkwiz.select(dw_linkwiz.selected +1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 13){ //Enter
            if(dw_linkwiz.selected > -1){
                var $obj = dw_linkwiz.$getResult(dw_linkwiz.selected);
                if($obj.length > 0){
                    dw_linkwiz.resultClick($obj.find('a')[0]);
                }
            }else if(dw_linkwiz.$entry.val()){
                dw_linkwiz.insertLink(dw_linkwiz.$entry.val());
            }

            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        dw_linkwiz.autocomplete();
    },

    /**
     * Get one of the results by index
     *
     * @param   num int result div to return
     * @returns DOMObject or null
     */
    getResult: function(num){
        DEPRECATED('use dw_linkwiz.$getResult()[0] instead');
        return dw_linkwiz.$getResult()[0] || null;
    },

    /**
     * Get one of the results by index
     *
     * @param   num int result div to return
     * @returns jQuery object
     */
    $getResult: function(num) {
        return jQuery(dw_linkwiz.result).find('div').eq(num);
    },

    /**
     * Select the given result
     */
    select: function(num){
        if(num < 0){
            dw_linkwiz.deselect();
            return;
        }

        var $obj = dw_linkwiz.$getResult(num);
        if ($obj.length === 0) {
            return;
        }

        dw_linkwiz.deselect();
        $obj.addClass('selected');

        // make sure the item is viewable in the scroll view

        //getting child position within the parent
        var childPos = $obj.position().top;
        //getting difference between the childs top and parents viewable area
        var yDiff = childPos + $obj.outerHeight() - jQuery(dw_linkwiz.result).innerHeight();

        if (childPos < 0) {
            //if childPos is above viewable area (that's why it goes negative)
            jQuery(dw_linkwiz.result)[0].scrollTop += childPos;
        } else if(yDiff > 0) {
            // if difference between childs top and parents viewable area is
            // greater than the height of a childDiv
            jQuery(dw_linkwiz.result)[0].scrollTop += yDiff;
        }

        dw_linkwiz.selected = num;
    },

    /**
     * deselect a result if any is selected
     */
    deselect: function(){
        if(dw_linkwiz.selected > -1){
            dw_linkwiz.$getResult(dw_linkwiz.selected).removeClass('selected');
        }
        dw_linkwiz.selected = -1;
    },

    /**
     * Handle clicks in the result set an dispatch them to
     * resultClick()
     */
    onResultClick: function(e){
        if(!jQuery(this).is('a')) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        dw_linkwiz.resultClick(this);
        return false;
    },

    /**
     * Handles the "click" on a given result anchor
     */
    resultClick: function(a){
        dw_linkwiz.$entry.val(a.title);
        if(a.title == '' || a.title.substr(a.title.length-1) == ':'){
            dw_linkwiz.autocomplete_exec();
        }else{
            if (jQuery(a.nextSibling).is('span')) {
                dw_linkwiz.insertLink(a.nextSibling.innerHTML);
            }else{
                dw_linkwiz.insertLink('');
            }
        }
    },

    /**
     * Insert the id currently in the entry box to the textarea,
     * replacing the current selection or at the cursor position.
     * When no selection is available the given title will be used
     * as link title instead
     */
    insertLink: function(title){
        var link = dw_linkwiz.$entry.val(),
            sel, stxt;
        if(!link) {
            return;
        }

        sel = DWgetSelection(dw_linkwiz.textArea);
        if(sel.start == 0 && sel.end == 0) {
            sel = dw_linkwiz.selection;
        }

        stxt = sel.getText();

        // don't include trailing space in selection
        if(stxt.charAt(stxt.length - 1) == ' '){
            sel.end--;
            stxt = sel.getText();
        }

        if(!stxt && !DOKU_UHC) {
            stxt=title;
        }

        // prepend colon inside namespaces for non namespace pages
        if(dw_linkwiz.textArea.form.id.value.indexOf(':') != -1 &&
           link.indexOf(':') == -1){
           link = ':' + link;
        }

        var so = link.length;
        var eo = 0;
        if(dw_linkwiz.val){
            if(dw_linkwiz.val.open) {
                so += dw_linkwiz.val.open.length;
                link = dw_linkwiz.val.open+link;
            }
            link += '|';
            so += 1;
            if(stxt) {
                link += stxt;
            }
            if(dw_linkwiz.val.close) {
                link += dw_linkwiz.val.close;
                eo = dw_linkwiz.val.close.length;
            }
        }

        pasteText(sel,link,{startofs: so, endofs: eo});
        dw_linkwiz.hide();

        // reset the entry to the parent namespace
        var externallinkpattern = new RegExp('^((f|ht)tps?:)?//', 'i'),
            entry_value;
        if (externallinkpattern.test(dw_linkwiz.$entry.val())) {
            if (JSINFO.namespace) {
                entry_value = JSINFO.namespace + ':';
            } else {
                entry_value = ''; //reset whole external links
            }
        } else {
            entry_value = dw_linkwiz.$entry.val().replace(/[^:]*$/, '')
        }
        dw_linkwiz.$entry.val(entry_value);
    },

    /**
     * Start the page/namespace lookup timer
     *
     * Calls autocomplete_exec when the timer runs out
     */
    autocomplete: function(){
        if(dw_linkwiz.timer !== null){
            window.clearTimeout(dw_linkwiz.timer);
            dw_linkwiz.timer = null;
        }

        dw_linkwiz.timer = window.setTimeout(dw_linkwiz.autocomplete_exec,350);
    },

    /**
     * Executes the AJAX call for the page/namespace lookup
     */
    autocomplete_exec: function(){
        var $res = jQuery(dw_linkwiz.result);
        dw_linkwiz.deselect();
        $res.html('<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="" width="16" height="16" />')
            .load(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'linkwiz',
                q: dw_linkwiz.$entry.val()
            }
        );
    },

    /**
     * Show the link wizard
     */
    show: function(){
        dw_linkwiz.selection  = DWgetSelection(dw_linkwiz.textArea);
        dw_linkwiz.$wiz.show();
        dw_linkwiz.$entry.focus();
        dw_linkwiz.autocomplete();

        // Move the cursor to the end of the input
        var temp = dw_linkwiz.$entry.val();
        dw_linkwiz.$entry.val('');
        dw_linkwiz.$entry.val(temp);
    },

    /**
     * Hide the link wizard
     */
    hide: function(){
        dw_linkwiz.$wiz.hide();
        dw_linkwiz.textArea.focus();
    },

    /**
     * Toggle the link wizard
     */
    toggle: function(){
        if(dw_linkwiz.$wiz.css('display') == 'none'){
            dw_linkwiz.show();
        }else{
            dw_linkwiz.hide();
        }
    }
};



/* XXXXXXXXXX end of lib/scripts/linkwiz.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/media.js XXXXXXXXXX */

/**
 * JavaScript functionality for the media management popup
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Pierre Spring <pierre.spring@caillou.ch>
 */

var dw_mediamanager = {
    keepopen: false,
    hide: false,
    popup: false,
    display: false,
    ext: false,
    $popup: null,

    // Image insertion opts
    align: false,
    link: false,
    size: false,
    forbidden_opts: {},

    // File list options
    view_opts: {list: false, sort: false},

    layout_width: 0,

    // The minimum height of the full-screen mediamanager in px
    minHeights: {thumbs: 200, rows: 100},

    init: function () {
        var $content, $tree;
        $content = jQuery('#media__content');
        $tree = jQuery('#media__tree');
        if (!$tree.length) return;

        dw_mediamanager.prepare_content($content);

        dw_mediamanager.attachoptions();
        dw_mediamanager.initpopup();

        // add the action to autofill the "upload as" field
        $content
            .on('change', '#upload__file', dw_mediamanager.suggest)
            // Attach the image selector action to all links
            .on('click', 'a.select', dw_mediamanager.select)
            // Attach deletion confirmation dialog to the delete buttons
            .on('click', '#media__content a.btn_media_delete', dw_mediamanager.confirmattach)
            .on('submit', '#mediamanager__done_form', dw_mediamanager.list);

        $tree.dw_tree({
            toggle_selector: 'img',
            load_data: function (show_sublist, $clicky) {
                // get the enclosed link (is always the first one)
                var $link = $clicky.parent().find('div.li a.idx_dir');

                jQuery.post(
                    DOKU_BASE + 'lib/exe/ajax.php',
                    $link[0].search.substr(1) + '&call=medians',
                    show_sublist,
                    'html'
                );
            },

            toggle_display: function ($clicky, opening) {
                $clicky.attr('src', DOKU_BASE + 'lib/images/' + (opening ? 'minus' : 'plus') + '.gif');
            }
        });
        $tree.on('click', 'a', dw_mediamanager.list);

        // Init view property
        dw_mediamanager.set_fileview_list();

        dw_mediamanager.init_options();

        dw_mediamanager.image_diff();
        dw_mediamanager.init_ajax_uploader();

        // changing opened tab in the file list panel
        var $page = jQuery('#mediamanager__page');
        $page.find('div.filelist')
            .on('click', 'ul.tabs a', dw_mediamanager.list)
            // loading file details
            .on('click', 'div.panelContent a', dw_mediamanager.details)
            // search form
            .on('submit', '#dw__mediasearch', dw_mediamanager.list)
            // "upload as" field autofill
            .on('change', '#upload__file', dw_mediamanager.suggest)
            // uploaded images
            .on('click', '.qq-upload-file a', dw_mediamanager.details);

        // changing opened tab in the file details panel
        $page.find('div.file')
            .on('click', 'ul.tabs a', dw_mediamanager.details)
            // "update new version" button
            .on('submit', '#mediamanager__btn_update', dw_mediamanager.list)
            // revisions form
            .on('submit', '#page__revisions', dw_mediamanager.details)
            .on('click', '#page__revisions a', dw_mediamanager.details)
            // meta edit form
            .on('submit', '#mediamanager__save_meta', dw_mediamanager.details)
            // delete button
            .on('submit', '#mediamanager__btn_delete', dw_mediamanager.details)
            // "restore this version" button
            .on('submit', '#mediamanager__btn_restore', dw_mediamanager.details)
            // less/more recent buttons in media revisions form
            .on('submit', '.btn_newer, .btn_older', dw_mediamanager.details);

        dw_mediamanager.resize();
        dw_mediamanager.update_resizable();
        dw_mediamanager.layout_width = $page.width();
        jQuery(window).on('resize', dw_mediamanager.window_resize);
    },

    init_options: function () {
        var $options = jQuery('div.filelist div.panelHeader form.options'),
            $listType, $sortBy, $both;
        if ($options.length === 0) {
            return;
        }

        $listType = $options.find('li.listType');
        $sortBy = $options.find('li.sortBy');
        $both = $listType.add($sortBy);

        // Remove the submit button
        $options.find('button[type=submit]').parent().hide();

        // Prepare HTML for jQuery UI buttonset
        $both.find('label').each(function () {
            var $this = jQuery(this);
            $this.children('input').appendTo($this.parent());
        });

        // Init buttonset
        $both.find("input[type='radio']").checkboxradio({icon: false});
        $both.controlgroup();

        // Change handlers
        $listType.children('input').change(function () {
            dw_mediamanager.set_fileview_list();
        });
        $sortBy.children('input').change(function (event) {
            dw_mediamanager.set_fileview_sort();
            dw_mediamanager.list.call(jQuery('#dw__mediasearch')[0] || this, event);
        });
    },

    /**
     * build the popup window
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    initpopup: function () {
        var opts, $insp, $insbtn;

        dw_mediamanager.$popup = jQuery(document.createElement('div'))
            .attr('id', 'media__popup_content')
            .dialog({
                autoOpen: false, width: 280, modal: true,
                draggable: true, title: LANG.mediatitle,
                resizable: false
            });

        opts = [
            {
                id: 'link', label: LANG.mediatarget,
                btns: ['lnk', 'direct', 'nolnk', 'displaylnk']
            },
            {
                id: 'align', label: LANG.mediaalign,
                btns: ['noalign', 'left', 'center', 'right']
            },
            {
                id: 'size', label: LANG.mediasize,
                btns: ['small', 'medium', 'large', 'original']
            }
        ];

        jQuery.each(opts, function (_, opt) {
            var $p, $l;
            $p = jQuery(document.createElement('p'))
                .attr('id', 'media__' + opt.id);

            if (dw_mediamanager.display === "2") {
                $p.hide();
            }

            $l = jQuery(document.createElement('label'))
                .text(opt.label);
            $p.append($l);

            jQuery.each(opt.btns, function (i, text) {
                var $btn, $img;
                $btn = jQuery(document.createElement('button'))
                    .addClass('button')
                    .attr('id', "media__" + opt.id + "btn" + (i + 1))
                    .attr('title', LANG['media' + text])
                    .on('click', bind(dw_mediamanager.setOpt, opt.id));

                $img = jQuery(document.createElement('img'))
                    .attr('src', DOKU_BASE + 'lib/images/media_' + opt.id + '_' + text + '.png');

                $btn.append($img);
                $p.append($btn);
            });

            dw_mediamanager.$popup.append($p);
        });

        // insert button
        $insp = jQuery(document.createElement('p'));
        dw_mediamanager.$popup.append($insp);

        $insbtn = jQuery(document.createElement('input'))
            .attr('id', 'media__sendbtn')
            .attr('type', 'button')
            .addClass('button')
            .val(LANG.mediainsert);
        $insp.append($insbtn);
    },

    /**
     * Insert the clicked image into the opener's textarea
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    insert: function (id) {
        var opts, cb, edid, s;

        // set syntax options
        dw_mediamanager.$popup.dialog('close');

        opts = '';

        if ({img: 1, swf: 1}[dw_mediamanager.ext] === 1) {

            if (dw_mediamanager.link === '4') {
                opts = '?linkonly';
            } else {

                if (dw_mediamanager.link === "3" && dw_mediamanager.ext === 'img') {
                    opts = '?nolink';
                } else if (dw_mediamanager.link === "2" && dw_mediamanager.ext === 'img') {
                    opts = '?direct';
                }

                s = parseInt(dw_mediamanager.size, 10);
                var size = s * 200;

                if (s && s >= 1 && s < 4) {
                    opts += (opts.length) ? '&' : '?';
                    opts += size;
                    if (dw_mediamanager.ext === 'swf') {
                        switch (s) {
                            case 1:
                                opts += 'x62';
                                break;
                            case 2:
                                opts += 'x123';
                                break;
                            case 3:
                                opts += 'x185';
                                break;
                        }
                    }
                }
            }
        }
        edid = String.prototype.match.call(document.location, /&edid=([^&]+)/);
        edid = edid ? edid[1] : 'wiki__text';
        cb = String.prototype.match.call(document.location, /&onselect=([^&]+)/);
        cb = cb ? cb[1].replace(/[^\w]+/, '') : 'dw_mediamanager_item_select';

        // arguments here only match the dw_mediamanager_item_select function, these will need to change if you override cb with onselect GET param
        opener[cb](edid, id, opts, dw_mediamanager.align, dw_mediamanager.keepopen);
        if (!dw_mediamanager.keepopen) {
            window.close();
        }
        opener.focus();
        return false;
    },


    /**
     * Prefills the wikiname.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    suggest: function () {
        var $file, $name, text;

        $file = jQuery(this);
        $name = jQuery('#upload__name');

        if ($name.val() != '') return;

        if (!$file.length || !$name.length) {
            return;
        }

        text = $file.val();
        text = text.substr(text.lastIndexOf('/') + 1);
        text = text.substr(text.lastIndexOf('\\') + 1);
        $name.val(text);
    },

    /**
     * list the content of a namespace using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    list: function (event) {
        var $link, $content, params;

        if (event) {
            event.preventDefault();
        }

        jQuery('div.success, div.info, div.error, div.notify').remove();

        $link = jQuery(this);

        //popup
        $content = jQuery('#media__content');

        if ($content.length === 0) {
            //fullscreen media manager
            $content = jQuery('div.filelist');

            if ($link.hasClass('idx_dir')) {
                //changing namespace
                jQuery('div.file').empty();
                jQuery('div.namespaces .selected').removeClass('selected');
                $link.addClass('selected');
            }
        }

        params = 'call=medialist&';

        if ($link[0].search) {
            params += $link[0].search.substr(1);
        } else if ($link.is('form')) {
            params += dw_mediamanager.form_params($link);
        } else if ($link.closest('form').length > 0) {
            params += dw_mediamanager.form_params($link.closest('form'));
        }

        // fetch the subtree
        dw_mediamanager.update_content($content, params);
    },

    /**
     * Returns form parameters
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    form_params: function ($form) {
        if (!$form.length) return;

        var action = '';
        var i = $form[0].action.indexOf('?');
        if (i >= 0) {
            action = $form[0].action.substr(i + 1);
        }
        return action + '&' + $form.serialize();
    },

    set_fileview_list: function (new_type) {
        dw_mediamanager.set_fileview_opt(['list', 'listType', function (new_type) {
            jQuery('div.filelist div.panelContent ul')
                .toggleClass('rows', new_type === 'rows')
                .toggleClass('thumbs', new_type === 'thumbs');
        }], new_type);
    },

    set_fileview_sort: function (new_sort) {
        dw_mediamanager.set_fileview_opt(['sort', 'sortBy', function (new_sort) {
            // FIXME
        }], new_sort);
    },

    set_fileview_opt: function (opt, new_val) {
        if (typeof new_val === 'undefined') {
            new_val = jQuery('form.options li.' + opt[1] + ' input')
                .filter(':checked').val();
            // if new_val is still undefined (because form.options is not in active tab), set to most spacious option
            if (typeof new_val === 'undefined') {
                new_val = 'thumbs';
            }
        }

        if (new_val !== dw_mediamanager.view_opts[opt[0]]) {
            opt[2](new_val);

            DokuCookie.setValue(opt[0], new_val);

            dw_mediamanager.view_opts[opt[0]] = new_val;
        }
    },

    /**
     * Lists the content of the right column (image details) using AJAX
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    details: function (event) {
        var $link, $content, params, update_list;
        $link = jQuery(this);
        event.preventDefault();

        jQuery('div.success, div.info, div.error, div.notify').remove();

        if ($link[0].id == 'mediamanager__btn_delete' && !confirm(LANG.del_confirm)) {
            return false;
        }
        if ($link[0].id == 'mediamanager__btn_restore' && !confirm(LANG.restore_confirm)) {
            return false;
        }

        $content = jQuery('div.file');
        params = 'call=mediadetails&';

        if ($link[0].search) {
            params += $link[0].search.substr(1);
        } else if ($link.is('form')) {
            params += dw_mediamanager.form_params($link);
        } else if ($link.closest('form').length > 0) {
            params += dw_mediamanager.form_params($link.closest('form'));
        }

        update_list = ($link[0].id == 'mediamanager__btn_delete' ||
        $link[0].id == 'mediamanager__btn_restore');

        dw_mediamanager.update_content($content, params, update_list);
    },

    update_content: function ($content, params, update_list) {
        var $container;

        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            function (data) {
                dw_mediamanager.$resizables().resizable('destroy');

                if (update_list) {
                    dw_mediamanager.list.call(jQuery('#mediamanager__page').find('form.options button[type="submit"]')[0]);
                }

                $content.html(data);

                dw_mediamanager.prepare_content($content);
                dw_mediamanager.updatehide();

                dw_mediamanager.update_resizable();
                dw_behaviour.revisionBoxHandler();

                // Make sure that the list view style stays the same
                dw_mediamanager.set_fileview_list(dw_mediamanager.view_opts.list);

                dw_mediamanager.image_diff();
                dw_mediamanager.init_ajax_uploader();
                dw_mediamanager.init_options();

            },
            'html'
        );
        $container = $content.find('div.panelContent');
        if ($container.length === 0) {
            $container = $content;
        }
        $container.html('<img src="' + DOKU_BASE + 'lib/images/throbber.gif" alt="..." class="load" />');
    },

    window_resize: function () {
        dw_mediamanager.opacity_slider();
        dw_mediamanager.portions_slider();
    },

    $resizables: function () {
        return jQuery('#mediamanager__page').find('div.namespaces, div.filelist');
    },

    /**
     * Updates mediamanager layout
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    update_resizable: function () {
        var $resizables = dw_mediamanager.$resizables();

        $resizables.resizable({
            handles: (jQuery('html[dir=rtl]').length ? 'w' : 'e'),
            resize: function (event, ui) {
                var $page = jQuery('#mediamanager__page');
                var widthFull = $page.width();
                var widthResizables = 0;
                $resizables.each(function () {
                    widthResizables += jQuery(this).width();
                });
                var $filePanel = $page.find('div.panel.file');

                // set max width of resizable column
                var widthOtherResizable = widthResizables - jQuery(this).width();
                var minWidthNonResizable = parseFloat($filePanel.css("min-width"));
                var maxWidth = widthFull - (widthOtherResizable + minWidthNonResizable) - 1;
                $resizables.resizable("option", "maxWidth", maxWidth);

                // width of file panel in % = 100% - width of resizables in %
                // this calculates with 99.9 and not 100 to overcome rounding errors
                var relWidthNonResizable = 99.9 - (100 * widthResizables / widthFull);
                // set width of file panel
                $filePanel.width(relWidthNonResizable + '%');

                dw_mediamanager.opacity_slider();
                dw_mediamanager.portions_slider();
            }
        });
    },

    resize: function () {
        jQuery('#mediamanager__page').find('div.panelContent').css('height', '60vh');
    },

    /**
     * Prints 'select' for image difference representation type
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    image_diff: function () {
        if (jQuery('#mediamanager__difftype').length) return;

        var $form = jQuery('#mediamanager__form_diffview');
        if (!$form.length) return;

        var $label = jQuery(document.createElement('label'));
        $label.append('<span>' + LANG.media_diff + '</span> ');
        var $select = jQuery(document.createElement('select'))
            .attr('id', 'mediamanager__difftype')
            .attr('name', 'difftype')
            .change(dw_mediamanager.change_diff_type);
        $select.append(new Option(LANG.media_diff_both, "both"));
        $select.append(new Option(LANG.media_diff_opacity, "opacity"));
        $select.append(new Option(LANG.media_diff_portions, "portions"));
        $label.append($select);
        $form.append($label);

        // for IE
        var select = document.getElementById('mediamanager__difftype');
        select.options[0].text = LANG.media_diff_both;
        select.options[1].text = LANG.media_diff_opacity;
        select.options[2].text = LANG.media_diff_portions;
    },

    /**
     * Handles selection of image difference representation type
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    change_diff_type: function () {
        var $select = jQuery('#mediamanager__difftype');
        var $content = jQuery('#mediamanager__diff');

        var params = dw_mediamanager.form_params($select.closest('form')) + '&call=mediadiff';
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            params,
            function (data) {
                $content.html(data);
                dw_mediamanager.portions_slider();
                dw_mediamanager.opacity_slider();
            },
            'html'
        );
    },

    /**
     * Sets options for opacity diff slider
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    opacity_slider: function () {
        var $diff = jQuery("#mediamanager__diff");
        var $slider = $diff.find("div.slider");
        if (!$slider.length) return;

        var $image = $diff.find('div.imageDiff.opacity div.image1 img');
        if (!$image.length) return;
        $slider.width($image.width() - 20);

        $slider.slider();
        $slider.slider("option", "min", 0);
        $slider.slider("option", "max", 0.999);
        $slider.slider("option", "step", 0.001);
        $slider.slider("option", "value", 0.5);
        $slider.on("slide", function (event, ui) {
            jQuery('#mediamanager__diff').find('div.imageDiff.opacity div.image2 img').css({opacity: $slider.slider("option", "value")});
        });
    },

    /**
     * Sets options for red line diff slider
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    portions_slider: function () {
        var $diff = jQuery("#mediamanager__diff");
        if (!$diff.length) return;

        var $image1 = $diff.find('div.imageDiff.portions div.image1 img');
        var $image2 = $diff.find('div.imageDiff.portions div.image2 img');
        if (!$image1.length || !$image2.length) return;

        $diff.width('100%');
        $image2.parent().width('97%');
        $image1.width('100%');
        $image2.width('100%');

        if ($image1.width() < $diff.width()) {
            $diff.width($image1.width());
        }

        $image2.parent().width('50%');
        $image2.width($image1.width());
        $image1.width($image1.width());

        var $slider = $diff.find("div.slider");
        if (!$slider.length) return;
        $slider.width($image1.width() - 20);

        $slider.slider();
        $slider.slider("option", "min", 0);
        $slider.slider("option", "max", 97);
        $slider.slider("option", "step", 1);
        $slider.slider("option", "value", 50);
        $slider.on("slide", function (event, ui) {
            jQuery('#mediamanager__diff').find('div.imageDiff.portions div.image2').css({width: $slider.slider("option", "value") + '%'});
        });
    },

    /**
     * Parse a URI query string to an associative array
     *
     * @author Kate Arzamastseva <pshns@ukr.net>
     */
    params_toarray: function (str) {
        var vars = [], hash;
        var hashes = str.split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[decodeURIComponent(hash[0])] = decodeURIComponent(hash[1]);
        }
        return vars;
    },

    init_ajax_uploader: function () {
        if (!jQuery('#mediamanager__uploader').length) return;
        if (jQuery('.qq-upload-list').length) return;

        var params = dw_mediamanager.form_params(jQuery('#dw__upload')) + '&call=mediaupload';
        params = dw_mediamanager.params_toarray(params);

        var uploader = new qq.FileUploaderExtended({
            element: document.getElementById('mediamanager__uploader'),
            action: DOKU_BASE + 'lib/exe/ajax.php',
            params: params
        });
    },

    prepare_content: function ($content) {
        // hide syntax example
        $content.find('div.example:visible').hide();
        // toggle list of allowed mime types
        $content.find('a.allowedmime').on('click', function (event) {
            event.preventDefault();
            $toggle = jQuery(this);
            $list = $toggle.next('span');
            $list.toggle();
        }).next('span').hide();

    },

    /**
     * shows the popup for a image link
     */
    select: function (event) {
        var $link, id, dot, ext;

        event.preventDefault();

        $link = jQuery(this);
        id = $link.attr('id').substr(2);

        if (!opener) {
            // if we don't run in popup display example
            // the id's are a bit wierd and jQuery('#ex_wiki_dokuwiki-128.png')
            // will not be found by Sizzle (the CSS Selector Engine
            // used by jQuery), hence the document.getElementById() call
            jQuery(document.getElementById('ex_' + id.replace(/:/g, '_').replace(/^_/, ''))).dw_toggle();
            return;
        }

        dw_mediamanager.ext = false;
        dot = id.lastIndexOf(".");

        if (-1 === dot) {
            dw_mediamanager.insert(id);
            return;
        }

        ext = id.substr(dot);

        if ({'.jpg': 1, '.jpeg': 1, '.png': 1, '.gif': 1, '.swf': 1}[ext] !== 1) {
            dw_mediamanager.insert(id);
            return;
        }

        // remove old callback from the insert button and set the new one.
        var $sendbtn = jQuery('#media__sendbtn');
        $sendbtn.off().on('click', bind(dw_mediamanager.insert, id));

        dw_mediamanager.unforbid('ext');
        if (ext === '.swf') {
            dw_mediamanager.ext = 'swf';
            dw_mediamanager.forbid('ext', {
                link: ['1', '2'],
                size: ['4']
            });
        } else {
            dw_mediamanager.ext = 'img';
        }

        // Set to defaults
        dw_mediamanager.setOpt('link');
        dw_mediamanager.setOpt('align');
        dw_mediamanager.setOpt('size');

        // toggle buttons for detail and linked image, original size
        jQuery('#media__linkbtn1, #media__linkbtn2, #media__sizebtn4')
            .toggle(dw_mediamanager.ext === 'img');

        dw_mediamanager.$popup.dialog('open');

        $sendbtn.focus();
    },

    /**
     * Deletion confirmation dialog to the delete buttons.
     *
     * @author Michael Klier <chi@chimeric.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    confirmattach: function (e) {
        if (!confirm(LANG.del_confirm + "\n" + jQuery(this).attr('title'))) {
            e.preventDefault();
        }
    },

    /**
     * Creates checkboxes for additional options
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    attachoptions: function () {
        var $obj, opts;

        $obj = jQuery('#media__opts');
        if ($obj.length === 0) {
            return;
        }

        opts = [];
        // keep open
        if (opener) {
            opts.push(['keepopen', 'keepopen']);
        }
        opts.push(['hide', 'hidedetails']);

        jQuery.each(opts,
            function (_, opt) {
                var $box, $lbl;
                $box = jQuery(document.createElement('input'))
                    .attr('type', 'checkbox')
                    .attr('id', 'media__' + opt[0])
                    .on('click', bind(dw_mediamanager.toggleOption, opt[0]));

                if (DokuCookie.getValue(opt[0])) {
                    $box.prop('checked', true);
                    dw_mediamanager[opt[0]] = true;
                }

                $lbl = jQuery(document.createElement('label'))
                    .attr('for', 'media__' + opt[0])
                    .text(LANG[opt[1]]);

                $obj.append($box, $lbl, document.createElement('br'));
            });

        dw_mediamanager.updatehide();
    },

    /**
     * Generalized toggler
     *
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    toggleOption: function (variable) {
        if (jQuery(this).prop('checked')) {
            DokuCookie.setValue(variable, 1);
            dw_mediamanager[variable] = true;
        } else {
            DokuCookie.setValue(variable, '');
            dw_mediamanager[variable] = false;
        }
        if (variable === 'hide') {
            dw_mediamanager.updatehide();
        }
    },

    /**
     * Sets the visibility of the image details accordingly to the
     * chosen hide state
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    updatehide: function () {
        jQuery('#media__content').find('div.detail').dw_toggle(!dw_mediamanager.hide);
    },

    /**
     * set media insertion option
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setOpt: function (opt, e) {
        var val, i;
        if (typeof e !== 'undefined') {
            val = this.id.substring(this.id.length - 1);
        } else {
            val = dw_mediamanager.getOpt(opt);
        }

        if (val === false) {
            DokuCookie.setValue(opt, '');
            dw_mediamanager[opt] = false;
            return;
        }

        if (opt === 'link') {
            if (val !== '4' && dw_mediamanager.link === '4') {
                dw_mediamanager.unforbid('linkonly');
                dw_mediamanager.setOpt('align');
                dw_mediamanager.setOpt('size');
            } else if (val === '4') {
                dw_mediamanager.forbid('linkonly', {align: false, size: false});
            }

            jQuery("#media__size, #media__align").dw_toggle(val !== '4');
        }

        DokuCookie.setValue(opt, val);
        dw_mediamanager[opt] = val;

        for (i = 1; i <= 4; i++) {
            jQuery("#media__" + opt + "btn" + i).removeClass('selected');
        }
        jQuery('#media__' + opt + 'btn' + val).addClass('selected');
    },

    unforbid: function (group) {
        delete dw_mediamanager.forbidden_opts[group];
    },

    forbid: function (group, forbids) {
        dw_mediamanager.forbidden_opts[group] = forbids;
    },

    allowedOpt: function (opt, val) {
        var ret = true;
        jQuery.each(dw_mediamanager.forbidden_opts,
            function (_, forbids) {
                ret = forbids[opt] !== false &&
                    jQuery.inArray(val, forbids[opt]) === -1;
                return ret;
            });
        return ret;
    },

    getOpt: function (opt) {
        var allowed = bind(dw_mediamanager.allowedOpt, opt);

        // Current value
        if (dw_mediamanager[opt] !== false && allowed(dw_mediamanager[opt])) {
            return dw_mediamanager[opt];
        }

        // From cookie
        if (DokuCookie.getValue(opt) && allowed(DokuCookie.getValue(opt))) {
            return DokuCookie.getValue(opt);
        }

        // size default
        if (opt === 'size' && allowed('2')) {
            return '2';
        }

        // Whatever is allowed, and be it false
        return jQuery.grep(['1', '2', '3', '4'], allowed)[0] || false;
    }
};

/**
 * Default implementation for the media manager's select action
 *
 * Can be overriden with the onselect URL parameter. Is called on the opener context
 *
 * @param {string} edid
 * @param {string} mediaid
 * @param {string} opts
 * @param {string} align [none, left, center, right]
 */
function dw_mediamanager_item_select(edid, mediaid, opts, align, keepopen) {
    var alignleft = '';
    var alignright = '';

    // Get the 2 characters after the cursor to check if we're currently inside an image tag
    var cursorInImageTag = false;
    var textArea = jQuery('#' + edid)[0];
    var selection = DWgetSelection(textArea);
    selection.end = selection.end + 2;
    var charsAfterCursor = selection.getText();
    if (charsAfterCursor === '}}') {
        cursorInImageTag = true;
    }

    if (align !== '1') {
        alignleft = align === '2' ? '' : ' ';
        alignright = align === '4' ? '' : ' ';
    }
    if (keepopen && cursorInImageTag) {
        selection.start = selection.start + 2;
        DWsetSelection(selection);
    }
    insertTags(edid, '{{' + alignleft + mediaid + opts + alignright + '|', '}}', '');
}

jQuery(dw_mediamanager.init);



/* XXXXXXXXXX end of lib/scripts/media.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/compatibility.js XXXXXXXXXX */

/**
 * Mark a JavaScript function as deprecated
 *
 * This will print a warning to the JavaScript console (if available) in
 * Firebug and Chrome and a stack trace (if available) to easily locate the
 * problematic function call.
 *
 * @param msg optional message to print
 */
function DEPRECATED(msg){
    if(!window.console) return;
    if(!msg) msg = '';

    var func;
    if(arguments.callee) func = arguments.callee.caller.name;
    if(func) func = ' '+func+'()';
    var line = 'DEPRECATED function call'+func+'. '+msg;

    if(console.warn){
        console.warn(line);
    }else{
        console.log(line);
    }

    if(console.trace) console.trace();
}

/**
 * Construct a wrapper function for deprecated function names
 *
 * This function returns a wrapper function which just calls DEPRECATED
 * and the new function.
 *
 * @param func    The new function
 * @param context Optional; The context (`this`) of the call
 */
function DEPRECATED_WRAP(func, context) {
    return function () {
        DEPRECATED();
        return func.apply(context || this, arguments);
    };
}



/* XXXXXXXXXX end of lib/scripts/compatibility.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/behaviour.js XXXXXXXXXX */

/**
 * Hides elements with a slide animation
 *
 * @param {function} fn optional callback to run after hiding
 * @param {bool} noaria supress aria-expanded state setting
 * @author Adrian Lang <mail@adrianlang.de>
 */
jQuery.fn.dw_hide = function(fn, noaria) {
    if(!noaria) this.attr('aria-expanded', 'false');
    return this.slideUp('fast', fn);
};

/**
 * Unhides elements with a slide animation
 *
 * @param {function} fn optional callback to run after hiding
 * @param {bool} noaria supress aria-expanded state setting
 * @author Adrian Lang <mail@adrianlang.de>
 */
jQuery.fn.dw_show = function(fn, noaria) {
    if(!noaria) this.attr('aria-expanded', 'true');
    return this.slideDown('fast', fn);
};

/**
 * Toggles visibility of an element using a slide element
 *
 * @param {bool} state the current state of the element (optional)
 * @param {function} fn callback after the state has been toggled
 * @param {bool} noaria supress aria-expanded state setting
 */
jQuery.fn.dw_toggle = function(state, fn, noaria) {
    return this.each(function() {
        var $this = jQuery(this);
        if (typeof state === 'undefined') {
            state = $this.is(':hidden');
        }
        $this[state ? "dw_show" : "dw_hide" ](fn, noaria);
    });
};

/**
 * Automatic behaviours
 *
 * This class wraps various JavaScript functionalities that are triggered
 * automatically whenever a certain object is in the DOM or a certain CSS
 * class was found
 */
var dw_behaviour = {

    init: function(){
        dw_behaviour.focusMarker();
        dw_behaviour.scrollToMarker();
        dw_behaviour.removeHighlightOnClick();
        dw_behaviour.quickSelect();
        dw_behaviour.checkWindowsShares();
        dw_behaviour.subscription();
        dw_behaviour.pageRestoreConfirm();
        dw_behaviour.securityCheck();

        dw_behaviour.revisionBoxHandler();
        jQuery(document).on('click','#page__revisions input[type=checkbox]',
            dw_behaviour.revisionBoxHandler
        );

        jQuery('.bounce').effect('bounce', {times:10}, 2000 );
    },

    /**
     * Looks for an element with the ID scroll__here at scrolls to it
     */
    scrollToMarker: function(){
        var $obj = jQuery('#scroll__here');
        if($obj.length) {
            if($obj.offset().top != 0) {
                jQuery('html, body').animate({
                    scrollTop: $obj.offset().top - 100
                }, 500);
            } else {
                // hidden object have no offset but can still be scrolled into view
                $obj[0].scrollIntoView();
            }
        }
    },

    /**
     * Display confirm dialog on page restore action
     */
    pageRestoreConfirm: function(){
        jQuery('#dokuwiki__pagetools li.revert a').on('click',
            function() {
                return confirm(LANG.restore_confirm);
            }
        );
    },

    /**
     * Looks for an element with the ID focus__this at sets focus to it
     */
    focusMarker: function(){
        jQuery('#focus__this').trigger('focus');
    },

    /**
     * Remove all search highlighting when clicking on a highlighted term
     */
    removeHighlightOnClick: function(){
        jQuery('span.search_hit').on('click',
            function(e){
                jQuery(e.target).removeClass('search_hit', 1000);
            }
        );
    },

    /**
     * Autosubmit quick select forms
     *
     * When a <select> or <input> tag has the class "quickselect", this script will
     * automatically submit its parent form when the select value changes.
     * It also hides the submit button of the form.
     *
     * This includes a workaround a weird behaviour when the submit button has a name
     *
     * @link https://trackjs.com/blog/when-form-submit-is-not-a-function/
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    quickSelect: function(){
        jQuery('.quickselect')
            .change(function(e){ HTMLFormElement.prototype.submit.call(e.target.form); })
            .closest('form').find(':button').not('.show').hide();
    },

    /**
     * Display error for Windows Shares on browsers other than IE
     *
     * @author Michael Klier <chi@chimeric.de>
     */
    checkWindowsShares: function() {
        if(!LANG.nosmblinks || navigator.userAgent.match(/(Trident|MSIE|Edge)/)) {
            // No warning requested or none necessary
            return;
        }

        jQuery('a.windows').on('click', function(){
            alert(LANG.nosmblinks.replace(/\\n/,"\n"));
        });
    },

    /**
     * Hide list subscription style if target is a page
     *
     * @author Adrian Lang <lang@cosmocode.de>
     * @author Pierre Spring <pierre.spring@caillou.ch>
     */
    subscription: function(){
        var $form, $list, $digest;

        $form = jQuery('#subscribe__form');
        if (0 === $form.length) return;

        $list = $form.find("input[name='sub_style'][value='list']");
        $digest = $form.find("input[name='sub_style'][value='digest']");

        $form.find("input[name='sub_target']")
            .on('click',
                function () {
                    var $this = jQuery(this), show_list;
                    if (!$this.prop('checked')) {
                        return;
                    }

                    show_list = $this.val().match(/:$/);
                    $list.parent().dw_toggle(show_list);
                    if (!show_list && $list.prop('checked')) {
                        $digest.prop('checked', 'checked');
                    }
                }
            )
            .filter(':checked')
            .trigger('click');
    },

    /**
     * disable multiple revisions checkboxes if two are checked
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Anika Henke <anika@selfthinker.org>
     */
    revisionBoxHandler: function() {
        var $revisions = jQuery('#page__revisions');
        var $all       = jQuery('input[type="checkbox"][name="rev2[]"]', $revisions);
        var $checked   = $all.filter(':checked');
        var $button    = jQuery('button', $revisions);

        if($checked.length < 2) {
            $all.prop('disabled', false);
            $button.prop('disabled', true);
        } else {
            $all.prop('disabled', true);
            $button.prop('disabled', false);
            $checked.each(function(i) {
                jQuery(this).prop('disabled', false);
                if(i>1) {
                    jQuery(this).prop('checked', false);
                }
            });
        }
    },

    /**
     * Check that access to the data directory is properly secured
     *
     * A successful check (a 403 error was returned when loading the image) is saved
     * to session storage and not repeated again until the next browser session. This
     * avoids overeager security bans (see #3363)
     */
    securityCheck: function () {
        var $checkDiv = jQuery('#security__check');
        if (!$checkDiv.length) return;
        if (sessionStorage.getItem('dw-security-check:' + DOKU_BASE)) {
            // check was already executed successfully
            $checkDiv.remove();
            return;
        }

        var img = new Image();
        img.onerror = function () {
            // successful check will not be repeated during session
            $checkDiv.remove();
            sessionStorage.setItem('dw-security-check:' + DOKU_BASE, true);
        };
        img.onload = function () {
            // check failed, display a warning message
            $checkDiv.html(LANG.data_insecure);
            $checkDiv.addClass('error');
        };
        img.src = $checkDiv.data('src') + '?t=' + Date.now();
    }
};

jQuery(dw_behaviour.init);



/* XXXXXXXXXX end of lib/scripts/behaviour.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/page.js XXXXXXXXXX */

/**
 * Page behaviours
 *
 * This class adds various behaviours to the rendered page
 */
dw_page = {
    /**
     * initialize page behaviours
     */
    init: function(){
        dw_page.sectionHighlight();
        dw_page.currentIDHighlight();
        jQuery('a.fn_top').on('mouseover', dw_page.footnoteDisplay);
        dw_page.makeToggle('#dw__toc h3','#dw__toc > div');
    },

    /**
     * Highlight the section when hovering over the appropriate section edit button
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    sectionHighlight: function() {
        jQuery('form.btn_secedit')
            .on('mouseover', function(){
                var $tgt = jQuery(this).parent(),
                    nr = $tgt.attr('class').match(/(\s+|^)editbutton_(\d+)(\s+|$)/)[2],
                    $highlight = jQuery(),                                             // holder for elements in the section to be highlighted
                    $highlightWrap = jQuery('<div class="section_highlight"></div>');  // section highlight wrapper

                // Walk the dom tree in reverse to find the sibling which is or contains the section edit marker
                while($tgt.length > 0 && !($tgt.hasClass('sectionedit' + nr) || $tgt.find('.sectionedit' + nr).length)) {
                    $tgt = $tgt.prev();
                    $highlight = $highlight.add($tgt);
                }
              // insert the section highlight wrapper before the last element added to $highlight
              $highlight.filter(':last').before($highlightWrap);
              // and move the elements to be highlighted inside the section highlight wrapper
              $highlight.detach().appendTo($highlightWrap);
            })
            .on('mouseout', function(){
                // find the section highlight wrapper...
                var $highlightWrap = jQuery('.section_highlight');
                // ...move its children in front of it (as siblings)...
                $highlightWrap.before($highlightWrap.children().detach());
                // ...and remove the section highlight wrapper
                $highlightWrap.detach();
            });
    },


    /**
     * Highlight internal link pointing to current page
     *
     * @author Henry Pan <dokuwiki@phy25.com>
     */
    currentIDHighlight: function(){
        jQuery('a.wikilink1, a.wikilink2').filter('[data-wiki-id="'+JSINFO.id+'"]').wrap('<span class="curid"></div>');
    },

    /**
     * Create/get a insitu popup used by the footnotes
     *
     * @param target - the DOM element at which the popup should be aligned at
     * @param popup_id - the ID of the (new) DOM popup
     * @return the Popup jQuery object
     */
    insituPopup: function(target, popup_id) {
        // get or create the popup div
        var $fndiv = jQuery('#' + popup_id);

        // popup doesn't exist, yet -> create it
        if($fndiv.length === 0){
            $fndiv = jQuery(document.createElement('div'))
                .attr('id', popup_id)
                .addClass('insitu-footnote JSpopup')
                .attr('aria-hidden', 'true')
                .on('mouseleave', function () {jQuery(this).hide().attr('aria-hidden', 'true');})
                .attr('role', 'tooltip');
            jQuery('.dokuwiki:first').append($fndiv);
        }

        // position() does not support hidden elements
        $fndiv.show().position({
            my: 'left top',
            at: 'left center',
            of: target
        }).hide();

        return $fndiv;
    },

    /**
     * Display an insitu footnote popup
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Chris Smith <chris@jalakai.co.uk>
     * @author Anika Henke <anika@selfthinker.org>
     */
    footnoteDisplay: function () {
        var $content = jQuery(jQuery(this).attr('href')) // Footnote text anchor
                      .parent().siblings('.content').clone();

        if (!$content.length) {
            return;
        }

        // prefix ids on any elements with "insitu__" to ensure they remain unique
        jQuery('[id]', $content).each(function(){
            var id = jQuery(this).attr('id');
            jQuery(this).attr('id', 'insitu__' + id);
        });

        var content = $content.html().trim();
        // now put the content into the wrapper
        dw_page.insituPopup(this, 'insitu__fn').html(content)
        .show().attr('aria-hidden', 'false');
    },

    /**
     * Makes an element foldable by clicking its handle
     *
     * This is used for the TOC toggling, but can be used for other elements
     * as well. A state indicator is inserted into the handle and can be styled
     * by CSS.
     *
     * To properly reserve space for the expanded element, the sliding animation is
     * done on the children of the content. To make that look good and to make sure aria
     * attributes are assigned correctly, it's recommended to make sure that the content
     * element contains a single child element only.
     *
     * @param {selector} handle What should be clicked to toggle
     * @param {selector} content This element will be toggled
     * @param {int} state initial state (-1 = open, 1 = closed)
     */
    makeToggle: function(handle, content, state){
        var $handle, $content, $clicky, $child, setClicky;
        $handle = jQuery(handle);
        if(!$handle.length) return;
        $content = jQuery(content);
        if(!$content.length) return;

        // we animate the children
        $child = $content.children();

        // class/display toggling
        setClicky = function(hiding){
            if(hiding){
                $clicky.html('<span>+</span>');
                $handle.addClass('closed');
                $handle.removeClass('open');
            }else{
                $clicky.html('<span>−</span>');
                $handle.addClass('open');
                $handle.removeClass('closed');
            }
        };

        $handle[0].setState = function(state){
            var hidden;
            if(!state) state = 1;

            // Assert that content instantly takes the whole space
            $content.css('min-height', $content.height()).show();

            // stop any running animation
            $child.stop(true, true);

            // was a state given or do we toggle?
            if(state === -1) {
                hidden = false;
            } else if(state === 1) {
                hidden = true;
            } else {
                hidden = $child.is(':hidden');
            }

            // update the state
            setClicky(!hidden);

            // Start animation and assure that $toc is hidden/visible
            $child.dw_toggle(hidden, function () {
                $content.toggle(hidden);
                $content.attr('aria-expanded', hidden);
                $content.css('min-height',''); // remove min-height again
            }, true);
        };

        // the state indicator
        $clicky = jQuery(document.createElement('strong'));

        // click function
        $handle.css('cursor','pointer')
               .on('click', $handle[0].setState)
               .prepend($clicky);

        // initial state
        $handle[0].setState(state);
    }
};

jQuery(dw_page.init);



/* XXXXXXXXXX end of lib/scripts/page.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/tpl/bootstrap3/script.js XXXXXXXXXX */

/*!
 * DokuWiki Bootstrap3 Template: Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */


/* BEGIN NOCOMPRESS */
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/* END NOCOMPRESS */


/* BEGIN NOCOMPRESS */
/**
 * AnchorJS - v3.2.0 - 2016-06-10
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2016 Bryan Braun; Licensed MIT
 */
"use strict";!function(A,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(A.AnchorJS=e(),A.anchors=new A.AnchorJS)}(this,function(){function A(A){function e(A){A.icon=A.hasOwnProperty("icon")?A.icon:"",A.visible=A.hasOwnProperty("visible")?A.visible:"hover",A.placement=A.hasOwnProperty("placement")?A.placement:"right",A.class=A.hasOwnProperty("class")?A.class:"",A.truncate=A.hasOwnProperty("truncate")?Math.floor(A.truncate):64}function t(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}function n(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style"),t=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",n=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",o=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',i=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";e.className="anchorjs",e.appendChild(document.createTextNode("")),A=document.head.querySelector('[rel="stylesheet"], style'),void 0===A?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(t,e.sheet.cssRules.length),e.sheet.insertRule(n,e.sheet.cssRules.length),e.sheet.insertRule(i,e.sheet.cssRules.length),e.sheet.insertRule(o,e.sheet.cssRules.length)}}this.options=A||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var o,i,s,a,r,c,l,h,u,g,B,f,d=[];if(e(this.options),f=this.options.visible,"touch"===f&&(f=this.isTouchDevice()?"always":"hover"),A||(A="h1, h2, h3, h4, h5, h6"),o=t(A),0===o.length)return!1;for(n(),i=document.querySelectorAll("[id]"),s=[].map.call(i,function(A){return A.id}),r=0;r<o.length;r++)if(this.hasAnchorJSLink(o[r]))d.push(r);else{if(o[r].hasAttribute("id"))a=o[r].getAttribute("id");else{h=this.urlify(o[r].textContent),u=h,l=0;do void 0!==c&&(u=h+"-"+l),c=s.indexOf(u),l+=1;while(-1!==c);c=void 0,s.push(u),o[r].setAttribute("id",u),a=u}g=a.replace(/-/g," "),B=document.createElement("a"),B.className="anchorjs-link "+this.options.class,B.href="#"+a,B.setAttribute("aria-label","Anchor link for: "+g),B.setAttribute("data-anchorjs-icon",this.options.icon),"always"===f&&(B.style.opacity="1"),""===this.options.icon&&(B.style.fontFamily="anchorjs-icons",B.style.fontStyle="normal",B.style.fontVariant="normal",B.style.fontWeight="normal",B.style.lineHeight=1,"left"===this.options.placement&&(B.style.lineHeight="inherit")),"left"===this.options.placement?(B.style.position="absolute",B.style.marginLeft="-1em",B.style.paddingRight="0.5em",o[r].insertBefore(B,o[r].firstChild)):(B.style.paddingLeft="0.375em",o[r].appendChild(B))}for(r=0;r<d.length;r++)o.splice(d[r]-r,1);return this.elements=this.elements.concat(o),this},this.remove=function(A){for(var e,n,o=t(A),i=0;i<o.length;i++)n=o[i].querySelector(".anchorjs-link"),n&&(e=this.elements.indexOf(o[i]),-1!==e&&this.elements.splice(e,1),o[i].removeChild(n));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var t,n=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;return this.options.truncate||e(this.options),t=A.trim().replace(/\'/gi,"").replace(n,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&(" "+A.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,t=A.lastChild&&(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||t||!1}}return A});

/* END NOCOMPRESS */


/* BEGIN NOCOMPRESS */
(function(a,b){if(typeof module!=="undefined"&&module.exports){module.exports=b(require("jquery"))}else{if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return b(c)})}else{b(a.jQuery)}}}(this,function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},c.defaults,d);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.select=this.options.select||this.select;this.autoSelect=typeof this.options.autoSelect=="boolean"?this.options.autoSelect:true;this.highlighter=this.options.highlighter||this.highlighter;this.render=this.options.render||this.render;this.updater=this.options.updater||this.updater;this.displayText=this.options.displayText||this.displayText;this.itemLink=this.options.itemLink||this.itemLink;this.itemTitle=this.options.itemTitle||this.itemTitle;this.followLinkOnSelect=this.options.followLinkOnSelect||this.followLinkOnSelect;this.source=this.options.source;this.delay=this.options.delay;this.theme=this.options.theme&&this.options.themes&&this.options.themes[this.options.theme]||c.defaults.themes[c.defaults.theme];this.$menu=b(this.options.menu||this.theme.menu);this.$appendTo=this.options.appendTo?b(this.options.appendTo):null;this.fitToElement=typeof this.options.fitToElement=="boolean"?this.options.fitToElement:false;this.shown=false;this.listen();this.showHintOnFocus=typeof this.options.showHintOnFocus=="boolean"||this.options.showHintOnFocus==="all"?this.options.showHintOnFocus:false;this.afterSelect=this.options.afterSelect;this.afterEmptySelect=this.options.afterEmptySelect;this.addItem=false;this.value=this.$element.val()||this.$element.text();this.keyPressed=false;this.focused=this.$element.is(":focus");this.changeInputOnSelect=this.options.changeInputOnSelect||this.changeInputOnSelect;this.changeInputOnMove=this.options.changeInputOnMove||this.changeInputOnMove;this.openLinkInNewTab=this.options.openLinkInNewTab||this.openLinkInNewTab;this.selectOnBlur=this.options.selectOnBlur||this.selectOnBlur;this.showCategoryHeader=this.options.showCategoryHeader||this.showCategoryHeader};c.prototype={constructor:c,setDefault:function(e){this.$element.data("active",e);if(this.autoSelect||e){var d=this.updater(e);if(!d){d=""}this.$element.val(this.displayText(d)||d).text(this.displayText(d)||d).change();this.afterSelect(d)}return this.hide()},select:function(){var e=this.$menu.find(".active").data("value");this.$element.data("active",e);if(this.autoSelect||e){var d=this.updater(e);if(!d){d=""}if(this.changeInputOnSelect){this.$element.val(this.displayText(d)||d).text(this.displayText(d)||d).change()}if(this.followLinkOnSelect&&this.itemLink(e)){if(this.openLinkInNewTab){window.open(this.itemLink(e),"_blank")}else{document.location=this.itemLink(e)}this.afterSelect(d)}else{if(this.followLinkOnSelect&&!this.itemLink(e)){this.afterEmptySelect(d)}else{this.afterSelect(d)}}}else{this.afterEmptySelect()}return this.hide()},updater:function(d){return d},setSource:function(d){this.source=d},show:function(){var k=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});var h=typeof this.options.scrollHeight=="function"?this.options.scrollHeight.call():this.options.scrollHeight;var g;if(this.shown){g=this.$menu}else{if(this.$appendTo){g=this.$menu.appendTo(this.$appendTo);this.hasSameParent=this.$appendTo.is(this.$element.parent())}else{g=this.$menu.insertAfter(this.$element);this.hasSameParent=true}}if(!this.hasSameParent){g.css("position","fixed");var j=this.$element.offset();k.top=j.top;k.left=j.left}var e=b(g).parent().hasClass("dropup");var d=e?"auto":(k.top+k.height+h);var f=b(g).hasClass("dropdown-menu-right");var i=f?"auto":k.left;g.css({top:d,left:i}).show();if(this.options.fitToElement===true){g.css("width",this.$element.outerWidth()+"px")}this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(d){if(typeof(d)!="undefined"&&d!==null){this.query=d}else{this.query=this.$element.val()}if(this.query.length<this.options.minLength&&!this.options.showHintOnFocus){return this.shown?this.hide():this}var e=b.proxy(function(){if(b.isFunction(this.source)&&this.source.length===3){this.source(this.query,b.proxy(this.process,this),b.proxy(this.process,this))}else{if(b.isFunction(this.source)){this.source(this.query,b.proxy(this.process,this))}else{if(this.source){this.process(this.source)}}}},this);clearTimeout(this.lookupWorker);this.lookupWorker=setTimeout(e,this.delay)},process:function(d){var e=this;d=b.grep(d,function(f){return e.matcher(f)});d=this.sorter(d);if(!d.length&&!this.options.addItem){return this.shown?this.hide():this}if(d.length>0){this.$element.data("active",d[0])}else{this.$element.data("active",null)}if(this.options.items!="all"){d=d.slice(0,this.options.items)}if(this.options.addItem){d.push(this.options.addItem)}return this.render(d).show()},matcher:function(e){var d=this.displayText(e);return ~d.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(f){var g=[];var e=[];var d=[];var i;while((i=f.shift())){var h=this.displayText(i);if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(i)}else{if(~h.indexOf(this.query)){e.push(i)}else{d.push(i)}}}return g.concat(e,d)},highlighter:function(h){var l=this.query;if(l===""){return h}var j=h.match(/(>)([^<]*)(<)/g);var k=[];var e=[];var f;if(j&&j.length){for(f=0;f<j.length;++f){if(j[f].length>2){k.push(j[f])}}}else{k=[];k.push(h)}l=l.replace((/[\(\)\/\.\*\+\?\[\]]/g),function(i){return"\\"+i});var g=new RegExp(l,"g");var d;for(f=0;f<k.length;++f){d=k[f].match(g);if(d&&d.length>0){e.push(k[f])}}for(f=0;f<e.length;++f){h=h.replace(e[f],e[f].replace(g,"<strong>$&</strong>"))}return h},render:function(e){var g=this;var d=this;var f=false;var i=[];var h=g.options.separator;b.each(e,function(j,k){if(j>0&&k[h]!==e[j-1][h]){i.push({__type:"divider"})}if(g.options.showCategoryHeader){if(k[h]&&(j===0||k[h]!==e[j-1][h])){i.push({__type:"category",name:k[h]})}}i.push(k)});e=b(i).map(function(j,k){if((k.__type||false)=="category"){return b(g.options.headerHtml||g.theme.headerHtml).text(k.name)[0]}if((k.__type||false)=="divider"){return b(g.options.headerDivider||g.theme.headerDivider)[0]}var l=d.displayText(k);j=b(g.options.item||g.theme.item).data("value",k);j.find(g.options.itemContentSelector||g.theme.itemContentSelector).addBack(g.options.itemContentSelector||g.theme.itemContentSelector).html(g.highlighter(l,k));if(g.options.followLinkOnSelect){j.find("a").attr("href",d.itemLink(k))}j.find("a").attr("title",d.itemTitle(k));if(l==d.$element.val()){j.addClass("active");d.$element.data("active",k);f=true}return j[0]});if(this.autoSelect&&!f){e.filter(":not(.dropdown-header)").first().addClass("active");this.$element.data("active",e.first().data("value"))}this.$menu.html(e);return this},displayText:function(d){return typeof d!=="undefined"&&typeof d.name!="undefined"?d.name:d},itemLink:function(d){return null},itemTitle:function(d){return null},next:function(f){var g=this.$menu.find(".active").removeClass("active");var e=g.next();if(!e.length){e=b(this.$menu.find(b(this.options.item||this.theme.item).prop("tagName"))[0])}while(e.hasClass("divider")||e.hasClass("dropdown-header")){e=e.next()}e.addClass("active");var d=this.updater(e.data("value"));if(this.changeInputOnMove){this.$element.val(this.displayText(d)||d)}},prev:function(f){var g=this.$menu.find(".active").removeClass("active");var e=g.prev();if(!e.length){e=this.$menu.find(b(this.options.item||this.theme.item).prop("tagName")).last()}while(e.hasClass("divider")||e.hasClass("dropdown-header")){e=e.prev()}e.addClass("active");var d=this.updater(e.data("value"));if(this.changeInputOnMove){this.$element.val(this.displayText(d)||d)}},listen:function(){this.$element.on("focus.bootstrap3Typeahead",b.proxy(this.focus,this)).on("blur.bootstrap3Typeahead",b.proxy(this.blur,this)).on("keypress.bootstrap3Typeahead",b.proxy(this.keypress,this)).on("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead",b.proxy(this.input,this)).on("keyup.bootstrap3Typeahead",b.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown.bootstrap3Typeahead",b.proxy(this.keydown,this))}var d=b(this.options.item||this.theme.item).prop("tagName");if("ontouchstart" in document.documentElement&&"onmousemove" in document.documentElement){this.$menu.on("touchstart",d,b.proxy(this.touchstart,this)).on("touchend",d,b.proxy(this.click,this)).on("click",b.proxy(this.click,this)).on("mouseenter",d,b.proxy(this.mouseenter,this)).on("mouseleave",d,b.proxy(this.mouseleave,this)).on("mousedown",b.proxy(this.mousedown,this))}else{if("ontouchstart" in document.documentElement){this.$menu.on("touchstart",d,b.proxy(this.touchstart,this)).on("touchend",d,b.proxy(this.click,this))}else{this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter",d,b.proxy(this.mouseenter,this)).on("mouseleave",d,b.proxy(this.mouseleave,this)).on("mousedown",b.proxy(this.mousedown,this))}}},destroy:function(){this.$element.data("typeahead",null);this.$element.data("active",null);this.$element.unbind("focus.bootstrap3Typeahead").unbind("blur.bootstrap3Typeahead").unbind("keypress.bootstrap3Typeahead").unbind("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead").unbind("keyup.bootstrap3Typeahead");if(this.eventSupported("keydown")){this.$element.unbind("keydown.bootstrap3-typeahead")}this.$menu.remove();this.destroyed=true},eventSupported:function(d){var e=d in this.$element;if(!e){this.$element.setAttribute(d,"return;");e=typeof this.$element[d]==="function"}return e},move:function(d){if(!this.shown){return}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();break;case 38:if(d.shiftKey){return}d.preventDefault();this.prev();break;case 40:if(d.shiftKey){return}d.preventDefault();this.next();break}},keydown:function(d){if(d.keyCode===17){return}this.keyPressed=true;this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);if(!this.shown&&d.keyCode==40){this.lookup()}else{this.move(d)}},keypress:function(d){if(this.suppressKeyPressRepeat){return}this.move(d)},input:function(f){var d=this.$element.val()||this.$element.text();if(this.value!==d){this.value=d;this.lookup()}},keyup:function(d){if(this.destroyed){return}switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:if(!this.shown||(this.showHintOnFocus&&!this.keyPressed)){return}this.select();break;case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break}},focus:function(d){if(!this.focused){this.focused=true;this.keyPressed=false;if(this.options.showHintOnFocus&&this.skipShowHintOnFocus!==true){if(this.options.showHintOnFocus==="all"){this.lookup("")}else{this.lookup()}}}if(this.skipShowHintOnFocus){this.skipShowHintOnFocus=false}},blur:function(d){if(!this.mousedover&&!this.mouseddown&&this.shown){if(this.selectOnBlur){this.select()}this.hide();this.focused=false;this.keyPressed=false}else{if(this.mouseddown){this.skipShowHintOnFocus=true;this.$element.focus();this.mouseddown=false}}},click:function(d){d.preventDefault();this.skipShowHintOnFocus=true;this.select();this.$element.focus();this.hide()},mouseenter:function(d){this.mousedover=true;this.$menu.find(".active").removeClass("active");b(d.currentTarget).addClass("active")},mouseleave:function(d){this.mousedover=false;if(!this.focused&&this.shown){this.hide()}},mousedown:function(d){this.mouseddown=true;this.$menu.one("mouseup",function(f){this.mouseddown=false}.bind(this))},touchstart:function(d){d.preventDefault();this.$menu.find(".active").removeClass("active");b(d.currentTarget).addClass("active")},touchend:function(d){d.preventDefault();this.select();this.$element.focus()}};var a=b.fn.typeahead;b.fn.typeahead=function(e){var d=arguments;if(typeof e=="string"&&e=="getActive"){return this.data("active")}return this.each(function(){var h=b(this);var g=h.data("typeahead");var f=typeof e=="object"&&e;if(!g){h.data("typeahead",(g=new c(this,f)))}if(typeof e=="string"&&g[e]){if(d.length>1){g[e].apply(g,Array.prototype.slice.call(d,1))}else{g[e]()}}})};c.defaults={source:[],items:8,minLength:1,scrollHeight:0,autoSelect:true,afterSelect:b.noop,afterEmptySelect:b.noop,addItem:false,followLinkOnSelect:false,delay:0,separator:"category",changeInputOnSelect:true,changeInputOnMove:true,openLinkInNewTab:false,selectOnBlur:true,showCategoryHeader:true,theme:"bootstrap3",themes:{bootstrap3:{menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',itemContentSelector:"a",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'},bootstrap4:{menu:'<div class="typeahead dropdown-menu" role="listbox"></div>',item:'<button class="dropdown-item" role="option"></button>',itemContentSelector:".dropdown-item",headerHtml:'<h6 class="dropdown-header"></h6>',headerDivider:'<div class="dropdown-divider"></div>'}}};b.fn.typeahead.Constructor=c;b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;return this};b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);if(d.data("typeahead")){return}d.typeahead(d.data())})}));
/* END NOCOMPRESS */


/* BEGIN NOCOMPRESS */
/**
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files at https://github.com/iconify/iconify
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */
"use strict";if(void 0===self.Iconify&&(self.Iconify={isReady:!1},self.SimpleSVG=self.Iconify,function(e,t){var i,n,o,r,s,a,c,l,u,d,f,h,p,v,g,b,m,y,w,_,x,O,A,j,I,E,k,C,M,L,S,N,P,T,F,R,D,H,V,G,Q,z,B,q,Y,J,U,W,$,K,X,Z,ee,te,ie,ne,oe,re={config:{},version:"1.0.6"};function se(e,t){var i;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(i=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}function ae(){document.removeEventListener("DOMContentLoaded",ae),window.removeEventListener("load",ae),o.DOMReadyCallback()}function ce(t,i,e){var n=t;if("_"!==t.slice(0,1)){if(void 0===u[t]){if(!e||void 0===u["_"+t])return;n="_"+t}switch(n){case"API":case"SVGAttributes":Object.keys(i).forEach(function(e){null===i[t]?delete u[n][e]:u[n][e]=i[e]});break;default:u[n]=i}}}function le(e,t){return function(e,t){switch(e){case"rotate":return t=parseInt(t),isNaN(t)?null:t;case"width":case"height":case"inlineHeight":case"inlineTop":case"verticalAlign":return t=parseFloat(t),isNaN(t)?null:t;case"vFlip":case"hFlip":return!!t;case"body":case"parent":return"string"==typeof t?t:null}return t}("rotate",e+t)}function ue(e,t){return!!e!=!!t}function de(e){var i=Object.create(null);return(void 0===e._defaults?[e,v]:[e,e._defaults,v]).forEach(function(t){Object.keys(t).forEach(function(e){"object"!=typeof t[e]&&void 0===i[e]&&(i[e]=t[e])})}),void 0===i.inlineTop&&(i.inlineTop=i.top),void 0===i.inlineHeight&&(i.inlineHeight=i.height),void 0===i.verticalAlign&&(i.height%7==0&&i.height%8!=0?i.verticalAlign=-.143:i.verticalAlign=-.125),i}function fe(){return this._icons=Object.create(null),this._aliases=Object.create(null),this._resolved=Object.create(null),this._add=function(e,t,i){var n=e?"_aliases":"_icons";void 0===this._resolved[t.prefix]?(this._resolved[t.prefix]=Object.create(null),this._icons[t.prefix]=Object.create(null),this._aliases[t.prefix]=Object.create(null)):(delete this._icons[t.prefix][t.icon],delete this._aliases[t.prefix][t.icon]),this._resolved[t.prefix][t.icon]=!1,this[n][t.prefix][t.icon]=i},this._resolveIcon=function(e){var t,i,n,o,r,s;if(void 0===this._resolved[e.prefix]||void 0===this._resolved[e.prefix][e.icon])return null;if(!1!==this._resolved[e.prefix][e.icon])return this._resolved[e.prefix][e.icon];if(void 0!==this._icons[e.prefix][e.icon])return this._resolved[e.prefix][e.icon]=de(this._icons[e.prefix][e.icon]);for(i=0,t=this._aliases[e.prefix][e.icon],n=Object.create(null),Object.keys(t).forEach(function(e){"parent"!==e&&(n[e]=t[e])}),o=t.parent;;){if(5<++i||void 0===this._resolved[e.prefix][o])return this._resolved[e.prefix][e.icon]=null;if(r=void 0===this._icons[e.prefix][o],s=this[r?"_aliases":"_icons"][e.prefix][o],Object.keys(s).forEach(function(e){if(void 0!==n[e])switch(e){case"rotate":n[e]=le(n[e],s[e]);break;case"hFlip":case"vFlip":n[e]=ue(n[e],s[e])}else"parent"!==e&&(n[e]=s[e])}),!r)break;o=s.parent}return this._resolved[e.prefix][e.icon]=de(n)},this.addCollection=function(n){var o=this,r=Object.create(null);g.forEach(function(e){void 0!==n[e]?r[e]=n[e]:void 0!==v[e]&&(r[e]=v[e])}),void 0!==n.icons&&Object.keys(n.icons).forEach(function(e){var t=p(e,n.prefix),i=n.icons[e];void 0!==i.body&&(i._defaults=r,o._add(!1,t,i))}),void 0!==n.aliases&&Object.keys(n.aliases).forEach(function(e){var t=p(e,n.prefix),i=n.aliases[e];if(void 0!==i.parent){if(void 0===n.prefix){if(i.parent.slice(0,t.prefix.length)!==t.prefix)return;i.parent=i.parent.slice(t.prefix.length+1)}o._add(!0,t,i)}})},this.addIcon=function(e,t,i){var n=void 0!==t.parent,o=p(e,i);if(n&&void 0===i){if(t.parent.slice(0,o.prefix.length)!==o.prefix)return;t.parent=t.parent.slice(o.prefix.length+1)}this._add(n,o,t)},this.exists=function(e,t){var i=p(e,t);return void 0!==this._resolved[i.prefix]&&void 0!==this._resolved[i.prefix][i.icon]},this.getIcon=function(e,t){var i=p(e,t);return this._resolveIcon(i)},this.copyIcon=function(e,t){var i,n=this.getIcon(e,t);return null===n?null:(i=Object.create(null),Object.keys(n).forEach(function(e){i[e]=n[e]}),i)},this.list=function(e){var i,n;return void 0!==e?void 0===this._resolved[e]?[]:Object.keys(this._resolved[e]):(i=[],n=this._resolved,Object.keys(n).forEach(function(t){i=i.concat(Object.keys(n[t]).map(function(e){return""===t&&-1===e.indexOf("-")?e:t+":"+e}))}),i)},this}function he(){w&&(w=!1,m.scanDOM())}function pe(e,t,i){var n,o,r,s,a;if(1===t)return e;if(i=void 0===i?100:i,"number"==typeof e)return Math.ceil(e*t*i)/i;if("string"!=typeof e)return e;if(null===(n=e.split(A))||!n.length)return e;for(o=[],r=n.shift(),s=j.test(r);;){if(s?(a=parseFloat(r),isNaN(a)?o.push(r):o.push(Math.ceil(a*t*i)/i)):o.push(r),void 0===(r=n.shift()))return o.join("");s=!s}}function ve(e,t,i){var n,o,r;for(n=0;n<t.length;n++)if(void 0!==e[o=t[n]])switch(typeof(r=e[o])){case"boolean":return r;case"number":return!!r;case"string":switch(r.toLowerCase()){case"1":case"true":case o:return!0;case"0":case"false":case"":return!1}}return i}function ge(e,t,i){var n,o;for(n=0;n<t.length;n++)if(void 0!==e[o=t[n]])return e[o];return i}function be(){var s=N.loaderMaxURLSize,o=Object.create(null);function a(e,t){var i,n=o[e];"function"!=typeof n?(n=n.replace("{icons}",t.join(",")),(i=document.createElement("script")).setAttribute("type","text/javascript"),i.setAttribute("src",n),i.setAttribute("async",!0),document.head.appendChild(i)):n.call(L,e,t)}function c(e){var t=void 0===N.API[e]?N.defaultAPI:N.API[e];return"function"==typeof t?(o[e]=t,!1):-1===t.indexOf("{icons}")?(o[e]=t,null):(t=t.replace("{prefix}",e).replace("{callback}","Iconify._loaderCallback"),(o[e]=t).replace("{icons}","").length)}Object.keys(T).forEach(function(i){var n=c(i),o=!1===n,r=[];if(null===n)return a(i,[]),void(F[i]=!0);T[i].forEach(function(e,t){o||(n+=e.length+1,s<=n&&(a(i,r),r=[],n=c(i)+e.length+1)),r.push(e)}),r.length&&a(i,r),F[i]=void 0===F[i]?T[i]:F[i].concat(T[i]),delete T[i]}),D=!1}function me(e,t,i){return i||S.domready||N.loadBeforeDOMReady?(void 0===T[e]||-1===T[e].indexOf(t))&&(void 0===F[e]||!0!==F[e]&&-1===F[e].indexOf(t))&&(void 0===T[e]&&(T[e]=[]),T[e].push(t),D||(D=!0,window.setTimeout(be,0)),1):(o=t,void 0===R[n=e]&&(R[n]=Object.create(null)),R[n][o]=!0,void 0===S._loaderDOMReady&&(S._loaderDOMReady=S.DOMReadyCallback,S.DOMReadyCallback=function(){S._loaderDOMReady(),Object.keys(R).forEach(function(t){Object.keys(R[t]).forEach(function(e){L.iconExists(e,t)||me(t,e,!0)})})}),1);var n,o}function ye(){var e;!1!==U&&U.length?(e=U,U=!1,Q.scanDOM(e)):U=!1}function we(e){e.forEach(function(e){var t;if(!1===U&&(U=[],window.setTimeout(ye,0)),e.addedNodes)for(t=0;t<e.addedNodes.length;t++)U.push(e.addedNodes[t])})}function _e(){q.observe(void 0===z._root?document.querySelector("body"):z._root,W)}function xe(e,t){var i;return"<?"===e.slice(0,2)&&(i=e.indexOf(">"),e=e.slice(i+1)),e=-1!==(i=(e=e.replace("viewbox=","viewBox=").replace("preserveaspectratio=","preserveAspectRatio=")).indexOf("</"))?e.replace("</",t+"</"):e.replace("/>",">"+t+"</svg>")}i=re,"function"!=typeof window.CustomEvent&&(se.prototype=window.Event.prototype,window.CustomEvent=se),i.event=function(e,t){document.dispatchEvent(new CustomEvent(e,t))},n=e,r=(o=re).config,s=null,o.DOMReadyCallback=function(){o.domready=!0,o.nextInitItem()},o.initTimeout=function(e){function t(){if(null!==s){if(!1!==s.callback())return s.stop(),void o.nextInitItem();s.counter++,10!==s.counter&&25!==s.counter||(window.clearInterval(s.id),s.id=window.setInterval(t,10===s.counter?250:1e3))}}null!==s&&s.stop(),s={id:window.setInterval(t,100),counter:0,callback:e,stop:function(){window.clearInterval(s.id),s=null},nextTick:t}},o.domready=!1,o.ready=!1,o.initQueue=[],o.readyQueue=[],o.nextInitItem=function(){var e;if(!o.ready){if(o.initQueue.length)e=o.initQueue.shift();else{if(!o.domready)return void o.initTimeout(function(){return!o.domready&&document.body&&o.scanDOM(),o.domready});if(!o.readyQueue.length)return o.ready=n.isReady=!0,o.event(r._readyEvent),void o.scanDOM();e=o.readyQueue.shift()}!1!==e()&&o.nextInitItem()}},o.addStylesheet=function(e){var t;if(!document.head||!document.body)return!!o.domready||(e||o.initTimeout(o.addStylesheet.bind(null,!0)),!1);try{(t=document.createElement("style")).type="text/css",t.innerHTML="span.iconify, i.iconify, iconify-icon { display: inline-block; width: 1em; }",null!==document.head.firstChild?document.head.insertBefore(t,document.head.firstChild):document.head.appendChild(t)}catch(e){}return!0},o.initQueue.push(o.addStylesheet.bind(null,!1)),n.ready=function(e){n.isReady?window.setTimeout(e):document.addEventListener(r._readyEvent,e)},window.setTimeout(function(){"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?o.domready=!0:(document.addEventListener("DOMContentLoaded",ae),window.addEventListener("load",ae)),o.nextInitItem()}),(a=re.config).SVGAttributes=Object.create(null),a._imageClass="iconify",a._loadingClass="svg-loading",a._iconAttribute="data-icon",a._rotateAttribute="data-rotate",a._flipAttribute="data-flip",a._inlineModeAttribute="data-inline",a._alignAttribute="data-align",a._appendAttribute="data-icon-append",a._appendedClass="svg-appended",a._readyEvent="IconifyReady",a._webComponentsPolyfill="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js",a._classListPolyfill="https://cdnjs.cloudflare.com/ajax/libs/classlist/1.1.20150312/classList.min.js",function(t){t.defaultAPI="https://api.iconify.design/{prefix}.js?icons={icons}",t.API=Object.create(null),t.loaderMaxURLSize=500,t.loadBeforeDOMReady=!(document&&document.body),t._loaderEvent="IconifyAddedIcons",t.sessionStorage=!0;try{t.localStorage=!!(window&&window.localStorage&&window.localStorage.length)}catch(e){t.localStorage=!1}}(re.config),c=e,l=t,u=re.config,c.setConfig=function(e,t){ce(e,t,!1)},c.setCustomAPI=function(e,t){switch(typeof e){case"string":0;break;case"object":if(e instanceof Array){0;break}default:return}e.forEach(function(e){null===t?delete u.API[e]:u.API[e]=t})},c.getConfig=function(e){return void 0===u[e]?void 0===u["_"+e]?null:u["_"+e]:u[e]},["SimpleSVG","Iconify"].forEach(function(e){var t;void 0!==l[e+"Config"]&&"object"==typeof l[e+"Config"]&&(t=l[e+"Config"],Object.keys(t).forEach(function(e){ce(e,t[e],!0)}))}),f=(d=re).config,h=t,d.initQueue.push(function(){var e={observer:!1,classList:!1},t={observer:!1,classList:!1};function i(e){var t;return!e.length||(document.head?((t=document.createElement("script")).setAttribute("src",e),t.setAttribute("type","text/javascript"),document.head.appendChild(t),!0):d.domready)}function n(){if("classList"in document.createElement("div"))return 1;t.classList||(t.classList=i(f._classListPolyfill))}function o(){return h.MutationObserver&&h.WeakMap||t.observer||(t.observer=i(f._webComponentsPolyfill)),1}return e.classList=!n(),e.observer=!o(),!e.classList&&!e.observer||(d.initTimeout(function(){return!(e.observer&&!o()||e.classList&&!n())}),!1)}),re.getPrefix=function(e,t){var i;return"string"==typeof t&&""!==t?{prefix:t,icon:e}:2===(i=e.split(":")).length?{prefix:i[0],icon:i[1]}:1<(i=e.split("-")).length?{prefix:t=i.shift(),icon:i.join("-")}:{prefix:"",icon:e}},p=re.getPrefix,v={left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1},g=["left","top","width","height","body","rotate","vFlip","hFlip","inlineTop","inlineHeight","verticalAlign"],fe.mergeFlip=ue,fe.mergeRotation=le,fe.blankIcon=function(){return de({body:"",width:16,height:16})},re.Storage=fe,b=e,y=t,w=!1,_=new(m=re).Storage,b.addCollection=function(e,t){_.addCollection(e),w||!0===t||(w=!0,window.setTimeout(he,0))},b.addIcon=function(e,t,i){_.addIcon(e,t),w||!0===i||(w=!0,window.setTimeout(he,0))},b.iconExists=_.exists.bind(_),b.getIcon=_.copyIcon.bind(_),b.listIcons=_.list.bind(_),["SimpleSVG","Iconify"].forEach(function(e){void 0!==y[e+"Preload"]&&y[e+"Preload"]instanceof Array&&y[e+"Preload"].forEach(function(e){"object"==typeof e&&void 0!==e.icons&&b.addCollection(e)})}),x=re.Storage,O=re.config,A=/(-?[0-9.]*[0-9]+[0-9.]*)/g,j=/^-?[0-9.]*[0-9]+[0-9.]*$/g,I=["width","height","inline"],E=["title"],k=0,re.SVG=function(_){return _=_||x.blankIcon(),this.item=_,this.height=function(e,t,i){return void 0===e?t?this.item.inlineHeight:this.item.height:pe(e,(t?this.item.inlineHeight:this.item.height)/this.item.width,i)},this.width=function(e,t,i){return void 0===e?this.item.width:pe(e,this.item.width/(t?this.item.inlineHeight:this.item.height),i)},this.defaultAttributes=function(){return{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false"}},this.preserveAspectRatio=function(e,t,i){var n="";switch(e){case"left":n+="xMin";break;case"right":n+="xMax";break;default:n+="xMid"}switch(t){case"top":n+="YMin";break;case"bottom":n+="YMax";break;default:n+="YMid"}return n+=!0===i?" slice":" meet"},this.htmlspecialchars=function(e){switch(typeof e){case"boolean":case"number":return e+"";case"string":return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}return""},this.attributes=function(t){var e,i,n,o,r,s,a,c,l,u,d,f,h,p,v=this,g={horizontal:"center",vertical:"middle",crop:!1},b={rotate:_.rotate,hFlip:_.hFlip,vFlip:_.vFlip},m="",y=this.defaultAttributes(),w=[];if(s=ve(t="object"==typeof t?t:Object.create(null),[O._inlineModeAttribute,"inline"],!0),u=ve(t,[O._appendAttribute],!1),e={left:_.left,top:s?_.inlineTop:_.top,width:_.width,height:s?_.inlineHeight:_.height},"string"==typeof t[O._flipAttribute]&&t[O._flipAttribute].split(/[\s,]+/).forEach(function(e){switch(e=e.toLowerCase()){case"horizontal":b.hFlip=!b.hFlip;break;case"vertical":b.vFlip=!b.vFlip}}),void 0!==t[O._rotateAttribute])if("number"==typeof(c=t[O._rotateAttribute]))b.rotate+=c;else if("string"==typeof c)if(""===(d=c.replace(/^-?[0-9.]*/,"")))c=parseInt(c),isNaN(c)||(b.rotate+=c);else if(d!==c){switch(l=!1,d){case"%":l=25;break;case"deg":l=90}l&&(c=parseInt(c.slice(0,c.length-d.length)),isNaN(c)||(b.rotate+=Math.round(c/l)))}switch(b.hFlip?b.vFlip?b.rotate+=2:(w.push("translate("+(e.width+e.left)+" "+(0-e.top)+")"),w.push("scale(-1 1)"),e.top=e.left=0):b.vFlip&&(w.push("translate("+(0-e.left)+" "+(e.height+e.top)+")"),w.push("scale(1 -1)"),e.top=e.left=0),b.rotate%4){case 1:p=e.height/2+e.top,w.unshift("rotate(90 "+p+" "+p+")"),0===e.left&&0===e.top||(p=e.left,e.left=e.top,e.top=p),e.width!==e.height&&(p=e.width,e.width=e.height,e.height=p);break;case 2:w.unshift("rotate(180 "+(e.width/2+e.left)+" "+(e.height/2+e.top)+")");break;case 3:p=e.width/2+e.left,w.unshift("rotate(-90 "+p+" "+p+")"),0===e.left&&0===e.top||(p=e.left,e.left=e.top,e.top=p),e.width!==e.height&&(p=e.width,e.width=e.height,e.height=p)}return i=ge(t,["data-width","width"],null),n=ge(t,["data-height","height"],null),null===i&&null===n&&(n="1em"),null!==i&&null!==n?(o=i,r=n):null!==i?r=pe(o=i,e.height/e.width):o=pe(r=n,e.width/e.height),!1!==o&&(y.width="auto"===o?e.width:o),!1!==r&&(y.height="auto"===r?e.height:r),s&&0!==_.verticalAlign?m+="vertical-align: "+(h=_.verticalAlign+"em")+";":h="","string"==typeof t[O._alignAttribute]&&t[O._alignAttribute].toLowerCase().split(/[\s,]+/).forEach(function(e){switch(e){case"left":case"right":case"center":g.horizontal=e;break;case"top":case"bottom":case"middle":g.vertical=e;break;case"crop":g.crop=!0;break;case"meet":g.crop=!1}}),m+="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);",y.style=m+(void 0===t.style?"":t.style),y.preserveAspectRatio=this.preserveAspectRatio(g.horizontal,g.vertical,g.crop),y.viewBox=e.left+" "+e.top+" "+e.width+" "+e.height,a=function(i){var e,n,t=/\sid="(\S+)"/g,o=[];function r(e,t,i){for(var n=0;-1!==(n=i.indexOf(e,n));)i=i.slice(0,n)+t+i.slice(n+e.length),n+=t.length;return i}for(;e=t.exec(i);)o.push(e[1]);return o.length&&(n="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",o.forEach(function(e){var t=n+k;k++,i=r('="'+e+'"','="'+t+'"',i),i=r('="#'+e+'"','="#'+t+'"',i),i=r("(#"+e+")","(#"+t+")",i)})),i}(this.item.body),w.length&&(a='<g transform="'+w.join(" ")+'">'+a+"</g>"),f=Object.create(null),Object.keys(t).forEach(function(e){void 0===y[e]&&(-1!==E.indexOf(e)?a="<"+e+">"+v.htmlspecialchars(t[e])+"</"+e+">"+a:-1===I.indexOf(e)&&(f[e]=t[e]))}),{attributes:y,elementAttributes:f,body:a,append:u,verticalAlign:h}},this},M=(C=re).config._loadingClass,C.newImage=function(e,t,i){return{element:e,icon:t,parser:i,loading:e.classList.contains(M)}},C.parsedImage=function(e,t){return{element:e,icon:t}},C.getImageAttributes=function(t){var e,i,n=Object.create(null);if(!t.element.hasAttributes())return n;for(e=0;e<t.element.attributes.length;e++)i=t.element.attributes[e],n[i.name]=i.value;return t.parser&&void 0!==t.parser.filterAttributes&&(n=t.parser.filterAttributes(t,n)),void 0!==n.class&&(n.class=n.class.split(" ").filter(function(e){return e!==M}),t.parser&&void 0!==t.parser.filterClasses&&(n.class=t.parser.filterClasses(t,n.class)),n.class=n.class.join(" ")),void 0!==t.attributes&&Object.keys(t.attributes).forEach(function(e){n[e]=t.attributes[e]}),n},function(n,f,e){var s=e._imageClass,t=e._loadingClass,i=e._appendedClass,a=e._iconAttribute,o=e._inlineModeAttribute,r=":not(svg):not(."+i+")",c=":not(."+t+")",l="."+t,h={iconify:{selector:"."+s,selectorAll:"."+s+r,selectorNew:"."+s+r+c,selectorLoading:"."+s+r+l,icon:function(e){var t,i=e.getAttribute(a);if("string"==typeof i)return i;for(var n=0;n<e.classList.length;n++)if(5<(t=e.classList[n]).length&&"icon:"===t.slice(0,5))return t.slice(5);return""},filterClasses:function(e,t){var i,n,o;for(n=0;n<t.length;n++)"icon-"===(i=t[n]).slice(0,5)&&2===(i=i.slice(5).split(":")).length&&(o="data-"+i[0],void 0===e.attributes&&(e.attributes=Object.create(null)),e.attributes[o]=i[1]);return t}}},p=Object.keys(h);n.addFinder=function(e,t){void 0===t.selectorAll&&(t.selectorAll=t.selector+r),void 0===t.selectorNew&&(t.selectorNew=t.selector+r+c),void 0===t.selectorLoading&&(t.selectorLoading=t.selector+r+l),h[e]=t,p=Object.keys(h),n.isReady&&n.scanDOM()},n.addTag=function(e,i,t){n.addFinder("tag-"+e,{selector:e,icon:null==t?h.iconify.icon:t,filterAttributes:function(e,t){return void 0===t[o]&&(t[o]=i),t},filterClasses:h.iconify.filterClasses})};try{"object"==typeof Reflect&&"object"==typeof customElements&&Object.setPrototypeOf&&(Object.setPrototypeOf(u.prototype,HTMLElement.prototype),Object.setPrototypeOf(u,HTMLElement),customElements.define("iconify-icon",u))}catch(e){}function u(){return Reflect.construct(HTMLElement,[],u)}n.addTag("iconify-icon",!1),f.findNewImages=function(c,l){var u=[],d=[];return(c=void 0===c?void 0===e._root?document.body:e._root:c)&&p.forEach(function(e){var t,i,n,o,r=h[e],s=!0===l?r.selectorLoading:!1===l?r.selectorNew:r.selectorAll,a=c.querySelectorAll(s);for(t=0;t<a.length;t++)i=a[t],(n=r.icon(i))&&-1===d.indexOf(i)&&(d.push(i),o=f.newImage(i,n,r),u.push(o))}),u},f.findParsedImages=function(e){var t,i,n,o=[],r=e.querySelectorAll("svg."+s);for(t=0;t<r.length;t++)(n=(i=r[t]).getAttribute(a))&&o.push(f.parsedImage(i,n));return o}}(e,re,re.config),L=e,N=(S=re).config,P=t,T=Object.create(null),F=Object.create(null),R=Object.create(null),H={session:!(D=!1),local:!0},V={session:0,local:0},L._loaderCallback=function(i){var n=!1;"object"==typeof i&&(["local","session"].forEach(function(t){var e;if(!n&&H[t]&&N[t+"Storage"]){e=P[t+"Storage"];try{V[t]||e.setItem("iconify-version",S.version),e.setItem("iconify"+V[t],JSON.stringify(i)),n=!0,V[t]++,e.setItem("iconify-count",V[t])}catch(e){H[t]=!1}}}),L.addCollection(i),S.event(N._loaderEvent))},S.loadImage=function(e,t){var i=S.getPrefix(e.icon);return!!L.iconExists(i.icon,i.prefix)||(!1!==t&&me(i.prefix,i.icon,!1)&&e.element.classList.add(N._loadingClass),!1)},L.preloadImages=function(e){var t,i=!1;return e.forEach(function(e){t=S.getPrefix(e),L.iconExists(t.icon,t.prefix)||(me(t.prefix,t.icon,!0),i=!0)}),i},["local","session"].forEach(function(t){var e,i,n;try{if("object"!=typeof(e=P[t+"Storage"]))return void(H[t]=!1);if(e.getItem("iconify-version")!==S.version)return;if("number"!=typeof(n=parseInt(e.getItem("iconify-count")))||isNaN(n))return;for(;;){if(V[t]>=n)return;if("string"!=typeof(i=e.getItem("iconify"+V[t])))return;"object"==typeof(i=JSON.parse(i))&&L.addCollection(i),V[t]++}}catch(e){H[t]=!1}}),G=e,z=(Q=re).config,B=t,Y=0,W={childList:!(U=!1),subtree:!(J=q=null)},G.pauseObserving=function(){null!==q&&(Y||(J=q.takeRecords(),q.disconnect())),Y++},G.resumeObserving=function(){null!==q?Y&&(--Y||(_e(),null!==J&&J.length&&we(J))):Y--},G.isObserverPaused=function(){return null===q||!!Y},Q.readyQueue.push(function(){return q=new B.MutationObserver(we),Y||_e(),!0}),$=e,X=(K=re).config,Z=X._iconAttribute,ee=X._loadingClass,te=X._imageClass,ie=X._appendedClass,K.renderSVG=function(t){var e,i,n,o,r,s,a,c,l,u,d,f=K.getImageAttributes(t),h=$.getIcon(t.icon);for(f[Z]=t.icon,e=new K.SVG(h),n=document.createElement("svg"),r=e.attributes(f),Object.keys(r.attributes).forEach(function(e){if(d=r.attributes[e],"style"!==e||"string"==typeof(d=t.element.getAttribute("style"))&&d.length)try{n.setAttribute(e,d)}catch(e){}}),Object.keys(r.elementAttributes).forEach(function(e){try{(r.append?t.element:n).setAttribute(e,r.elementAttributes[e])}catch(e){}}),t.loading&&(n.classList.remove(ee),r.append&&t.element.classList.remove(ee)),n.classList.add(te),s=xe(n.outerHTML,r.body),(o=document.createElement("span")).innerHTML=s,i=o.childNodes[0],r.append?(t.element.classList.add(ie),t.element.appendChild(i)):(t.element.parentNode.replaceChild(i,t.element),t.element=i),a=i.style,c=t.element.style,r.verticalAlign&&(a.verticalAlign=r.verticalAlign),a.transform="rotate(360deg)",l=0;l<c.length;l++)a[u=c[l]]=c[u];delete t.parser,delete t.loading},$.getSVGObject=function(e,t){return!!$.iconExists(e)&&new K.SVG($.getIcon(e)).attributes(t,!1)},$.getSVG=function(e,t){var i,n;return!1!==(n=$.getSVGObject(e,t))&&(i=document.createElement("svg"),Object.keys(n.attributes).forEach(function(e){try{i.setAttribute(e,n.attributes[e])}catch(e){}}),xe(i.outerHTML,n.body))},ne=e,(oe=re).scanDOM=function(){var t=!1;function e(){oe.findNewImages().forEach(function(e){oe.loadImage(e)&&(t||(t=!0,ne.pauseObserving()),oe.renderSVG(e))})}if(oe.ready)e();else try{e()}catch(e){}t&&ne.resumeObserving()},ne.scanDOM=oe.scanDOM,ne.getVersion=function(){return oe.version}}(self.Iconify,self)),"object"==typeof exports)try{exports.__esModule=!0,exports.default=self.Iconify}catch(e){}
/* END NOCOMPRESS */

/**
 * This file is part of the @iconify/iconify package.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files that were distributed with this source code.
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */

/**
 * Plugin for FontAwesome icons
 */
(function(Iconify) {
    "use strict";

    /**
     * List of FontAwesome class names that do not represent icons
     *
     * @type {[string]}
     */
    var faReserved = ['fa-lg', 'fa-fw', 'fa-ul', 'fa-li', 'fa-border', 'fa-pull-left', 'fa-pull-right', 'fa-spin', 'fa-pulse', 'fa-rotate-90', 'fa-rotate-180', 'fa-rotate-270', 'fa-flip-horizontal', 'fa-flip-vertical', 'fa-stack', 'fa-stack-1x', 'fa-stack-2x', 'fa-inverse'],
        rotateAttribute = Iconify.getConfig('_rotateAttribute'),
        flipAttribute = Iconify.getConfig('_flipAttribute'),
        inlineAttribute = Iconify.getConfig('_inlineModeAttribute'),
        i;

    /**
     * Link to stylesheet
     *
     * @type {string}
     */
    var stylesheetCDN = DOKU_TPL + '/assets/iconify/plugins/fa.css';

    /**
     * True if stylesheet has been added
     *
     * @type {boolean}
     */
    var styleAdded = false;

    /**
     * Inserts short version of FontAwesome stylesheet into DOM
     */
    function insertStylesheet() {
        var element = document.createElement('link');

        styleAdded = true;

        element.setAttribute('rel', 'stylesheet');
        element.setAttribute('type', 'text/css');
        element.setAttribute('href', stylesheetCDN);
        document.head.appendChild(element);
    }

    /**
     * Create finder object
     *
     * @param {string} selector
     * @param {string} prefix
     * @returns {object}
     */
    function finder(selector, prefix) {
        return {
            selector: selector,

            /**
             * Get icon name from element
             *
             * @param {Element} element
             * @return {string}
             */
            icon: function(element) {
                var item;

                for (var i = 0; i < element.classList.length; i++) {
                    item = element.classList[i];
                    if (item.slice(0, 3) === 'fa-' && faReserved.indexOf(item) === -1) {
                        return prefix + ':' + item.slice(3);
                    }
                }

                return '';
            },

            /**
             * Filter class names list, removing any FontAwesome specific classes
             *
             * @param {object} image
             * @param {Array|DOMTokenList} list
             * @return {Array}
             */
            filterClasses: function(image, list) {
                var results = [],
                    transform = {
                        rotate: 0,
                        hFlip: false,
                        vFlip: false
                    };

                if (image.attributes === void 0) {
                    image.attributes = Object.create(null);
                }

                for (var i = 0; i < list.length; i++) {
                    switch (list[i]) {
                        case 'fa-rotate-90':
                            transform.rotate = 1;
                            break;

                        case 'fa-rotate-180':
                            transform.rotate = 2;
                            break;

                        case 'fa-rotate-270':
                            transform.rotate = 3;
                            break;

                        case 'fa-flip-horizontal':
                            transform.hFlip = true;
                            break;

                        case 'fa-flip-vertical':
                            transform.vFlip = true;
                            break;

                        default:
                            results.push(list[i]);
                    }
                }

                if (image.attributes[inlineAttribute] === void 0) {
                    image.attributes[inlineAttribute] = true;
                }

                // Add transformation as attributes
                if (transform.rotate) {
                    image.attributes[rotateAttribute] = transform.rotate;
                }
                if (transform.hFlip || transform.vFlip) {
                    image.attributes[flipAttribute] = (transform.hFlip && transform.vFlip) ? 'horizontal vertical' : (
                        transform.hFlip ? 'horizontal' : 'vertical'
                    );
                }

                // Insert short version of FontAwesome stylesheet into DOM
                if (!styleAdded) {
                    insertStylesheet();
                }

                return results;
            }
        };
    }

    /**
     * Add more reserved keywords
     */
    for (i = 2; i < 11; i ++) {
        faReserved.push('fa-' + i + 'x');
    }

    /**
     * Add finder to list of finders
     */
    Iconify.addFinder('fa', finder('.fa', 'fa'));
    Iconify.addFinder('fas', finder('.fas', 'fa-solid'));
    Iconify.addFinder('far', finder('.far', 'fa-regular'));
    Iconify.addFinder('fal', finder('.fal', 'fa-light')); // pro only
    Iconify.addFinder('fab', finder('.fab', 'fa-brands'));

})(Iconify);


// Detect Icoonify support with Icon Plugin
if (!Iconify.getConfig('defaultAPI').match('lib/plugins/icons')) {
    Iconify.setConfig('defaultAPI', DOKU_TPL + 'iconify.php?prefix={prefix}&icons={icons}');
}

if (typeof JSINFO.bootstrap3 === 'undefined') {
    JSINFO.bootstrap3 = {
        config: {}
    };
}

if (typeof JSINFO.plugin === 'undefined') {
    JSINFO.plugin = {};
}

function dw_mode(id) {
    return ((JSINFO.bootstrap3.mode === id) ? true : false);
}

function dw_admin(page) {
    return ((JSINFO.bootstrap3.admin === page) ? true : false);
}

function mediaSize(media) {
    return jQuery(['#screen__mode .visible-', media, '-block'].join('')).is(':visible');
}

var dw_template = {

    init: function () {

        dw_template.common();
        dw_template.mobileLayout();
        dw_template.toc();
        dw_template.tabs();
        dw_template.tocMenu();
        dw_template.nav();
        dw_template.backToTop();
        dw_template.anchorJS();
        dw_template.pageTools();
        dw_template.pageIcons();
        dw_template.dropdownPage();
        dw_template.footnotes();
        dw_template.mediaManager();
        dw_template.collapseSections();
        dw_template.pageRestoreConfirm();
        dw_template.alerts();
        dw_template.detail();
        dw_template.typeahead();
        dw_template.menuitem();
        dw_template.cookieLaw();
        dw_template.plugins();

        // Preload icons
        Iconify.preloadImages(['mdi:folder-open', 'mdi:folder', 'mdi:file-document-outline', 'mdi:chevron-up', 'mdi:chevron-down']);

        // Mobile Layout
        jQuery(window).resize(function () {
            dw_template.mobileLayout();
            dw_template.collapseSections();
            dw_template.tocResize();
        });

        // Re-initialize some components in media-manager
        if (dw_mode('media') || jQuery('#media__manager').length) {

            jQuery(document).ajaxSuccess(function () {
                dw_template.common();
                dw_template.buttons();
                dw_template.tabs();
                dw_template.mediaManager();
                dw_template.alerts();
            });
        }

        // Index Mode
        if (dw_mode('index')) {

            jQuery(document).ajaxSuccess(function () {
                dw_template.modeIndex();
            });

            jQuery('#index__tree').click(function (e) {
                dw_template.modeIndex();
            });

        }

        // Hash change
        if (JSINFO.bootstrap3.config.fixedTopNavbar) {

            var scrollOnHashChange = function () {
                scrollBy(0, - (parseInt(jQuery('body').css('marginTop')) || 0));
            };

            if (location.hash) {
                setTimeout(function () {
                    scrollOnHashChange();
                }, 1);
            }

            jQuery(window).on('hashchange', function () {
                scrollOnHashChange();
            });
        }

    },

    // Normalization & Basic Styling
    common: function () {

        var $dw_content = jQuery('#dokuwiki__content, #media__manager');  // Page Content node

        // Abbr tooltips
        jQuery('abbr').tooltip();

        // Search Hit
        jQuery('.search_hit').removeClass('search_hit').addClass('mark');

        // Fix accesskey issue on dropdown menu
        if (jQuery('#dw__pagetools').length) {
            jQuery('ul.dropdown-menu li a[accesskey]')
                .closest('.top, .revs, .show, .edit')
                .removeAttr('accesskey');
        }

        // Form and controls
        // TODO ported
        $dw_content.find(':submit, :button, :reset').addClass('btn btn-default');
        jQuery('input, select, textarea')
            .not('[type=submit], [type=reset], [type=button], [type=hidden], [type=image], [type=checkbox], [type=radio]')
            .addClass('form-control');
        jQuery('input[type=checkbox]').addClass('checkbox-inline');
        jQuery('input[type=radio]').addClass('radio-inline');
        jQuery('label').addClass('control-label');
        jQuery('main form:not(.form-horizontal)').addClass('form-inline');

        // Toolbar
        jQuery('#tool__bar').addClass('btn-group');

        // Add icons
        jQuery('[data-dw-icon]').each(function () {
            var $self = jQuery(this);
            var $icon = jQuery('<span class="iconify mr-1">').attr('data-icon', $self.attr('data-dw-icon'));

            if ($self.attr('data-dw-icon-target')) {
                $self.find($self.attr('data-dw-icon-target')).prepend($icon);
            } else {
                $self.prepend($icon);
            }

        });

        // Picker
        //     if (dw_mode('edit')) {
        //       jQuery('.picker').addClass('btn-group');
        //     }

        // Footer links
        jQuery('footer a').addClass('navbar-link');

        // Personal Home-Page icon
        if (NS == 'user' && dw_mode('show') && !jQuery('.notFound').length) {
            jQuery('.mode_show #dokuwiki__content h1').prepend('<span class="iconify mr-2" data-icon="mdi:account"/> ');
        }

        // Scrolling animation (on TOC and FootNotes)
        jQuery('#dw__toc a, #dw__toc_menu a, a.fn_top, a.fn_bot').on('click', function (e) {

            var $link = jQuery(this);

            if ($link.attr('href').match(/^#/) && $link.attr('href').length > 1) {

                e.preventDefault();

                if (mediaSize('xs') && $link.hasClass('fn_top')) {
                    return false;
                }

                if (JSINFO.bootstrap3.config.tocCollapseOnScroll && JSINFO.bootstrap3.config.tocAffix) {
                    dw_template.tocClose();
                }

                var $target = jQuery('body ' + $link.attr('href'));

                if ($target.length) {

                    var body_offset = (parseInt(jQuery('body').css('marginTop')) || 0),
                        target_position = Math.round($target.offset().top - body_offset);

                    jQuery('html, body').animate({
                        scrollTop: target_position
                    }, 600);

                    document.location.hash = $link.attr('href');

                }

                return false;

            }

        });

    },

    /**
     * Customize jQuery UI with Bootstrap v3 classes
     */
    jQueryUI: function () {

        if (typeof jQuery.ui === 'undefined') return false;

        // accordion
        jQuery.ui.accordion.prototype.options.classes["ui-accordion"] = "panel panel-default";
        jQuery.ui.accordion.prototype.options.classes["ui-accordion-content"] = "panel-collapse collapse";
        jQuery.ui.accordion.prototype.options.classes["ui-accordion-content-active"] = "in";
        jQuery.ui.accordion.prototype.options.classes["ui-accordion-header"] = "panel-heading";

        // button
        jQuery.ui.button.prototype.options.classes["ui-button"] = "btn btn-default";
        jQuery.ui.button.prototype.options.classes["ui-button-icon"] = "glyphicon";

        // dialog
        jQuery.ui.dialog.prototype.options.classes["ui-dialog"] = "modal-content";
        jQuery.ui.dialog.prototype.options.classes["ui-dialog-titlebar"] = "modal-header";
        jQuery.ui.dialog.prototype.options.classes["ui-dialog-title"] = "modal-title";
        jQuery.ui.dialog.prototype.options.classes["ui-dialog-titlebar-close"] = "btn btn-default";
        jQuery.ui.dialog.prototype.options.classes["ui-dialog-content"] = "modal-body";
        jQuery.ui.dialog.prototype.options.classes["ui-dialog-buttonpane"] = "modal-footer";

        // menu
        jQuery.ui.menu.prototype.options.classes["ui-menu"] = "list-group";
        jQuery.ui.menu.prototype.options.classes["ui-menu-icons"] = "";
        jQuery.ui.menu.prototype.options.classes["ui-menu-icon"] = "glyphicon glyphicon-chevron-right";
        jQuery.ui.menu.prototype.options.classes["ui-menu-item"] = "list-group-item";
        jQuery.ui.menu.prototype.options.classes["ui-menu-divider"] = "";
        jQuery.ui.menu.prototype.options.classes["ui-menu-item-wrapper"] = "";

        // progressbar
        jQuery.ui.progressbar.prototype.options.classes["ui-progressbar"] = "progress";
        jQuery.ui.progressbar.prototype.options.classes["ui-progressbar-value"] = "progress-bar";

        // selectmenu
        jQuery.ui.selectmenu.prototype.options.classes["ui-selectmenu-button"] = "btn btn-default dropdown-toggle";
        jQuery.ui.selectmenu.prototype.options.classes["ui-selectmenu-open"] = "open";
        jQuery.ui.selectmenu.prototype.options.icons.button = "caret";
        jQuery.ui.selectmenu.prototype.options.width = "auto";

        // tabs
        jQuery.ui.tabs.prototype.options.classes["ui-tabs-nav"] = "nav nav-tabs";
        jQuery.ui.tabs.prototype.options.classes["ui-tabs-panel"] = "tab-pane";
        jQuery.ui.tabs.prototype.options.classes["ui-tabs-active"] = "active";

        // tooltip
        jQuery.ui.tooltip.prototype.options.classes["ui-tooltip"] = "tooltip top fade in";
        jQuery.ui.tooltip.prototype.options.classes["ui-tooltip-content"] = "tooltip-inner";

    },

    nav: function () {
        // Unwrap unnecessary tags inside list items for Bootstrap nav component
        jQuery('.nav div.li').contents().unwrap();

        // Move the font-icons inside a link
        jQuery('.nav li .dw-icons + a').each(function () {
            var $link = jQuery(this),
                $icon = $link.prev();
            $icon.prependTo($link);
            $icon.after(' ');
        });

    },

    tabs: function () {
        jQuery('ul.tabs').addClass('nav nav-tabs');

        jQuery('.nav-tabs strong').replaceWith(function () {

            jQuery(this).parent().addClass('active');
            return jQuery('<a href="#"/>').html(jQuery(this).contents());
        });
    },

    buttons: function () {
        // TODO ported
        jQuery('.button').removeClass('button'); // Not ported
        jQuery('.alert button').removeClass('btn btn-default');
        jQuery('#dw__login, #dw__register, #subscribe__form, #media__manager').find(':submit').addClass('btn-success');
        jQuery('#dw__profiledelete').find(':submit').addClass('btn-danger');
        jQuery('#edbtn__save').addClass('btn-success');

        // Section Button edit
        // TODO ported
        jQuery('.btn_secedit .btn').addClass('btn-xs');
    },

    backToTop: function () {
        jQuery('.back-to-top').click(function (e) {
            e.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, 600);
        });

        // Display back-to-top during scroll
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop()) {
                jQuery('.back-to-top').fadeIn();
            } else {
                jQuery('.back-to-top').fadeOut();
            }
        });
    },

    footnotes: function () {

        var orig_insituPopup = dw_page.insituPopup;

        dw_page.insituPopup = function (target, popup_id) {
            var $fndiv = orig_insituPopup(target, popup_id);
            $fndiv.addClass('panel panel-body panel-default');
            return $fndiv;
        }

    },

    alerts: function () {
        // Info
        jQuery('div.info')
            .removeClass('info')
            .addClass('alert alert-info')
            .prepend('<span class="iconify mr-2" data-height="18" data-icon="mdi:information"/>');

        // Error
        jQuery('div.error')
            .removeClass('error')
            .addClass('alert alert-danger')
            .prepend('<span class="iconify mr-2" data-height="18" data-icon="mdi:alert-octagon"/>');

        // Success
        jQuery('div.success')
            .removeClass('success')
            .addClass('alert alert-success')
            .prepend('<span class="iconify mr-2" data-height="18" data-icon="mdi:check-circle"/>');

        // Notify
        jQuery('div.notify')
            .removeClass('notify')
            .addClass('alert alert-warning')
            .prepend('<span class="iconify mr-2" data-height="18" data-icon="mdi:alert"/>');
    },

    cookieLaw: function () {
        jQuery('#cookieDismiss').on('click', function () {
            jQuery('#cookieNotice').hide();
            DokuCookie.setValue('cookieNoticeAccepted', 1);
        });

    },

    anchorJS: function () {

        if (!JSINFO.bootstrap3.config.useAnchorJS) return false;

        anchors.add('.mode_show article .dw-content h1, .mode_show article ' +
            '.dw-content h2, .mode_show article .dw-content h3, ' +
            '.mode_show article .dw-content h4, .mode_show article ' +
            '.dw-content h5');

    },

    dropdownPage: function () {
        jQuery('.dw__dropdown_page .dropdown').hover(function () {
            if (!jQuery('#screen_mode').find('.visible-xs').is(':visible')) {
                jQuery(this).addClass('open');
            }
        },
            function () {
                if (!jQuery('#screen_mode').find('.visible-xs').is(':visible')) {
                    jQuery(this).removeClass('open');
                }
            });
    },

    pageIcons: function () {

        var $dw_page_icons = jQuery('.dw-page-icons');

        if (!$dw_page_icons.length) return false;

        var title = encodeURIComponent(document.title),
            url = encodeURIComponent(location),
            window_options = 'width=800,height=600,menubar=no,location=no,status=no';

        var share_to = {
            'twitter': (function () { return ['https://twitter.com/intent/tweet?text=', title, '&url=', url].join(''); })(),
            'linkedin': (function () { return ['https://www.linkedin.com/shareArticle?mini=true&url=', url, '&title=', title].join(''); })(),
            'facebook': (function () { return ['https://www.facebook.com/sharer/sharer.php?u=', url, '&t=', title].join(''); })(),
            'pinterest': (function () { return ['https://pinterest.com/pin/create/button/?url=', url, '&description=', title].join(''); })(),
            'telegram': (function () { return ['https://telegram.me/share/url?url=', url].join(''); })(),
            'whatsapp': (function () { return ['https://wa.me/?text=', title, ': ', url].join(''); })(),
            'yammer': (function () { return ['https://www.yammer.com/messages/new?login=true&trk_event=yammer_share&status=', url, '#/Messages/bookmarklet'].join(''); })(),
            'sendmail': (function () { return ['mailto:?subject=', document.title, '&body=', document.URL].join(''); })(),
            'reddit': (function () { return ['https://www.reddit.com/submit?url=', url, '&title=', title].join(''); })(),
            'msteams': (function () { return ['https://teams.microsoft.com/share?href=', url, '&referrer=', location.host].join(''); })(),
        };

        $dw_page_icons.find('.share-twitter').on('click', function () {
            window.open(share_to.twitter, 'Share to Twitter', window_options);
        });

        $dw_page_icons.find('.share-linkedin').on('click', function () {
            window.open(share_to.linkedin, 'Share to Linkedin', window_options);
        });

        $dw_page_icons.find('.share-facebook').on('click', function () {
            window.open(share_to.facebook, 'Share to Facebook', window_options);
        });

        $dw_page_icons.find('.share-pinterest').on('click', function () {
            window.open(share_to.pinterest, 'Share to Pinterest', window_options);
        });

        $dw_page_icons.find('.share-telegram').on('click', function () {
            window.open(share_to.telegram, 'Share to Telegram', window_options);
        });

        $dw_page_icons.find('.share-yammer').on('click', function () {
            window.open(share_to.yammer, 'Share to Yammer', window_options);
        });

        $dw_page_icons.find('.share-reddit').on('click', function () {
            window.open(share_to.reddit, 'Share to Reddit', window_options);
        });

        $dw_page_icons.find('.sendmail').on('click', function (e) {
            e.preventDefault();
            window.location = share_to['sendmail'];
        });

        $dw_page_icons.find('.share-whatsapp').on('click', function () {
            window.open(share_to.whatsapp, 'Share to WhatsApp', window_options);
        });

        $dw_page_icons.find('.share-microsoft-teams').on('click', function () {
            window.open(share_to.msteams, 'Share to Microsoft Teams', window_options);
        });

    },

    pageTools: function () {

        if (!jQuery('#dw__pagetools').length) return false;

        // Page Tools Affix
        jQuery('#dw__pagetools .tools').affix({
            offset: {
                top: (jQuery('main').position().top),
                bottom: (jQuery(document).height()
                    - jQuery('#dokuwiki__content').height()
                    - jQuery('#dokuwiki__pageheader').height()
                    - jQuery('#dokuwiki__header').height())
            }
        });

        var $pagetools = jQuery('#dw__pagetools');

        $pagetools.find('svg').hover(

            function () {
                var $node = jQuery(this);
                $node.closest('li.active').removeClass('active');
                $node.closest('li').addClass('active');
            },

            function () {
                var $node = jQuery(this);
                $node.closest('li.active').removeClass('active');
            }
        );

    },

    collapseSections: function () {

        if (!JSINFO.bootstrap3.config.collapsibleSections) return false;

        var $sections = jQuery('article div.level2'),
            $headings = $sections.prev();

        if (mediaSize('xs')) {

            $sections.addClass('hide');

            if (!$headings.find('svg').length) {

                $headings
                    .css('cursor', 'pointer')
                    .prepend(Iconify.getSVG('mdi:chevron-down'));

                $headings.on('click', function () {

                    var $heading = jQuery(this),
                        $icon = $heading.find('svg'),
                        $section = $heading.nextUntil('h2');

                    $section.toggleClass('hide');
                    $heading.css('cursor', 'pointer');

                    $section.hasClass('hide')
                        ? $icon.replaceWith(Iconify.getSVG('mdi:chevron-down'))
                        : $icon.replaceWith(Iconify.getSVG('mdi:chevron-up'));

                });

                if (mediaSize('xs')) {
                    $headings.trigger('click');
                }

            }

        } else {
            if ($sections.hasClass('hide')) {
                $sections.removeClass('hide');
            }
        }

    },

    mobileLayout: function () {

        var $dw_aside = jQuery('.dw__sidebar');
        if (!$dw_aside.length) return false;

        if (mediaSize('xs')) {

            if (JSINFO.bootstrap3.config.sidebarOnNavbar) {

                if (!jQuery('header aside').length) {
                    jQuery('<aside/>').prependTo('header nav div .navbar-collapse');
                    $dw_aside.find('.dw-sidebar-content').clone().appendTo('header aside');
                    jQuery('header aside .dw-sidebar-title').addClass('navbar-text');
                }
                jQuery('header aside').show();
                $dw_aside.hide();

            } else {

                if (!$dw_aside.find('.dw-sidebar-content').hasClass('panel')) {
                    $dw_aside.find('.dw-sidebar-content').addClass('panel panel-default');
                    $dw_aside.find('.dw-sidebar-title').addClass('panel-heading');
                    $dw_aside.find('.dw-sidebar-body').addClass('panel-body').removeClass('in');
                }

            }

        } else {

            jQuery('header aside').hide();
            $dw_aside.find('.dw-sidebar-content').removeClass('panel panel-default');
            $dw_aside.find('.dw-sidebar-title').removeClass('panel-heading');
            $dw_aside.find('.dw-sidebar-body').removeClass('panel-body').addClass('in');
            $dw_aside.show();
        }

    },

    modeIndex: function () {

        if (!dw_mode('index')) return false;

        var $directories = jQuery('ul.idx a.idx_dir'),
            $pages = jQuery('ul.idx a.wikilink1');

        jQuery.each($directories, function () {

            var $directory = jQuery(this),
                $closed = $directory.parents('.closed'),
                $open = $directory.parents('.open');

            if (!$directory.find('svg').length) {
                $directory.prepend(Iconify.getSVG('mdi:folder'));
            }

            if ($open.length) {
                $directory.find('svg').replaceWith(Iconify.getSVG('mdi:folder-open'));
            }

            if ($closed.length) {
                $directory.find('svg').replaceWith(Iconify.getSVG('mdi:folder'));
            }

            $directory.find('svg').addClass('iconify text-primary mr-2');

        });

        jQuery.each($pages, function () {

            var $page = jQuery(this);

            if (!$page.find('svg').length) {
                $page.prepend(Iconify.getSVG('mdi:file-document-outline'));
            }
            $page.find('svg').addClass('text-muted mr-2');

        });

    },

    mediaManager: function () {

        var $media_popup = jQuery('#media__content'),       // Media Manager (pop-up)
            $media_manager = jQuery('#mediamanager__page'); // Media Manager (page)

        // Media Manager (pop-up)
        if ($media_popup.length || $media_manager.length) {

            jQuery('.qq-upload-button').addClass('btn btn-default');
            jQuery('.qq-upload-action').addClass('btn btn-success');

            var $btn_delete = jQuery('#mediamanager__btn_delete [type=submit]');
            var $btn_update = jQuery('#mediamanager__btn_update [type=submit]');

            if (!$btn_delete.find('span').length) {
                $btn_delete.addClass('btn btn-danger');
                $btn_delete.prepend(jQuery('<span class="iconify mr-2" data-icon="mdi:delete"/>'));
                $btn_update.prepend(jQuery('<span class="iconify mr-2" data-icon="mdi:image-plus"/>'));
            }

            jQuery('#page__revisions .sizechange').addClass('label label-primary');
            jQuery('#page__revisions .sizechange.positive').addClass('label-success');
            jQuery('#page__revisions .sizechange.negative').addClass('label-danger');

        }

        // Media Manager (page)
        if ($media_manager.length) {

            var $sort_buttons = jQuery('.ui-buttonset');

            //$media_manager.find('.file dl').addClass('dl-horizontal');
            $media_manager.find('.file dd').addClass('pl-4');
            $media_manager.find('.panel').removeClass('panel').addClass('pull-left');

            $sort_buttons.addClass('btn-group');
            $sort_buttons.find('label').addClass('btn btn-xs btn-default');
            $sort_buttons.find('input').hide();

            function buttonHandler() {

                var $button = jQuery(this),
                    option_for = $button.attr('for'),
                    option_set = option_for.replace('sortBy__', '').replace('listType__', '');

                $sort_buttons.find('.active').removeClass('active');
                $button.addClass('active');
                $sort_buttons.find('#' + option_for).prop('checked', true);

                switch (option_set) {
                    case 'thumbs':
                    case 'rows':
                        dw_mediamanager.set_fileview_list(option_set);
                        $sort_buttons.find('[name=list_dwmedia]').val(option_set);
                        break;
                    case 'name':
                    case 'date':
                        dw_mediamanager.set_fileview_sort(option_set);
                        $sort_buttons.find('[name=sort_dwmedia]').val(option_set);
                        dw_mediamanager.list.call(jQuery('#dw__mediasearch')[0] || this, event);
                        break;
                }

            }

            $sort_buttons.find('label').on('click', buttonHandler);

        }

    },

    detail: function () {

        var $detail_page = jQuery('#dokuwiki__detail'); // Detail Page node

        if (!$detail_page.length) return false;

        $detail_page.find('img.img_detail')
            .addClass('img-responsive');
        $detail_page.find('dl')
            .addClass('dl-horizontal');

    },

    tocResize: function () {

        var $dw_toc = jQuery('#dw__toc');
        if (!$dw_toc.length) return false;

        if (JSINFO.bootstrap3.config.tocAffix) {
            $dw_toc.affix('checkPosition');
        }

        jQuery('#dw__toc .toc-body > ul').css({
            'max-height': (jQuery(window).height() - 50 - jQuery('#dokuwiki__content').position().top) + 'px',
            'overflow-y': 'scroll'
        });

        jQuery('.toc-body').width(jQuery('.dw-toc').width());

    },

    tocClose: function () {

        var $dw_toc = jQuery('#dw__toc');
        if (!$dw_toc.length) return false;

        if (!$dw_toc.hasClass('affix-bottom')) {
            jQuery('.dw-content-page').addClass('dw-toc-closed');
            $dw_toc.find('.toc-body').collapse('hide');
        }

    },

    tocOpen: function () {

        var $dw_toc = jQuery('#dw__toc');
        if (!$dw_toc.length) return false;

        jQuery('.dw-content-page').removeClass('dw-toc-closed');

        $dw_toc.find('.toc-body').collapse('show');

    },

    // Table of Contents (Navbar)
    tocMenu: function () {

        if (!jQuery("#dw__toc_menu").length) return false;

        if (jQuery(JSINFO.bootstrap3.toc).length) {
            jQuery("#dw__toc_menu").removeClass("hide");
        }

        jQuery.each(JSINFO.bootstrap3.toc, function (idx, item) {

            var indent = "";

            if (item.level > 1) {
                for (var i = 0; i <= item.level; i++) {
                    indent += "&nbsp;&nbsp;"
                }
            }

            jQuery("#dw__toc_menu ul").append(['<li><a class="small" href="', item.link, '">', indent, item.title, '</a></li>'].join(''));

        });

    },

    toc: function () {

        var $dw_toc = jQuery('#dw__toc');
        if (!$dw_toc.length) return false;

        // Set TOC Affix
        if (JSINFO.bootstrap3.config.tocAffix) {
            $dw_toc.affix({
                offset: {
                    top: (jQuery("#dokuwiki__content").position().top),
                    bottom: (jQuery(document).height() - jQuery("#dokuwiki__content").height()),
                }
            });
        }

        // ScrollSpy
        var scrollspy_target = '#dw__toc';

        if (JSINFO.bootstrap3.config.tocLayout == 'navbar') {
            scrollspy_target = '#dw__navbar_items';
        }

        jQuery('body').scrollspy({
            target: scrollspy_target,
            offset: ((parseInt(jQuery('body').css('marginTop')) || 0) + 10),
        });

        dw_template.tocResize();

        if (mediaSize('xs')) {
            dw_template.tocClose();
        }

        $dw_toc.css('backgroundColor', jQuery('article > .panel').css('backgroundColor'));
        $dw_toc.find('a').css('color', jQuery('body').css('color'));

        if (JSINFO.bootstrap3.config.tocCollapseOnScroll && JSINFO.bootstrap3.config.tocAffix) {

            $dw_toc.on('affix.bs.affix', function () {
                dw_template.tocClose();
            });

            if (!JSINFO.bootstrap3.config.tocCollapsed) {
                $dw_toc.on('affix-top.bs.affix', function () {
                    dw_template.tocOpen();
                });
            }

        }

        $dw_toc.find('.toc-title').on('click', function () {

            jQuery('.dw-content-page').toggleClass('dw-toc-closed');

            if (jQuery('.dw-toc').hasClass('dw-toc-bootstrap')) {
                if (jQuery('.dw-content-page').hasClass('dw-toc-closed')) {
                    jQuery('.dw-toc').removeClass('col-md-3');
                    jQuery('.dw-content-page').removeClass('col-md-9').addClass('col-md-12');
                } else {
                    jQuery('.dw-toc').addClass('col-md-3');
                    jQuery('.dw-content-page').removeClass('col-md-12').addClass('col-md-9');
                    dw_template.tocResize();
                }
            }

            if (!jQuery('.dw-toc-closed').length) {
                dw_template.tocResize();
            }

        });

        if ((jQuery(window).height() < $dw_toc.height())) {
            dw_template.tocResize();
        }

    },

    // Add typeahead support for quick seach
    typeahead: function () {

        jQuery("#qsearch").typeahead({

            source: function (query, process) {

                return jQuery.post(DOKU_BASE + 'lib/exe/ajax.php',
                    {
                        call: 'qsearch',
                        q: encodeURI(query)
                    },
                    function (data) {

                        var results = [];

                        jQuery(data).find('a').each(function () {

                            var page = jQuery(this);

                            results.push({
                                name: page.text(),
                                href: page.attr('href'),
                                title: page.attr('title'),
                                category: page.attr('title').replace(/:/g, ' » '),
                            });

                        });

                        return process(results);

                    });
            },

            itemLink: function (item) {
                return item.href;
            },

            itemTitle: function (item) {
                return item.title;
            },

            followLinkOnSelect: true,
            autoSelect: false,
            items: 50,
            fitToElement: true,
            delay: 500,

        });
    },

    // Replace all OOTB DokuWiki toolbar icon with Material Design Icons
    toolbarIcons: function () {

        if (typeof window.toolbar === 'undefined') return false;
        if (!JSINFO.bootstrap3.config.useAlternativeToolbarIcons) return false;

        var icons = {
            'bold.png': 'format-bold.svg',
            'chars.png': 'omega.svg',
            'h.png': 'format-header-pound.svg',
            'h1.png': 'format-header-1.svg',
            'hequal.png': 'format-header-equal.svg',
            'hminus.png': 'format-header-decrease.svg',
            'hplus.png': 'format-header-increase.svg',
            'hr.png': 'minus.svg', // ??
            'image.png': 'image.svg',
            'italic.png': 'format-italic.svg',
            'link.png': 'link.svg',
            'linkextern.png': 'link-variant.svg', // ??
            'mono.png': 'format-title.svg',
            'ol.png': 'format-list-numbered.svg',
            'sig.png': 'signature.svg',
            'smiley.png': 'emoticon-outline.svg',
            'strike.png': 'format-strikethrough.svg',
            'ul.png': 'format-list-bulleted.svg',
            'underline.png': 'format-underline.svg',

        };

        for (var i in window.toolbar) {

            // Replace all icons in "H(eaders)" picker
            if (window.toolbar[i].icon == 'h.png') {
                for (var x in window.toolbar[i].list) {
                    var hn = parseInt(x) + 1;
                    window.toolbar[i].list[x].icon = '../../tpl/bootstrap3/iconify.php?icon=mdi-format-header-' + hn + '.svg';
                }
            }

            for (var icon in icons) {
                if (window.toolbar[i].icon == icon) {
                    window.toolbar[i].icon = '../../tpl/bootstrap3/iconify.php?icon=mdi-' + icons[icon];
                }
            }

        }

    },

    // Display confirm dialog on page restore action
    pageRestoreConfirm: function () {
        jQuery('li.action a.revert').on('click',
            function () {
                return confirm(LANG.restore_confirm);
            }
        );
    },

    menuitem: function () {
        jQuery('.menuitem.help').on('click', function () {
            var $self = jQuery(this);
            jQuery('.modal.help .modal-title').html($self.attr('title'));
            jQuery('.modal.help .modal-body').load($self.data('link'));
        });
        jQuery('.menuitem.printpage').on('click', function () {
            window.print();
        });
    },


    plugins: function () {
        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// CSV Plugin

var $csv = jQuery('table tbody tr.row0 th.col0');

if ($csv.length) {

    $csv.each(function () {
        var $table = jQuery(this).parents('table');
        if ($table.find('tr.row1 th').length == 0) {
            $table.prepend('<thead/>');
            var $header = $table.find('tr.row0');
            $table.find('thead').append($header);
        }
    });

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Data Plugin

var $dataplugin_entry = jQuery('.dataplugin_entry'),
    $dataplugin_table = jQuery('.dataplugin_table');

// Data Plugin: Entry
if ($dataplugin_entry.length) {
    $dataplugin_entry.find('dl').addClass('panel panel-default');
}


// Data Plugin: Table
if ($dataplugin_table.length) {

    $dataplugin_table.find('input').addClass('input-sm');

    var $header = $dataplugin_table.find('th[style]'),
        $inputs = $dataplugin_table.find('th input'),
        header_width = [],
        i = 0;

    $header.each(function () {
        header_width.push(this.style.width);
    });

    $inputs.each(function () {
        this.style.width = header_width[i];
        i++;
    });

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Database2 Plugin

var $database2 = jQuery('table.database2, table.database2-single-editor');

if ($database2.length) {
    $database2.find('.label').removeClass('label').addClass('database2-label');
    $database2.find('input[type="submit"]:first').addClass('btn-success');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// DataTables Plugin

var $datatables = jQuery('.dt-wrapper');

if ($datatables.length) {
    $datatables.find('.table-responsive').removeClass('table-responsive');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// DAVCal Plugin

var $davcal = jQuery('#fullCalendar');

if ($davcal.length) {
    $davcal.find('.fc-button-group').addClass('btn-group');
}

var $davcard_table = jQuery('.davcardAddressbookTable');

if ($davcard_table.length) {
    $davcard_table.addClass('table');
}

var $davcard_add_btn = jQuery('a.davcardAddressbookAddNew');

if ($davcard_add_btn.length) {
    $davcard_add_btn.prepend(jQuery('<span class="iconify mr-2" data-icon="mdi:account-plus"/>'));
    $davcard_add_btn.addClass('btn btn-xs btn-primary');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Discussion plugin

var $discussion = jQuery('.comment_wrapper');

if ($discussion.length) {

    $discussion.find('h2').addClass('page-header');
    $discussion.find('.comment_buttons').addClass('text-right');
    $discussion.find('#discussion__section').prepend('<span class="iconify mr-2" data-icon="mdi:comment-text-multiple"/>');

    $discussion.find('.hentry').addClass('panel panel-default');
    $discussion.find('.hentry .comment_head').addClass('panel-heading');
    $discussion.find('.hentry .comment_body').addClass('panel-body');
    $discussion.find('.toolbar').addClass('btn-group');
    $discussion.find('.comment_buttons [type=submit]').addClass('btn-xs');
    $discussion.find('.comment_buttons .discussion__delete .btn').addClass('btn-danger');
    $discussion.find('.comment_buttons .discussion__reply .btn').addClass('btn-success');
    $discussion.find('#discussion__btn_submit').addClass('btn-success');

    jQuery(document).bind('DOMNodeInserted', function () {
        $discussion.find('.toolbutton').addClass('btn btn-xs');
    });

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Explain Plugin

var $explain = jQuery('.explain');

if ($explain.length) {

    $explain.each(function () {

        var $self = jQuery(this),
            $tooltip = $self.find('.tooltip');

        $self.attr({
            'data-toggle': 'tooltip',
            'data-placement': 'bottom',
            'title': $tooltip.html(),
        }).addClass('wikilink1').removeClass('explain');

        $tooltip.remove();

    });

    jQuery('[data-toggle="tooltip"]').tooltip();

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Folded Plugin

var $folded = jQuery('.fold_unfold_all_new');

if ($folded.length) {
    $folded.addClass('menuitem');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Gallery Plugin (Media Manager)

if (dw_mode('media')) {
    jQuery(document).ajaxSuccess(function () {
        jQuery('.mode_media .meta .row').removeClass('row');
    });
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Include Plugin

var $include_readmore = jQuery('.include_readmore');

// Include Plugin (Read More)
if ($include_readmore.length) {
    $include_readmore.find('a').addClass('btn btn-default btn-xs');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// InlineTOC Plugin

var $toc = jQuery('#dw__toc, #dokuwiki__toc'),  // DokuWiki TOC
    $toc2 = jQuery('div.inlinetoc2');            // InlineTOC Plugin

// InlineTOC Plugin
if ($toc2.length && $toc.length) {
    $toc.css('display', 'none');
    $toc2.addClass('panel panel-default');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Monthcal Plugin

var $monthcal = jQuery('table.monthcal');

if ($monthcal.length) {
    $monthcal.addClass('table');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Move Plugin

jQuery(document).on('bootstrap3:plugin-move', function (event) {

    if (!jQuery('#plugin_move__tree').length) return false;

    // console.debug(event.type + ' event fired');

    setTimeout(function () {

        var $directories = jQuery('li.type-d a.idx_dir'),
            $pages = jQuery('li.type-f a.wikilink1');

        jQuery.each($directories, function () {

            var $directory = jQuery(this),
                $closed = $directory.parents('.closed'),
                $open = $directory.parents('.open');

            if (!$directory.find('svg').length) {
                $directory.prepend(Iconify.getSVG('mdi:folder'));
            }

            if ($open.length) {
                $directory.find('svg').replaceWith(Iconify.getSVG('mdi:folder-open'));
            }

            if ($closed.length) {
                $directory.find('svg').replaceWith(Iconify.getSVG('mdi:folder'));
            }

            $directory.find('svg').addClass('iconify text-primary mr-2');

        });

        jQuery.each($pages, function () {

            var $page = jQuery(this);

            if (!$page.find('svg').length) {
                $page.prepend(Iconify.getSVG('mdi:file-document-outline'));
            }
            $page.find('svg').addClass('text-muted mr-2');

        });

    }, 0);

});

jQuery('#plugin_move__tree a').click(function (e) {
    dw_template.modeIndex();
});

jQuery(document).trigger('bootstrap3:plugin-move');

jQuery(document).ajaxSuccess(function (e) {
    jQuery(document).trigger('bootstrap3:plugin-move');
});

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Overlay Plugin
var $overlay = jQuery('#overlay');

if ($overlay.length) {

    $overlay.addClass('panel panel-default small');

    $overlay.css('border', jQuery('.panel').css('border'));
    $overlay.css('background', jQuery('.panel').css('background'));

    var $title = $overlay.find('.close'),
        $btn = $title.find('a');

    $btn.wrapAll('<ul class="text-right list-inline dw-action-icon" />');
    $btn.wrap('<li/>');
    $btn.addClass('text-muted');

    $title.nextAll().wrapAll('<div class="panel-body" />');
    $title.removeClass('close').addClass('panel-heading');

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// PlantUML Parser Plugin

var $plant_uml = jQuery('div[id^="plant-uml-diagram"] svg');

if ($plant_uml.length) {
    $plant_uml.addClass('img-responsive');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Publish Plugin

var $publish = jQuery('.approval');

if ($publish.length) {

    $publish.prependTo('.page');

    $publish.removeClass('approval').addClass('alert');

    jQuery('.apr_table').removeClass('table-striped');

    if ($publish.hasClass('approved_no')) {
        $publish.removeClass('approved_no')
            .addClass('alert-warning')
            .prepend('<span class="iconify mr-2" data-icon="mdi:information"/>');
    }
    if ($publish.hasClass('approved_yes')) {
        $publish.removeClass('approved_yes')
            .addClass('alert-success')
            .prepend('<span class="iconify mr-2" data-icon="mdi:check-circle"/>');
    }

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Semantic Plugin

var $wikilinks = jQuery('article .wikilink1');

if (typeof JSINFO.plugin === 'undefined') {
    JSINFO.plugin = {};
}

if (typeof JSINFO.plugin.semantic === 'undefined') {
    JSINFO.plugin.semantic = {};
}

if ($wikilinks.length
    && JSINFO.plugin.semantic.exposeWebService
    && JSINFO.bootstrap3.config.showSemanticPopup) {

    $wikilinks.hover(function () {

        $wikilinks.popover('destroy');

        var $wikilink = jQuery(this),
            page_id = $wikilink.attr('title');

        // Disable popup for linked tabs/navs items (Bootstrap Wrapper Plugin)
        if ($wikilink.parents('.bs-wrap-nav').length) {
            return false;
        }

        if (!page_id) return false;
        if (page_id == JSINFO.id) return false; // Self

        jQuery.get(
            DOKU_BASE + 'doku.php',
            {
                id: page_id,
                do: 'export_xhtmlsummary'
            },
            function (data) {

                var content = '<div class="popover-xhtmlsummary">'
                    + '  <div class="popover-body">' + data + '</div>'
                    + '  <div class="popover-footer text-right">'
                    + '    <a class="btn btn-xs btn-primary" href="' + $wikilink.attr('href') + '">' + page_id + '</a>'
                    + '  </div>'
                    + '</div>';

                $wikilink.popover({
                    trigger: 'manual',
                    html: true,
                    title: page_id,
                    content: content,
                    placement: 'auto left',
                }).popover('show');

                $wikilink.attr('title', page_id);

            }
        );

        // jQuery.post(
        //   DOKU_BASE + 'lib/exe/ajax.php',
        //   { call: 'plugin_semantic', id: page_id },
        //   function(data) {

        //     var jsonld = data[0];

        //     if (! (jsonld.headline && jsonld.description)) return false;

        //     $wikilink.data('original-title', page_id);
        //     $wikilink.attr('title', '');

        //     var title       = jsonld.headline;
        //     var image       = ('image' in jsonld) ? [ '<img src="', jsonld.image.url, '" alt="" class="img-responsive" /><br/>' ].join('') : '';
        //     var description = jQuery.trim(jsonld.description.replace(/\t\*$/, ''))
        //                         .replace(/\*(.*)/g, '<span class="iconify mr-2" data-icon="mdi:circle"></span> $1')
        //                         .replace(/\n/g, "<br/>\n")
        //                         .replace(/\t/g, '&nbsp;');

        //     var content = [ '<div class="row small"><div class="col-md-12">', image, description, ' ... </div></div>' ].join('');

        //     $wikilink.popover({
        //       trigger   : 'manual',
        //       html      : true,
        //       title     : title,
        //       content   : content,
        //       placement : 'auto left',
        //     }).popover('show');

        //     $wikilink.attr('title', page_id);

        //   });

    }, function () {

        var self = this;

        setTimeout(function () {
            if (jQuery(self).next('.popover').length && !jQuery(self).next('.popover:hover').length) {
                jQuery(self).popover('destroy');
            }
        }, 300);

    });

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Simple Navi Plugin

var $simplenavi = jQuery('.plugin__simplenavi');

if ($simplenavi.length) {

    $simplenavi.find('li').addClass('mt-1');
    $simplenavi.find('a.wikilink2').removeClass('wikilink2');
    $simplenavi.find('li.open strong').contents().unwrap();
    $simplenavi.find('li.closed a').prepend('<span class="iconify mr-2" data-icon="mdi:folder"/>');
    $simplenavi.find('li.open > a').prepend('<span class="iconify mr-2" data-icon="mdi:folder-open"/>');
    $simplenavi.find('li').not('.closed').not('.open').find('a').prepend('<span class="iconify mr-2" data-icon="mdi:file-document-outline"/>');

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Struct Plugin

if (dw_admin('struct_schemas') || dw_admin('struct_assignments')) {
    // Display all elements in TOC
    jQuery('.toc-body .toc').addClass('show');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Tabbox plugin

setTimeout(function () {
    jQuery('.plugin_tabbox').each(function () {
        var $self = jQuery(this);
        $self.find('> ul.tabs').addClass('nav nav-tabs').css('max-height', '40px');
    });
}, 500);

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Tagalerts plugin

jQuery('.tagerror, .taginfo, .tagsuccess, .tagnotify').each(function () {

    var $node = jQuery(this);

    if ($node.prop('nodeName').toLowerCase() == 'div') {

        $node.removeClass('label label-default').addClass('alert');
        $node.prependTo('#dw__msgarea');

        if ($node.hasClass('tagerror')) $node.removeClass('tagerror').addClass('alert-danger');
        if ($node.hasClass('taginfo')) $node.removeClass('taginfo').addClass('alert-info');
        if ($node.hasClass('tagsuccess')) $node.removeClass('tagsuccess').addClass('alert-success');
        if ($node.hasClass('tagnotify')) $node.removeClass('tagnotify').addClass('alert-warning');

    } else {

        if ($node.hasClass('tagerror')) $node.removeClass('tagerror').addClass('label-danger');
        if ($node.hasClass('taginfo')) $node.removeClass('taginfo').addClass('label-info');
        if ($node.hasClass('tagsuccess')) $node.removeClass('tagsuccess').addClass('label-success');
        if ($node.hasClass('tagnotify')) $node.removeClass('tagnotify').addClass('label-warning');

    }

});

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Tagging plugin
var $tagging_edit = jQuery('.plugin_tagging_edit');

if ($tagging_edit.length) {
    $tagging_edit.find(':submit').addClass('btn btn-default btn-xs');
    $tagging_edit.find('[type=text]').addClass('input-sm');
    $tagging_edit.find('#tagging__edit_save').addClass('btn-success');
}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Translation Plugin
var $translation = jQuery('#dw__translation');

if ($translation.length) {

    var $current = $translation.find('.cur'),
        $lang = $current.text(),
        $iso = $lang.match(/\(([a-z]*)\)/),
        $flag = $current.find('img');

    $current.parent().addClass('active');
    $translation.find('.wikilink2').removeClass('wikilink2').css('opacity', '0.5');

    if ($flag.length) {
        $translation.find('.dropdown-toggle .iconify').hide();
        $translation.find('.dropdown-toggle').prepend(
            jQuery('<img/>').attr({
                'src': $flag.attr('src'),
                'title': $flag.attr('title')
            }));
    }

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Wrap Plugin

var $wrap = jQuery('.plugin_wrap');

if ($wrap.length) {

    if ($wrap.hasClass('tabs')) {
        var $tabs = jQuery('.plugin_wrap.tabs');
        $tabs.find('div.li').contents().unwrap();
        $tabs.find('.curid').parent().addClass('active');
        $tabs.find('ul').addClass('nav nav-tabs');
    }

}

        /*
 * DokuWiki Bootstrap3 Template: Plugins Hacks!
 *
 * Home     http://dokuwiki.org/template:bootstrap3
 * Author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * License  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// Watchcycle Plugin
jQuery('#plugin__watchcycle_admin table').addClass('table table-striped');

    },
};

dw_template.toolbarIcons();
dw_template.jQueryUI();

jQuery(dw_template.init);



/* XXXXXXXXXX end of lib/tpl/bootstrap3/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/acl/script.js XXXXXXXXXX */

/**
 * ACL Manager AJAX enhancements
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
var dw_acl = {
    /**
     * Initialize the object and attach the event handlers
     */
    init: function () {
        var $tree;

        //FIXME only one underscore!!
        if (jQuery('#acl_manager').length === 0) {
            return;
        }

        jQuery('#acl__user select').on('change', dw_acl.userselhandler);
        jQuery('#acl__user button').on('click', dw_acl.loadinfo);

        $tree = jQuery('#acl__tree');
        $tree.dw_tree({toggle_selector: 'img',
                       load_data: function (show_sublist, $clicky) {
                           // get the enclosed link and the edit form
                           var $frm = jQuery('#acl__detail form');

                           jQuery.post(
                               DOKU_BASE + 'lib/exe/ajax.php',
                               jQuery.extend(dw_acl.parseatt($clicky.parent().find('a')[0].search),
                                             {call: 'plugin_acl',
                                              ajax: 'tree',
                                              current_ns: $frm.find('input[name=ns]').val(),
                                              current_id: $frm.find('input[name=id]').val()}),
                               show_sublist,
                               'html'
                           );
                       },

                       toggle_display: function ($clicky, opening) {
                           $clicky.attr('src',
                                        DOKU_BASE + 'lib/images/' +
                                        (opening ? 'minus' : 'plus') + '.gif');
                       }});
        $tree.delegate('a', 'click', dw_acl.treehandler);
    },

    /**
     * Handle user dropdown
     *
     * Hides or shows the user/group entry box depending on what was selected in the
     * dropdown element
     */
    userselhandler: function () {
        // make entry field visible/invisible
        jQuery('#acl__user input').toggle(this.value === '__g__' ||
                                          this.value === '__u__');
        dw_acl.loadinfo();
    },

    /**
     * Load the current permission info and edit form
     */
    loadinfo: function () {
        jQuery('#acl__info')
            .attr('role', 'alert')
            .html('<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="..." />')
            .load(
                DOKU_BASE + 'lib/exe/ajax.php',
                jQuery('#acl__detail form').serialize() + '&call=plugin_acl&ajax=info'
            );
        return false;
    },

    /**
     * parse URL attributes into a associative array
     *
     * @todo put into global script lib?
     */
    parseatt: function (str) {
        if (str[0] === '?') {
            str = str.substr(1);
        }
        var attributes = {};
        var all = str.split('&');
        for (var i = 0; i < all.length; i++) {
            var att = all[i].split('=');
            attributes[att[0]] = decodeURIComponent(att[1]);
        }
        return attributes;
    },

    /**
     * Handles clicks to the tree nodes
     */
    treehandler: function () {
        var $link, $frm;

        $link = jQuery(this);

            // remove highlighting
            jQuery('#acl__tree a.cur').removeClass('cur');

            // add new highlighting
        $link.addClass('cur');

            // set new page to detail form
        $frm = jQuery('#acl__detail form');
        if ($link.hasClass('wikilink1')) {
            $frm.find('input[name=ns]').val('');
            $frm.find('input[name=id]').val(dw_acl.parseatt($link[0].search).id);
        } else if ($link.hasClass('idx_dir')) {
            $frm.find('input[name=ns]').val(dw_acl.parseatt($link[0].search).ns);
            $frm.find('input[name=id]').val('');
            }
        dw_acl.loadinfo();

        return false;
    }
};

jQuery(dw_acl.init);



/* XXXXXXXXXX end of lib/plugins/acl/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/catlist/script.js XXXXXXXXXX */

/**
 * Js for plugin catlist
 * Adding pages
 *
 * @license   MIT
 * @author    Félix Faisant <xcodexif@xif.fr>
 *
 */

function catlist_button_add_page (element, ns) {
	var addPageForm = element.parentNode;
	addPageForm.innerHTML = "";
	var addPageLabel = document.createElement('label');
	addPageLabel.innerHTML = ns;
	var addPageInput = document.createElement('input');
	addPageInput.type = 'text';
	addPageInput.id = 'catlist_addpage_id';
	addPageInput.onkeyup = function (evt) {
		var key = evt.keyCode || evt.which;
		if (key == 13) 
			jQuery('#catlist_addpage_btn').click();
	};
	addPageLabel.htmlFor = 'catlist_addpage_id';
	var addPageValidButton = document.createElement('button');
	addPageValidButton.className = 'button';
	addPageValidButton.innerHTML = "Ok";
	addPageValidButton.id = 'catlist_addpage_btn';
	jQuery(addPageForm).append(addPageLabel).append(addPageInput).append(addPageValidButton);
	addPageInput.focus();
	jQuery(addPageValidButton).click(function(){
		if (addPageInput.value.length == 0) {
			addPageInput.focus();
			return;
		}
		var pagename = addPageInput.value;
		if (catlist_pagename_sanitize) {
			if (catlist_deaccent == 0) {
				pagename = encodeURI(pagename)
				          .replace(/[^a-zA-Z0-9._:%-]+/g, catlist_sepchar)  // transforms characters not allowed as pagename in `catlist_sepchar`
				          .replace(/%(?![A-Fa-f0-9]{2})/, catlist_sepchar); // replace "%" if it is not the part of an URL encoded character
			} else {
				if (typeof String.prototype.normalize === "function")
				pagename = pagename.normalize('NFD')
				                   .replace(/[\u0300-\u036f]/g, ""); // eliminates diacritics
				pagename = pagename.replace(/[^a-zA-Z0-9._:-]+/g, catlist_sepchar);
			}
			pagename = pagename.replace(/^[._-]+/, "") // eliminates '.', '_' and '-' at the beginning and end
			                   .replace(/[._-]+$/, "")
			                   .replace(new RegExp(catlist_sepchar+'{2,}','g'), catlist_sepchar) // squash multiple sepchars into one
			                   .toLowerCase();
		}
		var newPageID = ns + pagename;
		if (catlist_useslash && catlist_userewrite != 0) {
			newPageID = newPageID.replace(/:/g, '/');
		}
		switch (catlist_userewrite) {
			case 0: 
				newPageURL = catlist_baseurl + catlist_basescript + '?id=' + newPageID + '&do=edit'; break;
			case 1:
				newPageURL = catlist_baseurl + newPageID + '?do=edit'; break;
			case 2:
				newPageURL = catlist_baseurl + catlist_basescript + '/' + newPageID + '?do=edit'; break;
		}
		window.location.href = newPageURL;
	});
}



/* XXXXXXXXXX end of lib/plugins/catlist/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/color/script.js XXXXXXXXXX */

/* JavaScript function to create color toolbar in Dokuwiki */
/* see http://www.dokuwiki.org/plugin:color for more info */

color_icobase = "../../plugins/color/images/";

if(window.toolbar != undefined) {
  toolbar[toolbar.length] = {
    "type":"picker",
    "title":"Color Text",
    "icon":color_icobase+"toolbar_icon.png",
    "list":[{
      "type":"format",
      "title":"Gray Colored Text",
      "icon":color_icobase+"picker_light_gray.png",
      "open":"<color #c3c3c3>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Rose Highlighted Text",
      "icon":color_icobase+"picker_rose.png",
      "open":"<color #ffaec9>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Red Highlighted Text",
      "icon":color_icobase+"picker_red.png",
      "open":"<color #ed1c24>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Orange Highlighted Text",
      "icon":color_icobase+"picker_orange.png",
      "open":"<color #ff7f27>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Gold Highlighted Text",
      "icon":color_icobase+"picker_gold.png",
      "open":"<color #ffc90e>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Yellow Highlighted Text",
      "icon":color_icobase+"picker_yellow.png",
      "open":"<color #fff200>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Light Yellow Highlighted Text",
      "icon":color_icobase+"picker_light_yellow.png",
      "open":"<color #efe4B0>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Green Highlighted Text",
      "icon":color_icobase+"picker_green.png",
      "open":"<color #22b14c>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Lime Highlighted Text",
      "icon":color_icobase+"picker_lime.png",
      "open":"<color #b5e61d>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Turquoise Highlighted Text",
      "icon":color_icobase+"picker_turquoise.png",
      "open":"<color #00a2e8>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Light Turquoise Highlighted Text",
      "icon":color_icobase+"picker_light_turquoise.png",
      "open":"<color #99d9ea>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Blue-Gray Highlighted Text",
      "icon":color_icobase+"picker_blue_gray.png",
      "open":"<color #7092be>",
      "close":"</color>"
    }, {
      "type":"format",
      "title":"Lavender Highlighted Text",
      "icon":color_icobase+"picker_lavender.png",
      "open":"<color #c8bfe7>",
      "close":"</color>"
    }]
  };
}


/* XXXXXXXXXX end of lib/plugins/color/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/commentsyntax/script.js XXXXXXXXXX */

/*
 * Comment Syntax plugin for DokuWiki
 * a toolbar button action to toggle encomment/uncomment selected text
 *
 * @license    GPL 2 (http://www.gnu.org/licenses/gpl.html)
 * @author     Satoshi Sahara <sahara.satoshi@gmail.com>
 */
function addBtnActionToggleCommentBlock(btn, props, edid) {

    jQuery(btn).click(function(){
        var comment = '';
        var selection = DWgetSelection(document.getElementById('wiki__text'));
        if (selection.getLength()) {
            comment = selection.getText();
            prevchar = selection.obj.value.substring(selection.start-1,selection.start);
            nextchar = selection.obj.value.substring(selection.end,selection.end+1);
            lastchar = comment.substr(-1,1);
            if (!prevchar) prevchar = "\n";
            if (!nextchar) nextchar = "\n";
        }
        if (comment == '') {
            alert('no text selected');
            return false;
        }

        if (comment.match(/^\s*\/\*/) && comment.match(/\*\/\s*$/)) {
            // uncomment action
            if (prevchar == "\n") {
                comment = comment.replace(/^ *\/\*+ *\n?/,''); // uncomment left
            } else {
                comment = comment.replace(/^ *\/\*+ */,'');
            }
            comment = comment.replace(/ *\*+\/\s*$/,'');   // uncomment right
            document.getElementById('wiki__text').focus();
            pasteText(selection, comment);

        } else {
            // encomment action
            if (prevchar == "\n" && lastchar == "\n") {
                // Line selected
                comment = "/*\n" + comment + " */\n";
            } else {
                if (comment.match(/^\n/)) {
                    comment = comment.replace(/^\n?/,"/*\n");
                    comment = comment + " */";
                } else {
                    comment = "/* " + comment + " */";
                }
                if (!(prevchar.match(/\s/))) { comment = " " + comment; }
                if (!(nextchar.match(/\s/))) { comment = comment + " "; }
            }
            document.getElementById('wiki__text').focus();
            pasteText(selection, comment);
        }
        return true;
    });
    return false;
}



/* XXXXXXXXXX end of lib/plugins/commentsyntax/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/extension/script.js XXXXXXXXXX */

jQuery(function(){

    var $extmgr = jQuery('#extension__manager');

    /**
     * Confirm uninstalling
     */
    $extmgr.find('button.uninstall').on('click', function(e){
        if(!window.confirm(LANG.plugins.extension.reallydel)){
            e.preventDefault();
            return false;
        }
        return true;
    });

    /**
     * very simple lightbox
     * @link http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/super-simple-lightbox-with-css-and-jquery/
     */
    $extmgr.find('a.extension_screenshot').on('click', function(e) {
        e.preventDefault();

        //Get clicked link href
        var image_href = jQuery(this).attr("href");

        // create lightbox if needed
        var $lightbox = jQuery('#plugin__extensionlightbox');
        if(!$lightbox.length){
            $lightbox = jQuery('<div id="plugin__extensionlightbox"><p>Click to close</p><div></div></div>')
                .appendTo(jQuery('body'))
                .hide()
                .on('click', function(){
                    $lightbox.hide();
                });
        }

        // fill and show it
        $lightbox
            .show()
            .find('div').html('<img src="' + image_href + '" />');


        return false;
    });

    /**
     * Enable/Disable extension via AJAX
     */
    $extmgr.find('button.disable, button.enable').on('click', function (e) {
        e.preventDefault();
        var $btn = jQuery(this);

        // get current state
        var extension = $btn.attr('name').split('[')[2];
        extension = extension.substr(0, extension.length - 1);
        var act = ($btn.hasClass('disable')) ? 'disable' : 'enable';

        // disable while we wait
        $btn.attr('disabled', 'disabled');
        $btn.css('cursor', 'wait');

        // execute
        jQuery.get(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_extension',
                ext: extension,
                act: act,
                sectok: $btn.parents('form').find('input[name=sectok]').val()
            },
            function (data) {
                $btn.css('cursor', '')
                    .removeAttr('disabled')
                    .removeClass('disable')
                    .removeClass('enable')
                    .text(data.label)
                    .addClass(data.reverse)
                    .parents('li')
                    .removeClass('disabled')
                    .removeClass('enabled')
                    .addClass(data.state);
            }
        ).fail(function() {
            $btn.css('cursor', '')
                .removeAttr('disabled');
        });
    });

    /**
     * AJAX detail infos
     */
    $extmgr.find('a.info').on('click', function(e){
        e.preventDefault();

        var $link = jQuery(this);
        var $details = $link.parent().find('dl.details');
        if($details.length){
            $link.toggleClass('close');
            $details.toggle();
            return;
        }

        $link.addClass('close');
        jQuery.get(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_extension',
                ext: $link.data('extid'),
                act: 'info'
            },
            function(data){
                $link.parent().append(data);
            }
        );
    });

    /**
        Create section for enabling/disabling viewing options
     */
    if ( $extmgr.find('.plugins, .templates').hasClass('active') ) {
        var $extlist = jQuery('#extension__list');
        $extlist.addClass('hasDisplayOptions');

        var $displayOpts = jQuery('<p>', { id: 'extension__viewoptions'} ).appendTo($extmgr.find( '.panelHeader' ));
        $displayOpts.append(LANG.plugins.extension.display_viewoptions);

        var displayOptionsHandler = function(){
            $extlist.toggleClass( this.name );
            DokuCookie.setValue('ext_'+this.name, $extlist.hasClass(this.name) ? '1' : '0');
        };

        jQuery(['enabled', 'disabled', 'updatable']).each(function(index, chkName){
            var $label = jQuery( '<label></label>' )
                .appendTo($displayOpts);
            var $input = jQuery( '<input />', { type: 'checkbox', name: chkName })
                .on('change', displayOptionsHandler)
                .appendTo($label);

            var previous = DokuCookie.getValue('ext_'+chkName);
            if(typeof previous === "undefined" || previous == '1') {
                $input.trigger('click');
            }

            jQuery( '<span/>' )
                .append(' '+LANG.plugins.extension['display_'+chkName])
                .appendTo($label);
        });
    }
});



/* XXXXXXXXXX end of lib/plugins/extension/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/googleanalytics/script.js XXXXXXXXXX */

/**
 * Set up Google analytics
 *
 * All configuration is done in the JSINFO.ga object initialized in
 * action.php
 */
if (JSINFO.ga) {
    if (JSINFO.ga.gtagId) {
        /* Global site tag (gtag.js) - Google Analytics */

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + JSINFO.ga.gtagId;

        document.body.appendChild(script);

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', JSINFO.ga.gtagId);
    } else {
        /* default google tracking initialization */
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            //noinspection CommaExpressionJS
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            //noinspection CommaExpressionJS
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        // initalize and set options
        ga('create', JSINFO.ga.trackingId, 'auto', JSINFO.ga.options);
        ga('set', 'forceSSL', true);
        ga('set', 'anonymizeIp', JSINFO.ga.anonymizeIp);

        // track pageview and action
        ga('set', 'dimension1', JSINFO.ga.action);
        ga('set', 'dimension2', JSINFO.ga.id);
        ga('send', 'pageview', JSINFO.ga.pageview);
        ga('send', 'event', 'wiki-action', JSINFO.ga.action, JSINFO.id, {
            nonInteraction: true // this is an automatic event with the page load
        });

        // The hit payload is also send to the console
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/tasks#overriding_a_task
        if (JSINFO.ga.debug) {

            ga(function(tracker) {

                // Grab a reference to the default sendHitTask function.
                var originalSendHitTask = tracker.get('sendHitTask');

                // Overwrite and add an output to the console
                tracker.set('sendHitTask', function(model) {
                    originalSendHitTask(model);
                    console.log("Doku Google Analytics Plugin Debug: Hit Payload: " + model.get('hitPayload'));
                });

            });

        }

        // track outgoing links, once the document was loaded
        if (JSINFO.ga.trackOutboundLinks) {

            jQuery(function() {
                // https://support.google.com/analytics/answer/1136920?hl=en
                jQuery('a.urlextern, a.interwiki').click(function() {
                    var url = this.href;
                    if (ga && ga.loaded) {
                        ga('send', 'event', 'outbound', 'click', url, {
                            'transport': 'beacon'
                        });
                    }
                });
            });

        }
    }
}


/* XXXXXXXXXX end of lib/plugins/googleanalytics/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/indexmenu/script.js XXXXXXXXXX */


// Context menu
var indexmenu_contextmenu = {'all': []};

/**
 * Javascript for index view
 *
 * @author Gerrit Uitslag <klapinklapin@gmail.com>
 */

jQuery(function () {

    jQuery('.indexmenu_nojs').each(function () {
        var $tree = jQuery(this);
        var jsajax = $tree.data('jsajax');

        $tree.dw_tree({
            toggle_selector: 'a.indexmenu_idx',
            load_data: function (show_sublist, $clicky) {

                jQuery.post(
                    DOKU_BASE + 'lib/exe/ajax.php',
                    'call=indexmenu&req=index&nojs=1&' + $clicky[0].search.substr(1) + '&max=1' + decodeURIComponent(jsajax),
                    show_sublist,
                    'html'
                );
            }
        });
    });

});
/**
 * The Indexmenu Wizard
 *
 * @author Gerrit Uitslag
 * based on Linkwiz by
 * @author Andreas Gohr <gohr@cosmocode.de>
 * @author Pierre Spring <pierre.spring@caillou.ch>
 * and the concepts of the old indexmenu wizard
 */
var indexmenu_wiz = {
    $wiz: null,
    timer: null,
    textArea: null,

    defaulttheme: 'default',
    fields: {
        div1: {
            elems: {
                js: {}
            }
        },
        div2: {
            tlbclass: 'js theme',
            elems: {
                el1: {headerid: 'theme'}
            }
        },
        div3: {
            elems: {
                el2: {headerid: 'navigation'},
                navbar: {},
                context: {},
                nocookie: {tlbclass: 'js'},
                noscroll: {tlbclass: 'js'},
                notoc: {tlbclass: 'js'}
            }
        },
        div4: {
            elems: {
                el3: {headerid: 'sort'},
                tsort: {},
                dsort: {},
                msort: {},
                hsort: {},
                rsort: {},
                nsort: {}
            }
        },
        div5: {
            elems: {
                el4: {headerid: 'filter'},
                nons: {},
                nopg: {}
            }
        },
        div6: {
            tlbclass: 'js',
            elems: {
                el5: {headerid: 'performance'},
                max: {tlbclass: 'js', number: ['maxn', 'maxm']},
                maxjs: {tlbclass: 'js', number: ['maxjsn']},
                id: {tlbclass: 'js', number: ['idn']}
            }
        }
    },

    /**
     * Initialize the indexmenu_wiz by creating the needed HTML
     * and attaching the eventhandlers
     */
    init: function($editor){
        // position relative to the text area
        var pos = $editor.position();

        // create HTML Structure
        indexmenu_wiz.$wiz = jQuery(document.createElement('div'))
            .dialog({
                autoOpen: false,
                draggable: true,
                title: LANG.plugins.indexmenu.indexmenuwizard,
                resizable: false
            })
            .html(
                '<fieldset class="index"><legend>'+LANG.plugins.indexmenu.index+'</legend>' +
                    '<div><label>'+LANG.plugins.indexmenu.namespace+'<input id="namespace" type="text"></label></div>' +
                    '<div><label class="number">'+LANG.plugins.indexmenu.nsdepth+' #<input id="nsdepth" type="text" value=1></label></div>' +
                '</fieldset>' +

                '<fieldset class="options"><legend>'+LANG.plugins.indexmenu.options+'</legend>' +
                '</fieldset>' +
                '<input type="submit" value="'+LANG.plugins.indexmenu.insert+'" class="button" id="indexmenu__insert">'+

                '<fieldset class="metanumber">' +
                    '<label class="number">'+LANG.plugins.indexmenu.metanum+'<input type="text" id="metanumber"></label>' +
                    '<input type="submit" value="'+LANG.plugins.indexmenu.insertmetanum+'" class="button" id="indexmenu__insertmetanum">' +
                '</fieldset>'
            )
            .parent()
            .attr('id','indexmenu__wiz')
            .css({
                'position':    'absolute',
                'top':         (pos.top+20)+'px',
                'left':        (pos.left+80)+'px'
            })
            .hide()
            .appendTo('.dokuwiki:first');

        indexmenu_wiz.textArea = $editor[0];
        var $opt_fieldset = jQuery('#indexmenu__wiz fieldset.options');

        jQuery.each(indexmenu_wiz.fields, function(i,section) {
            var div = jQuery('<div>').addClass(section.tlbclass);

            jQuery.each(section.elems, function(elid,props){
                if(props.headerid) {
                    div.append('<strong>'+LANG.plugins.indexmenu[props.headerid]+'</strong><br />');
                } else {
                    //checkbox
                    jQuery("<label>")
                        .addClass(props.tlbclass).addClass(props.number ? ' num':'')
                        .html('<input id="'+elid+'" type="checkbox">'+elid)
                        .attr({title: LANG.plugins.indexmenu[elid]})
                        .appendTo(div);

                    //number inputs
                    if(props.number) {
                        jQuery.each(props.number, function(j,numid){
                             jQuery("<label>")
                                .attr({title: LANG.plugins.indexmenu[elid]})
                                .addClass("number "+props.tlbclass )
                                .html('#<input type="text" id="'+numid+'">')
                                .appendTo(div);
                        });
                    }
                }
            });
            $opt_fieldset.append(div);
        });

        indexmenu_wiz.includeThemes();

        if(JSINFO && JSINFO.namespace){
            jQuery('#namespace').val(':'+JSINFO.namespace);
        }

        // attach event handlers

        //toggle js fields
        jQuery('#js')
            .change(function(){
                jQuery('#indexmenu__wiz .js').toggle(this.checked);
            }).change()
            .parent().css({display: 'inline-block', width: '40px'}); //enlarge clickable area of label

        //interactive number fields
        jQuery('label.number input').bind('keydown keyup', function(){
            //allow only numbers
            indexmenu_wiz.filterNumberinput(this);
            //checked the option if a number in input
            indexmenu_wiz.autoCheckboxForNumbers(this);
        });

        jQuery('#indexmenu__insert').click(indexmenu_wiz.insertIndexmenu);
        jQuery('#indexmenu__insertmetanum').click(indexmenu_wiz.insertMetaNumber);

        jQuery('#indexmenu__wiz').find('.ui-dialog-titlebar-close').click(indexmenu_wiz.hide);
    },

    /**
     * Request and include themes in wizard
     */
    includeThemes: function() {

        var addButtons = function(data) {
            var $themebar = jQuery('<div>')
                .attr('id','themebar')
                .addClass('toolbar')
                .appendTo('div.theme');

            jQuery.each(data.themes, function(i, theme){
                var themeName =theme.split('.');

                var $ico = jQuery('<div>')
                    .css({ background: 'url('+ DOKU_BASE + data.themebase + '/' + theme + '/base.' + IndexmenuUtils.determineExtension(theme)+') no-repeat center' });
                var $btn = jQuery('<button>')
                    .addClass('themebutton toolbutton')
                    .attr('id', theme)
                    .attr('title', themeName[0])
                    .append($ico)
                    .click(indexmenu_wiz.selectTheme)
                    .appendTo('div#themebar');
            });

            //select default theme
            jQuery('#themebar button#'+indexmenu_wiz.defaulttheme).click();
        };

        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            {call: 'indexmenu', req: 'local'},
            addButtons,
            'json'
        );
    },

    /**
     * set class 'selected' to clicked theme, remove from other
     */
    selectTheme: function(){
        jQuery('.themebutton').toggleClass('selected', false);
        jQuery(this).toggleClass('selected', true);
    },

    /**
     * Allow only number, by direct removing other characters from input
     */
    filterNumberinput: function(elem){
        if(elem.value.match(/\D/)) {
            elem.value=this.value.replace(/\D/g,'');
        }
    },

    /**
     * When a number larger than zero is inputted, check the checkbox
     */
    autoCheckboxForNumbers: function(elem){
        var checkboxid = elem.id.substr(0,elem.id.length-1);
        var value = elem.value;
        //exception for second number field of max: only uncheck when first field is also empty
        if(elem.id=='maxm' && !(elem.value>0)) {
            value = parseInt(jQuery('input#maxn').val());
        }
        jQuery('input#'+checkboxid).prop('checked', value>0 );
    },

    /**
     * Insert the indexmenu with options to the textarea,
     * replacing the current selection or at the cursor position.
     */
    insertIndexmenu: function(){
        var options = '';
        jQuery('fieldset.options input').each(function(i, input){
            var $label = jQuery(this).parent();

            if(input.checked && ( !$label.hasClass('js')||jQuery('input#js').is(':checked') )){
                //add option
                options += ' '+input.id;

                //add numbers
                if($label.hasClass('num')){
                    jQuery.each(indexmenu_wiz.fields.div6.elems[input.id].number, function(j,numid){
                        var num = parseInt(jQuery('input#'+numid).val());
                        options +=  num ? '#'+num : '';
                    });
                }
                //add theme
                if(input.id == 'js') {
                    var themename = jQuery('#themebar button.selected').attr('id');
                    if(indexmenu_wiz.defaulttheme !== themename) { //skip default theme
                        options += '#'+jQuery('#themebar button.selected').attr('id');
                    }

                }
            }

        });
        options = options ? '|'+jQuery.trim(options) : '';

        var sel, ns, depth, syntax, eo;
        
        // XXX: Compatibility Fix for 2014-05-05 "Ponder Stibbons", splitbrain/dokuwiki#505
        if(DWgetSelection) {
            sel = DWgetSelection(indexmenu_wiz.textArea);
        } else {
            sel = getSelection(indexmenu_wiz.textArea);
        }
        

        ns = jQuery('#namespace').val();
        depth = parseInt(jQuery('#nsdepth').val());
        depth = depth ? '#'+depth : '';

        syntax = '{{indexmenu>'+ns+depth+options+'}}';
        eo = depth.length + options.length + 2;

        pasteText(sel, syntax,{startofs: 12, endofs: eo});
        indexmenu_wiz.hide();
    },

    /**
     * Insert meta number for sorting in textarea
     * Takes number from input, otherwise tries the selection in textarea
     */
    insertMetaNumber: function(){
        var sel, selnum, syntax, number;

        // XXX: Compatibility Fix for 2014-05-05 "Ponder Stibbons", splitbrain/dokuwiki#505
        if(DWgetSelection) {
            sel = DWgetSelection(indexmenu_wiz.textArea);
        } else {
            sel = getSelection(indexmenu_wiz.textArea);
        }

        selnum = parseInt(sel.getText());
        number = parseInt(jQuery('input#metanumber').val());
        number = number || selnum || 1;
        syntax = '{{indexmenu_n>'+number+'}}';

        pasteText(sel, syntax,{startofs: 14, endofs: 2});
        indexmenu_wiz.hide();
    },

    /**
     * Show the indexmenu wizard
     */
    show: function(){
        // XXX: Compatibility Fix for 2014-05-05 "Ponder Stibbons", splitbrain/dokuwiki#505
        if(DWgetSelection) {
            indexmenu_wiz.selection = DWgetSelection(indexmenu_wiz.textArea);
        } else {
            indexmenu_wiz.selection = getSelection(indexmenu_wiz.textArea);
        }

        indexmenu_wiz.$wiz.show();
        jQuery('#namespace').focus();
    },

    /**
     * Hide the indexmenu wizard
     */
    hide: function(){
        indexmenu_wiz.$wiz.hide();
        indexmenu_wiz.textArea.focus();
    },

    /**
     * Toggle the indexmenu wizard
     */
    toggle: function(){
        if(indexmenu_wiz.$wiz.css('display') == 'none'){
            indexmenu_wiz.show();
        }else{
            indexmenu_wiz.hide();
        }
    }
};

/**
 * Right Context Menu configuration
 *
 * Some usefull variables:
 *   node.hns = headpage id;
 *   node.isdir = node is namespace;
 *   node.dokuid = the DW id (namespace parent in case of headpage);
 *   id = the DW id of the selected node (headpage id in case of headpage);
 *   index.config.urlbase = Url Base;
 *   index.config.sepchar = Url separator;
 *
 * HOWTO EDIT:
 *
 * To override menu entries or add a menu entry:
 *  - PLEASE EDIT ONLY the scripts/contextmenu.local.js file
 *  - DON'T EDIT this file, it is overwritten at plugin update
 *
 * Base structure of the context menu is displayed below.
 * The entries with 'pg' are shown for page noded, these with 'ns' only for namespaces.
 *
 * Current available for everybody:
 *   indexmenu_contextmenu['all']['pg']['view'] = [...array with menu description here... ];
 *   indexmenu_contextmenu['all']['pg']['edit'] = [ ... ];
 *   indexmenu_contextmenu['all']['ns']['view'] = [ ... ];
 *
 * Current available for admins:
 *   indexmenu_contextmenu['pg']['view'] = [ ... ];
 *   indexmenu_contextmenu['ns']['view'] = [ ... ];
 *
 * Current available for authenticated users:
 *   indexmenu_contextmenu['pg']['view'] = [ ... ];
 *   indexmenu_contextmenu['ns']['view'] = [ ... ];
 *
 * A menu description may contain four kind of entries:
 *  - section title: array with one entry e.g.:
 *      ['Section title (html allowed)']
 *  - menu action: array with two entries e.g.:
 *      ['Title of action 1 (html allowed)', 'javascript here ... see for examples scripts/contextmenu.js']
 *  - menu action with custom tooltip: array with three entries e.g.:
 *      ['Title of action 1 (html allowed)', 'javascript here ... see for examples scripts/contextmenu.js', 'Customized title']
 *  - submenu: array with two entries where second entry is an array that describes again a menu e.g.:
 *      ['title of submenu (html allowed)', [ ...array with menu actions... ]]
 *
 *
 *  Examples:
 *  A menu description array:
 *   ... = [
 *           ['section title'],
 *           ['title of action 1', 'javascript here'],
 *           ['title of submenu', [['title of subaction 1', 'javascript here'], ['title of subaction 1', 'javascript here', 'Click here for action']] ]
 *         ];
 *
 * To Override the common menu title:
 *  indexmenu_contextmenu['all']['pg']['view'][0] = ['customtitle'];
 *
 * To override a menu entry, for example the menu title:
 *   indexmenu_contextmenu['all']['pg']['view'][0] = ['Custom Title'];
 *
 * To add option to page menu:
 *   Array.splice(index, howManyToRemove, description1)
 *     index = position to start (start counting at zero)
 *     howManyToRemove = number of elements that are removed (set to 1 to replace a element)
 *     description1 = array with menu entry description
 *     -> optional: description2 = optional you can add more elements at once by splice(index, howManyToRemove, description1, description2, etc)
 *
 *   indexmenu_contextmenu['all']['pg']['view'].splice(1, 0, ['Input new page', '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\');"']);
 */

// IMPORTANT: DON'T MODIFY THIS FILE, BUT EDIT contextmenu.local.js PLEASE!
// THIS FILE IS OVERWRITTEN WHEN PLUGIN IS UPDATED

/**
 * Right Context Menu configuration for all users:
 */
indexmenu_contextmenu['all']['pg'] = {
    'view': [
        ['<span class="indexmenu_titlemenu"><b>'+LANG.plugins.indexmenu.page+'</b></span>'],
        [LANG.plugins.indexmenu.revs, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=revisions"'],
        [LANG.plugins.indexmenu.tocpreview, '"javascript: IndexmenuContextmenu.createTocMenu(\'call=indexmenu&req=toc&id="+id+"\',\'picker_"+index.obj+"\',\'s"+index.obj+node.id+"\');"']
    ],
    //Menu items in edit mode, when previewing
    'edit': [
        ['<span class="indexmenu_titlemenu"><b>'+LANG.plugins.indexmenu.editmode+'</b></span>'],
        [LANG.plugins.indexmenu.insertdwlink, '"javascript: IndexmenuContextmenu.insertTags(\'"+id+"\',\'"+index.config.sepchar+"\');"+index.obj+".divdisplay(\'r\',0);"', LANG.plugins.indexmenu.insertdwlinktooltip]
    ]
};

indexmenu_contextmenu['all']['ns'] = {
    'view': [
        ['<span class="indexmenu_titlemenu"><b>'+LANG.plugins.indexmenu.ns+'</b></span>'],
        [LANG.plugins.indexmenu.search, '"javascript: IndexmenuContextmenu.srchpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.isdir+"\',\'"+node.dokuid+"\');"', LANG.plugins.indexmenu.searchtooltip]
    ]
};


if (JSINFO && JSINFO.isadmin) {
    /**
     * Right Context Menu configuration for admin users:
     */
    indexmenu_contextmenu['pg'] = {
        'view': [
            [LANG.plugins.indexmenu.edit, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=edit"'],
            ['<em>'+LANG.plugins.indexmenu.create+'--></em>', [
                [LANG.plugins.indexmenu.headpage, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\',\'"+node.name+"\');"', LANG.plugins.indexmenu.headpagetooltip],
                [LANG.plugins.indexmenu.startpage, 'IndexmenuContextmenu.getid(index.config.urlbase,id+index.config.sepchar+"start")+"do=edit"', LANG.plugins.indexmenu.startpagetooltip],
                [LANG.plugins.indexmenu.custompage, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\');"', LANG.plugins.indexmenu.custompagetooltip]
            ]],
            ['<em>'+LANG.plugins.indexmenu.more+'--></em>', [
                [LANG.plugins.indexmenu.acls, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=admin&page=acl"'],
                [LANG.plugins.indexmenu.purgecache, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"purge=true"'],
                [LANG.plugins.indexmenu.exporthtml, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=export_xhtml"'],
                [LANG.plugins.indexmenu.exporttext, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=export_raw"']
            ]]
        ]
    };

    indexmenu_contextmenu['ns'] = {
        'view': [
            [LANG.plugins.indexmenu.newpage, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\');"', LANG.plugins.indexmenu.newpagetooltip],
            ['<em>'+LANG.plugins.indexmenu.more+'--></em>', [
                [LANG.plugins.indexmenu.headpagehere, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\',\'"+node.name+"\');"', LANG.plugins.indexmenu.headpageheretooltip],
                [LANG.plugins.indexmenu.acls, 'IndexmenuContextmenu.getid(index.config.urlbase,node.dokuid)+"do=admin&page=acl"']
            ]]
        ]
    };

} else if (JSINFO && JSINFO.isauth) {
    /**
     * Right Context Menu configuration for authenticated users:
     */
    indexmenu_contextmenu['pg'] = {
        'view': [
            [LANG.plugins.indexmenu.newpagehere, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\');"'],
            ['Edit', 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=edit"', 1, 0 ],
            ['<em>'+LANG.plugins.indexmenu.more+'--></em>', [
                [LANG.plugins.indexmenu.headpagehere, '"javascript: IndexmenuContextmenu.reqpage(\'"+index.config.urlbase+"\',\'"+index.config.sepchar+"\',\'"+node.dokuid+"\',\'"+node.name+"\');"'],
                [LANG.plugins.indexmenu.purgecache, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"purge=true"'],
                [LANG.plugins.indexmenu.exporthtml, 'IndexmenuContextmenu.getid(index.config.urlbase,id)+"do=export_xhtml"']
            ]]
        ]
    };

}

var IndexmenuContextmenu = {

    /**
     * Common functions
     * Insert your custom functions (available for all users) here.
     */

    srchpage: function (u, s, isdir, nid) {
        var r = prompt(LANG.plugins.indexmenu.insertkeywords, "");
        if (r) {
            var fnid = nid;
            if (isdir == "0") {
                fnid = fnid.substring(0, nid.lastIndexOf(s));
            }
            var b = u, re = new RegExp(s, 'g');
            fnid = fnid.replace(re, ":");
            b += (u.indexOf("?id=") < 0) ? '?id=' : '';
            window.location.href = IndexmenuContextmenu.getid(b, r + " @" + fnid) + "do=search";
        }
    },

    getid: function (u, id) {
        var url = (u || '') + encodeURI(id || '');
        url += (u.indexOf("?") < 0) ? '?' : '&';
        return url;
    },

    reqpage: function (b, s, id, n) {
        var r;
        if (n) {
            r = id + s + n;
        } else {
            r = prompt(LANG.plugins.indexmenu.insertpagename, "");
            if (!r) {
                return;
            }
            r = id + s + r;
        }
        if (r) window.location.href = IndexmenuContextmenu.getid(b, r) + "do=edit";
    },

    insertTags: function (lnk, sep) {
        var r, l = lnk;
        if (sep) {
            r = new RegExp(sep, "g");
            l = lnk.replace(r, ':');
        }
        insertTags('wiki__text', '[[', ']]', l);
    },

    /**
     * Create or catch the picker and hide it, next call the ajax content loading to get the ToC
     *
     * @param {string} get    query string
     * @param {string} picker id of picker
     * @param {string} btn    id of button
     */
    createTocMenu: function (get, picker, btn) {
        var $toc_picker = jQuery('#' + picker);
        if (!$toc_picker.length) {
            $toc_picker = IndexmenuUtils.createPicker(picker, 'indexmenu_toc');
            $toc_picker
                .html('<a href="#"><img src="' + DOKU_BASE + 'lib/plugins/indexmenu/images/close.gif" class="indexmenu_close" /></a><div />')
                .children().first().click(function (event) {
                    event.stopPropagation();
                    return IndexmenuContextmenu.togglePicker($toc_picker, jQuery('#' + btn));
                });
        } else {
            $toc_picker.hide();
        }
        IndexmenuContextmenu.ajaxmenu(get, $toc_picker, jQuery('#' + btn), $toc_picker.children().last(), null);
    },

    /**
     * Shows the picker and adds to it or to an internal containter the ajax content
     *
     * @param {string}   get        query string
     * @param {jQuery}   $picker
     * @param {jQuery}   $btn
     * @param {jQuery}   $container if defined ajax result is added to it, otherwise to $picker
     * @param {function} oncomplete called when defined to handle ajax result
     */
    ajaxmenu: function (get, $picker, $btn, $container, oncomplete) {
        var $indx_list;
        $indx_list = $container || $picker;

        if (!IndexmenuContextmenu.togglePicker($picker, $btn)) return;

        var onComplete = function (data) {
            $indx_list.html('');
            if (typeof oncomplete == 'function') {
                oncomplete(data, $indx_list);
            } else {
                $indx_list.html(data);
            }
        };

        //get content for picker/container
        jQuery.ajax({
            type: "POST",
            url: DOKU_BASE + 'lib/exe/ajax.php',
            data: get,
            beforeSend: function () {
                $indx_list.html('<div class="tocheader">'+LANG.plugins.indexmenu.loading+'</div>');
            },
            success: onComplete,
            dataType: 'html'
        });
    },


    /**
     * Hide/show picker, will be shown beside btn
     *
     * @param {string|jQuery} $picker
     * @param {jQuery}        $btn
     * @return {Boolean} true if open, false closed
     */
    togglePicker: function ($picker, $btn) {
        var x = 8, y = 0;

        if (!$picker.is(':visible')) {
            var pos = $btn.offset();
            //position + width of button
            x += pos.left + $btn[0].offsetWidth;
            y += pos.top;

            $picker
                .show()
                .offset({
                    left: x,
                    top: y
                });

            return true;
        } else {
            $picker.hide();
            return false;
        }
    },

    /**
     * Concatenates contextmenu configuration arrays
     *
     * @param amenu
     * @param index
     * @param n
     */
    arrconcat: function (amenu, index, n) {
        var html, id, item, a, li;
        if (typeof amenu == 'undefined' || typeof amenu['view'] == 'undefined') {
            return;
        }
        var cmenu = amenu['view'];
        if (jQuery('#tool__bar')[0] && amenu['edit'] instanceof Array) {
            cmenu = amenu['edit'].concat(cmenu);
        }
        var node = index.aNodes[n];
        id = node.hns || node.dokuid;

        var createCMenuEntry = function (entry) {
            return '<a title="' + ((entry[2]) ? entry[2] : entry[0]) + '" href="' + eval(entry[1]) + '">' + entry[0] + '</a>';
        };

        jQuery.each(cmenu, function (i, cmenuentry) {
            if (cmenuentry == '') {
                return true;
            }
            item = document.createElement('li');
            var $cmenu = jQuery('#r' + index.obj);
            if (cmenuentry[1]) {
                if (cmenuentry[1] instanceof Array) {
                    html = document.createElement('ul');
                    jQuery.each(cmenuentry[1], function (a, subcmenuentry) {
                        li = document.createElement('li');
                        li.innerHTML = createCMenuEntry(subcmenuentry);
                        html.appendChild(li);
                    });

                    //}
                    item.innerHTML = '<span class="indexmenu_submenu">' + cmenuentry[0] + '</span>';
                    html.left = $cmenu[0].width;
                    item.appendChild(html);
                } else {
                    item.innerHTML = createCMenuEntry(cmenuentry);
                }
            } else {
                item.innerHTML = cmenuentry;
            }
            $cmenu.children().last().append(item);
        });
    },

    /**
     *
     *
     * @param obj
     * @param e
     */
    mouseposition: function (obj, e) {
        //http://www.quirksmode.org/js/events_properties.html
        var X = 0, Y = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            X = e.pageX;
            Y = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            X = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            Y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        obj.style.left = X - 5 + 'px';
        obj.style.top = Y - 5 + 'px';
    },

    /**
     *
     *
     * @param n
     * @param obj
     * @param e
     */
    checkcontextm: function (n, obj, e) {
        e = e || event;
        if ((e.which == 3 || e.button == 2) || (window.opera && e.which == 1 && e.ctrlKey)) {
            obj.contextmenu(n, e);
            IndexmenuContextmenu.stopevt(e);
        }
    },

    /**
     *
     *
     * @param e
     * @returns {boolean}
     */
    stopevt: function (e) {
        if (!window.indexmenu_contextmenu) {
            return true;
        }
        e = e || event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    }
};


/*--------------------------------------------------------|
 | dTree 2.05 | www.destroydrop.com/javascript/tree/      |
 |--------------------------------------------------------|
 | Copyright (c) 2002-2003 Geir Landro                    |
 |                                                        |
 | This script can be used freely as long as all          |
 | copyright messages are intact.                         |
 |                                                        |
 | Updated: 17.04.2003                                    |
 |--------------------------------------------------------|
 | Modified for Dokuwiki by                               |
 | Samuele Tognini <samuele@samuele.netsons.org>          |
 | under GPL 2 license                                    |
 | (http://www.gnu.org/licenses/gpl.html)                 |
 | Updated: 29.08.2009                                    |
 |--------------------------------------------------------|
 | Modified for Dokuwiki by                               |
 | Rene Hadler <rene.hadler@iteas.at>                     |
 | under GPL 2 license                                    |
 | (http://www.gnu.org/licenses/gpl.html)                 |
 | Updated: 07.08.2012                                    |
 |--------------------------------------------------------|
 | jQuery update - 27 02 2012                             |
 | Gerrit Uitslag <klapinklapin@gmail.com                 |
 |--------------------------------------------------------|
 | indexmenu  | https://www.dokuwiki.org/plugin:indexmenu |
 |-------------------------------------------------------*/

/**
 * dTreeNode object
 *
 * @param {string}        dokuid page id of node
 * @param {number}        id     node id
 * @param {number}        pid    parent node id
 * @param {string}        name   Page Title
 * @param {number|string} hns    page id of headpage of namespace
 * @param {number}        isdir  is directory?
 * @param {number}        ajax   load subnodes by ajax
 * @constructor
 */
function dTreeNode(dokuid, id, pid, name, hns, isdir, ajax) {
    this.dokuid = dokuid; // page id of node
    this.id = id;         // id number of node
    this.pid = pid;       // id number of parent node
    this.name = name;     // ns/page title
    this.hns = hns;       // headpage of namespace or zero
    this.isdir = isdir;   // is directory
    this.ajax = ajax;     // load its nodes by ajax
    this._io = 0;         // is node open
    this._is = false;     // is selected
    this._ls = false;     // is last sibling
    this._hc = ajax;      // has children
    this._ai = 0;         // id number of first child....
    this._p = false;      // parent dTreeNode
    this._lv = 0;         // level
    this._ok = false;     // all children are loaded
    this._cp = false;     // current page
    this.icon = '';       // icon of closed node
    this.iconOpen = '';   // icon of opened node
}

/**
 * Tree object
 *
 * @param {string} objName id of the indexmenu, has form 'indexmenu_<identifier>'
 * @param {string} theme   name of theme dir
 * @constructor
 */
function dTree(objName, theme) {
    var objExt = IndexmenuUtils.determineExtension(theme);
    this.config = {
        urlbase: DOKU_BASE + 'doku.php?id=',           // base of dokuwiki (set in page)
        plugbase: DOKU_BASE + 'lib/plugins/indexmenu', // base of plugin folder
        useCookies: true,                              // use cookies (set in page) e.g. disabled for context option
        scroll: true,                                  // enable scrolling of tree in too small columns (set in page)
        toc: true,                                     // enable ToC popups in tree (set in page)
        maxjs: 1,                                      // number set by maxjs option (set in page)
        jsajax: '',                                    //  &max=#&sort=(t|d)&msort=(indexmenu_n|<metakey>)&rsort=1&nsort=1&hsort=1&nopg=1&skipns=+=/.../&skipfile=+=/.../(set in page)
        sepchar: ':',                                  // value ':', ';' or '/'  (set in page)
        theme: theme                                   // dir name of theme folder
    };
    var objImg = this.config.plugbase + '/images/' + theme + '/';
    this.icon = {
        root: objImg + 'base.' + objExt,
        folder: objImg + 'folder.' + objExt,
        folderH: objImg + 'folderh.' + objExt,
        folderOpen: objImg + 'folderopen.' + objExt,
        folderHOpen: objImg + 'folderhopen.' + objExt,
        node: objImg + 'page.' + objExt,
        empty: objImg + 'empty.' + objExt,
        line: objImg + 'line.' + objExt,
        join: objImg + 'join.' + objExt,
        joinBottom: objImg + 'joinbottom.' + objExt,
        plus: objImg + 'plus.' + objExt,
        plusBottom: objImg + 'plusbottom.' + objExt,
        minus: objImg + 'minus.' + objExt,
        minusBottom: objImg + 'minusbottom.' + objExt,
        nlPlus: objImg + 'nolines_plus.' + objExt,
        nlMinus: objImg + 'nolines_minus.' + objExt
    };
    this.obj = objName; // id of this indexmenu
    this.aNodes = [];   // array of nodes
    this.aIndent = [];  // array stores the indents of the tree (contains values 0 or 1)
    this.root = new dTreeNode(false, -1);
    this.selectedNode = null;      // node id
    this.selectedFound = false;    // set to true when found
    this.completed = false;        // succesfull written js tree to the page
    this.scrllTmr = 0;             // store timer for horizontal scrolling the page
    this.pageid = JSINFO.id || ''; // current page
    this.fajax = false;            // if retrieve next level of opened nodes
}
/**
 * CSS classes:
 *
 * a.nodeFdUrl	Namespace with url link (headpage)
 * a.node 	    Namespace without url link
 * a.nodeUrl	Page
 * a.nodeSel 	Last visited page
 * a.navSel 	Current page
 */


/**
 * Adds a new node to the node array
 *
 * @param {string}        dokuid page id of node
 * @param {number}        id     node id
 * @param {number}        pid    parent node id
 * @param {string}        name   Page Title
 * @param {number|string} hns    page id of headpage of namespace
 * @param {number}        isdir  is directory?
 * @param {number}        ajax   load subnodes by ajax
 */
dTree.prototype.add = function (dokuid, id, pid, name, hns, isdir, ajax) {
    this.aNodes[this.aNodes.length] = new dTreeNode(dokuid, id, pid, name, hns, isdir, ajax);
};

/**
 * Open all nodes, if no node status was stored in cookie
 */
dTree.prototype.openAll = function () {
    if (!this.getCookie('co' + this.obj)) {
        this.oAll(true);
    }
};

/**
 * Outputs the tree to the page. Called by document.write after adding the nodes to the tree.
 *
 * @returns {string} html of whole tree
 */
dTree.prototype.toString = function () {
    var str = '';
    this.pageid = this.pageid.replace(/:/g,this.config.sepchar);
    if (this.config.scroll) {
        str += '<div id="cdtree_' + this.obj + '" class="dtree" style="position:relative;overflow:hidden;width:100%;">';
    }
    str += '<div id="dtree_' + this.obj + '" class="dtree ' + this.config.theme + '" style="overflow:';
    if (this.config.scroll) {
        str += 'visible;position:relative;width:100%"';
    } else {
        str += 'hidden;"';
    }
    str += '>';
	if (jQuery('#dtree_' + this.obj)[0]) {
        str += '<div class="error">Indexmenu id conflict</div>';
    }
    if (this.config.toc) {
        str += '<div id="t' + this.obj + '" class="indexmenu_tocbullet ' + this.config.theme + '" style="display:none;" title="Table of contents"></div>';
        str += '<div id="toc_' + this.obj + '" style="display:none;"></div>';
    }
    if (this.config.useCookies) {
        this.selectedNode = this.getSelected();
    }
    str += this.addNode(this.root) + '</div>';
    if (this.config.scroll) {
        str += '<div id="z' + this.obj + '" class="indexmenu_rarrow"></div>';
        str += '<div id="left_' + this.obj + '" class="indexmenu_larrow" style="display:none;" title="Click to scroll back" onmousedown="javascript:' + this.obj + '.scroll(\'r\',1);" onmouseup="javascript:' + this.obj + '.stopscroll();"></div>';
        str += '</div>';
    }
    this.completed = true;
    //hide the fallback nojs indexmenu
    jQuery('#nojs_' + this.obj).css("display", "none"); //using  .hide(); let's  crash opera
    return str;
};

/**
 * Creates the tree structure
 *
 * @param {dTreeNode} pNode
 * @returns {string} html of node (inclusive children)
 */
dTree.prototype.addNode = function (pNode) {
    var str = '', cn, n = pNode._ai, l = pNode._lv + 1;
    for (n; n < this.aNodes.length; n++) {
        if (this.aNodes[n].pid == pNode.id) {
            cn = this.aNodes[n];
            cn._p = pNode;
            cn._ai = n;
            cn._lv = l;
            this.setCS(cn);
            if (cn._hc && !cn._io && this.config.useCookies) {
                cn._io = this.isOpen(cn.id);
            }
            if (this.pageid == (!cn.hns && cn.dokuid || cn.hns)) {
                cn._cp = true;
            } else if (cn.id == this.selectedNode && !this.selectedFound) {
                cn._is = true;
                this.selectedNode = n;
                this.selectedFound = true;
            }
            if (!cn._hc && cn.isdir && !cn.ajax && !cn.hns) {
                if (cn._ls) {
                    str += this.noderr(cn, n);
                }
            } else {
                str += this.node(cn, n);
            }
            if (cn._ls) {
                break;
            }
        }
    }
    return str;
};

/**
 * Create empty node
 *
 * @param {dTreeNode} node
 * @param {int} nodeId
 * @returns {string} html of empty node
 */
dTree.prototype.noderr = function (node, nodeId) {
    var str = '<div class="dTreeNode">' + this.indent(node, nodeId);
    str += '<div class="emptynode" title="Empty"></div></div>';
    return str;
};

/**
 * Creates the node icon, url and text
 *
 * @param {dTreeNode} node
 * @param {int} nodeId
 * @returns {string} html of node (inclusive children)
 */
dTree.prototype.node = function (node, nodeId) {
    var h = 1, jsfnc, str;
    jsfnc = 'onmouseover="' + this.obj + '.show_feat(\'' + nodeId + '\');" onmousedown="return IndexmenuContextmenu.checkcontextm(\'' + nodeId + '\',' + this.obj + ',event);" oncontextmenu="return IndexmenuContextmenu.stopevt(event)"';
    if (node._lv > this.config.maxjs) {
        h = 0;
    } else {
        node._ok = true;
    }
    str = '<div class="dTreeNode">' + this.indent(node, nodeId);
    node.icon = (this.root.id == node.pid) ? this.icon.root : ((node.hns) ? this.icon.folderH : ((node._hc) ? this.icon.folder : this.icon.node));
    node.iconOpen = (node._hc) ? ((node.hns) ? this.icon.folderHOpen : this.icon.folderOpen) : this.icon.node;
    if (this.root.id == node.pid) {
        node.icon = this.icon.root;
        node.iconOpen = this.icon.root;
    }
    str += '<img id="i' + this.obj + nodeId + '" src="' + ((node._io) ? node.iconOpen : node.icon) + '" alt="" />';
    if (!node._hc || node.hns) {
        str += '<a id="s' + this.obj + nodeId + '" class="' + ((node._cp) ? 'navSel' : ((node._is) ? 'nodeSel' : (node._hc) ? 'nodeFdUrl' : 'nodeUrl'));
        str += '" href="' + this.config.urlbase;
        (node.hns) ? str += node.hns : str += node.dokuid;
        str += '"' + ' title="' + node.name + '"' + jsfnc;
        str += ' onclick="javascript: ' + this.obj + '.s(' + nodeId + ');"';
        str += '>' + node.name + '</a>';
    }
    else if (node.pid != this.root.id) {
        str += '<a id="s' + this.obj + nodeId + '" href="javascript: ' + this.obj + '.o(' + nodeId + '); " class="node"' + jsfnc + '>' + node.name + '</a>';
    } else {
        str += node.name;
    }
    str += '</div>';
    if (node._hc) {
        str += '<div id="d' + this.obj + nodeId + '" class="clip" style="display:' + ((this.root.id == node.pid || node._io) ? 'block' : 'none') + ';">';
        if (h) {
            str += this.addNode(node);
        }
        str += '</div>';
    }
    this.aIndent.pop();
    return str;
};

/**
 * Adds the empty and line icons which indent the node
 *
 * @param {dTreeNode} node
 * @param {int} nodeId
 * @returns {string} html of indent icons
 */
dTree.prototype.indent = function (node, nodeId) {
    var n, str = '';
    if (this.root.id != node.pid) {
        for (n = 0; n < this.aIndent.length; n++) {
            str += '<img src="' + ( (this.aIndent[n] == 1) ? this.icon.line : this.icon.empty ) + '" alt="" />';
        }
        if (node._ls) {
            this.aIndent.push(0);
        } else {
            this.aIndent.push(1);
        }
        if (node._hc) {
            str += '<a href="javascript: ' + this.obj + '.o(' + nodeId + ');"><img id="j' + this.obj + nodeId + '" src="';
            str += ( (node._io) ? ((node._ls) ? this.icon.minusBottom : this.icon.minus) : ((node._ls) ? this.icon.plusBottom : this.icon.plus ) );
            str += '" alt="" /></a>';
        } else {
            str += '<img src="' + ((node._ls) ? this.icon.joinBottom : this.icon.join) + '" alt="" />';
        }
    }
    return str;
};

/**
 * Checks if a node has any children and if it is the last sibling
 *
 * @param {dTreeNode} node
 */
dTree.prototype.setCS = function (node) {
    var lastId, n;
    for (n = 0; n < this.aNodes.length; n++) {
        if (this.aNodes[n].pid == node.id) {
            node._hc = true;
        }
        if (this.aNodes[n].pid == node.pid) {
            lastId = this.aNodes[n].id;
        }
    }
    if (lastId == node.id) {
        node._ls = true;
    }
};

/**
 * Returns the selected node as stored in cookie
 *
 * @returns {int} node id
 */
dTree.prototype.getSelected = function () {
    var sn = this.getCookie('cs' + this.obj);
    return (sn) ? parseInt(sn, 10) : null;
};

/**
 * Highlights the selected node
 *
 * @param {int} id node id
 */
dTree.prototype.s = function (id) {
    var eOld, eNew, cn = this.aNodes[id];
    if (this.selectedNode != id) {
        eNew = jQuery("#s" + this.obj + id)[0];
        if (!eNew) {
            return;
        }
        if (this.selectedNode || this.selectedNode === 0) {
            eOld = jQuery("#s" + this.obj + this.selectedNode)[0];
            eOld.className = "node";
        }
        eNew.className = "nodeSel";
        this.selectedNode = id;
        if (this.config.useCookies) {
            this.setCookie('cs' + this.obj, cn.id);
        }
    }
};

/**
 * Toggle Open or close
 *
 * @param {int} id node id
 */
dTree.prototype.o = function (id) {
    var cn = this.aNodes[id];
    this.nodeStatus(!cn._io, id, cn._ls);
    cn._io = !cn._io;
    if (this.config.useCookies) {
        this.updateCookie();
    }
    // scroll
    this.divdisplay('z', 0);
    this.resizescroll("block");
};

/**
 * Open or close all nodes
 *
 * @param {boolean} status if true open
 */
dTree.prototype.oAll = function (status) {
    for (var n = 0; n < this.aNodes.length; n++) {
        if (this.aNodes[n]._hc && this.aNodes[n].pid != this.root.id) {
            this.nodeStatus(status, n, this.aNodes[n]._ls);
            this.aNodes[n]._io = status;
        }
    }
    if (this.config.useCookies) {
        this.updateCookie();
    }
};

/**
 * Opens the tree to a specific node
 *
 * @param {number} nId node id
 * @param {boolean} bSelect
 * @param {boolean} bFirst
 */
dTree.prototype.openTo = function (nId, bSelect, bFirst) {
    var n, cn;
    if (!bFirst) {
        for (n = 0; n < this.aNodes.length; n++) {
            if (this.aNodes[n].id == nId) {
                nId = n;
                break;
            }
        }
    }
    this.fill(this.aNodes[nId].pid);
    cn = this.aNodes[nId];
    if (cn.pid == this.root.id || !cn._p) {
        return;
    }
    cn._io = 1;
    if (this.completed && cn._hc) {
        this.nodeStatus(true, cn._ai, cn._ls);
    }
    if (cn._is) {
        (this.completed) ? this.s(cn._ai) : this._sn = cn._ai;
    }
    this.openTo(cn._p._ai, false, true);
};

/**
 * Open the given nodes, if no node status is already stored
 *
 * @param {Array|string} nodes array of nodes to open or empty string to open all nodes
 */
dTree.prototype.getOpenTo = function (nodes) {
    if (nodes === '') {
        this.openAll();
    } else if (!this.config.useCookies || !this.getCookie('co' + this.obj)) {
        for (var n = 0; n < nodes.length; n++) {
            this.openTo(nodes[n], false, true);
        }
    }
};

/**
 * Change the status of a node(open or closed)
 *
 * @param {boolean} status true if open
 * @param {int}     id     node id
 * @param {boolean} bottom true if bottom node
 */
dTree.prototype.nodeStatus = function (status, id, bottom) {
    if (status && !this.fill(id)) {
        return;
    }
    var eJoin, eIcon;
	eJoin = jQuery('#j' + this.obj + id)[0];
	eIcon = jQuery('#i' + this.obj + id)[0];
    eIcon.src = (status) ? this.aNodes[id].iconOpen : this.aNodes[id].icon;
    eJoin.src = ((status) ? ((bottom) ? this.icon.minusBottom : this.icon.minus) : ((bottom) ? this.icon.plusBottom : this.icon.plus));
    jQuery('#d' + this.obj + id)[0].style.display = (status) ? 'block' : 'none';
};

/**
 * [Cookie] Clears a cookie
 */
dTree.prototype.clearCookie = function () {
    var now, yday;
    now = new Date();
    yday = new Date(now.getTime() - 1000 * 60 * 60 * 24);
    this.setCookie('co' + this.obj, 'cookieValue', yday);
    this.setCookie('cs' + this.obj, 'cookieValue', yday);
};

/**
 * [Cookie] Sets value in a cookie
 *
 * @param {string}  cookieName
 * @param {string}  cookieValue
 * @param {Date}    expires
 * @param {string}  path
 * @param {string}  domain
 * @param {boolean} secure
 */
dTree.prototype.setCookie = function (cookieName, cookieValue, expires, path, domain, secure) {
    document.cookie =
        encodeURIComponent(cookieName) + '=' + encodeURIComponent(cookieValue) +
            (expires ? '; expires=' + expires.toUTCString() : '') +
            ';path=/' + (domain ? '; domain=' + domain : '') +
            (secure ? '; secure' : '');
};

/**
 * [Cookie] Gets a value from a cookie
 *
 * @param cookieName
 * @returns {string}
 */
dTree.prototype.getCookie = function (cookieName) {
    var cookieValue = '', pN, posValue, endPos;
    pN = document.cookie.indexOf(encodeURIComponent(cookieName) + '=');
    if (pN != -1) {
        posValue = pN + (encodeURIComponent(cookieName) + '=').length;
        endPos = document.cookie.indexOf(';', posValue);
        if (endPos != -1) {
            cookieValue = decodeURIComponent(document.cookie.substring(posValue, endPos));
        }
        else {
            cookieValue = decodeURIComponent(document.cookie.substring(posValue));
        }
    }
    return (cookieValue);
};

/**
 * [Cookie] Stores ids of open nodes as a string in cookie
 */
dTree.prototype.updateCookie = function () {
    var str = '', n;
    for (n = 0; n < this.aNodes.length; n++) {
        if (this.aNodes[n]._io && this.aNodes[n].pid != this.root.id) {
            if (str) {
                str += '.';
            }
            str += this.aNodes[n].id;
        }
    }
    this.setCookie('co' + this.obj, str);
};

/**
 * [Cookie] Checks if a node id is in the cookie
 *
 * @param {int} id node id
 * @return {Boolean} if open true
 */
dTree.prototype.isOpen = function (id) {
    var n, aOpen = this.getCookie('co' + this.obj).split('.');
    for (n = 0; n < aOpen.length; n++) {
        if (aOpen[n] == id) {
            return true;
        }
    }
    return false;
};

/**
 * Open the node of the current namespace
 *
 * @param {int} max
 */
dTree.prototype.openCurNS = function (max) {
    var r, cn, match, t, i, n, cnsa, cna;
    var cns = this.pageid;
    r = new RegExp("\\b" + this.config.sepchar + "\\b", "g");
    match = cns.match(r) || -1;
    if (max > 0 && match.length >= max) {
        t = cns.split(this.config.sepchar);
        n = (this.aNodes[0].dokuid == '') ? 0 : this.aNodes[0].dokuid.split(this.config.sepchar).length;
        t.splice(max + n, t.length);
        cnsa = t.join(this.config.sepchar);
    }
    for (i = 0; i < this.aNodes.length; i++) {
        cn = this.aNodes[i];
        if (cns == cn.dokuid || cns == cn.hns) {
            this.openTo(cn.id, false, true);
            this.fajax = false;
            if (cn.pid >= 0) {
				jQuery(this.scroll("l", 4, cn.pid, 1));
            }
            break;
        }
        if (cnsa == cn.dokuid || cnsa == cn.hns) {
            cna = cn;
            this.fajax = true;
        }
    }
    if (cna) {
        this.openTo(cna.id, false, true);
    }
};

/**
 * Load children when not available
 *
 * @param {int} id node id
 * @returns {boolean}
 */
dTree.prototype.fill = function (id) {
    if (id == -1 || this.aNodes[id]._ok) {
        return true;
    }
    var n = id, $eLoad, a, rd, ln, eDiv;
    if (this.aNodes[n].ajax) {
        //temporary load indicator
        $eLoad = jQuery('#l' + this.obj);
        if (!$eLoad.length) {
            $eLoad = IndexmenuUtils.createPicker('l' + this.obj);
        }
        jQuery('#s' + this.obj + n).parent().append($eLoad);
        $eLoad
            .html('Loading ...')
            .css({width: 'auto'})
            .show();

        //retrieves children
        this.getAjax(n);
        return true;
    }
    rd = [];
    while (!this.aNodes[n]._ok) {
        rd[rd.length] = n;
        n = this.aNodes[n].pid;
    }
    for (ln = rd.length - 1; ln >= 0; ln--) {
        id = rd[ln];
        a = this.aNodes[id];
		eDiv = jQuery('#d' + this.obj + id)[0];
        if (!eDiv) {
            return false;
        }
        this.aIndent = [];
        n = a;
        while (n.pid >= 0) {
            if (n._ls) {
                this.aIndent.unshift(0);
            } else {
                this.aIndent.unshift(1);
            }
            n = n._p;
        }
        eDiv.innerHTML = this.addNode(a);
        a._ok = true;
    }
    return true;
};

/**
 * Open the nodes stored in cookie
 */
dTree.prototype.openCookies = function () {
    var n, cn, aOpen = this.getCookie('co' + this.obj).split('.');
    for (n = 0; n < aOpen.length; n++) {
        if (aOpen[n] === "") {
            break;
        }
        cn = this.aNodes[aOpen[n]];
        if (!cn._ok) {
            this.nodeStatus(true, aOpen[n], cn._ls);
            cn._io = 1;
        }
    }
};

/**
 * Scrolls the index
 *
 * @param {string} where to move to
 * @param {int}    s     start
 * @param {int}    n     parent node id
 * @param {int}    i
 */
dTree.prototype.scroll = function (where, s, n, i) {
    if (!this.config.scroll) {
        return false;
    }
    var w, dtree, dtreel, nodeId;
	dtree = jQuery('#dtree_' + this.obj)[0];
    dtreel = parseInt(dtree.offsetLeft, 0);
    if (where == "r") {
        jQuery('#left_' + this.obj)[0].style.border = "thin inset";
        this.scrollRight(dtreel, s);
    } else {
        nodeId = jQuery('#s' + this.obj + n)[0];
        if (nodeId == null) {
            return false;
        }
        w = parseInt(dtree.parentNode.offsetWidth - nodeId.offsetWidth - nodeId.offsetLeft, 0);
        if (this.config.toc) {
            w = w - 11;
        }
        if (dtreel <= w) {
            return;
        }
        this.resizescroll("none");
        this.stopscroll();
        this.scrollLeft(dtreel, s, w - 3, i);
    }
};

/**
 * Scroll index to the left
 *
 * @param {int} lft current position
 * @param {int} s start
 * @param {int} w width
 * @param {int} i
 */
dTree.prototype.scrollLeft = function (lft, s, w, i) {
    if (lft < w - i - 10) {
        this.divdisplay('z', 0);
        this.scrllTmr = 0;
        return;
    }
    var self = this;
    jQuery('#dtree_' + self.obj)[0].style.left = lft + "px";
    this.scrllTmr = setTimeout(function () {
        self.scrollLeft(lft - s, s + i, w, i);
    }, 20);
};

/**
 * Scroll Index back to the right
 *
 * @param {int} lft current position
 * @param {int} s   start
 */
dTree.prototype.scrollRight = function (lft, s) {
    if (lft >= s) {
        this.divdisplay('left_', 0);
        this.stopscroll();
        return;
    }
    var self = this;
    jQuery('#dtree_' + self.obj)[0].style.left = lft + "px";
    if (lft > -15) {
        s = 1;
    }
    this.scrllTmr = setTimeout(function () {
        self.scrollRight(lft + s, s + 1);
    }, 20);
};

/**
 * Stop scroll movement
 */
dTree.prototype.stopscroll = function () {
    jQuery('#left_' + this.obj)[0].style.border = "none";
    clearTimeout(this.scrllTmr);
    this.scrllTmr = 0;
};

/**
 * Show features and add event handlers for ToC and scroll
 *
 * @param {int} n node id
 */
dTree.prototype.show_feat = function (n) {
	var w, div, id, dtree, dtreel, self, node = jQuery('#s' + this.obj + n)[0];
    self = this;
    if (this.config.toc && node.className != "node") {
		div = jQuery('#t' + this.obj)[0];
        id = (this.aNodes[n].hns) ? this.aNodes[n].hns : this.aNodes[n].dokuid;
        div.onmousedown = function () {
            IndexmenuContextmenu.createTocMenu('call=indexmenu&req=toc&id=' + decodeURIComponent(id), 'picker_' + self.obj, 't' + self.obj);
        };
        node.parentNode.appendChild(div);
        if (div.style.display == "none") {
            div.style.display = "inline";
        }
    }
    if (this.config.scroll) {
		div = jQuery('#z' + this.obj)[0];
        div.onmouseover = function () {
            div.style.border = "none";
            self.scroll("l", 1, n, 0);
        };
        div.onmousedown = function () {
            div.style.border = "thin inset";
            self.scroll("l", 4, n, 1);
        };
        div.onmouseout = function () {
            div.style.border = "none";
            self.stopscroll();
        };
        div.onmouseup = div.onmouseover;
		dtree = jQuery('#dtree_' + this.obj)[0];
        dtreel = parseInt(dtree.offsetLeft, 0);
        w = parseInt(dtree.parentNode.offsetWidth - node.offsetWidth - node.offsetLeft + 1, 0);
        if (dtreel > w) {
            div.style.display = "none";
            div.style.top = node.offsetTop + "px";
            div.style.left = parseInt(node.offsetLeft + node.offsetWidth + w - 12, 0) + "px";
            div.style.display = "block";
        }
    }
};

/**
 * Show and resize the scroll-back button relatively to size of tree
 *
 * @param {string} status 'block' or 'none'
 */
dTree.prototype.resizescroll = function (status) {
	var dtree, w, h, left = jQuery('#left_' + this.obj)[0];
    if (!left) {
        return;
    }
    if (left.style.display == status) {
        dtree = jQuery('#dtree_' + this.obj)[0];
        w = parseInt(dtree.offsetHeight / 3, 0);
        h = parseInt(w / 50, 0) * 50;
        if (h < 50) {
            h = 50;
        }
        left.style.height = h + "px";
        left.style.top = w + "px";
        if (status == "none") {
            left.style.display = "block";
        }
    }
};

/**
 * Toggle Open or close
 *
 * @param {int} n node id
 */
dTree.prototype.getAjax = function (n) {
    var node, req, curns, selft = this;
    node = selft.aNodes[n];

    req = 'call=indexmenu&req=index&idx=' + node.dokuid + decodeURIComponent(this.config.jsajax);
    curns = this.pageid.substring(0, this.pageid.lastIndexOf(this.config.sepchar));

    if (this.fajax) {
        req += '&nss=' + curns + '&max=1';
    }

    var onCompletion = function (data) {
        var i, ajxnodes, ajxnode, plus;
        plus = selft.aNodes.length - 1;
        eval(data);
        if (!ajxnodes instanceof Array || ajxnodes.length < 1) {
            ajxnodes = [
                ['', 1, 0, '', 0, 1, 0]
            ];
        }
        node.ajax = false;
        for (i = 0; i < ajxnodes.length; i++) {
            ajxnode = ajxnodes[i];
            ajxnode[2] = (ajxnode[2] == 0) ? node.id : ajxnode[2] + plus;
            ajxnode[1] += plus;
            selft.add(ajxnode[0], ajxnode[1], ajxnode[2], ajxnode[3], ajxnode[4], ajxnode[5], ajxnode[6]);
        }
        if (selft.fajax) {
            selft.fajax = false;
            selft.openCurNS(0);
        } else {
            selft.openTo(node.id, false, true);
        }
        jQuery('#l' + selft.obj).hide();
    };

    jQuery.post(
        DOKU_BASE + 'lib/exe/ajax.php',
        'call=indexmenu&'+req,
        onCompletion,
        'html'
    );
};

/**
 * Load custom css for theme
 */
dTree.prototype.loadCss = function () {
    var oLink = document.createElement("link");
    oLink.href = this.config.plugbase + '/images/' + this.config.theme + '/style.css';
    oLink.rel = "stylesheet";
    oLink.type = "text/css";
    document.getElementsByTagName('head')[0].appendChild(oLink);
};

/**
 * Show the contextmenu
 *
 * @param {int}   n node id
 * @param {Event} e event
 * @returns {boolean}
 */
dTree.prototype.contextmenu = function (n, e) {
    var type, node, cdtree, rmenu;
    cdtree = jQuery("#cdtree_" + this.obj)[0];
	rmenu = jQuery('#r' + this.obj)[0];
    if (!rmenu) {
        return true;
    }
    IndexmenuContextmenu.mouseposition(rmenu, e);
    var cmenu = window.indexmenu_contextmenu;
    node = this.aNodes[n];
    rmenu.innerHTML = '<div class="indexmenu_rmenuhead" title="' + node.name + '">' + node.name + "</div>";
    rmenu.appendChild(document.createElement('ul'));
    type = (node.isdir || node._hc) ? 'ns' : 'pg';
    IndexmenuContextmenu.arrconcat(cmenu['all'][type], this, n);
    if (node.hns) {
        IndexmenuContextmenu.arrconcat(cmenu[type], this, n);
        type = 'pg';
        IndexmenuContextmenu.arrconcat(cmenu['all'][type], this, n);
    }
    IndexmenuContextmenu.arrconcat(cmenu[type], this, n);
    rmenu.style.display = 'inline';
    return false;
};

/**
 * Show/hide object with given id of current indexmenu
 *
 * @param {string}  obj
 * @param {boolean} visible true: visible, false hide.
 */
dTree.prototype.divdisplay = function (obj, visible) {
	var o = jQuery('#' + obj + this.obj)[0];
    if (!o) {
        return;
    }
    (visible) ? o.style.display = 'inline' : o.style.display = 'none';
};

/**
 * Initialise the dTree index
 *
 * @param {int}    hasstyle  has an additional css style sheet
 * @param {int}    nocookies use no cookies
 * @param {string} opennodes string of initial opened nodes
 * @param {int}    nav       is navbar option set
 * @param {int}    max       max level of available nodes (deeper levels are included with js)
 * @param {int}    nomenu    show no menu
 */
dTree.prototype.init = function (hasstyle, nocookies, opennodes, nav, max, nomenu) {
    if (hasstyle) {
        this.loadCss();
    }
    if (!nocookies) {
        this.openCookies();
    }
    //open given nodes
    if (opennodes) {
        this.getOpenTo(opennodes.split(" "));
    }
    if (nav) {
        this.openCurNS(max);
    }
    //create contextmenu
    if (!nomenu) {
        var self = this;
        IndexmenuUtils.createPicker('r' + this.obj, 'indexmenu_rmenu ' + this.config.theme);
        jQuery('#r' + this.obj)[0].oncontextmenu = IndexmenuContextmenu.stopevt;
		jQuery(document).click(function() {
            self.divdisplay('r', 0);
        });
    }
};




/**
 * Add button action for the indexmenu wizard button
 *
 * @param  {jQuery}   $btn  Button element to add the action to
 * @param  {Array}    props Associative array of button properties
 * @param  {string}   edid  ID of the editor textarea
 * @return {boolean}  If button should be appended
 */
function addBtnActionIndexmenu($btn, props, edid) {
    indexmenu_wiz.init(jQuery('#' + edid));
    $btn.click(function () {
        indexmenu_wiz.toggle();
        return false;
    });
    return true;
}


// try to add button to toolbar
if (window.toolbar != undefined) {
    window.toolbar[window.toolbar.length] = {
        "type": "Indexmenu",
        "title": "Insert the Indexmenu tree",
        "icon": "../../plugins/indexmenu/images/indexmenu_toolbar.png"
    }
}


/**
 *  functions for js index renderer and contextmenu
 */
var IndexmenuUtils = {

    /**
     * Determine extension from given theme dir name
     *
     * @param {string} themedir name of theme dir
     * @returns {string} extension gif, png or jpg
     */
    determineExtension: function (themedir) {
        var extension = "gif";
        var posext = themedir.lastIndexOf(".");
        if (posext > -1) {
            posext++;
            var ext = themedir.substring(posext, themedir.length).toLowerCase();
            if ((ext == "png") || (ext == "jpg")) {
                extension = ext;
            }
        }
        return extension;
    },

    /**
     * Create div with given id and class on body and return it
     *
     * @param {string} id picker id
     * @param {string} cl class(es)
     * @return {jQuery} jQuery div
     */
    createPicker: function (id, cl) {
        return jQuery('<div>')
            .addClass(cl || 'picker')
            .attr('id', id)
            .css({position: 'absolute'})
            .hide()
            .appendTo('body');
    }

};



/* XXXXXXXXXX end of lib/plugins/indexmenu/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/logviewer/script.js XXXXXXXXXX */

/**
 * Scroll to the end of the log on load
 */
jQuery(function () {
    var $dl = jQuery('#plugin__logviewer').find('dl');
    if (!$dl.length) return;
    $dl.animate({scrollTop: $dl.prop("scrollHeight")}, 500);


    var $filter = jQuery('<input>');
    $filter.on('keyup', function (e) {
        var re = new RegExp($filter.val(), 'i');

        $dl.find('dt').each(function (idx, elem) {
            if (elem.innerText.match(re)) {
                jQuery(elem).removeClass('hidden');
            } else {
                jQuery(elem).addClass('hidden');
            }
        });
    });
    $dl.before($filter);
    $filter.wrap('<label></label>');
    $filter.before(LANG.plugins.logviewer.filter + ' ');
});



/* XXXXXXXXXX end of lib/plugins/logviewer/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/move/script.js XXXXXXXXXX */

/**
 * includes all needed JavaScript for the move plugin
 *
 * be sure to touch this file when one of the scripts has been updated to refresh caching
 */

/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

jQuery(function() {
    jQuery('form.plugin_move_form').each(function(){
    var $form = jQuery(this);

    $form.find('.click-page').click(function() {
        $form.find('input[name=dst]').val($form.find('.click-page code').text());
        $form.find('.select').hide();
    }).click();

    $form.find('.click-ns').click(function() {
        $form.find('input[name=dst]').val($form.find('.click-ns code').text());
        $form.find('.select').show();
    });

});
    jQuery('#plugin_move__progress').each(function () {
    var $this = jQuery(this);

    // initialize the progress bar
    var $progressbar = $this.find('.progress');
    $progressbar.html('');
    $progressbar.progressbar({
        value: $progressbar.data('progress')
    });

    /**
     * Set visibility of buttons according to current error state
     *
     * @param isError
     */
    var setButtons = function(isError) {
        $this.find('.ctlfrm-start').addClass('hide');

        if(isError) {
            $this.find('.ctlfrm-skip').removeClass('hide');
            $this.find('.ctlfrm-retry').removeClass('hide');
            $this.find('.ctlfrm-continue').addClass('hide');
        }else {
            $this.find('.ctlfrm-skip').addClass('hide');
            $this.find('.ctlfrm-retry').addClass('hide');
            $this.find('.ctlfrm-continue').addClass('hide');
        }
    };

    /**
     * Execute the next steps
     *
     * @param {bool} skip should an error be skipped?
     */
    var nextStep = function(skip) {
        // clear error output
        $this.find('.output').html('');

        $this.find('.controls img').removeClass('hide');
        setButtons(false);

        // execute AJAX
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_move_progress',
                skip: skip
            },
            function (data) {
                $progressbar.progressbar('option', 'value', data.progress);
                $this.find('.controls img').addClass('hide');

                if (data.error) {
                    $this.find('.output').html('<p><div class="error">' + data.error + '</div></p>');
                    setButtons(true);
                } else if (data.complete) {
                    $progressbar.progressbar('option', 'value', 100);
                    // redirect to start page
                    alert(LANG.plugins.move.complete);
                    window.location.href = DOKU_BASE;
                } else {
                    // do it again
                    nextStep(skip);
                }
            }
        );
    };



    // attach AJAX actions to buttons
    $this.find('.ctl-continue').click(function (e) {
        e.preventDefault();

        // move in progress, no more preview
        jQuery('#plugin_move__preview').remove();

        // should the next error be skipped?
        var skip = e.target.form.skip.value;

        // step on it
        nextStep(skip);
    });

});


// hide preview list on namespace move
jQuery('#plugin_move__preview').each(function () {
    var $this = jQuery(this);
    $this.find('ul').hide();
    $this.find('span')
        .click(function () {
            $this.find('ul').dw_toggle();
            $this.find('span').toggleClass('closed');
        })
        .addClass('closed');
});

    /**
 * Script for the tree management interface
 */

var $GUI = jQuery('#plugin_move__tree');

$GUI.show();
jQuery('#plugin_move__treelink').show();

/**
 * Checks if the given list item was moved in the tree
 *
 * Moved elements are highlighted and a title shows where they came from
 *
 * @param {jQuery} $li
 */
var checkForMovement = function ($li) {
    // we need to check this LI and all previously moved sub LIs
    var $all = $li.add($li.find('li.moved'));
    $all.each(function () {
        var $this = jQuery(this);
        var oldid = $this.data('id');
        var newid = determineNewID($this);

        if (newid != oldid && !$this.hasClass('created')) {
            $this.addClass('moved');
            $this.children('div').attr('title', oldid + ' -> ' + newid);
        } else {
            $this.removeClass('moved');
            $this.children('div').attr('title', '');
        }
    });
};

/**
 * Check if the given name is allowed in the given parent
 *
 * @param {jQuery} $li the edited or moved LI
 * @param {jQuery} $parent the (new) parent of the edited or moved LI
 * @param {string} name the (new) name to check
 * @returns {boolean}
 */
var checkNameAllowed = function ($li, $parent, name) {
    var ok = true;
    $parent.children('li').each(function () {
        if (this === $li[0]) return;
        var cname = 'type-f';
        if ($li.hasClass('type-d')) cname = 'type-d';

        var $this = jQuery(this);
        if ($this.data('name') == name && $this.hasClass(cname)) ok = false;
    });
    return ok;
};

/**
 * Returns the new ID of a given list item
 *
 * @param {jQuery} $li
 * @returns {string}
 */
var determineNewID = function ($li) {
    var myname = $li.data('name');

    var $parent = $li.parent().closest('li');
    if ($parent.length) {
        return (determineNewID($parent) + ':' + myname).replace(/^:/, '');
    } else {
        return myname;
    }
};

/**
 * Very simplistic cleanID() in JavaScript
 *
 * Strips out namespaces
 *
 * @param {string} id
 */
var cleanID = function (id) {
    if (!id) return '';

    id = id.replace(/[!"#$%§&\'()+,/;<=>?@\[\]^`\{|\}~\\;:\/\*]+/g, '_');
    id = id.replace(/^_+/, '');
    id = id.replace(/_+$/, '');
    id = id.toLowerCase();

    return id;
};

/**
 * Initialize the drag & drop-tree at the given li (must be this).
 */
var initTree = function () {
    var $li = jQuery(this);
    var my_root = $li.closest('.tree_root')[0];
    $li.draggable({
        revert: true,
        revertDuration: 0,
        opacity: 0.5,
        stop : function(event, ui) {
            ui.helper.css({height: "auto", width: "auto"});
        }
    }).droppable({
        tolerance: 'pointer',
        greedy: true,
        accept : function(draggable) {
            return my_root == draggable.closest('.tree_root')[0];
        },
        drop : function (event, ui) {
            var $dropped = ui.draggable;
            var $me = jQuery(this);

            if ($dropped.children('div.li').children('input').prop('checked')) {
                $dropped = $dropped.add(
                    jQuery(my_root)
                    .find('input')
                    .filter(function() {
                        return jQuery(this).prop('checked');
                    }).parent().parent()
                );
            }

            if ($me.parents().addBack().is($dropped)) {
                return;
            }

            var insert_child = !($me.hasClass("type-f") || $me.hasClass("closed"));
            var $new_parent = insert_child ? $me.children('ul') : $me.parent();
            var allowed = true;

            $dropped.each(function () {
                var $this = jQuery(this);
                allowed &= checkNameAllowed($this, $new_parent, $this.data('name'));
            });

            if (allowed) {
                if (insert_child) {
                    $dropped.prependTo($new_parent);
                } else {
                    $dropped.insertAfter($me);
                }
            }

            checkForMovement($dropped);
        }
    })
    // add title to rename icon
    .find('img.rename').attr('title', LANG.plugins.move.renameitem)
    .end()
    .find('img.add').attr('title', LANG.plugins.move.add);
};

var add_template = '<li class="type-d open created" data-name="%s" data-id="%s"><div class="li"><input type="checkbox"> <a href="%s" class="idx_dir">%s</a><img class="rename" src="' + DOKU_BASE + 'lib/plugins/move/images/rename.png"></div><ul class="tree_list"></ul></li>';

/**
 * Attach event listeners to the tree
 */
$GUI.find('div.tree_root > ul.tree_list')
    .click(function (e) {
        var $clicky = jQuery(e.target);
        var $li = $clicky.parent().parent();

        if ($clicky[0].tagName == 'A' && $li.hasClass('type-d')) {  // Click on folder - open and close via AJAX
            e.stopPropagation();
            if ($li.hasClass('open')) {
                $li
                    .removeClass('open')
                    .addClass('closed');

            } else {
                $li
                    .removeClass('closed')
                    .addClass('open');

                // if had not been loaded before, load via AJAX
                if (!$li.find('ul').length) {
                    var is_media = $li.closest('div.tree_root').hasClass('tree_media') ? 1 : 0;
                    jQuery.post(
                        DOKU_BASE + 'lib/exe/ajax.php',
                        {
                            call: 'plugin_move_tree',
                            ns: $clicky.attr('href'),
                            is_media: is_media
                        },
                        function (data) {
                            $li.append(data);
                            $li.find('li').each(initTree);
                        }
                    );
                }
            }
            e.preventDefault();
        } else if ($clicky[0].tagName == 'IMG') { // Click on IMG - do rename
            e.stopPropagation();
            var $a = $clicky.parent().find('a');

            if ($clicky.hasClass('rename')) {
                var newname = window.prompt(LANG.plugins.move.renameitem, $li.data('name'));
                newname = cleanID(newname);
                if (newname) {
                    if (checkNameAllowed($li, $li.parent(), newname)) {
                        $li.data('name', newname);
                        $a.text(newname);
                        checkForMovement($li);
                    } else {
                        alert(LANG.plugins.move.duplicate.replace('%s', newname));
                    }
                }
            } else {
                var newname = window.prompt(LANG.plugins.move.add); 
                newname = cleanID(newname);
                if (newname) {
                    if (checkNameAllowed($li, $li.children('ul'), newname)) {
                        var $new_li = jQuery(add_template.replace(/%s/g, newname));
                        $li.children('ul').prepend($new_li);

                        $new_li.each(initTree);
                    } else {
                        alert(LANG.plugins.move.duplicate.replace('%s', newname));
                    }
                }
            }
            e.preventDefault();
        }
    }).find('li').each(initTree);

/**
 * Gather all moves from the trees and put them as JSON into the form before submit
 *
 * @fixme has some duplicate code
 */
jQuery('#plugin_move__tree_execute').submit(function (e) {
    var data = [];

    $GUI.find('.tree_pages .moved').each(function (idx, el) {
        var $el = jQuery(el);
        var newid = determineNewID($el);

        data[data.length] = {
            'class': $el.hasClass('type-d') ? 'ns' : 'doc',
            type: 'page',
            src: $el.data('id'),
            dst: newid
        };
    });
    $GUI.find('.tree_media .moved').each(function (idx, el) {
        var $el = jQuery(el);
        var newid = determineNewID($el);

        data[data.length] = {
            'class': $el.hasClass('type-d') ? 'ns' : 'doc',
            type: 'media',
            src: $el.data('id'),
            dst: newid
        };
    });

    jQuery(this).find('input[name=json]').val(JSON.stringify(data));
});

    /**
 * Rename dialog for end users
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
(function () {
    if (!JSINFO || !JSINFO.move_renameokay) return;


    // basic dialog template
    const $dialog = jQuery(
        '<div>' +
        '<form>' +
        '<label>' + LANG.plugins.move.newname + '<br>' +
        '<input type="text" name="id" style="width:100%">' +
        '</label>' +
        '</form>' +
        '</div>'
    );

    /**
     * Executes the renaming based on the form contents
     * @return {boolean}
     */
    const renameFN = function () {
        const newid = $dialog.find('input[name=id]').val();
        if (!newid) return false;

        // remove buttons and show throbber
        $dialog.html(
            '<img src="' + DOKU_BASE + 'lib/images/throbber.gif" /> ' +
            LANG.plugins.move.inprogress
        );
        $dialog.dialog('option', 'buttons', []);

        // post the data
        jQuery.post(
            DOKU_BASE + 'lib/exe/ajax.php',
            {
                call: 'plugin_move_rename',
                id: JSINFO.id,
                newid: newid
            },
            // redirect or display error
            function (result) {
                if (result.error) {
                    $dialog.html(result.error.msg);
                } else {
                    window.location.href = result.redirect_url;
                }
            }
        );

        return false;
    };

    /**
     * Create the actual dialog modal and show it
     */
    const showDialog = function () {
        $dialog.dialog({
            title: LANG.plugins.move.rename + ' ' + JSINFO.id,
            width: 800,
            height: 200,
            dialogClass: 'plugin_move_dialog',
            modal: true,
            buttons: [
                {
                    text: LANG.plugins.move.cancel,
                    click: function () {
                        $dialog.dialog("close");
                    }
                },
                {
                    text: LANG.plugins.move.rename,
                    click: renameFN
                }
            ],
            // remove HTML from DOM again
            close: function () {
                jQuery(this).remove();
            }
        });
        $dialog.find('input[name=id]').val(JSINFO.id);
        $dialog.find('form').submit(renameFN);
    };

    /**
     * Bind an event handler as the first handler
     *
     * @param {jQuery} $owner
     * @param {string} event
     * @param {function} handler
     * @link https://stackoverflow.com/a/4700103
     */
    const bindFirst = function ($owner, event, handler) {
        $owner.unbind(event, handler);
        $owner.bind(event, handler);

        const events = jQuery._data($owner[0])['events'][event];
        events.unshift(events.pop());

        jQuery._data($owner[0])['events'][event] = events;
    };


    // attach handler to menu item
    jQuery('.plugin_move_page')
        .show()
        .click(function (e) {
            e.preventDefault();
            showDialog();
        });

    // attach handler to mobile menu entry
    const $mobileMenuOption = jQuery('form select[name=do] option[value=plugin_move]');
    if ($mobileMenuOption.length === 1) {
        bindFirst($mobileMenuOption.form().find('select[name=do]'), 'change', function (e) {
            const $select = jQuery(this);
            if ($select.val() !== 'plugin_move') return;
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            $select.val('');
            showDialog();
        });
    }

})();

});


/* XXXXXXXXXX end of lib/plugins/move/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/searchform/script.js XXXXXXXXXX */

jQuery(function () {
    jQuery('.searchform__qsearch_in')
        .each(function (i, input) {
            var $input = jQuery(input);
            var $form = $input.parent().parent();
            var $output = $form.find('.searchform__qsearch_out');
            var $ns = $form.find('[name="ns"]');
            var $notns = $form.find('[name="-ns"]');

            $input.dw_qsearch({

                output: $output,

                getSearchterm: function () {
                    let query = $input.val(),
                        reg = new RegExp("(?:^| )(?:\\^|@|-ns:|ns:)[\\w:]+");
                    if (reg.test(query)) {
                        return query;
                    }
                    let prefix = ' @';
                    let namespace = $ns.val();
                    let excludednamespace = $notns.val();

                    if(excludednamespace) {
                        namespace = excludednamespace;
                        prefix = ' ^';
                    }

                    return query + (namespace ? prefix + namespace : '');
                }
            });

        });
});



/* XXXXXXXXXX end of lib/plugins/searchform/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/siteexport/script.js XXXXXXXXXX */

/*
* jQuery File Download Plugin v1.4.2 
*
* http://www.johnculviner.com
*
* Copyright (c) 2013 - John Culviner
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* !!!!NOTE!!!!
* You must also write a cookie in conjunction with using this plugin as mentioned in the orignal post:
* http://johnculviner.com/jquery-file-download-plugin-for-ajax-like-feature-rich-file-downloads/
* !!!!NOTE!!!!
*/

(function($, window){
    // i'll just put them here to get evaluated on script load
    var htmlSpecialCharsRegEx = /[<>&\r\n"']/gm;
    var htmlSpecialCharsPlaceHolders = {
                '<': 'lt;',
                '>': 'gt;',
                '&': 'amp;',
                '\r': "#13;",
                '\n': "#10;",
                '"': 'quot;',
                "'": 'apos;' /*single quotes just to be safe*/
    };

$.extend({
    //
    //$.fileDownload('/path/to/url/', options)
    //  see directly below for possible 'options'
    fileDownload: function (fileUrl, options) {

        //provide some reasonable defaults to any unspecified options below
        var settings = $.extend({

            //
            //Requires jQuery UI: provide a message to display to the user when the file download is being prepared before the browser's dialog appears
            //
            preparingMessageHtml: null,

            //
            //Requires jQuery UI: provide a message to display to the user when a file download fails
            //
            failMessageHtml: null,

            //
            //the stock android browser straight up doesn't support file downloads initiated by a non GET: http://code.google.com/p/android/issues/detail?id=1780
            //specify a message here to display if a user tries with an android browser
            //if jQuery UI is installed this will be a dialog, otherwise it will be an alert
            //
            androidPostUnsupportedMessageHtml: "Unfortunately your Android browser doesn't support this type of file download. Please try again with a different browser.",

            //
            //Requires jQuery UI: options to pass into jQuery UI Dialog
            //
            dialogOptions: { modal: true },

            //
            //a function to call while the dowload is being prepared before the browser's dialog appears
            //Args:
            //  url - the original url attempted
            //
            prepareCallback: function (url) { },

            //
            //a function to call after a file download dialog/ribbon has appeared
            //Args:
            //  url - the original url attempted
            //
            successCallback: function (url) { },

            //
            //a function to call after a file download dialog/ribbon has appeared
            //Args:
            //  responseHtml    - the html that came back in response to the file download. this won't necessarily come back depending on the browser.
            //                      in less than IE9 a cross domain error occurs because 500+ errors cause a cross domain issue due to IE subbing out the
            //                      server's error message with a "helpful" IE built in message
            //  url             - the original url attempted
            //
            failCallback: function (responseHtml, url) { },

            //
            // the HTTP method to use. Defaults to "GET".
            //
            httpMethod: "GET",

            //
            // if specified will perform a "httpMethod" request to the specified 'fileUrl' using the specified data.
            // data must be an object (which will be $.param serialized) or already a key=value param string
            //
            data: null,

            //
            //a period in milliseconds to poll to determine if a successful file download has occured or not
            //
            checkInterval: 100,

            //
            //the cookie name to indicate if a file download has occured
            //
            cookieName: "fileDownload",

            //
            //the cookie value for the above name to indicate that a file download has occured
            //
            cookieValue: "true",

            //
            //the cookie path for above name value pair
            //
            cookiePath: "/",

            //
            //the title for the popup second window as a download is processing in the case of a mobile browser
            //
            popupWindowTitle: "Initiating file download...",

            //
            //Functionality to encode HTML entities for a POST, need this if data is an object with properties whose values contains strings with quotation marks.
            //HTML entity encoding is done by replacing all &,<,>,',",\r,\n characters.
            //Note that some browsers will POST the string htmlentity-encoded whilst others will decode it before POSTing.
            //It is recommended that on the server, htmlentity decoding is done irrespective.
            //
            encodeHTMLEntities: true
            
        }, options);

        var deferred = new $.Deferred();

        //Setup mobile browser detection: Partial credit: http://detectmobilebrowser.com/
        var userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();

        var isIos;                  //has full support of features in iOS 4.0+, uses a new window to accomplish this.
        var isAndroid;              //has full support of GET features in 4.0+ by using a new window. Non-GET is completely unsupported by the browser. See above for specifying a message.
        var isOtherMobileBrowser;   //there is no way to reliably guess here so all other mobile devices will GET and POST to the current window.

        if (/ip(ad|hone|od)/.test(userAgent)) {

            isIos = true;

        } else if (userAgent.indexOf('android') !== -1) {

            isAndroid = true;

        } else {

            isOtherMobileBrowser = /avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|playbook|silk|iemobile|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));

        }

        var httpMethodUpper = settings.httpMethod.toUpperCase();

        if (isAndroid && httpMethodUpper !== "GET") {
            //the stock android browser straight up doesn't support file downloads initiated by non GET requests: http://code.google.com/p/android/issues/detail?id=1780

            if ($().dialog) {
                $("<div>").html(settings.androidPostUnsupportedMessageHtml).dialog(settings.dialogOptions);
            } else {
                alert(settings.androidPostUnsupportedMessageHtml);
            }

            return deferred.reject();
        }

        var $preparingDialog = null;

        var internalCallbacks = {

            onPrepare: function (url) {

                //wire up a jquery dialog to display the preparing message if specified
                if (settings.preparingMessageHtml) {

                    $preparingDialog = $("<div>").html(settings.preparingMessageHtml).dialog(settings.dialogOptions);

                } else if (settings.prepareCallback) {

                    settings.prepareCallback(url);

                }

            },

            onSuccess: function (url) {

                //remove the perparing message if it was specified
                if ($preparingDialog) {
                    $preparingDialog.dialog('close');
                }

                settings.successCallback(url);

                deferred.resolve(url);
            },

            onFail: function (responseHtml, url) {

                //remove the perparing message if it was specified
                if ($preparingDialog) {
                    $preparingDialog.dialog('close');
                }

                //wire up a jquery dialog to display the fail message if specified
                if (settings.failMessageHtml) {
                    $("<div>").html(settings.failMessageHtml).dialog(settings.dialogOptions);
                }

                settings.failCallback(responseHtml, url);
                
                deferred.reject(responseHtml, url);
            }
        };

        internalCallbacks.onPrepare(fileUrl);

        //make settings.data a param string if it exists and isn't already
        if (settings.data !== null && typeof settings.data !== "string") {
            settings.data = $.param(settings.data);
        }


        var $iframe,
            downloadWindow,
            formDoc,
            $form;

        if (httpMethodUpper === "GET") {

            if (settings.data !== null) {
                //need to merge any fileUrl params with the data object

                var qsStart = fileUrl.indexOf('?');

                if (qsStart !== -1) {
                    //we have a querystring in the url

                    if (fileUrl.substring(fileUrl.length - 1) !== "&") {
                        fileUrl = fileUrl + "&";
                    }
                } else {

                    fileUrl = fileUrl + "?";
                }

                fileUrl = fileUrl + settings.data;
            }

            if (isIos || isAndroid) {

                downloadWindow = window.open(fileUrl);
                downloadWindow.document.title = settings.popupWindowTitle;
                window.focus();

            } else if (isOtherMobileBrowser) {

                window.location(fileUrl);

            } else {

                //create a temporary iframe that is used to request the fileUrl as a GET request
                $iframe = $("<iframe>")
                    .hide()
                    .prop("src", fileUrl)
                    .appendTo("body");
            }

        } else {

            var formInnerHtml = "";

            if (settings.data !== null) {

                $.each(settings.data.replace(/\+/g, ' ').split("&"), function () {

                    var kvp = this.split("=");

                    var key = settings.encodeHTMLEntities ? htmlSpecialCharsEntityEncode(decodeURIComponent(kvp[0])) : decodeURIComponent(kvp[0]);
                    if (key) {
                        var value = settings.encodeHTMLEntities ? htmlSpecialCharsEntityEncode(decodeURIComponent(kvp[1])) : decodeURIComponent(kvp[1]);
                    formInnerHtml += '<input type="hidden" name="' + key + '" value="' + value + '" />';
                    }
                });
            }

            if (isOtherMobileBrowser) {

                $form = $("<form>").appendTo("body");
                $form.hide()
                    .prop('method', settings.httpMethod)
                    .prop('action', fileUrl)
                    .html(formInnerHtml);

            } else {

                if (isIos) {

                    downloadWindow = window.open("about:blank");
                    downloadWindow.document.title = settings.popupWindowTitle;
                    formDoc = downloadWindow.document;
                    window.focus();

                } else {

                    $iframe = $("<iframe style='display: none' src='about:blank'></iframe>").appendTo("body");
                    formDoc = getiframeDocument($iframe);
                }

                formDoc.write("<html><head></head><body><form method='" + settings.httpMethod + "' action='" + fileUrl + "'>" + formInnerHtml + "</form>" + settings.popupWindowTitle + "</body></html>");
                $form = $(formDoc).find('form');
            }

            $form.submit();
        }


        //check if the file download has completed every checkInterval ms
        setTimeout(checkFileDownloadComplete, settings.checkInterval);


        function checkFileDownloadComplete() {

            //has the cookie been written due to a file download occuring?
            if (document.cookie.indexOf(settings.cookieName + "=" + settings.cookieValue) != -1) {

                //execute specified callback
                internalCallbacks.onSuccess(fileUrl);

                //remove the cookie and iframe
                document.cookie = settings.cookieName + "=; expires=" + new Date(1000).toUTCString() + "; path=" + settings.cookiePath;

                cleanUp(false);

                return;
            }

            //has an error occured?
            //if neither containers exist below then the file download is occuring on the current window
            if (downloadWindow || $iframe) {

                //has an error occured?
                try {

                    var formDoc = downloadWindow ? downloadWindow.document : getiframeDocument($iframe);

                    if (formDoc && formDoc.body != null && formDoc.body.innerHTML.length) {

                        var isFailure = true;

                        if ($form && $form.length) {
                            var $contents = $(formDoc.body).contents().first();

                            try {
                                if ($contents.length && $contents[0] === $form[0]) {
                                    isFailure = false;
                                }
                            } catch (e) {
                                if (e && e.number == -2146828218) {
                                    // IE 8-10 throw a permission denied after the form reloads on the "$contents[0] === $form[0]" comparison
                                    isFailure = true;
                                } else {
                                    throw e;
                                }
                            } 
                        }

                        if (isFailure) {
                            // IE 8-10 don't always have the full content available right away, they need a litle bit to finish
                            setTimeout(function () {
                                internalCallbacks.onFail(formDoc.body.innerHTML, fileUrl);
                                cleanUp(true);
                            }, 100);
                            
                            return;
                        }
                    }
                }
                catch (err) {

                    //500 error less than IE9
                    internalCallbacks.onFail('', fileUrl);

                    cleanUp(true);

                    return;
                }
            }


            //keep checking...
            setTimeout(checkFileDownloadComplete, settings.checkInterval);
        }

        //gets an iframes document in a cross browser compatible manner
        function getiframeDocument($iframe) {
            var iframeDoc = $iframe[0].contentWindow || $iframe[0].contentDocument;
            if (iframeDoc.document) {
                iframeDoc = iframeDoc.document;
            }
            return iframeDoc;
        }

        function cleanUp(isFailure) {

            setTimeout(function() {

                if (downloadWindow) {

                    if (isAndroid) {
                        downloadWindow.close();
                    }

                    if (isIos) {
                        if (downloadWindow.focus) {
                            downloadWindow.focus(); //ios safari bug doesn't allow a window to be closed unless it is focused
                            if (isFailure) {
                                downloadWindow.close();
                            }
                        }
                    }
                }
                
                //iframe cleanup appears to randomly cause the download to fail
                //not doing it seems better than failure...
                //if ($iframe) {
                //    $iframe.remove();
                //}

            }, 0);
        }


        function htmlSpecialCharsEntityEncode(str) {
            return str.replace(htmlSpecialCharsRegEx, function(match) {
                return '&' + htmlSpecialCharsPlaceHolders[match];
            });
        }

        return deferred.promise();
    }
});

})(jQuery, this);


/** global: DOKU_BASE */
/** global: LANG */
/** global: NS */
/** global: JSINFO */
/** global: opener */
// Siteexport Admin Plugin Script
(function($){
    $(function(){
            
        if ( !$('form#siteexport, form#siteexport_site_aggregator, form#siteexport_siteexporter').length ) {
            return;
        }
        
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
        
        var SiteexportAdmin = function() {
        };

        (function(_){
            
            _.url = DOKU_BASE + 'lib/exe/ajax.php';
            _.aggregateForm = $('form#siteexport_site_aggregator, form#siteexport_siteexporter');
            _.suspendGenerate = _.aggregateForm.length > 0;
            _.allElements = 'form#siteexport :input:not([readonly]):not([disabled]):not([type=submit]):not(button):not(.dummy), form#siteexport_site_aggregator :input:not([type=submit]):not(button), form#siteexport_siteexporter :input:not([type=submit]):not(button)';
            _.isManager = $('div#siteexport__manager').length > 0;
            _.forbidden_options = [ 'call', 'sectok' ];

            _.generate = function() {
                
                if ( _.suspendGenerate || _.isManager ) { return; }
                
                this.resetDataForNewRequest();

                _.throbber(true);
                $.post( _.url, _.settings('__siteexport_generateurl'), function(data) {
                    data = data.split("\n");
                    $('#copyurl').val(data[0]);
                    $('#wgeturl').val(data[1]);
                    $('#curlurl').val(data[2]);
                }).fail(function(jqXHR){
                    _.errorLog(jqXHR.responseText);
                }).always(function(){
                    _.throbber(false);
                });
            };
            
            _.run = function() {
            
                this.resetDataForNewRequest();
            
                if ( _.isManager && !(typeof opener === "undefined") ) {
                
                    var settings = $.param(_.cleanSettings()).split('&').join(' ');
                    if ( settings.length > 0 ) { settings = ' ' + settings; }
                    
                    var edid = String.prototype.match.call(document.location, new RegExp("&edid=([^&]+)"));
                    opener.insertTags(edid ? edid[1] : 'wiki__text', '{{siteexportAGGREGATOR' + settings + '}}','','');

                    window.close();
                    opener.focus();
                    return;
                }

                _.throbber(true);
                $.post( _.url, _.settings('__siteexport_getsitelist'), function(data) {
                    data = data.split("\n");

                    _.pattern = data.shift();
                    _.zipURL = data.shift();

                    _.pageCount = data.length - 1; // starting at 0
                    _.currentCount = 0;

                    _.allPages = data;
                    _.status(_.pages());
                    _.nextPage();
                }).fail(function(jqXHR){
                    _.errorLog(jqXHR.responseText);
                }).always(function(){
                    _.throbber(false);
                });
            };
            

            _.aggregatorStatus = null;
            _.runAggregator = function() {
                
                this.resetDataForNewRequest();
                
                if ( _.aggregatorStatus == null ) {
                    _.aggregatorStatus = $('<span id="siteexport__out"/>').appendTo("form#siteexport_site_aggregator, form#siteexport_siteexporter");
                }

                _.status(LANG.plugins.siteexport.loadingpage);
                _.aggregatorStatus.removeClass('error').show();
                _.aggregateForm.addClass('loading');
                var settings = _.settings('__siteexport_aggregate');
                var throbber = $('form#siteexport_site_aggregator :input[name=baseID], form#siteexport_site_aggregator :input[type=submit], form#siteexport_siteexporter :input[type=submit]').prop('disabled', true);
                $.post( _.url, settings, function(data) {

                    if ( data.match( new RegExp( 'mpdf error', 'i' ) ) ) {
                        _.aggregatorStatus.addClass('error');
                        _.status(data);
                    } else {
                        _.downloadFile({
                                id : 'siteexport_site_aggregator_downloader',
                                src: window.location.origin + data,
                                root: 'div.siteexporter',
                                timeout: function(){
                                    _.aggregatorStatus.hide();
                                }
                        });
                    }

                }).fail(function(jqXHR){
                    _.aggregatorStatus.addClass('error');
                    _.status(jqXHR.responseText.replace("\n", "<br/>"));
                }).always(function(){
                    throbber.prop('disabled', false);
                    _.aggregateForm.removeClass('loading');
                });
            };
            
            _.downloadFile = function(iframeProps) {

                    _.status(LANG.plugins.siteexport.startdownload);
                    _.aggregateForm.addClass('download');
                    if ( $.fileDownload ) {
                        
                        $.fileDownload(iframeProps.src).done(function(){
                            _.status(LANG.plugins.siteexport.downloadfinished);

                            if ( typeof iframeProps.timeout == 'function' ) {
                                window.setTimeout(iframeProps.timeout, 2000);
                            }
                            
                        }).fail(function(){
                            _.error(LANG.plugins.siteexport.finishedbutdownloadfailed);
                        }).always(function(){
                            _.aggregateForm.removeClass('download');
                        });
                        
                        return;
                    }

                    var frameQuery = "iframe#" + iframeProps.id;
                    var frame = $(frameQuery);
                    if ( frame.length == 0 ) {
                        frame = $('<iframe/>')
                        .hide()
                        .appendTo(iframeProps.root)
                        .prop({
                            type : 'application/octet-stream',
                            id : iframeProps.id
                        });
                    }
                    
                    // Downloads do not generate a load event
                    frame.load(function(){
                        _.status(LANG.plugins.siteexport.downloadfinished);
                        
                        // This must only happen when not downloading, meaning we have a PDF file.
                        // ENSURE THIS IS THE ONLY CASE!
                        // frame.remove();
                        
                        if ( $.popupviewer ) {

                            var clone = frame.clone().css({
                                border: 'none'
                            }).show();
                            
                            frame.remove();
                            _.aggregateForm.removeClass('download');

                            var viewer = new $.popupviewer();
                            viewer.showViewer();
                            
                            $("div#popupviewer div.content").html(clone);
                            viewer.resizePopup($(window).width(), $(window).height(), null, clone, false, false);
                        } else {
                            // No Popup? Open right here
                            document.location.href = iframeProps.src;
                        }
                    });
                    
                    frame.attr('src', iframeProps.src);
                    if ( typeof iframeProps.timeout == 'function' ) {
                        window.setTimeout(iframeProps.timeout, 2000);
                    }

                       $(window).unload(function(){
                           // last resort or the frame might reload
                           frame.remove();
                       });
            };
                    
            _.addSite = function(site) {
        
                var settings = _.settings('__siteexport_addsite');
                settings.push({
                    name: 'site',
                    value: site
                },{
                    name: 'pattern',
                    value: this.pattern
                },{
                    name: 'base',
                    value: DOKU_BASE
                });

                _.throbber(true);
                $.post( _.url, settings, function(data) {
                    _.zipURL = data.split("\n").pop();
                    _.nextPage();
                }).fail(function(jqXHR){
                    _.errorLog(jqXHR.responseText);
                    _.errorCount++;
                }).always(function(){
                    _.throbber(false);
                });
            };
            
            _.nextPage = function() {
                if (!this.allPages) {
                    return;
                }
        
                var page = this.allPages.shift();
        
                if (!page) {
                    if (_.zipURL != "" && _.zipURL != 'undefined' && typeof _.zipURL != 'undefined' ) {

                        _.downloadFile({
                                id : 'siteexport_downloader',
                                src: window.location.origin + _.zipURL,
                                root: '#siteexport'
                        });

                    } else {
                        _.status(LANG.plugins.siteexport.finishedbutdownloadfailed);
                        _.errorLog(_.zipURL);
                    }
                    return;
                }
        
                if (!page) {
                    this.nextPage();
                }
        
                _.status('Adding "' + page + '" ' + this.pages(this.currentCount++));
                _.addSite(page);
            };
            
            _.pages = function() {
                return '( '
                        + _.currentCount
                        + ' / '
                        + _.pageCount
                        + (_.errorCount && _.errorCount != 0 ? ' / <span style="color: #a00">' + _.errorCount + '</span>'
                                : '') + ' )';
            };
            
            _.status = function(text) {
                $('#siteexport__out').html(text).removeClass('error');
            };

            _.error = function(text) {
                $('#siteexport__out').html(text).addClass('error');
            };
            
            _.settings = function(call) {
                var settings = $(_.allElements).serializeArray();

                /* Because serializeArray() ignores unset checkboxes and radio buttons: */
                settings = settings.concat(
                    $('form#siteexport label.sendIfNotSet input[type=checkbox]:not(:checked)').map(function() {
                        return { "name": this.name, "value": '0' /* false */ }
                    }).get()
                );

                if (call) { settings.push({ name: 'call', value: call}); }
                if ( $('input#pdfExport:checked').length > 0 ) { settings.push({ name: 'renderer', value: 'siteexport_pdf'}); } // is disabled and would not get pushed
                return settings;
            };
            
            _.cleanSettings = function(call) {
                
                return _.settings(call).filter(function(element){
                    
                    if ( element.value == NS || element.value == JSINFO.id || element.value == JSINFO.namespace ) { element.name = null; }
                    if ( !isNaN(element.value) ) { element.value = parseInt(element.value); }
                    return element.name && _.forbidden_options.indexOf(element.name) < 0 && (element.value.length > 0 || (!isNaN(element.value) && element.value > 0));
                });
            };
            
            /**
             * Display the loading gif
             */
            _.throbberCount = 0;
            _.throbber = function(on) {
                
                _.throbberCount += (on?1:-1);
                $('#siteexport__throbber').css('visibility', _.throbberCount>0 ? 'visible' : 'hidden');
            };

            _.resetDataForNewRequest = function() {
                
                this.pageCount = 0;
                this.currentCount = 0;
                this.errorCount = 0;
                this.allPages = [];
                this.zipURL = '';
                this.pattern = '';

                this.status('');
                this.resetErrorLog();
            };

            /**
             * Log errors into container
             */
            _.errorLog = function(text) {
        
                if (!text) {
                    return;
                }
        
                if (!$('#siteexport__errorlog').length) {
                    $('#siteexport__out').parent().append($('<div id="siteexport__errorlog"></div>'));
                }
        
                var msg = text.split("\n");
                for ( var int = 0; int < msg.length; int++) {
        
                    var txtMsg = msg[int];
                    txtMsg = txtMsg.replace(new RegExp("^runtime error:", "i"), "");
        
                    if (txtMsg.length == 0) {
                        continue;
                    }

                    $('#siteexport__errorlog').append($('<p></p>').text(txtMsg.replace(new RegExp(
                            "</?.*?>", "ig"), "")));
                }
            };
        
            _.resetErrorLog = function() {
                $('#siteexport__errorlog').remove();
            };
            
            _.toggleDisableAllPlugins = function(input) {
                $('#siteexport :input[name=disableplugin\\[\\]]:not([disabled=disabled])').prop('checked', input.checked);
            };

    
            _.addCustomOption = function(nameVal, valueVal) {
                
                if ( typeof nameVal == 'undefined' )
                {
                    nameVal = 'name';
                }
                
                if ( typeof valueVal == 'undefined' )
                {
                    valueVal = 'value';
                }
        
                
                var regenerate = function(event) {
                    event.stopPropagation();
                    _.generate();
                };

                var customOption = $('<input type="hidden"/>').attr({ name: nameVal, value: valueVal});
                var name = $('<input/>').addClass('edit dummy').attr({ value: nameVal}).change(function(event)
                {
                    customOption.attr({ name: this.value }); regenerate(event);
                }).click(function(){this.select();});
                var value = $('<input/>').addClass('edit dummy').attr({ value: valueVal}).change(function(event)
                {
                    customOption.attr({ value: this.value }); regenerate(event);
                }).click(function(){this.select();});
                
                
                $('<li/>').append(name).append(value).append(customOption).appendTo('#siteexport__customActions');
            };
            
            _.updateValue = function( elem, value ) {
                if ( !elem.length ) {
                    return;
                }
                switch(elem[0].type) {
                    case 'checkbox': elem.prop('checked', elem.val() == value); break;
                    case 'select-one': 
                    case 'select': {
                    
                        var selected = false;
                        elem.find('option').each(function(){
                            if ( $(this).val() == value ) {
                                $(this).prop('selected', true);
                                selected = true;
                                return false;
                            }
                            return true;
                        });
                        
                        if ( !selected && !isNaN(value) ) {
                            elem.find('option:eq('+value+')').prop('selected', true);
                        }
                        
                         break;
                    }
                    default: elem.val(value);
                }
            };
            
            _.setValues = function(values) {
                
                $(_.allElements + ':not(:checkbox)').val(null);
                $(_.allElements + ':checkbox').prop('checked', false);
                $('#siteexport__customActions').html("");
                
                _.suspendGenerate = true;
                for ( var node in values ) {
                    
                    if ( !values.hasOwnProperty(node)) {
                        continue; // Skip keys from the prototype.
                    }

                    var value = values[node];
                    if ( typeof value == 'object' ) {
                        for ( var val in value ) {
                            if ( !value.hasOwnProperty(val)) {
                                continue; // Skip keys from the prototype.
                            }
                            _.updateValue($('#siteexport #'+node+'_'+value[val]+':input[name='+node+'\\[\\]]'), value[val]);
                        }
                    } else {
                        _.updateValue($('#siteexport :input[name='+node+']'), value);
                    }
                }
                
                // Custom Options
                for ( var index in values['customoptionname'] ) {
                    
                    if ( !values['customoptionname'].hasOwnProperty(index)) {
                        continue; // Skip keys from the prototype.
                    }

                    try {
                        _.addCustomOption(values['customoptionname'][index], values['customoptionvalue'][index]);
                    } catch (e) {
                        _.errorLog(e);
                    }
                }
                                
                _.suspendGenerate = false;
            };
            
        }(SiteexportAdmin.prototype));
        
        var __siteexport = null;
        $.siteexport = function() {
            if ( __siteexport == null ) {
                __siteexport = new SiteexportAdmin();
            }
            
            return __siteexport;
        };
        
        $.siteexport().generate();
        $('#siteexport :input').each(function(){
            $(this).change(function(event){
                event.stopPropagation();
                $.siteexport().generate();
            });
        });
        
        $('form#siteexport :input[type=submit][name~=do\\[siteexport\\]]').click(function(event){
            event.stopPropagation();
            $.siteexport().run();
            return false;
        });
        
        $('form#siteexport_site_aggregator :input[type=submit][name~=do\\[siteexport\\]], form#siteexport_siteexporter :input[type=submit][name~=do\\[siteexport\\]]').click(function(event){
            event.stopPropagation();
            $.siteexport().runAggregator();
            return false;
        });
        
        $('form#siteexport #depthType:input').change(function(event){
            event.stopPropagation();
            if ( parseInt($(this).val()) == 2 ) {
                $('div#depthContainer').show();
            } else {
                $('div#depthContainer').hide();
            }
        });
        

        $('form#siteexport #pdfExport:input').change(function(event){
            event.stopPropagation();
            $('form#siteexport #renderer').find('option[value=siteexport_pdf]').prop('selected', this.checked);
            $('form#siteexport #renderer').prop('disabled', this.checked);
        });
        
        $('form#siteexport select#renderer').change(function(event){
            event.stopPropagation();
            $('form#siteexport #pdfExport:input, form#siteexport select#template').prop('disabled', $(this).prop('value') == 'dw2pdf');
        });

        
        $('form#siteexport #disableall:input').change(function(event){
            event.stopPropagation();
            $.siteexport().toggleDisableAllPlugins(this);
        });
        
        $('form#siteexport :input[name=disableplugin\\[\\]]').change(function(event){
            event.stopPropagation();
            
            if ( !this.checked && $('form#siteexport #disableall:input').prop('checked') ) {
                $('form#siteexport #disableall:input').prop('checked', false);
            }
        });
        
        $('form#siteexport :input[type=submit][name=do\\[addoption\\]]').click(function(event){
            event.stopPropagation();
            $.siteexport().addCustomOption();
            return false;
        });
    });
})(jQuery);

var copyMapIDToClipBoard = function() {
    var $this = jQuery(this);
    var $mapID = $this.find('span.mapID');
    var range, selection, ok;

    if (window.getSelection && document.createRange) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents($mapID.get(0));
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText($mapID.get(0));
        range.select();
    }
    // Use try & catch for unsupported browser
    try {
        // The important part (copy selected text)
        ok = document.execCommand('copy');
    } catch (err) {
        // Ignore if it does not work.
    }
    
    if (ok) {
        $mapID.addClass('done');
        setTimeout(function(){
            $mapID.removeClass('done');
        }, 1000);
    }
};


/* XXXXXXXXXX end of lib/plugins/siteexport/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/styling/script.js XXXXXXXXXX */

jQuery(function () {

    /**
     * Function to reload the preview styles in the main window
     *
     * @param {Window} target the main window
     */
    function applyPreview(target) {
        // remove style
        var $style = target.jQuery('link[rel=stylesheet][href*="lib/exe/css.php"]');
        $style.attr('href', '');

        // append the loader screen
        var $loader = target.jQuery('#plugin__styling_loader');
        if (!$loader.length) {
            $loader = target.jQuery('<div id="plugin__styling_loader">' + LANG.plugins.styling.loader + '</div>');
            $loader.css({
                'position':         'absolute',
                'width':            '100%',
                'height':           '100%',
                'top':              0,
                'left':             0,
                'z-index':          5000,
                'background-color': '#fff',
                'opacity':          '0.7',
                'color':            '#000',
                'font-size':        '2.5em',
                'text-align':       'center',
                'line-height':      1.5,
                'padding-top':      '2em'
            });
            target.jQuery('body').append($loader);
        }

        // load preview in main window (timeout works around chrome updating CSS weirdness)
        setTimeout(function () {
            var now = new Date().getTime();
            $style.attr('href', DOKU_BASE + 'lib/exe/css.php?preview=1&tseed=' + now);
        }, 500);
    }

    var doreload = 1;
    var $styling_plugin = jQuery('#plugin__styling');

    // if we are not on the plugin page (either main or popup)
    if (!$styling_plugin.length) {
        // handle the preview cookie
        if(DokuCookie.getValue('styling_plugin') == 1) {
            applyPreview(window);
        }
        return; // nothing more to do here
    }

    /* ---- from here on we're in the popup or admin page ---- */

    // add button on main page
    if (!$styling_plugin.hasClass('ispopup')) {
        var $form = $styling_plugin.find('form.styling').first();
        var $btn = jQuery('<button>' + LANG.plugins.styling.popup + '</button>');
        $form.prepend($btn);

        $btn.on('click', function (e) {
            var windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=false,width=500,height=500";
            window.open(DOKU_BASE + 'lib/plugins/styling/popup.php', 'styling_popup', windowFeatures);
            e.preventDefault();
            e.stopPropagation();
        }).wrap('<p></p>');
        return; // we exit here if this is not the popup
    }

    /* ---- from here on we're in the popup only ---- */

    // reload the main page on close
    window.onunload = function(e) {
        if(doreload) {
            DokuCookie.setValue('styling_plugin', 0);
            if(window.opener) window.opener.document.location.reload();
        }
        return null;
    };

    // don't reload on our own buttons
    jQuery(':button').click(function(e){
        doreload = false;
    });

    // on first load apply preview
    if(window.opener) applyPreview(window.opener);

    // enable the preview cookie
    DokuCookie.setValue('styling_plugin', 1);
});



/* XXXXXXXXXX end of lib/plugins/styling/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/usermanager/script.js XXXXXXXXXX */

/**
 * Add JavaScript confirmation to the User Delete button
 */
jQuery(function(){
    jQuery('#usrmgr__del').on('click', function(){
        return confirm(LANG.del_confirm);
    });
});



/* XXXXXXXXXX end of lib/plugins/usermanager/script.js XXXXXXXXXX */

jQuery(function(){ dw_locktimer.init(840,1); });

