/*

 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, Herb, Rune, Gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

//run 1

item   [0] = [ "Nothing", 1, 0, "" ];
item   [1] = [ "Body-rune", 1, 2, "Rune" ];  //  (2)
item   [2] = [ "Coins", 1, 35, "" ];  //  (35)
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Coins", 1, 26, "" ];  //  (61)
item   [6] = [ "Nothing", 1, 0, "" ];
item   [7] = [ "Coins", 1, 18, "" ];  //  (79)
item   [8] = [ "Crossbow", 1, 1, "" ];
item   [9] = [ "Body-rune", 1, 2, "Rune" ];  //  (4)
item  [10] = [ "Nothing", 1, 0, "" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Air-rune", 1, 2, "Rune" ];  //  (2)
item  [13] = [ "Bronze Kite Shield", 1, 1, "" ];
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Nothing", 1, 0, "" ];
item  [16] = [ "Nothing", 1, 0, "" ];
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Iron dagger", 1, 1, "" ];
item  [19] = [ "Coins", 1, 18, "" ];  //  (97)
item  [20] = [ "Coins", 1, 18, "" ];  //  (115)
item  [21] = [ "Nothing", 1, 0, "" ];
item  [22] = [ "Coins", 1, 18, "" ];  //  (133)
item  [23] = [ "Nothing", 1, 0, "" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Nothing", 1, 0, "" ];
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Iron dagger", 1, 1, "" ];
item  [29] = [ "Coins", 1, 10, "" ];  //  (143)
item  [30] = [ "Nothing", 1, 0, "" ];
item  [31] = [ "Coins", 1, 18, "" ];  //  (161)
item  [32] = [ "Nothing", 1, 0, "" ];
item  [33] = [ "Nothing", 1, 0, "" ];
item  [34] = [ "Nothing", 1, 0, "" ];
item  [35] = [ "Coins", 1, 18, "" ];  //  (179)
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Nothing", 1, 0, "" ];
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Air-rune", 1, 2, "Rune" ];  //  (4)
item  [40] = [ "Coins", 1, 10, "" ];  //  (189)
item  [41] = [ "Nothing", 1, 0, "" ];
item  [42] = [ "Coins", 1, 18, "" ];  //  (207)
item  [43] = [ "Nothing", 1, 0, "" ];
item  [44] = [ "Nothing", 1, 0, "" ];
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Iron Mace", 1, 1, "" ];
item  [47] = [ "Coins", 1, 18, "" ];  //  (225)
item  [48] = [ "Coins", 1, 26, "" ];  //  (251)
item  [49] = [ "tinderbox", 1, 1, "" ];
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Nothing", 1, 0, "" ];
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Nothing", 1, 0, "" ];
item  [55] = [ "tinderbox", 1, 1, "" ];
item  [56] = [ "Coins", 1, 10, "" ];  //  (261)
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Nothing", 1, 0, "" ];
item  [59] = [ "Coins", 1, 26, "" ];  //  (287)
item  [60] = [ "Fire-rune", 1, 5, "Rune" ];  //  (5)
item  [61] = [ "Coins", 1, 18, "" ];  //  (305)
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Coins", 1, 10, "" ];  //  (315)
item  [64] = [ "Nothing", 1, 0, "" ];
item  [65] = [ "Coins", 1, 10, "" ];  //  (325)
item  [66] = [ "Coins", 1, 18, "" ];  //  (343)
item  [67] = [ "Nothing", 1, 0, "" ];
item  [68] = [ "Coins", 1, 26, "" ];  //  (369)
item  [69] = [ "Nothing", 1, 0, "" ];
item  [70] = [ "Coins", 1, 26, "" ];  //  (395)
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Nothing", 1, 0, "" ];
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Coins", 1, 18, "" ];  //  (413)
item  [76] = [ "Eye of Newt", 1, 1, "" ];
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Eye of Newt", 1, 1, "" ];
item  [79] = [ "Nothing", 1, 0, "" ];
item  [80] = [ "Air-rune", 1, 2, "Rune" ];  //  (6)
item  [81] = [ "Iron Mace", 1, 1, "" ];
item  [82] = [ "Nothing", 1, 0, "" ];
item  [83] = [ "Coins", 1, 10, "" ];  //  (423)
item  [84] = [ "Air-rune", 1, 2, "Rune" ];  //  (8)
item  [85] = [ "Crossbow", 1, 1, "" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Coins", 1, 18, "" ];  //  (441)
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Nothing", 1, 0, "" ];
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Nothing", 1, 0, "" ];
item  [92] = [ "Air-rune", 1, 2, "Rune" ];  //  (10)
item  [93] = [ "Nothing", 1, 0, "" ];
item  [94] = [ "Body-rune", 1, 2, "Rune" ];  //  (6)
item  [95] = [ "Nothing", 1, 0, "" ];
item  [96] = [ "Nothing", 1, 0, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Coins", 1, 10, "" ];  //  (451)
item  [99] = [ "Coins", 1, 18, "" ];  //  (469)
item [100] = [ "Coins", 1, 10, "" ];  //  (479)
item [101] = [ "Nothing", 1, 0, "" ];
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Nothing", 1, 0, "" ];
item [104] = [ "Nothing", 1, 0, "" ];
item [105] = [ "Coins", 1, 26, "" ];  //  (505)
item [106] = [ "Nothing", 1, 0, "" ];
item [107] = [ "Coins", 1, 26, "" ];  //  (531)
item [108] = [ "Iron Mace", 1, 1, "" ];
item [109] = [ "Nothing", 1, 0, "" ];
item [110] = [ "Coins", 1, 18, "" ];  //  (549)
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Coins", 1, 18, "" ];  //  (567)
item [114] = [ "Iron Mace", 1, 1, "" ];
item [115] = [ "Air-rune", 1, 2, "Rune" ];  //  (12)
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Coins", 1, 26, "" ];  //  (593)
item [118] = [ "Nothing", 1, 0, "" ];
item [119] = [ "Nothing", 1, 0, "" ];
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Nothing", 1, 0, "" ];
item [122] = [ "Nothing", 1, 0, "" ];
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Coins", 1, 35, "" ];  //  (628)
item [125] = [ "Nothing", 1, 0, "" ];
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "Nothing", 1, 0, "" ];
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Nothing", 1, 0, "" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Nothing", 1, 0, "" ];
item [133] = [ "Coins", 1, 18, "" ];  //  (646)
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Nothing", 1, 0, "" ];
item [136] = [ "Nothing", 1, 0, "" ];
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Nothing", 1, 0, "" ];
item [139] = [ "Nothing", 1, 0, "" ];
item [140] = [ "Coins", 1, 10, "" ];  //  (656)
item [141] = [ "Nothing", 1, 0, "" ];
item [142] = [ "tinderbox", 1, 1, "" ];
item [143] = [ "Coins", 1, 18, "" ];  //  (674)
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Nothing", 1, 0, "" ];
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Eye of Newt", 1, 1, "" ];
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Nothing", 1, 0, "" ];
item [150] = [ "Nothing", 1, 0, "" ];
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Nothing", 1, 0, "" ];
item [154] = [ "Coins", 1, 26, "" ];  //  (700)
item [155] = [ "Nothing", 1, 0, "" ];
item [156] = [ "Coins", 1, 18, "" ];  //  (718)
item [157] = [ "Coins", 1, 10, "" ];  //  (728)
item [158] = [ "Nothing", 1, 0, "" ];
item [159] = [ "Coins", 1, 35, "" ];  //  (763)
item [160] = [ "Nothing", 1, 0, "" ];
item [161] = [ "Coins", 1, 26, "" ];  //  (789)
item [162] = [ "Nothing", 1, 0, "" ];
item [163] = [ "Nothing", 1, 0, "" ];
item [164] = [ "Coins", 1, 35, "" ];  //  (824)
item [165] = [ "Coins", 1, 10, "" ];  //  (834)
item [166] = [ "Nothing", 1, 0, "" ];
item [167] = [ "Coins", 1, 18, "" ];  //  (852)
item [168] = [ "Nothing", 1, 0, "" ];
item [169] = [ "Nothing", 1, 0, "" ];
item [170] = [ "Air-rune", 1, 2, "Rune" ];  //  (14)
item [171] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [172] = [ "Coins", 1, 18, "" ];  //  (870)
item [173] = [ "Coins", 1, 26, "" ];  //  (896)
item [174] = [ "Coins", 1, 35, "" ];  //  (931)
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Nothing", 1, 0, "" ];
item [179] = [ "Nothing", 1, 0, "" ];
item [180] = [ "Nothing", 1, 0, "" ];
item [181] = [ "Coins", 1, 18, "" ];  //  (949)
item [182] = [ "Coins", 1, 18, "" ];  //  (967)
item [183] = [ "Coins", 1, 10, "" ];  //  (977)
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Coins", 1, 18, "" ];  //  (995)
item [186] = [ "Nothing", 1, 0, "" ];
item [187] = [ "Coins", 1, 18, "" ];  //  (1013)
item [188] = [ "Coins", 1, 10, "" ];  //  (1023)
item [189] = [ "Coins", 1, 18, "" ];  //  (1041)
item [190] = [ "Nothing", 1, 0, "" ];
item [191] = [ "Coins", 1, 26, "" ];  //  (1067)
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Nothing", 1, 0, "" ];
item [194] = [ "Coins", 1, 18, "" ];  //  (1085)
item [195] = [ "Coins", 1, 10, "" ];  //  (1095)
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 18, "" ];  //  (1113)
item [199] = [ "Nothing", 1, 0, "" ];
item [200] = [ "Coins", 1, 18, "" ];  //  (1131)
item [201] = [ "Air-rune", 1, 2, "Rune" ];  //  (16)
item [202] = [ "Coins", 1, 18, "" ];  //  (1149)
item [203] = [ "Iron Mace", 1, 1, "" ];
item [204] = [ "Coins", 1, 18, "" ];  //  (1167)
item [205] = [ "Nothing", 1, 0, "" ];
item [206] = [ "Nothing", 1, 0, "" ];
item [207] = [ "Nothing", 1, 0, "" ];
item [208] = [ "Nothing", 1, 0, "" ];
item [209] = [ "Coins", 1, 18, "" ];  //  (1185)
item [210] = [ "Nothing", 1, 0, "" ];
item [211] = [ "Coins", 1, 18, "" ];  //  (1203)
item [212] = [ "Coins", 1, 10, "" ];  //  (1213)
item [213] = [ "tinderbox", 1, 1, "" ];
item [214] = [ "Nothing", 1, 0, "" ];
item [215] = [ "Coins", 1, 18, "" ];  //  (1231)
item [216] = [ "Nothing", 1, 0, "" ];
item [217] = [ "Coins", 1, 18, "" ];  //  (1249)
item [218] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [219] = [ "Coins", 1, 26, "" ];  //  (1275)
item [220] = [ "Coins", 1, 18, "" ];  //  (1293)
item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Coins", 1, 18, "" ];  //  (1311)
item [224] = [ "Nothing", 1, 0, "" ];
item [225] = [ "Coins", 1, 35, "" ];  //  (1346)
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Coins", 1, 35, "" ];  //  (1381)
item [228] = [ "Coins", 1, 26, "" ];  //  (1407)
item [229] = [ "Coins", 1, 10, "" ];  //  (1417)
item [230] = [ "Nothing", 1, 0, "" ];
item [231] = [ "Air-rune", 1, 2, "Rune" ];  //  (18)
item [232] = [ "Nothing", 1, 0, "" ];
item [233] = [ "uncut ruby", 1, 1, "Gem" ];
item [234] = [ "Nothing", 1, 0, "" ];
item [235] = [ "Air-rune", 1, 2, "Rune" ];  //  (20)
item [236] = [ "Coins", 1, 18, "" ];  //  (1435)
item [237] = [ "Coins", 1, 18, "" ];  //  (1453)
item [238] = [ "Coins", 1, 10, "" ];  //  (1463)
item [239] = [ "Nothing", 1, 0, "" ];
item [240] = [ "Air-rune", 1, 2, "Rune" ];  //  (22)
item [241] = [ "Nothing", 1, 0, "" ];
item [242] = [ "Coins", 1, 18, "" ];  //  (1481)
item [243] = [ "Coins", 1, 26, "" ];  //  (1507)
item [244] = [ "Coins", 1, 18, "" ];  //  (1525)
item [245] = [ "Coins", 1, 26, "" ];  //  (1551)
item [246] = [ "Nothing", 1, 0, "" ];
item [247] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (3)
item [248] = [ "Air-rune", 1, 2, "Rune" ];  //  (24)
item [249] = [ "Coins", 1, 35, "" ];  //  (1586)
item [250] = [ "Coins", 1, 18, "" ];  //  (1604)
item [251] = [ "Nothing", 1, 0, "" ];
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Coins", 1, 35, "" ];  //  (1639)
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Coins", 1, 18, "" ];  //  (1657)
item [256] = [ "Nothing", 1, 0, "" ];
item [257] = [ "Coins", 1, 26, "" ];  //  (1683)
item [258] = [ "Nothing", 1, 0, "" ];
item [259] = [ "Nothing", 1, 0, "" ];
item [260] = [ "Coins", 1, 18, "" ];  //  (1701)
item [261] = [ "tinderbox", 1, 1, "" ];
item [262] = [ "Iron dagger", 1, 1, "" ];
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Crossbow", 1, 1, "" ];
item [265] = [ "Coins", 1, 18, "" ];  //  (1719)
item [266] = [ "Air-rune", 1, 2, "Rune" ];  //  (26)
item [267] = [ "Coins", 1, 18, "" ];  //  (1737)
item [268] = [ "Nothing", 1, 0, "" ];
item [269] = [ "Coins", 1, 10, "" ];  //  (1747)
item [270] = [ "Coins", 1, 35, "" ];  //  (1782)
item [271] = [ "Nothing", 1, 0, "" ];
item [272] = [ "Coins", 1, 35, "" ];  //  (1817)
item [273] = [ "Coins", 1, 10, "" ];  //  (1827)
item [274] = [ "Coins", 1, 10, "" ];  //  (1837)
item [275] = [ "Coins", 1, 26, "" ];  //  (1863)
item [276] = [ "Coins", 1, 10, "" ];  //  (1873)
item [277] = [ "Coins", 1, 26, "" ];  //  (1899)
item [278] = [ "Coins", 1, 10, "" ];  //  (1909)
item [279] = [ "Nothing", 1, 0, "" ];
item [280] = [ "Coins", 1, 10, "" ];  //  (1919)
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Coins", 1, 26, "" ];  //  (1945)
item [283] = [ "Nothing", 1, 0, "" ];
item [284] = [ "Body-rune", 1, 2, "Rune" ];  //  (8)
item [285] = [ "Coins", 1, 18, "" ];  //  (1963)
item [286] = [ "Nothing", 1, 0, "" ];
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Nothing", 1, 0, "" ];
item [289] = [ "Coins", 1, 35, "" ];  //  (1998)
item [290] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (4)
item [291] = [ "Coins", 1, 18, "" ];  //  (2016)
item [292] = [ "Nothing", 1, 0, "" ];
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Coins", 1, 26, "" ];  //  (2042)
item [295] = [ "Air-rune", 1, 2, "Rune" ];  //  (28)
item [296] = [ "Nothing", 1, 0, "" ];
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Coins", 1, 26, "" ];  //  (2068)
item [299] = [ "Coins", 1, 26, "" ];  //  (2094)
item [300] = [ "Nothing", 1, 0, "" ];
item [301] = [ "Nothing", 1, 0, "" ];
item [302] = [ "Coins", 1, 18, "" ];  //  (2112)
item [303] = [ "Nothing", 1, 0, "" ];
item [304] = [ "Nothing", 1, 0, "" ];
item [305] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (5)
item [306] = [ "Coins", 1, 26, "" ];  //  (2138)
item [307] = [ "Body-rune", 1, 2, "Rune" ];  //  (10)
item [308] = [ "Nothing", 1, 0, "" ];
item [309] = [ "Nothing", 1, 0, "" ];
item [310] = [ "Coins", 1, 26, "" ];  //  (2164)
item [311] = [ "Nothing", 1, 0, "" ];
item [312] = [ "Nothing", 1, 0, "" ];
item [313] = [ "Coins", 1, 26, "" ];  //  (2190)
item [314] = [ "Nothing", 1, 0, "" ];
item [315] = [ "Nothing", 1, 0, "" ];
item [316] = [ "tin ore", 1, 1, "" ];
item [317] = [ "Nothing", 1, 0, "" ];
item [318] = [ "Nothing", 1, 0, "" ];
item [319] = [ "Nothing", 1, 0, "" ];
item [320] = [ "Air-rune", 1, 2, "Rune" ];  //  (30)
item [321] = [ "Nothing", 1, 0, "" ];
item [322] = [ "Coins", 1, 35, "" ];  //  (2225)
item [323] = [ "Coins", 1, 18, "" ];  //  (2243)
item [324] = [ "Nothing", 1, 0, "" ];
item [325] = [ "Air-rune", 1, 2, "Rune" ];  //  (32)
item [326] = [ "Nothing", 1, 0, "" ];
item [327] = [ "Coins", 1, 10, "" ];  //  (2253)
item [328] = [ "Coins", 1, 18, "" ];  //  (2271)
item [329] = [ "Coins", 1, 26, "" ];  //  (2297)
item [330] = [ "Air-rune", 1, 2, "Rune" ];  //  (34)
item [331] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (6)
item [332] = [ "Coins", 1, 35, "" ];  //  (2332)
item [333] = [ "Coins", 1, 35, "" ];  //  (2367)
item [334] = [ "Nothing", 1, 0, "" ];
item [335] = [ "Nothing", 1, 0, "" ];
item [336] = [ "Nothing", 1, 0, "" ];
item [337] = [ "tin ore", 1, 1, "" ];
item [338] = [ "Nothing", 1, 0, "" ];
item [339] = [ "Nothing", 1, 0, "" ];
item [340] = [ "Nothing", 1, 0, "" ];
item [341] = [ "Nothing", 1, 0, "" ];
item [342] = [ "Nothing", 1, 0, "" ];
item [343] = [ "Nothing", 1, 0, "" ];
item [344] = [ "Coins", 1, 18, "" ];  //  (2385)
item [345] = [ "Nothing", 1, 0, "" ];
item [346] = [ "Coins", 1, 10, "" ];  //  (2395)
item [347] = [ "Nothing", 1, 0, "" ];
item [348] = [ "Coins", 1, 10, "" ];  //  (2405)
item [349] = [ "Coins", 1, 10, "" ];  //  (2415)
item [350] = [ "Coins", 1, 18, "" ];  //  (2433)
item [351] = [ "Nothing", 1, 0, "" ];
item [352] = [ "Coins", 1, 18, "" ];  //  (2451)
item [353] = [ "Nothing", 1, 0, "" ];
item [354] = [ "Nothing", 1, 0, "" ];
item [355] = [ "Nothing", 1, 0, "" ];
item [356] = [ "Nothing", 1, 0, "" ];
item [357] = [ "Coins", 1, 18, "" ];  //  (2469)
item [358] = [ "Nothing", 1, 0, "" ];
item [359] = [ "Nothing", 1, 0, "" ];
item [360] = [ "Nothing", 1, 0, "" ];
item [361] = [ "Iron dagger", 1, 1, "" ];
item [362] = [ "Nothing", 1, 0, "" ];
item [363] = [ "Nothing", 1, 0, "" ];
item [364] = [ "Coins", 1, 18, "" ];  //  (2487)
item [365] = [ "Nothing", 1, 0, "" ];
item [366] = [ "Coins", 1, 18, "" ];  //  (2505)
item [367] = [ "Nothing", 1, 0, "" ];
item [368] = [ "Nothing", 1, 0, "" ];
item [369] = [ "Iron Mace", 1, 1, "" ];
item [370] = [ "Air-rune", 1, 2, "Rune" ];  //  (36)
item [371] = [ "Coins", 1, 18, "" ];  //  (2523)
item [372] = [ "Nothing", 1, 0, "" ];
item [373] = [ "Coins", 1, 18, "" ];  //  (2541)
item [374] = [ "Coins", 1, 26, "" ];  //  (2567)
item [375] = [ "Nothing", 1, 0, "" ];
item [376] = [ "Coins", 1, 10, "" ];  //  (2577)
item [377] = [ "Nothing", 1, 0, "" ];
item [378] = [ "Nothing", 1, 0, "" ];
item [379] = [ "Nothing", 1, 0, "" ];
item [380] = [ "Nothing", 1, 0, "" ];
item [381] = [ "Nothing", 1, 0, "" ];
item [382] = [ "Nothing", 1, 0, "" ];
item [383] = [ "Nothing", 1, 0, "" ];
item [384] = [ "Nothing", 1, 0, "" ];
item [385] = [ "tin ore", 1, 1, "" ];
item [386] = [ "Coins", 1, 26, "" ];  //  (2603)
item [387] = [ "Nothing", 1, 0, "" ];
item [388] = [ "Nothing", 1, 0, "" ];
item [389] = [ "Coins", 1, 18, "" ];  //  (2621)
item [390] = [ "Nothing", 1, 0, "" ];
item [391] = [ "Nothing", 1, 0, "" ];
item [392] = [ "Nothing", 1, 0, "" ];
item [393] = [ "Air-rune", 1, 2, "Rune" ];  //  (38)
item [394] = [ "Coins", 1, 18, "" ];  //  (2639)
item [395] = [ "Coins", 1, 26, "" ];  //  (2665)
item [396] = [ "Coins", 1, 35, "" ];  //  (2700)
item [397] = [ "Coins", 1, 35, "" ];  //  (2735)
item [398] = [ "Coins", 1, 26, "" ];  //  (2761)
item [399] = [ "Coins", 1, 35, "" ];  //  (2796)
item [400] = [ "Nothing", 1, 0, "" ];
item [401] = [ "Coins", 1, 18, "" ];  //  (2814)
item [402] = [ "Coins", 1, 26, "" ];  //  (2840)

runs [0] = [ 402, 403 ];  // kills 403, drops 403

// runs [1] = [ x, y ];  // kills ? ( y - 403 ), drops ? ( x - 402 )

/*
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 18, "" ];  //  ()
item [000] = [ "Coins", 1, 26, "" ];  //  ()
item [000] = [ "Coins", 1, 35, "" ];  //  ()

item [000] = [ "Air-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 5, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "tinderbox", 1, 1, "" ];
item [000] = [ "Eye of Newt", 1, 1, "" ];
item [000] = [ "tin ore", 1, 1, "" ];
item [000] = [ "Crossbow", 1, 1, "" ];

item [000] = [ "Iron dagger", 1, 1, "" ];
item [000] = [ "Iron Mace", 1, 1, "" ];

item [000] = [ "Bronze Kite Shield", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "zombie";           // monster's name
var mcbl = 24;                  // monster's combat level
var mindex = 57;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name